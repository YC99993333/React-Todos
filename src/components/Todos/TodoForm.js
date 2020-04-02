import React from 'react';
import uuid from 'uuid';

class TodoForm extends React.Component{

    state = { text: '' };

    onInputChange = event => {
        this.setState({ text: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onTermSubmit({
            text: this.state.text,
            isComplete: false,
            id: uuid.v4()
        });

        this.setState({ text: " "});
    };

    render() {
        return (
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui fluid action input">
                        <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onInputChange}
                        placeholder="Enter a Todo"
                        />
                        <button className="ui button primary" onClick={this.onFormSubmit}>Add</button>
                    </div>
                </form>
        
        );
    }
}

export default TodoForm;