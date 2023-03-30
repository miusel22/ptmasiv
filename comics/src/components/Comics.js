/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Col, Row } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchData, addElement } from '../redux/actions';
import { useEffect } from 'react';
import { Button, message, Space } from 'antd';

const Comics = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [valorSeleccionado, setValorSeleccionado] = useState(null);
    const [randomComicNum, setRandomComicNum] = useState(null);
    const [comicsData, setComicsData] = useState([]);
    const [valoresIniciales, setValoresIniciales] = useState({
        estrellas: "",
    });


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
        setValoresIniciales({ estrellas: "" })
    }

    const data = useSelector(state => state.data);

    const comics = useSelector(state => state.array);

    const manejarSubmit = async (e) => {
        e.preventDefault();
        const newComicData = {
            ...data,
            rating: valorSeleccionado
        };
        setComicsData([...comicsData, newComicData]);
        dispatch(addElement([...comics, newComicData]));
        setValoresIniciales({ estrellas: "" })
        setValorSeleccionado(null);
        newRandomComicNum();
        success();
    };

    const manejarCambio = (e) => {
        setValorSeleccionado(e.target.value);
        setValoresIniciales({
            ...valoresIniciales,
            [e.target.name]: e.target.value,
        });
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
                            title={data.title} bordered={false}>
                            <form onSubmit={manejarSubmit}>
                                <p className="clasificacion">
                                    <input
                                        id="radio1"
                                        type="radio"
                                        name="estrellas"
                                        value="5"
                                        onChange={manejarCambio}
                                        checked={valoresIniciales.estrellas === "5"}
                                    />
                                    <label htmlFor="radio1">★</label>
                                    <input
                                        id="radio2"
                                        type="radio"
                                        name="estrellas"
                                        value="4"
                                        onChange={manejarCambio}
                                        checked={valoresIniciales.estrellas === "4"}
                                    />
                                    <label htmlFor="radio2">★</label>
                                    <input
                                        id="radio3"
                                        type="radio"
                                        name="estrellas"
                                        value="3"
                                        onChange={manejarCambio}
                                        checked={valoresIniciales.estrellas === "3"}
                                    />
                                    <label htmlFor="radio3">★</label>
                                    <input
                                        id="radio4"
                                        type="radio"
                                        name="estrellas"
                                        value="2"
                                        onChange={manejarCambio}
                                        checked={valoresIniciales.estrellas === "2"}
                                    />
                                    <label htmlFor="radio4">★</label>
                                    <input
                                        id="radio5"
                                        type="radio"
                                        name="estrellas"
                                        value="1"
                                        onChange={manejarCambio}
                                        checked={valoresIniciales.estrellas === "1"}
                                    />
                                    <label htmlFor="radio5">★</label>
                                </p>
                                {valorSeleccionado && <button type="submit">Send</button>}
                            </form>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    );
};

export default Comics;