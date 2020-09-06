import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class TopNavigation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    console.log(window.location.pathname);

    return <a className="
      TopNavigation
      block
    "
    href="/kaart"
    onClick={() => {
      FlowRouter.go('/kaart')
    }}>
      <div>
        ⬆️ Kaart<br />
      </div>
    </a>
  }
}

export default withTracker((props) => {
  return {
  }
})(TopNavigation);
