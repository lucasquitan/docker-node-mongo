import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    cpf: {
      type: String,
      required: [true, 'CPF is required.'],
      unique: true,
      match: [/^[0-9]{11}$/, 'CPF must have 11 numeric characters'],
    },
    phone: String,
  },
  {
    timestamps: true,
  }
);

export default model('User', UserSchema);
