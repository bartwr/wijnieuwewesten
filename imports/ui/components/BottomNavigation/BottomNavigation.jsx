import React, {Component} from 'react';

class BottomNavigation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return <div
      className="BottomNavigation"
      onClick={() => {
        FlowRouter.go('/a')
      }}
      >
      ⬇️ Tekst
    </div>
  }
}

export default BottomNavigation;
