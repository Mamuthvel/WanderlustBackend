import mongoose from "mongoose";
import { Destination, Property } from "../models/userModel.js"; // ✅ make sure this is the correct export
import { destinations, properties } from "./data.js";
import dotenv from "dotenv";
dotenv.config();
export const SeedData = async () => {
  if (!process.env.MONGO_URI) throw new Error("❌ Database URL not provided");

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database connected successfully before seeding");

    await Property.deleteMany({});
    console.log("🧹 Existing property data cleared");

    if (!properties || properties.length === 0) {
      throw new Error("❌ Seed data not available or empty");
    }

    await Property.insertMany(properties);
    console.log("🌱 Properties data seeded successfully");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
};

// SeedData();

