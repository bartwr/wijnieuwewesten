import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import * as R from 'ramda';

import {Tags} from '/imports/models/Tags.js'

class TagRow extends Component {
  render() {
    return <div>
      {this.props.tag.title}
    </div>
  }
}

class Admin extends Component {
  createNewTag() {
    const tagName = prompt('Wat wordt de naam van de tag? Bijvoorbeeld: ', 'Buurtinitiatief')
    if(! tagName) return;

    Meteor.call('tags.create', {
      title: tagName,
      isRootCategory: true
    })
  }
  render() {
    return <div className="Admin p-4">

      <h1 className="text-2xl">Alle tags</h1>

      {R.map((tag) =>
        <TagRow
          key={tag.title}
          tag={tag}
          />, this.props.tags
      )}

      <button
        className="
          cursor-pointer
          bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
        "
        onClick={this.createNewTag.bind(this)}
        >
        New tag
      </button>

    </div>
  }
}

export default withTracker((props) => {
  return {
    tags: Tags.find({}, {sort: { 'title': 1 }}).fetch()
  }
})(Admin);
