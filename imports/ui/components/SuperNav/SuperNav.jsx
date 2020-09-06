import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import './SuperNav.css'

// Import models
// import { Proefabonnees } from '/imports/models/Proefabonnees.js';

// Import components
// import SideNavigation from '../SideNavigation/SideNavigation.jsx'
// import TopNavigation from '../TopNavigation/TopNavigation.jsx'
// import BottomNavigation from '../BottomNavigation/BottomNavigation.jsx'

class SuperNav extends Component {

  render() {
    return (
      <div className="
        SuperNav
        fixed
        text-center
      ">
        {this.props.showNav !== undefined && <div className="
          SuperNav-overlay
          p-2
          mx-auto
          mb-4
          max-w-sm
        ">
          <nav className="
            SuperNav-nav
            font-bold
            text-white
          ">
            <a
              href="/nieuw"
              onClick={() => FlowRouter.go('/nieuw')}
              className="block py-4 border-b border-white"
              >
              voeg iets toe
            </a>
            <a
              href="https://www.bartroorda.nl/contact"
              target="_blank"
              className="block py-4"
              >
              contact ↗️
            </a>
          </nav>
        </div>}
        <a
          className="
            SuperNav-toggleButton
            block
            cursor-pointer
            mx-auto
            w-12 h-12
            flex justify-center flex-col
            text-4xl
            bg-white
            rounded-full
          "
          onClick={() => {
            if(FlowRouter.getQueryParam('nav') !== undefined) {
              FlowRouter.setQueryParams({nav: null});
            } else {
              FlowRouter.setQueryParams({nav: 1});
            }
          }}
          >
          🌐
        </a>
      </div>
    )
  }

}

export default withTracker((props) => {
  return {
    showNav: FlowRouter.getQueryParam('nav')
  }
})(SuperNav);
