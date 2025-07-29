import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  properties: Number,
  imageUrl: String,
  description: String,
  category: String,
})
const roomSchema = new mongoose.Schema({
  id: Number,
  roomNo: Number,
  name: String,
  type: String,
  beds: Number,
  maxGuests: Number,
  price: Number,
  imageUrl: String,
  amenities: [String],
  availability: Boolean,
  bookings: [
    {
      startDate: Date,
      endDate: Date,
      guestName: String,
      guestCount: Number,
    },
  ],
});
const propertySchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  location: String,
  rating: Number,
  reviews: Number,
  price: Number,
  imageUrl: String,
  featured: Boolean,
  distanceFromCenter: String,
  rooms: [roomSchema],
})
export const User = mongoose.model('User', userSchema);
export const Destination = mongoose.model("Destination", destinationSchema);
export const Property = mongoose.model('Property', propertySchema);
