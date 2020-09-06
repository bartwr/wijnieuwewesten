import { Meteor } from 'meteor/meteor';

import {Articles} from '/imports/models/Articles.js'

Meteor.methods({
  'articles.create'(data) {
    if (! Meteor.userId()) throw new Meteor.Error('Please login to create a new article');
    if (! data) throw new Meteor.Error('No data given');
    if (! data.title) throw new Meteor.Error('No title given');

    return Articles.insert({
      dateCreated: new Date(),
      creatorUserId: Meteor.userId(),
      lat: data.lat,
      lng: data.lng,
      tagId: data.tagId,
      title : data.title,
      text: data.text,
      location: data.location,
      url: data.url,
      imageUrl: data.imageUrl,
      date: data.date
    })
  }
})
