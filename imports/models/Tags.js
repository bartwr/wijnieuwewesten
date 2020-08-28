import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Tags = new Mongo.Collection('Tags')

const schema = new SimpleSchema({
  dateCreated: Date,
  title: String,
  isRootCategory: {
    type: Boolean,
    optional: true
  }
})

export {Tags, schema}
