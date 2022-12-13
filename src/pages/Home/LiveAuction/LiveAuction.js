import classNames from "classnames/bind";
import styles from './LiveAuction.module.scss';
import InfoProduct from "~/components/InfoProduct";
import config from "~/config";

import product1 from "~/assets/images/product1.jpg";
import product2 from "~/assets/images/product2.jpg";
import user from "~/assets/images/user.png";

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);


function LiveAuction() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text-header')}>
                <h2 className={cx('title')}>Live Auction</h2>
                <Link to={config.routes.product} className={cx('to-view')}>View All</Link>
            </div>
            <Container className={cx('grid')}>
                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-4')}>
                        <InfoProduct toProduct={config.routes.detailProduct} src={product1} nameProduct="Name product" priceMin="20" priceMax="500" time="1d 1h 1' 11s" quantityAuction="30" toSender="" avatarSender={user} nameSender="Name sender" />
                    </Col>
                    <Col className={cx('col', 'l-4')}>
                        <InfoProduct toProduct={config.routes.detailProduct} src={product2} nameProduct="Name product" priceMin="20" priceMax="500" time="1d 1h 1' 11s" quantityAuction="30" toSender="" avatarSender={user} nameSender="Name sender" />
                    </Col>
                    <Col className={cx('col', 'l-4')}>
                        <InfoProduct toProduct={config.routes.detailProduct} src={product1} nameProduct="Name product" priceMin="20" priceMax="500" time="1d 1h 1' 11s" quantityAuction="30" toSender="" avatarSender={user} nameSender="Name sender" />
                    </Col>
                    <Col className={cx('col', 'l-4')}>
                        <InfoProduct toProduct={config.routes.detailProduct} src={product1} nameProduct="Name product" priceMin="20" priceMax="500" time="1d 1h 1' 11s" quantityAuction="30" toSender="" avatarSender={user} nameSender="Name sender" />
                    </Col>
                    <Col className={cx('col', 'l-4')}>
                        <InfoProduct toProduct={config.routes.detailProduct} src={product2} nameProduct="Name product" priceMin="20" priceMax="500" time="1d 1h 1' 11s" quantityAuction="30" toSender="" avatarSender={user} nameSender="Name sender" />
                    </Col>
                    <Col className={cx('col', 'l-4')}>
                        <InfoProduct toProduct={config.routes.detailProduct} src={product1} nameProduct="Name product" priceMin="20" priceMax="500" time="1d 1h 1' 11s" quantityAuction="30" toSender="" avatarSender={user} nameSender="Name sender" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LiveAuction;