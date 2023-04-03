/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import React from 'react';
import { List, Card, Rate, Divider } from 'antd';

const MyRatings = () => {

    const ratings = useSelector(state => state.array);
    console.log({ ratings })

    return (
        <>

            <div className='container'>
                <div className='center-ratings'>
                    <Divider>
                        <span className="title">My ratings</span> </Divider>
                    <div className='container-ratings'>
                    <List
                        locale={{ emptyText: 'No ratings' }}
                        grid={{ gutter: 8, column: 1 }}
                        dataSource={ratings}
                        renderItem={(item) => (
                            <List.Item>
                                <Card
                                    className="centered-card"
                                    cover={<img src={item.img} />}
                                    title={item.title}
                                    bordered={false}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Rate disabled value={item.rating} />
                                </Card>
                            </List.Item>
                        )}
                    />
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyRatings;