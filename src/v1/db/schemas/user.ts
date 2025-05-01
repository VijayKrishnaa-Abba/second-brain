import { Schema, Document, model } from "mongoose";

export interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

export const userShema = new Schema<UserInterface>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const userModel = model<UserInterface>("user", userShema);
