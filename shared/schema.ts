import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistEntrySchema = createInsertSchema(waitlistEntries).pick({
  fullName: true,
  email: true,
});

export const insertWaitlistEntrySchemaWithValidation = insertWaitlistEntrySchema.extend({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().min(2, "Please enter your full name"),
});

export type InsertWaitlistEntry = z.infer<typeof insertWaitlistEntrySchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;
