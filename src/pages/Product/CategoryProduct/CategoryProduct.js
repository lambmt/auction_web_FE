import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CategoryProduct.module.scss';


const cx = classNames.bind(styles);


function CategoryProduct() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Product Category</h3>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link to="" className={cx('link')}>
                        <div className={cx('dot')}></div>
                        <div className={cx('name')}>Accessories</div>
                        <span className={cx('quantity')}>(19)</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default CategoryProduct;