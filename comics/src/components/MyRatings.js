/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import React from 'react';
import { List, Card } from 'antd';
import { Rate } from 'antd';

const MyRatings = () => {

    const ratings = useSelector(state => state.array);
    console.log({ ratings })

    return (
        <div className='container'>
            <List
                locale={{ emptyText: 'No ratings' }}
                grid={{ gutter: 16, column: 1 }}
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
                            <Rate  disabled value={item.rating} />
                        </Card>
                    </List.Item>
                )}
            />

        </div>
    );
};

export default MyRatings;