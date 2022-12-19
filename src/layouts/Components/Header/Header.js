import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.png';
import Tippy from '@tippyjs/react/headless';

import Menu from './Menu';
import Search from './Search';
import config from '~/config';
import { Link } from 'react-router-dom';

import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);


function Header() {

    const handleWrapper = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const x = window.pageYOffset;
    
            if(x > 10) {
                handleWrapper.current.style.background = 'linear-gradient(180deg, rgba(17, 211, 237, 1) 2.08%, rgba(59, 151, 196, 1) 99.95%, rgba(61, 95, 118, 1) 99.96%, rgba(110, 103, 114, 1) 99.97%)';
            } else {
                handleWrapper.current.style.background = 'linear-gradient(180deg, rgba(17, 211, 237, 0.76) 2.08%, rgba(59, 151, 196, 0) 99.95%, rgba(61, 95, 118, 0.416278) 99.96%, rgba(110, 103, 114, 0) 99.97%)';
            }
        });
    })

    const renderPreview = (props) => {
        return (
            <ul className={cx('list-children')} tabIndex="-1" {...props}>
                <li className={cx('item-children')}>
                    <Menu title='Live Product' to={config.routes.vendorLive} />
                </li>
                <li className={cx('item-children')}>
                    <Menu title='Add Product' to={config.routes.vendorAdd} />
                </li>
                <li className={cx('item-children')}>
                    <Menu title='Shop' to={config.routes.vendorShop} />
                </li>
                <li className={cx('item-children')}>
                    <Menu title='Wait Confirmation Product' to={config.routes.vendorWaitConfirmation} />
                </li>
            </ul>
        );
    };

    return (
        <header ref={handleWrapper} className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('route')}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <img alt="Logo" src={logo} />
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
                        {
                            localStorage.getItem('privilege') === 'vendor' ?
                            <Tippy interactive
                                offset={[116, 4]}
                                placement="bottom-end" 
                                render={renderPreview}
                            >
                                <li className={cx('item')}>
                                    <Menu title='Vendor' to='/vendor' />
                                </li>
                            </Tippy> :
                            ""
                        }
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