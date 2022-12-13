import classNames from 'classnames/bind';
import styles from './DataProduct.module.scss';

import { useState } from 'react';

const cx = classNames.bind(styles);

function DataProduct({ data }) {

    var currentBuy = data.currentBid + data.stepPrice;
    const [value, setValue] = useState(currentBuy);

    const handleRaise = () => {
        currentBuy = parseInt(value) + data.stepPrice;
        setValue(currentBuy);
    }

    const handleReduce = () => {
        currentBuy = parseInt(value) - data.stepPrice;
        if(currentBuy >= data.currentBid + data.stepPrice){
            setValue(currentBuy);
        }
    }


    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('name')}>{data.name}</h2>
            <div className={cx('start-bid')}>Start bid: <span>{data.startBid}$</span></div>
            <div className={cx('condition')}>Item condition: <span>{data.condition}</span></div>
            <div className={cx('auction-ends')}>Auction ends: <span>{data.auctionEnds}</span></div>
            <div className={cx('time-left')}>
                <span>Time Left:</span>
            </div>
            <div className={cx('current-bid')}>Current bid: <span>{data.currentBid}$</span></div>
            <div className={cx('price-step')}>Price step: <span>{data.stepPrice}$</span></div>

            <div className={cx('buy')}>
                <div onClick={handleReduce} className={cx('reduce')}>-</div>
                <div className={cx('input-buy')}>
                    <input 
                        type='text' 
                        value={value} 
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                    $
                </div>
                <div onClick={handleRaise} className={cx('raise')}>+</div>
                <button className={cx('bid')}>Bid</button>
            </div>
        </div>
    );
}

export default DataProduct;