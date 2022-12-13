import classNames from 'classnames/bind';
import styles from './AllProduct.module.scss';
import InfoProduct from '~/components/InfoProduct';
import product1 from '~/assets/images/product1.jpg';
import user from '~/assets/images/user.png';
import { Col, Row } from 'react-bootstrap';

const cx = classNames.bind(styles);

function AllProduct() {
    return (
        <Row className={cx('row')}>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct=""
                    src={product1}
                    nameProduct="Name product"
                    priceMin="20"
                    priceMax="500"
                    time="1d 1h 1' 11s"
                    quantityAuction="30"
                    toSender=""
                    avatarSender={user}
                    nameSender="Name sender"
                />
            </Col>
        </Row>
    );
}

export default AllProduct;
