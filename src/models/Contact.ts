import mongoose, { Document, Model } from "mongoose";

export interface ContactDocument extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema = new mongoose.Schema<ContactDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact: Model<ContactDocument> =
  mongoose.models.Contact || mongoose.model<ContactDocument>("Contact", ContactSchema);

export default Contact;
