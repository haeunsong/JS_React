import React, { Component } from 'react';

class PhoneForm extends Component {

    state={
        name:'',
        phone:'',
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        alert('Name: '+this.state.name + ' / Phone: '+this.state.phone)
        e.preventDefault();
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone,
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange} 
                    value={this.state.phone} 
                />
                <input type="submit" value="제출!" />
            </form>
        );
    }
}

export default PhoneForm;