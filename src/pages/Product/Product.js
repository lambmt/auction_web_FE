import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Product.module.scss';

import AllProduct from './AllProduct';
import SearchProduct from './SearchProduct';
import CategoryProduct from './CategoryProduct';
import FilltePrice from './FilltePrice';

const cx = classNames.bind(styles);


function Product() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>All Product</h2>
            <Container className={cx('grid')}>
                <Row className={cx('row')}>
                    <Col className={cx('col', 'l-3')}>
                        <SearchProduct />
                        <CategoryProduct />
                        <FilltePrice />
                    </Col>
                    <Col className={cx('col', 'l-9')}>
                        <AllProduct />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Product;