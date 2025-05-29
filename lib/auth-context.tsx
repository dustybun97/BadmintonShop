"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "../hooks/use-toast";

export type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Check if the user is logged in on initial load
  useEffect(() => {
  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch profile");
      }

      const profile = await res.json();
      setUser(profile);
      localStorage.setItem("user", JSON.stringify(profile));
    } catch (error) {
      console.error("Auto-login failed:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      setIsLoading(false);
    }
  };

  fetchProfile();
}, []);

  //login function -this would call an API for login
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      const token = data.token;

      // ✅ เก็บ token ไว้ใน localStorage
      localStorage.setItem("token", token);

      // ✅ ดึงข้อมูลโปรไฟล์ผู้ใช้
      const profileRes = await fetch("http://localhost:8080/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!profileRes.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profile = await profileRes.json();
      setUser(profile);
      localStorage.setItem("user", JSON.stringify(profile));

      toast({
        title: "Login successful",
        description: `Welcome back, ${profile.name}!`,
      });

      if (profile.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Mock register function
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock - in a real app, you'd call your API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: "1", // would come from your backend
        name,
        email,
        role: "user",
      };

      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));

      toast({
        title: "Registration successful",
        description: `Welcome, ${name}!`,
      });

      router.push("/");
    } catch (error) {
      console.error("Registration failed:", error);
      toast({
        title: "Registration failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    router.push("/");
  };

  // Protected routes handling
  useEffect(() => {
    if (!isLoading) {
      // Admin routes protection
      if (pathname?.startsWith("/admin") && (!user || user.role !== "admin")) {
        router.push("/login");
        toast({
          title: "Access denied",
          description: "You need admin privileges to access this page.",
          variant: "destructive",
        });
      }

      // User account protection
      if (pathname?.startsWith("/account") && !user) {
        router.push("/login");
        toast({
          title: "Authentication required",
          description: "Please log in to access your account.",
          variant: "destructive",
        });
      }
    }
  }, [pathname, user, isLoading, router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        isAdmin: user?.role === "admin" || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
