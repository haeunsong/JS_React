import React, { Component } from 'react';
import PhoneForm from './phoneNum/PhoneForm';
import PhoneInfoList from './phoneNum/PhoneInfoList';
class App extends Component {

    id=0;

    state={
        information: [],
    }
    handleCreate=(data)=>{
        const {information} = this.state;
        this.setState({
            information: information.concat(Object.assign({},data,{
                id: this.id++
            }))
        });
    }
    render() {
        return (
            <div className="App">
                <PhoneForm onCreate={this.handleCreate} />
                {/* {JSON.stringify(this.state.information)} */}
                <PhoneInfoList data={this.state.information}/>
                
            </div>
        );
    }
}

export default App;