import React from 'react'
import { Input } from 'antd';
const { Search } = Input;

const SearchBar = ({ handleSearch }) => {
    return (

        <div style={{ margin: "25px", display: "flex", justifyContent: "center", gap: "10px" }}>
            <Search
                placeholder="input search text"
                allowClear
                onSearch={(value) => handleSearch(value)}
                style={{
                    width: 200,
                }}
            />
        </div>
    )
}

export default SearchBar
