import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Input } from 'antd';
// import { Card } from 'antd';
const { Meta } = Card;
const { Search } = Input;



const ApiData = () => {
    const [apiData, setApiData] = useState([])
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState("us");

    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&q=${search}&category=business&apiKey=4ed651ea38544fafb64bab4c6f0c9671`


    useEffect(() => {
        getDataAxios()
        // getApidata()
    }, [search, country])

    // const getApidata = async () => {
    //         const response = await fetch(URL).then((res) => res.json());
    //         console.log(response);
    //       };

    const getDataAxios = async () => {
        const response = await axios.get(URL).then((res) => res)
        // console.log(response);
        setApiData(response.data.articles)
    }

    const handleSearch = (value) => {
        setSearch(value)
    }

    const handleCountryChange = (event) => {
        // console.log("country-change", value);
        setCountry(event.target.value)
    }
    return (
        <>
            <div style={{ margin: "25px", display: "flex", justifyContent: "center", gap: "10px" }}>
                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={(value) => handleSearch(value)}
                    style={{
                        width: 200,
                    }}
                />

                <select name="cars" id="cars" value={country} onChange={(event) => handleCountryChange(event)}>
                    <option value="ca">Canada</option>
                    <option value="au">Austrelia</option>
                    <option value="us">Usa</option>
                    <option value="in">India</option>
                    <option value="it">Itly</option>
                    <option value="sa">South Affrica</option>
                    <option value="pk">Pakistan</option>
                    <option value="de">Delmark</option>
                    <option value="br">Brazil</option>
                    <option value="ar">Armania</option>
                    <option value="ru">Russia</option>
                </select>
            </div>

            <div>

            </div>

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
        </>
    )
}

export default ApiData
