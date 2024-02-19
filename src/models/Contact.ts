import mongoose, { Document, Model } from "mongoose";

interface IContact extends Document {
  name: string;
  email: string;
  message: string;
}

const ContactSchema = new mongoose.Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
