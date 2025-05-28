import { FastifyRequest, FastifyReply } from "fastify";
import bcrypt from "bcrypt";
import { pool } from "../utils/db";

export const register = async (req: FastifyRequest, reply: FastifyReply) => {
  const { name, email, password } = req.body as any;

  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3)",
    [name, email, hashedPassword]
  );

  reply.send({ message: "User registered successfully" });
};

export const login = async (req: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = req.body as any;

  const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  const user = userResult.rows[0];

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return reply.code(401).send({ message: "Invalid credentials" });
  }

  const token = await reply.jwtSign({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  reply.send({ token });
};

export const getProfile = async (req: any, reply: FastifyReply) => {
  const userId = req.user.id;

  const result = await pool.query(
    "SELECT id, name, email FROM users WHERE id = $1",
    [userId]
  );
  const user = result.rows[0];

  reply.send({ user });
};
