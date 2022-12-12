import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Menu from './Menu';
import Search from './Search';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('route')}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <div>Logo</div>
                    </Link>

                    <ul className={cx('list')}>
                        <li className={cx('item')}>
                            <Menu title='Home' to={config.routes.home} />
                        </li>
                        <li className={cx('item')}>
                            <Menu title='Product' to={config.routes.product} />
                        </li>
                        <li className={cx('item')}>
                            <Menu title='Contact' to={config.routes.contact} />
                        </li>
                    </ul>
                </div>

                <div className={cx('handle')}>
                    <div className={cx('search')}>
                        <Search />
                    </div>

                    <div className={cx('auction')}>
                        <i class="fa-sharp fa-solid fa-gavel"></i>
                    </div>

                    <Link to={config.routes.login} className={cx('account')}>
                        <i class="fa-regular fa-user"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;