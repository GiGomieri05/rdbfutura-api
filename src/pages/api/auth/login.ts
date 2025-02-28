// src/api/auth/login.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Simule a validação (aqui você pode substituir pela lógica real de autenticação)
    if (email === "test@example.com" && password === "password123") {
      return res.status(200).json({ message: "Login successful" });
    }
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Se não for um POST, retornamos 404
  res.status(404).json({ error: "Route not found" });
}
