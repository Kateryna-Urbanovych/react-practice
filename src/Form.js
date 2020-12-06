import { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        tag: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', tag: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Имя
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Логин
                    <input
                        type="text"
                        name="tag"
                        value={this.state.tag}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Отправить</button>
            </form>
        );
    }
}

export default Form;
