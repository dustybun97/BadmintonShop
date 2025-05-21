'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
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
  const { toast } = useToast();

  // Check if the user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // This is a mock - in a real app, you'd call your API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, admin login with admin@example.com
      const isAdmin = email.toLowerCase() === 'admin@example.com';
      
      const newUser: User = {
        id: '1', // would come from your backend
        name: email.split('@')[0], // simple name from email
        email,
        role: isAdmin ? 'admin' : 'user',
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      toast({
        title: 'Login successful',
        description: `Welcome back, ${newUser.name}!`,
      });
      
      // Redirect based on role
      if (isAdmin) {
        router.push('/admin');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast({
        title: 'Login failed',
        description: 'Please check your credentials and try again.',
        variant: 'destructive',
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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: '1', // would come from your backend
        name,
        email,
        role: 'user',
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      toast({
        title: 'Registration successful',
        description: `Welcome, ${name}!`,
      });
      
      router.push('/');
    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        title: 'Registration failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
    router.push('/');
  };

  // Protected routes handling
  useEffect(() => {
    if (!isLoading) {
      // Admin routes protection
      if (pathname?.startsWith('/admin') && (!user || user.role !== 'admin')) {
        router.push('/login');
        toast({
          title: 'Access denied',
          description: 'You need admin privileges to access this page.',
          variant: 'destructive',
        });
      }
      
      // User account protection
      if (pathname?.startsWith('/account') && !user) {
        router.push('/login');
        toast({
          title: 'Authentication required',
          description: 'Please log in to access your account.',
          variant: 'destructive',
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
        isAdmin: user?.role === 'admin' || false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};