import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';

import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);


function SignIn() {

    return (
        <form id="sign-in" className={cx('form')} action="" method="POST">
            <div className={cx('form-group')}>
                <input
                    id="email"
                    rules="required|email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    className={cx('form-control')}
                />
                <span className={cx('form-message')}></span>
            </div>

            <div className={cx('form-group')}>
                <input
                    id="password"
                    rules="required|min:6"
                    name="password"
                    type="password"
                    className={cx('form-control')}
                    placeholder="Password"
                />
                <span className={cx('form-message')}></span>
            </div>

            <div className={cx('form-group-checkbox')}>
                <input id="password" name="password" type="checkbox" className={cx('form-control-checkbox')} />
                <p className={cx('text')}>Remember me</p>
            </div>

            <button className={cx('form-submit')}>sign in</button>

            <div className={cx('nocati')}>
                <p>Have you forgotten your password?</p>
                <Link to={config.routes.forgottenPassword} className={cx('reset-password')}>
                    Reset password
                </Link>
            </div>
        </form>
    );
}

export default SignIn;
