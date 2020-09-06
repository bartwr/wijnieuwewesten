import { Meteor } from 'meteor/meteor';

Meteor.methods({
  // 'users.setName'(name) {
  //   if (! this.userId) throw new Meteor.Error('not-authorized');
  //   if (! name) throw new Meteor.Error('No name given');

  //   Meteor.users.update(this.userId, {
  //     $set: {
  //       name: name
  //     }
  //   });
  // },
  // 'users.setEmail'(newEmail) {
  //   const userId = this.userId;

  //   if (! userId) throw new Meteor.Error('not-authorized');
  //   if (! newEmail) throw new Meteor.Error('No email address given');

  //   const currentEmail = Meteor.users.findOne(userId).emails[0].address;
  //   // Return if nothing has to change
  //   if(currentEmail == newEmail) return;

  //   console.log(userId, newEmail)
  //   Accounts.addEmail(userId, newEmail);
  //   Accounts.removeEmail(userId, currentEmail)

  //   return;
  // },
  'users.sendLoginEmail'(email) {
    Accounts.sendLoginEmail(email);
  },
  'users.getLoginToken'(userId) {
    if(! this.userId) return;
    return Accounts.impSvc.set(userId)
  },
})
