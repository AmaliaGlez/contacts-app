import { Schema, model } from 'mongoose';

const ContactLogSchema = new Schema(
  {
    contactId: {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

const ContactLog = model('ContactLog', ContactLogSchema);
export default ContactLog;
