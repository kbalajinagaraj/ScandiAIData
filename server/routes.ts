import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: contact });
    } catch (error: any) {
      console.error("Contact submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: error.message || "Invalid contact submission" 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error: any) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const subscriber = await storage.createNewsletterSubscriber(validatedData);
      res.json({ success: true, data: subscriber });
    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      if (error.message === "Email already subscribed") {
        res.status(409).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter" 
        });
      } else {
        res.status(400).json({ 
          success: false, 
          message: error.message || "Invalid newsletter subscription" 
        });
      }
    }
  });

  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscribers = await storage.getAllNewsletterSubscribers();
      res.json({ success: true, data: subscribers });
    } catch (error: any) {
      console.error("Error fetching newsletter subscribers:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch newsletter subscribers" 
        });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
