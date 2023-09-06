import React, { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      StateString: 'react1',
      StateArrayObj: ['react2', { react: '2003' }]
    }
  }

  buttonClick = (type) => {
    console.log("여기Pure buttonClick");
    if(type === 'String'){
      this.setState({ StateString: 'react4' });
    }else{
      this.setState({ StateArrayObj: ['react5', { react: '2006' }] });
    }
  }

  render() {
    console.log('render() 실행')
    return (
      <div>
        <button onClick={e => this.buttonClick('String')}>{this.state.StateString}</button>
        <button onClick={e => this.buttonClick('ArrayObject')}>{this.state.StateArrayObj[1].react}</button>
        <button onClick={e => this.buttonClick('ArrayObject')}>{this.state.StateArrayObj[0]}</button>
      </div>
    )
  }
}

export default R028_PureComponentClass;
