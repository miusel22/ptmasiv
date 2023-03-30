/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchData, addElement } from '../redux/actions';
import { useEffect } from 'react';

const Comics = () => {
    const [valorSeleccionado, setValorSeleccionado] = useState(null);
    const [randomComicNum, setRandomComicNum] = useState(null);
    const [comicsData, setComicsData] = useState([]);
    const [newxrandomComicNum, setNewRandomComicNum] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        newRandomComicNum();
    }, []);

    const newRandomComicNum = () => {
        setRandomComicNum(Math.floor(Math.random() * 1000) + 1);
    };

    const news = (e) => {
        console.log("jola");
        e.preventDefault();
        setNewRandomComicNum(Math.floor(Math.random() * 1000) + 1);
        dispatch(fetchData(newxrandomComicNum));
    }

    const data = useSelector(state => state.data);
    
    const comics = useSelector(state => state.array);

    console.log({comics});

    useEffect(() => {
        if (randomComicNum && data) {
            dispatch(fetchData(randomComicNum));
        }
    }, [randomComicNum]);


    console.log({ data });


    const manejarSubmit = (e) => {
        e.preventDefault();
        setComicsData([...comicsData, {
            ...data,
            retail: valorSeleccionado
        }]);
    };
    useEffect(() => {
        if (comicsData) {
            dispatch(addElement(comicsData));

        }
    }, [comicsData])



    console.log({ comicsData });
    const manejarCambio = (e) => {
        setValorSeleccionado(e.target.value);
    };

    return (
        <div>
            <button onClick={news}>
                Change
            </button>
            <img src={data.img} />
            <form onSubmit={manejarSubmit}>
                <p className="clasificacion">
                    <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                        onChange={manejarCambio}
                    />
                    <label htmlFor="radio1">★</label>
                    <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                        onChange={manejarCambio}
                    />
                    <label htmlFor="radio2">★</label>
                    <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                        onChange={manejarCambio}
                    />
                    <label htmlFor="radio3">★</label>
                    <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                        onChange={manejarCambio}
                    />
                    <label htmlFor="radio4">★</label>
                    <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                        onChange={manejarCambio}
                    />
                    <label htmlFor="radio5">★</label>
                </p>
                {valorSeleccionado && (
                    <button type="submit">Send</button>
                )}
            </form>
        </div>
    );
};

export default Comics;