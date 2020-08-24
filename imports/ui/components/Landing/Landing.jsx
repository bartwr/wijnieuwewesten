import React, {Component} from 'react';
import 'animate.css';

import './Landing.css'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setTimeout(() => {
      FlowRouter.go('/kaart')
    }, 3000)
  }
  render() {
    return <a href="/kaart" className="Landing px-6 block">
      <div className="animate__animated animate__pulse">Wij</div>
      <div className="text-center animate__animated animate__pulse animate__delay-1s" style={{marginLeft: '-10vw'}}>Nieuwe</div>
      <div className="text-right animate__animated animate__pulse animate__delay-2s">Westen</div>
    </a>
  }
}

export default App;
