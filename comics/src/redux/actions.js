import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = (randomNum) => {
    return dispatch => {
        dispatch(fetchDataRequest());
        axios
            .get(`http://localhost:5000/comic/${randomNum}`)
            .then(response => {
                console.log({ response })
                const data = response.data;
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchDataFailure(errorMsg));
            });
    };
};

export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    };
};

export const fetchDataSuccess = data => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    };
};

export const fetchDataFailure = error => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    };
};