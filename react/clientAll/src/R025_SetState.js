import React, { PureComponent } from 'react';

class R025_SetState  extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
        StateString: 'react',
        StateString1: 'react1',
        StateString2: 'react2',
    }
  }
  StateChange = (flag) => {
    //DB다녀옴
    if(flag == 'direct') {
      this.state.StateString = '리액트';
      this.forceUpdate();
    }
    if(flag == 'setstate') {
      this.setState({StateString : '리액트'});
      this.setState({StateString1 : '리액트1'});
      this.setState({StateString2 : '리액트2'});
    };
  }

  render() {
    console.log("render() 실행");
    return (
    <div style={{padding: "0px"}}>
      <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
      <button onClick={(e) => this.StateChange('setstate', e)}>setState로 변경</button><br/>
      [state 변경하기] StateString : {this.state.StateString}
      [state 변경하기] StateString : {this.state.StateString1}
      [state 변경하기] StateString : {this.state.StateString2}
    </div>
    )
  }
}

export default R025_SetState;
