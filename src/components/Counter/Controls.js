import s from './Controls.module.css';

function Controls({ onIncrement, onDecrement }) {
    return (
        <div className={s.counter__controls}>
            <button type="button" onClick={onIncrement}>
                Увеличить на 1
            </button>
            <button type="button" onClick={onDecrement}>
                Уменьшить на 1
            </button>
        </div>
    );
}

export default Controls;
