import { waitlistEntries, type WaitlistEntry, type InsertWaitlistEntry } from "@shared/schema";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlistEntry): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
  getWaitlistCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private entries: Map<number, WaitlistEntry>;
  currentId: number;

  constructor() {
    this.entries = new Map();
    this.currentId = 1;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlistEntry): Promise<WaitlistEntry> {
    const id = this.currentId++;
    const createdAt = new Date();
    const entry: WaitlistEntry = { ...insertEntry, id, createdAt };
    this.entries.set(id, entry);
    return entry;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.entries.values()).find(
      (entry) => entry.email.toLowerCase() === email.toLowerCase(),
    );
  }

  async getWaitlistCount(): Promise<number> {
    return this.entries.size;
  }
}

export const storage = new MemStorage();
