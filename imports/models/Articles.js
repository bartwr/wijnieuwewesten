import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Articles = new Mongo.Collection('Articles')

const schema = new SimpleSchema({
  dateCreated: Date,
  creatorUserId: String,
  lat: Number,
  lng: Number,
  tagId: String,
  title: String,
  text: String,
  location: String,
  url: String,
  imageUrl: String,
  date: Date
  // isRootCategory: {
  //   type: Boolean,
  //   optional: true
  // }
})

export {Articles, schema}
