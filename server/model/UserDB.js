import * as ALLmongoose from 'mongoose';
import { validatorEmail } from '../util/util.js';

const mongoose = ALLmongoose.default;
const userSchema = mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  fullName: String,
  displayName: { type: String },
  profileImg: { type: String },
  phone: String,
  email: {
    type: String,
    validate: {
      validator: validatorEmail,
      message: (props) => `${props.value} is not a valid email address!`,
    },
    unique: [true, 'Must be unique'],
    required: [true, 'email is required'],
  },
  password: { type: String, required: true, minLength: [40] },
  roles: {
    User: { type: Number },
    Editor: { type: Number },
    Admin: { type: Number },
  },
  Bookmark: [
    {
      petRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    },
  ],
  verify: Boolean,
  refreshToken: { type: String },
});

userSchema.methods.toProfileJSON = function () {
  return {
    _id: this.id,
    name: this.displayName,
    email: this.email,
    roles: this.roles,
  };
};

userSchema.statics.findByRefreshToken = async function (refreshToken) {
  return await this.findOne({ refreshToken });
};

let User = mongoose.model('User', userSchema, 'Users');
export default User;
