import React, { Component } from 'react';

class R027_ComponentClass extends Component {
  constructor (props) {
    super(props);
    this.state = {
      StateString: 'reacta',
      StateArrayObj: ['reactb', { react: '200c' }]
    }
  }

  buttonClick = (type) => {
    console.log("여기buttonClick");
    if(type === 'String'){
      this.setState({ StateString: 'reactd' });
    }else{
      this.setState({ StateArrayObj: ['reacte', { react: '200f' }] });
    }
  }

  render() {
    console.log('render() 실행')
    return (
      <div>
        <button onClick={e => this.buttonClick('String')}>{this.state.StateString}</button>
        <button onClick={e => this.buttonClick('ArrayObject')}>{this.state.StateArrayObj[1].react}</button>
      </div>
    )
  }
}

export default R027_ComponentClass;
