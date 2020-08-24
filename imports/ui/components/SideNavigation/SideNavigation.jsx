import React, {Component} from 'react';

import './SideNavigation.css';

class SideNavigation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return <div className="
      SideNavigation
      bg-black
      text-white font-bold
      text-center
      h-12
      flex flex-col justify-center
      cursor-pointer
    " onClick={() => {}}>
      {this.props.children}
    </div>
  }
}

export default SideNavigation;
