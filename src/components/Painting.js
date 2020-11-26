import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';

export default function Painting({
    imageUrl = defaultImage,
    title,
    author = 'неизвестно',
    profileUrl,
    price,
    quantity,
}) {
    return (
        <div>
            <img src={imageUrl} alt={title} width="480" />
            <h2>{title}</h2>
            <p>
                Автор: <a href={author}>{profileUrl}</a>
            </p>
            <p>Цена: {price} кредитов</p>
            <p>
                Доступность:{' '}
                {quantity < 10 ? 'заканчивается' : 'есть в наличии'}
            </p>
            <button type="button">Добавить в корзину</button>
        </div>
    );
}

Painting.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};
