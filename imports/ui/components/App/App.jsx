import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Import models
// import { Proefabonnees } from '/imports/models/Proefabonnees.js';

// Import components
import SuperNav from '../SuperNav/SuperNav.jsx'
import SideNavigation from '../SideNavigation/SideNavigation.jsx'
import TopNavigation from '../TopNavigation/TopNavigation.jsx'
import BottomNavigation from '../BottomNavigation/BottomNavigation.jsx'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  renderComponent() {
    // Add props to component-to-load
    const contentWithProps =
      React.cloneElement(this.props.content, {
        // myVar: this.state.myVar,
        // addSomething: this.addSomething.bind(this),
      })
    return contentWithProps
  }

  render() {
    return (
      <div className="h-full">
        <div className="flex flex-col h-full">
          <div hidden={window.location.pathname == '/kaart'}>
            <SideNavigation>
              <TopNavigation />
            </SideNavigation>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto">
              {this.renderComponent()}
            </div>
          </div>
          <div hidden={window.location.pathname == '/a'}>
            <SideNavigation>
              <BottomNavigation />
            </SideNavigation>
          </div>
        </div>
        <SuperNav />
      </div>
    )
  }

}

export default withTracker((props) => {
  return {
  }
})(App);
