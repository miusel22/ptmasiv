/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';


const Favorites = () => {


    const Favorites = useSelector(state => state.array);
    console.log({ Favorites })

    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
};

export default Favorites;