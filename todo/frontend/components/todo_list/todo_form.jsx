import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({ 
            title: "",
            body: ""
        });
        
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
       return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                <input onChange={this.handleChange} name="title" type="text" value={this.state.title}/>
                </label>
                <label>
                    Body:
                    <textarea onChange={this.handleChange} name="body" cols="20" rows="30" value={this.state.body}></textarea>
                </label>
                <input type="submit" name="" value="Submit" />
            </form>
        )
    }
}

export default TodoForm;