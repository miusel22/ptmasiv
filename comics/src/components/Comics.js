/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions';
import { useEffect } from 'react';

const Comics = () => {
    
  const dispatch = useDispatch();
  const randomComicNum = Math.floor(Math.random() * 1000) + 1;
  console.log(randomComicNum);

  useEffect(() => {
    dispatch(fetchData(randomComicNum));
  }, [dispatch]);

  const data = useSelector(state => state.data);
  console.log({data});

  return (
    <div>
    <h1>Hola</h1>
    </div>
  );
};

export default Comics;