/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchData, addElement } from '../redux/actions';
import { useEffect } from 'react';
import { message } from 'antd';
import { Rate, Button } from 'antd';
import Next from '../img/next.png';
import Previous from '../img/previous.png';

const Comics = () => {
    const desc = ['I hate it!', 'Bad', 'Normal', 'Good', 'I love it!'];
    const [messageApi, contextHolder] = message.useMessage();
    const [value, setValue] = useState();
    const [randomComicNum, setRandomComicNum] = useState(null);
    const [comicsData, setComicsData] = useState([]);


    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'The comic has been rated!',
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
                <div className='center-all'>
                    <img onClick={news} src={Previous} className="img-next-previous" />
                    <Card
                        className="centered-card"
                        cover={<img src={data.img} />}
                        style={{ textAlign: 'center' }}
                        title={data.title} bordered={false}>
                        <form>
                            <span>
                                <Rate tooltips={desc} onChange={setValue} value={value} />
                            </span>

                            {value && <Button type="primary" onClick={manejarSubmit}>Send</Button>}
                        </form>
                    </Card>
                    <img onClick={news} src={Next} className="img-next-previous" />
                </div>

            </div>
        </>
    );
};

export default Comics;