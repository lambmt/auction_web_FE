import classNames from 'classnames/bind';
import styles from './InfoProduct.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function InfoProduct({ toProduct, src, nameProduct, priceMin, priceMax, time, quantityAuction, toSender, avatarSender, nameSender }) {
    return (
        <div className={cx('wrapper')}>
            <Link to={toProduct} className={cx('img')}>
                <img src={src} alt={nameProduct} />
            </Link>
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <Link to={toProduct} className={cx('name-name')}>{nameProduct}</Link>
                    <span className={cx('name-time')}><i class="fa-regular fa-clock"></i>{time}</span>
                </div>
                <div className={cx('price')}>
                    <div className={cx('price-price')}>$ {priceMin}  ~  $ {priceMax}</div>
                    <span className={cx('price-quantity')}><i class="fa-solid fa-gavel"></i>{quantityAuction} lượt</span>
                </div>
            </div>

            <Link to={toSender} className={cx('sender')}>
                <img src={avatarSender} alt={nameSender} className={cx('avatar')} />
                <div className={cx('name-sender')}>{nameSender}</div>
            </Link>
        </div>
    );
}

InfoProduct.propTypes = {
    toProduct: PropTypes.string,
    src: PropTypes.string.isRequired,
    nameProduct: PropTypes.string.isRequired,
    quantityAuction: PropTypes.number,
    toSender: PropTypes.string,
    avatarSender: PropTypes.string,
    nameSender: PropTypes.string,
};

export default InfoProduct;