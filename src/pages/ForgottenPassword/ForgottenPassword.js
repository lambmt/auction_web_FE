import classNames from 'classnames/bind';
import styles from './ForgottenPassword.module.scss';

const cx = classNames.bind(styles);

function ForgottenPassword() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title')}>Have You Forgotten Your Password?</div>
                <div className={cx('description')}>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail</div>
                <form id="forgotten" className={cx('form')} action="" method="POST">
                    <input id="email" name="email" type="text" placeholder="Email" className={cx('form-control')} />
                    <button className={cx('form-submit')}>reset password</button>
                </form>
            </div>
        </div>
    );
}

export default ForgottenPassword;
