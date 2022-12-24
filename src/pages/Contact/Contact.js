import classNames from 'classnames/bind';
import styles from './Contact.module.scss';


const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Contact Us</h2>
            <div className={cx('description')}>
                Say hello send us your thoughts about our products or share your ideas with our Team!
            </div>
            <div className={cx('form')}>
                <div className={cx('wrapper-input')}>
                    <div className={cx('first-name')}>
                        <input type="text" name='firstName' placeholder='First Name' />
                    </div>
                    <div className={cx('last-name')}>
                        <input type="text" name="lastName" placeholder='Last Name' />
                    </div>
                </div>
                <div className={cx('wrapper-input')}>
                    <div className={cx('email')}>
                        <input type="email" name="email" placeholder='Email' />
                    </div>
                    <div className={cx('subject')}>
                        <select className={cx('select')}>
                            <option>Subject</option>
                            <option>registration / log in</option>
                            <option>Auction</option>
                            <option>recharge</option>
                            <option>delivery</option>
                        </select>
                    </div>
                </div>
                <div className={cx('message')}>
                    <input type="text" name="message" placeholder='Message' />
                </div>
            </div>
            <div className={cx('btn')}>
                <button>SEND</button>
            </div>
        </div>
    );
}

export default Contact;