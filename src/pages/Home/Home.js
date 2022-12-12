import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Slider from './Slider';
import LiveAuction from './LiveAuction';

const cx = classNames.bind(styles);


function Home() {
    return (
        <div className={cx('container')}>
            <Slider />
            <LiveAuction />
        </div>
    );
}

export default Home;
