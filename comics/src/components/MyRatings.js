/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import React from 'react';
import { List, Card, Col, Row } from 'antd';

const MyRatings = () => {


    const ratings = useSelector(state => state.array);
    console.log({ ratings })

    return (
        <div className='container'>
            <List
                locale={{ emptyText: 'No ratings' }}
                grid={{ gutter: 16, column: 3 }}
                dataSource={ratings}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            className="centered-card"
                            cover={<img src={item.img} />}
                            title={item.title}
                            bordered={false}
                        />
                    </List.Item>
                )}
            />

        </div>
    );
};

export default MyRatings;