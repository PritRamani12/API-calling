

const initialState = {
    data: [],
    editObject: {
        firstName: "",
        lastName: "",
        country: "",
        language: "",
        vehicle: []
    }
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_SUBMIT":
            return {
                ...state,
                data: action.payload
            }
        case "USER_DELETE":
            const filterData = state.data?.filter((ele, index) => index !== action.payload)
            return {
                ...state,
                data: [...filterData]
            }
        case "USER_EDIT":
            const findData = state.data?.find((ele, index) => index === action.payload)
            return {
                ...state,
                editObject: findData
            }
        default:
            break;
    }
}

export default Reducer
