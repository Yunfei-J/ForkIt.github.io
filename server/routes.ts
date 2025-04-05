import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchemaWithValidation } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to handle waitlist submissions
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body against our schema
      const validatedData = insertWaitlistEntrySchemaWithValidation.parse(req.body);
      
      // Check if email already exists
      const existingEntry = await storage.getWaitlistEntryByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "This email is already on our waitlist" 
        });
      }
      
      // Store the new waitlist entry
      const entry = await storage.createWaitlistEntry(validatedData);
      
      return res.status(201).json({
        message: "Successfully added to the waitlist",
        entry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }
      
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Get total waitlist count
  app.get("/api/waitlist/count", async (_req, res) => {
    try {
      const count = await storage.getWaitlistCount();
      return res.json({ count });
    } catch (error) {
      return res.status(500).json({ 
        message: "An error occurred while fetching waitlist count" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
