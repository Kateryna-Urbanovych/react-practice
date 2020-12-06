import { Component } from 'react';

class TodoEditor extends Component {
    state = {
        message: '',
    };

    handleChange = event => {
        this.setState({
            message: event.currentTarget.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.message);
        this.reset();
    };

    reset = () => {
        this.setState({ message: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}
                ></textarea>
                <button type="submit">Сохранить</button>
            </form>
        );
    }
}

export default TodoEditor;
