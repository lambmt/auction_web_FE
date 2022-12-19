import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useRef, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);


function Register() {

    const aVendor = useRef();
    const aCustomer = useRef();
    const vendor = useRef();
    const [checkVendor, setCheckVendor] = useState(false);
    const [checkCustomer, setCheckCustomer] = useState(true);

    useEffect(() => {

    });

    const handleVendor = (e) => {
        setCheckVendor(aVendor.current.checked);
        setCheckCustomer(aCustomer.current.checked);
        if(aVendor.current.checked === true){
            vendor.current.style.height = '130px';
        } else {
            vendor.current.style.height = '0px';
        }
    }


    return (
        <form id="register" className={cx('form')} action="" method="POST">
            <div className={cx('form-group-name')}>
                <div className={cx('form-group-fisrt')}>
                    <input
                        id="fisrtname"
                        rules="required"
                        name="fisrtname"
                        type="text"
                        placeholder="Fisrt Name"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>

                <div className={cx('line')}></div>

                <div className={cx('form-group-last')}>
                    <input
                        id="lastname"
                        rules="required"
                        name="lastname"
                        type="text"
                        placeholder="Last Name"
                        className={cx('form-control')}
                    />
                    <span className={cx('form-message')}></span>
                </div>
            </div>

            <div className={cx('form-group')}>
                <input
                    id="phone"
                    rules="required"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className={cx('form-control')}
                />
                <span className={cx('form-message')}></span>
            </div>

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

            <div className={cx('form-group')}>
                <input
                    id="confirmPassword"
                    rules="required|min:6"
                    name="confirmPassword"
                    type="password"
                    className={cx('form-control')}
                    placeholder="Confirm Password"
                />
                <span className={cx('form-message')}></span>
            </div>

            <div ref={vendor} className={cx('vendor')}>
                <div className={cx('form-group')}>
                    <input
                        id="shopName"
                        rules="required"
                        name="shopName"
                        type="text"
                        className={cx('form-control')}
                        placeholder="Shop Name"
                    />
                    <span className={cx('form-message')}></span>
                </div>
    
                <div className={cx('form-group')}>
                    <input
                        id="shopAddress"
                        rules="required"
                        name="shopAddress"
                        type="text"
                        className={cx('form-control')}
                        placeholder="Shop Address"
                    />
                    <span className={cx('form-message')}></span>
                </div>
            </div>

            <div className={cx('form-group-checkbox')}>
                <input onClick={handleVendor} checked={checkVendor} ref={aVendor} id="aVender" name="option" type="radio" className={cx('form-control-checkbox')} />
                <p className={cx('text')}>I am a vendor</p>
            </div>

            <div className={cx('form-group-checkbox')}>
                <input onClick={handleVendor} checked={checkCustomer} ref={aCustomer} id="aCustomer" name="option" type="radio" className={cx('form-control-checkbox')} />
                <p className={cx('text')}>I am a customer</p>
            </div>

            <button className={cx('form-submit')}>Create Account</button>

            <div className={cx('nocati')}>
                <p>Already have an account?</p>
                <Link to={config.routes.login} className={cx('reset-password')}>
                    Sign in
                </Link>
            </div>
        </form>
    );
}

export default Register;