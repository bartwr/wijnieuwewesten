import * as R from 'ramda'
import nl2br from './helpers/nl2br.js'

const reverseString = (str) => {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

const getTags = (vids) => {
  // Single vids?
  if(vids._id) vids = [vids]
  // Populate unique tags
  uniqueTags = []
  vids.map((vid) => {
    if(! vid.tags) return;
    vid.tags.map((tag) => {
      if(uniqueTags.indexOf(tag) > -1)
        return;
      uniqueTags.push(tag)
    })
  })
  return uniqueTags;
}

const isTeacher = (tag) => tag.indexOf('docent:') > -1;
const isStyle = (tag) => tag.indexOf('stijl:') > -1;

const getTeachers = (tags) => R.filter((tag) => isTeacher(tag), tags).sort()
const getStyles = (tags) => R.filter((tag) => isStyle(tag), tags).sort()

const getUniqueUserId = (userId) => {
  return reverseString(userId.substr(0, 5)).toUpperCase();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Get customer
const getCustomer = (userId, customerObject) => {
  return new Promise((resolve) => {
    Meteor.call('customers.getOrCreate', userId, customerObject, (err, res) => {
      if(err) console.log(err)
      resolve(res)
    })
  })
}
// Get customer mandates
const getCustomerMandates = (customerId) => {
  return new Promise((resolve) => {
    Meteor.call('customerMandates.get', customerId, (err, res) => {
      if(err) console.log(err)
      resolve(res)
    })
  })
}

const getVideosForTeacher = (videos, teacher) => {
  // Filter videos
  const videosHavingTeacher = R.filter((vid) => {
    return vid.tags.indexOf(teacher) > -1
  }, videos)
  // Get videoIds
  const videoIds = R.map((vid) => {
    return vid._id;
  }, videosHavingTeacher)
  // return videoIds for this teacher
  return videoIds;
}

const getWalletBalance = (walletTransactions) => {
  let sum = 0;
  if(! walletTransactions) return sum;
  walletTransactions.map((tx) => {
    sum += tx.amount;
  })
  return sum;
}

export {
  getCustomer,
  getCustomerMandates,
  getVideosForTeacher,
  getWalletBalance,
  getTags,
  getTeachers,
  getStyles,
  shuffle,
  nl2br,
  getUniqueUserId
}
