import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);


function Search() {
    return (
        <div className={cx('wrapper')}>
            <input id="search" type="text" className={cx('input')} />
            <label for="search" className={cx('input-label')}>
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </label>
        </div>
    );
}

export default Search;