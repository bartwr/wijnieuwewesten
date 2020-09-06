Accounts.urls.login = function(token){
  return Meteor.absoluteUrl('login/' + token);
};

Accounts.emailTemplates.siteName = 'Wij Nieuwe Westen';
Accounts.emailTemplates.from = 'Wij Nieuwe Westen <mail@bartroorda.nl>';

const renderHtmlTemplate = (data) => {
  if(! data.title) return;
  if(! data.text) return;
  if(! data.buttonText) return;
  if(! data.buttonLink) return;
  return '<div style="border: solid rgba(0,0,0,.1) 1px; box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05); -webkit-box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05); overflow: hidden; width: 440px; max-width: 100%; margin-top: 32px; margin-bottom: 32px; border-radius: .25rem; text-align: center; font-family: sans-serif;">\
    <header style="min-height: 20px; width: 100%; background-color: rgba(253, 190, 20, 0.1)">\
      Wij Nieuwe Westen\
    </header>\
    <div style="padding: 24px 24px;">\
      <h1 style="margin: 0 0 8px 0; font-weight: 700; font-size: 20px; text-align: center;">'+data.title+'</h1>\
      <p style="margin-bottom: 16px; font-size: 16px;">'+data.text+'</p>\
      <a href="'+data.buttonLink+'" target="_blank" style="margin: 8px 0 0 0; background-color:rgb(253, 190, 20); border-bottom-color:rgba(0, 0, 0, 0); border-bottom-style:solid; border-bottom-width:2px; border-left-color:rgba(0, 0, 0, 0); border-left-style:solid; border-left-width:2px; border-right-color:rgba(0, 0, 0, 0); border-right-style:solid; border-right-width:2px; border-top-color:rgba(0, 0, 0, 0); border-top-style:solid; border-top-width:2px; box-sizing:border-box; color:rgb(0, 0, 0); cursor:pointer; display: inline-block; font-family:sans-serif; font-size:20px; font-weight:600; height:50px; line-height:30px; max-width:100%; padding-bottom:8px; padding-left:32px; padding-right:32px; padding-top:8px; text-align:center; text-decoration-color:rgb(0, 0, 0); text-decoration-line:none; text-decoration-style:solid; text-size-adjust:100%; transition-duration:0.3s; white-space:nowrap; color: #006f73">'+data.buttonText+'</a>\
    </div>\
  </div>'
}

const isExistingUser = (user) => {
  if(! user || ! user.emails || ! user.emails[0]) return false;
  return user.emails[0].verified
}

Accounts.emailTemplates.login = {
  subject: function(user){
    if(isExistingUser(user)) {
      return 'Login bij WijNieuweWesten';
    } else {
      return 'Welkom bij WijNieuweWesten!';
    }
  },

  text: function(user, url){
    if(isExistingUser(user)) {
      return "Welkom terug. Klik op onderstaande link om in te loggen:\n\n" + url;
    } else {
      return "Welkom! Leuk dat je er bent. Klik op onderstaande link om in te loggen.\n\n"+
       url;
    }
  },

  html: function(user, url){
    if(isExistingUser(user)) {
      return renderHtmlTemplate({
        title: 'Welkom terug',
        text: 'Je bent er bijna. Klik op onderstaande link om in te loggen:',
        buttonText: 'Login op WijNieuweWesten',
        buttonLink: url
      })
    } else {
      return renderHtmlTemplate({
        title: 'Welkom',
        text: 'Leuk dat je er bent. Klik op onderstaande link om in te loggen.',
        buttonText: 'Login op WijNieuweWesten',
        buttonLink: url
      })
    }
  }
};