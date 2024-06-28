import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import TableData from './TableData'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userSubmit } from './redux/Action'


const Form = () => {
    const [userData, setUserData] = useState([])
    const [editIndex, setEditIndex] = useState('')
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        vehicle: []
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const [tableIndex, settableIndex] = useState("")
    const tableData = useSelector((state) => state?.data) || []
    const editData = useSelector((state) => state?.editObject) || {
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        vehicle: []
    }

    useEffect(() => {
        console.log(params);
        if (params.id) {
            setUserDetails(editData)
            setEditIndex(params.id)
        }
        setUserData([...tableData])
    }, [])


    const handleChange = (event) => {
        setUserDetails({
            ...userDetails, [event.target.name]: event.target.value
        })
    }

    const checkChange = (event) => {
        const vehicle = [...userDetails.vehicle]
        if (event.target.checked) {  
            vehicle.push(event.target.value)
        } else {
            const index = vehicle.indexOf(event.target.value)
            vehicle.splice(index, 1)
        }
        setUserDetails({
            ...userDetails, vehicle: vehicle
        })
    }

    const handleSubmit = () => {
        const array = [...userData]
        if (editIndex !== "") {
            array[editIndex] = userDetails;
            setUserData([...array])
            dispatch(userSubmit([...array]))
            setEditIndex("")
        } else {
            array.push({ ...userDetails })
            dispatch(userSubmit(array))
            setUserData([
                ...array
            ])
        }

        handleReset()
    }

    const handleNavigate = () => {
        navigate("/table")
    }

    const handleReset = () => {
        setUserDetails({
            firstName: "",
            lastName: "",
            country: "",
            language: "",
            vehicle: []
        })
    }
    const handleDelete = (index) => {
        const data = userData.filter((item, i) => index !== i)
        setUserData([
            ...data
        ])
    }

    const handleEdit = (index) => {
        const updateData = userData.find((item, i) => index === i)
        setUserDetails({
            ...updateData
        })
        settableIndex(index)

    }
    return (

        <div>

            <label htmlFor="fname">First Name</label>
            <input
                type="text"
                id="fname"
                name="firstName"
                placeholder="Your name.."
                onChange={(event) => handleChange(event)}
                value={userDetails?.firstName}
            />

            <label htmlFor="lname">Last Name</label>
            <input
                type="text"
                id="lname"
                name="lastName"
                placeholder="Your last name.."
                onChange={(event) => handleChange(event)}
                value={userDetails?.lastName}
            />

            <label htmlFor="country">Country</label>
            <select
                id="country"
                onChange={(event) => handleChange(event)}
                value={userDetails?.country}
                name="country"
            >
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>

            <p>Please select your favorite Web language:</p>
            <input
                type="radio"
                id="html"
                name="language"
                onChange={(event) => handleChange(event)}
                checked={userDetails.language === "HTML"}
                value="HTML"
            />
            <label for="html">HTML</label>
            <br />
            <input
                type="radio"
                id="css"
                name="language"
                onChange={(event) => handleChange(event)}
                checked={userDetails.language === "CSS"}
                value="CSS"
            />
            <label for="css">CSS</label>
            <br />
            <input
                type="radio"
                id="javascript"
                name="language"
                onChange={(event) => handleChange(event)}
                checked={userDetails.language === "JavaScript"}
                value="JavaScript"
            />
            <label for="javascript">JavaScript</label>
            <br />

            <p>Please select your favorite Vehicles:</p>
            <input
                type="checkbox"
                id="vehicle1"
                name="vehicle"
                value="Bike"
                checked={userDetails.vehicle.includes("Bike")}
                onChange={(event) => checkChange(event)}
            />
            <label for="vehicle1"> I have a bike</label>
            <br />
            <input
                type="checkbox"
                id="vehicle2"
                name="vehicle"
                checked={userDetails.vehicle.includes("Car")}
                onChange={(event) => checkChange(event)}
                value="Car"
            />
            <label for="vehicle2"> I have a car</label>
            <br />
            <input
                type="checkbox"
                id="vehicle3"
                name="vehicle"
                checked={userDetails.vehicle.includes("Boat")}
                onChange={(event) => checkChange(event)}
                value="Boat"
            />
            <label for="vehicle3"> I have a boat</label>
            <br />
            <br />

            <button
                type="button"
                onClick={() => handleSubmit()}
            >
                Submit
            </button>
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

export default memo(Form)
