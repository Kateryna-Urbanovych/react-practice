import s from './Value.module.css';

function Value({ value }) {
    return <span className={s.counter__value}>{value}</span>;
}

export default Value;
