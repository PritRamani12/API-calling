import React, { useEffect, useState } from 'react'
import CardData from './CardData'
import SearchBar from './SearchBar'
import axios from 'axios'


const Technology = ({ category }) => {
    const [apiData, setApiData] = useState([])
    const [search, setSearch] = useState('')
    const URL = `https://newsapi.org/v2/top-headlines?country=us&q=${search}&category=${category}&apiKey=4ed651ea38544fafb64bab4c6f0c9671`

    useEffect(() => {
        getDataAxios()
        // getApidata()
    }, [search])
    const getDataAxios = async () => {
        const response = await axios.get(URL).then((res) => res)
        // console.log(response);
        setApiData(response.data.articles)
    }

    const handleSearch = (value) => {
        setSearch(value)
    }
    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <CardData apiData={apiData} />
        </div>
    )
}

export default Technology
