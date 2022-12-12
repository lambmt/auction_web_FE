import classNames from "classnames/bind";
import styles from './LiveAuction.module.scss';

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
                <Link className={cx('to-view')}>View All</Link>
            </div>
            <Container>
                <Row>
                    <Col ms={4} xl={4}>1</Col>
                    <Col ms={4} xl={4}>1</Col>
                    <Col ms={4} xl={4}>1</Col>
                    <Col ms={4} xl={4}>1</Col>
                    <Col ms={4} xl={4}>1</Col>
                    <Col ms={4} xl={4}>1</Col>
                </Row>
            </Container>
        </div>
    );
}

export default LiveAuction;