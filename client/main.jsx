import { Meteor } from 'meteor/meteor';
import '../lib/router.js';

// Accounts.onLoginFromLink(function(err, response){
//   // response is a success object in the form of { userId: docId }
//   console.log('onLoginFromLink: err/response', err, response)
//   //
//   if(err) {
//     console.log(err)
//     return err;
//   }

//   Meteor.call('onboarding.populateUserVids', response.user._id)
//   document.location = '/';
// })
