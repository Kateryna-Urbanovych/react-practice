import { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

    // Было две кнопки
    // show = () => {
    //     this.setState({ visible: true });
    // };

    // hide = () => {
    //     this.setState({ visible: false });
    // };

    render() {
        const { visible } = this.state;
        return (
            <div className={s.dropdown}>
                <button type="button" onClick={this.toggle}>
                    {visible ? 'Скрыть' : 'Показать'}
                </button>

                {visible && (
                    <div className={s.dropdownMenu}>Выпадающее меню</div>
                )}
            </div>
        );
    }
}

export default Dropdown;
