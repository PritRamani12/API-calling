import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function CardData({apiData}) {
    return (
        <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
            {apiData.map((item, index) => (
                <Card
                    key={index}
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src={item.urlToImage} />}
                >
                    <Meta title={item.title} description={item.description} />
                </Card>
            ))}

        </div>
    )
}

export default CardData
