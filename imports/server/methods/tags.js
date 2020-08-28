import { Meteor } from 'meteor/meteor';

import {Tags} from '/imports/models/Tags.js'

Meteor.methods({
  'tags.create'(data) {
    if (! data) throw new Meteor.Error('No data given');
    if (! data.title) throw new Meteor.Error('No title given');

    Tags.insert({
      dateCreated: new Date(),
      title: data.title,
      isRootCategory: data.isRootCategory || false
    })
  }
})
