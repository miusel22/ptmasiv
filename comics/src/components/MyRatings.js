/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';


const MyRatings = () => {


    const ratings = useSelector(state => state.array);
    console.log({ ratings })

    return (
        <div>
            <h1>Hola</h1>
        </div>
    );
};

export default MyRatings;