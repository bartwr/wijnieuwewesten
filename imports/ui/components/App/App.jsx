import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

// Import models
// import { Proefabonnees } from '/imports/models/Proefabonnees.js';

// Import components
// import NotificationsWrapper from '../NotificationsWrapper/NotificationsWrapper.jsx'

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
      <div>
        {this.renderComponent()}
      </div>
    )
  }

}

export default withTracker((props) => {
  return {
  }
})(App);
