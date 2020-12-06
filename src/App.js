import { Component } from 'react';
import shortid from 'shortid';

import TodoList from './components/TodoList';
import initialTodos from './components/TodoList/todos.json';
// import Form from './Form';
import TodoEditor from './components/TodoEditor';
import TodoFilter from './components/TodoFilter';

class App extends Component {
    state = {
        todos: initialTodos,
        filter: '',
    };

    addTodo = text => {
        const todo = {
            id: shortid.generate(),
            text,
            completed: false,
        };

        this.setState(({ todos }) => ({
            todos: [todo, ...todos],
        }));
    };

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };

    // toggleCompleted = todoId => {
    //     this.setState(prevState => ({
    //         todos: prevState.todos.map(todo => {
    //             if (todo.id === todoId) {
    //                 return {
    //                     ...todo,
    //                     completed: !todo.completed,
    //                 };
    //             }
    //             return todo;
    //         }),
    //     }));
    // };

    toggleCompleted = todoId => {
        this.setState(({ todos }) => ({
            todos: todos.map(todo =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            ),
        }));
    };

    changeFilter = event => {
        this.setState({
            filter: event.currentTarget.value,
        });
    };

    getVisibleTodos = () => {
        const { todos, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();
        return todos.filter(todo =>
            todo.text.toLowerCase().includes(normalizedFilter),
        );
    };

    calculatedCompletedTodos = () => {
        const { todos } = this.state;
        return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    };

    formSubmitHadler = data => {
        console.log(data);
    };

    render() {
        const { todos, filter } = this.state;
        const totalTodoCount = todos.length;
        const completedTodoCount = this.calculatedCompletedTodos();
        const visibleTodos = this.getVisibleTodos();

        return (
            <>
                {/* <Form onSubmit={this.formSubmitHadler} /> */}

                <div>
                    <p>Общее кол-во: {totalTodoCount}</p>
                    <p>Кол-во выполненных: {completedTodoCount}</p>
                </div>

                <TodoEditor onSubmit={this.addTodo} />

                <TodoFilter value={filter} onChange={this.changeFilter} />

                <TodoList
                    todos={visibleTodos}
                    onDeleteTodo={this.deleteTodo}
                    onToggleCompleted={this.toggleCompleted}
                />
            </>
        );
    }
}

export default App;
