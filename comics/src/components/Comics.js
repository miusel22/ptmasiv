/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Col, Row } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchData, addElement } from '../redux/actions';
import { useEffect } from 'react';
import { message } from 'antd';
import { Rate } from 'antd';

const Comics = () => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [messageApi, contextHolder] = message.useMessage();
    const [value, setValue] = useState();
    const [randomComicNum, setRandomComicNum] = useState(null);
    const [comicsData, setComicsData] = useState([]);


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'the comic has been rated!',
        });
    };
    const dispatch = useDispatch();


    const newRandomComicNum = () => {
        setRandomComicNum(Math.floor(Math.random() * 1000) + 1);
    };

    const news = () => {
        dispatch(fetchData(Math.floor(Math.random() * 1000) + 1));
        setValue(null);
    }

    const data = useSelector(state => state.data);

    const comics = useSelector(state => state.array);

    const manejarSubmit = async (e) => {
        e.preventDefault();
        const newComicData = {
            ...data,
            rating: value
        };
        newRandomComicNum();
        success();
        setComicsData([...comicsData, newComicData]);
        dispatch(addElement([...comics, newComicData]));
        setValue(null);

    };

    useEffect(() => {
        newRandomComicNum();
    }, []);

    useEffect(() => {
        if (randomComicNum && data) {
            dispatch(fetchData(randomComicNum));
        }
    }, [randomComicNum]);

    return (
        <>
            {contextHolder}
            <div className='container'>
                <button className="bnt-next" onClick={news}>
                    Next
                </button>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            className="centered-card"
                            cover={<img src={data.img} />}
                            style={{ textAlign: 'center' }}
                            title={data.title} bordered={false}>
                            <form onSubmit={manejarSubmit}>
                                <span>
                                    <Rate tooltips={desc} onChange={setValue} value={value} />
                                </span>

                                {value && <button type="submit">Send</button>}
                            </form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Comics;