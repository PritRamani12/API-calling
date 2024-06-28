import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userDelete, userEdit } from './redux/Action';




const TableData = () => {
    // console.log("call-back===>");
    const columns = [
        {
            title: 'firstName',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'lastName',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'country',
            dataIndex: 'country',
            key: 'address',
        },
        {
            title: 'language',
            dataIndex: 'language',
            key: 'language',
        },
        {
            title: 'vehicle',
            dataIndex: 'vehicle',
            key: 'vehicle',

        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: (text, record, index) => (
                <>
                    <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                    <button type="button" style={{ background: "red", margin: 5 }} onClick={() => handleDelete(index)}>Delete</button>
                </>
            )
        },
    ];
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const tableData = useSelector((state) => state?.data) || []


    const handleNavigate = () => {
        navigate("/")
    }

    const handleEdit = (index) => {
        dispatch(userEdit(index))
        navigate(`/edit/${index}`)
    }

    const handleDelete = (index) => {
        dispatch(userDelete(index))

    }

    return (
        <div>
            <Table dataSource={tableData} columns={columns} />
            <button
                type="button"
                onClick={() => handleNavigate()}
                style={{ margin: 5 }}
            >
                Go To Table
            </button>
        </div>
    )
}

export default TableData
