import React, { Component } from 'react';
import PhoneForm from './PhoneNum/PhoneForm';

class App extends Component {

  id=0;
  state={
    information:[],
    keyword:''
  }
  handleChange=(e)=>{
    this.setState({
      keyword:e.target.value 
    })
  }
// 부모 컴포넌트에게 정보 전달하기(state 안에 있는 값들을 부모 컴포넌트에게 전달)
// 먼저 부모 컴포넌트에서 메소드를 만들고
// 이 메소드를 자식에게 전달한 다음에 자식 내부에서 호출하는 방식 사용
  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information:this.state.information.concat({...data,id:this.id++})
    })
  }
  handleRemove=(id)=>{
    const{information}=this.state
    this.setState({
      information:information.filter(info=>info.id!==id)
    })
  }
  handleUpdate=(id,data)=>{
    const{information}=this.state;
    this.setState({
      information:information.map(
        info=>{
          if(info.id===id){
            return {
              id,...data,
            }
          }
          return info;
        }
      )
    }) 

  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate} /> {/* handleCreate 메소드를 PhoneForm에 전달 */ }
        <PhoneInfoList
          />
      </div>
    );
  }
}

export default App;