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
            information: information.concat({
                ...data,
                id: this.id++,
            })
                
        })
    };
    handleRemove=(id)=>{
        // id가 일치하지 않는 것들만 필터링 해줘!(id가 일치하면 제거)
        const {information} = this.state;
        this.setState({
            information: information.filter(info=>info.id!==id)
        })

    }
    render() {
        return (
            <div className="App">
                <PhoneForm onCreate={this.handleCreate} />
                {/* {JSON.stringify(this.state.information)} */}
                <PhoneInfoList 
                    data={this.state.information}
                    onRemove={this.handleRemove}
                />
                
            </div>
        );
    }
}

export default App;