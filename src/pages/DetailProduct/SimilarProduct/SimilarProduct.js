import classNames from 'classnames/bind';
import styles from './SimilarProduct.module.scss';
import { Row, Col } from 'react-bootstrap';
import InfoProduct from "~/components/InfoProduct";
import config from "~/config";

import product1 from "~/assets/images/product1.jpg";
import product2 from "~/assets/images/product2.jpg";
import user from "~/assets/images/user.png";


const cx = classNames.bind(styles);

function SimilarProduct({ data }) {
    return (
        <Row className={cx('row')}>
            <Col className={cx('col', 'l-4')}>
                <InfoProduct
                    toProduct={config.routes.detailProduct}
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
                    toProduct={config.routes.detailProduct}
                    src={product2}
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
                    toProduct={config.routes.detailProduct}
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

export default SimilarProduct;
