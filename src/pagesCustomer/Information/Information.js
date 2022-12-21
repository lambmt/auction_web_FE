import classNames from "classnames/bind";
import styles from './Information.module.scss';


const cx = classNames.bind(styles);

function Information() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('personal')}>
                <h2 className={cx('title')}>personal detail</h2>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="firt-name">First Name</label>
                        <input type="text" name="firt-name" id="firt-name" placeholder="First Name" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" placeholder="Last Name" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="phone-number">Phone Number</label>
                        <input type="text" name="phone-number" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                </div>
            </div>

            <div className={cx('shipping')}>
                <h2 className={cx('title')}>shipping address</h2>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="flat-plot">Flat / Plot</label>
                        <input type="text" name="flat-plot" id="flat-plot" placeholder="Flat / Plot" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="address">Address</label>
                        <input type="text" name="address" id="address" placeholder="Address" />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('wrapper-input')}>
                        <label for="city">City</label>
                        <input type="text" name="city" id="city" placeholder="City" />
                    </div>
                    <div className={cx('wrapper-input')}>
                        <label for="region-state">Region / State</label>
                        <input type="text" name="region-state" id="region-state" placeholder="Region / State" />
                    </div>
                </div>
            </div>

            <div className={cx('wrapper-btn')}>
                <button className={cx('btn')}>save setting</button>
            </div>
        </div>
    );
}

export default Information;