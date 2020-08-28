import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouterMeta, FlowRouterTitle} from 'meteor/ostrio:flow-router-meta';

/**
 *  App
 */
import AppProvider from '../imports/ui/AppProvider.js';
import Landing from '../imports/ui/components/Landing/Landing.jsx';
import Map from '../imports/ui/components/Map/Map.jsx';
import NewArticle from '../imports/ui/components/NewArticle/NewArticle.jsx';

// import { Videos as VideosModel } from '/imports/models/Videos.js';

FlowRouter.route('/', {
  title: 'Wij Nieuwe Westen',
  meta: {
    // <meta charset="UTF-8">
    charset: {
      charset: 'UTF-8'
    },
    // <meta name="keywords" content="Awes..">
    keywords: {
      name: 'keywords',
      itemprop: 'keywords',
      content: 'Wij Nieuwe Westen! keywords'
    },
    // <meta name="description" itemprop="description" property="og:description" content="Default desc..">
    description: {
      name: 'description',
      itemprop: 'description',
      property: 'og:description',
      content: 'Wij Nieuwe Westen! description'
    },
    image: {
      name: 'twitter:image',
      itemprop: 'image',
      property: 'og:image',
      content: 'https://www.neoyogaonline.nl/social/neo-yoga-online-op-ipad.jpg'
    },
    'og:type': 'website',
    'og:title'() {
      return document.title;
    },
    'og:site_name': 'Wij Nieuwe Westen',
    url: {
      property: 'og:url',
      itemprop: 'url',
      content() {
        return window.location.href;
      }
    },
    'twitter:card': 'summary',
    'twitter:title'() {
      return document.title;
    },
    'twitter:description': 'Wij Nieuwe Westen',
    'http-equiv': {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge,chrome=1'
    },
    robots: 'index, follow',
    google: 'notranslate'
  },
  link: {
    // <link href="https://maxcdn.bootstrapcdn.com/..." rel="stylesheet">
    // stylesheet: 'https://maxcdn.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css',

    // <link rel="canonical" href="https://www.neoyogaonline.nl/social/neo-yoga-online-op-ipad.jpg">
    canonical() {
      return document.location.href;
    },

    // <link rel="image" sizes="500x500" href="https://www.neoyogaonline.nl/social/neo-yoga-online-op-ipad.jpg">
    image: {
      rel: 'image',
      sizes: '500x500',
      href: '...jpg'
    },
    // publisher: 'http://plus.google...',
    'shortcut icon': {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '..favicon.ico'
    },
    'icon': {
      rel: 'icon',
      type: 'image/png',
      href: '..logoipad.jpg'
    },
    'apple-touch-icon-144': {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '..logoipad.jpg'
    },
    'apple-touch-icon-114': {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '..logoipad.jpg'
    },
    'apple-touch-icon-72': {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '..logoipad.jpg'
    },
    'apple-touch-icon-57': {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '..logoipad.jpg'
    }
  },
  action() {
    document.title = 'Wij Nieuwe Westen';
    mount(AppProvider, {
      content: <Landing />
    });
  }
})

FlowRouter.route('/kaart', {
  action(params) {
    document.title = 'Kaart | Wij Nieuwe Westen';
    mount(AppProvider, { content: <Map /> });
  }
})

FlowRouter.route('/nieuw', {
  action(params) {
    document.title = '+ Nieuw | Wij Nieuwe Westen';
    mount(AppProvider, { content: <NewArticle /> });
  }
})

FlowRouter.route('/admin', {
  async action(params) {
    const { default: Admin } = await import('../imports/ui/components/Admin/Admin.jsx')
    document.title = 'Admin | Wij Nieuwe Westen';
    mount(AppProvider, { content: <Admin /> });
  }
})

/**
 * Not found
 */
// FlowRouter.notFound = {
//   // Subscriptions registered here dont have Fast Render support.
//   subscriptions: function() {
//   },
//   action: function() {
//   }
// }

const goScrollTop = function() {
  window.scrollTo(0, 0)
}
FlowRouter.triggers.exit([goScrollTop])

new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);
