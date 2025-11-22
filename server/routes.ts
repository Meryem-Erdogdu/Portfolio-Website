import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Statik portfolio sitesi - API yok
  return createServer(app);
}
