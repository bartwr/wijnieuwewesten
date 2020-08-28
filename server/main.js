import { Meteor } from 'meteor/meteor';

// import './api/mollie-webhooks.ts'

// import './login/find-user-by-token.js';
// import './login/login-config.js';
// import './login/send-login-email.js';

// // Import publications
// import '/imports/server/publish/all.js';
// // Import schedules jobs
// import '/imports/server/jobs/index.js';
// // Import methods
import '/imports/server/methods/index.js';

function configureEmail() {
  var username = process.env.MAILGUN_USERNAME;
  var password = process.env.MAILGUN_PASSWORD;
  var server = process.env.MAILGUN_HOST;
  var port = process.env.MAILGUN_PORT;

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(username) + ':' + encodeURIComponent(password) + '@' + encodeURIComponent(server) + ':' + port;
}

configureCronJobs = () => {
}

if (Meteor.isServer) { 
  configureCronJobs()
}

Meteor.startup(() => {
  SyncedCron.start()
  configureEmail()
})
