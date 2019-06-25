const defaultState = {
    username:'',userid:'',states:1
}

const LoginReducer = (state = defaultState,action) => {
    const { type,payload } = action;
    switch(type){
        case "ADD_USER_NAME":
        return { ...state,productList: payload}
        default:
        return state;
    }
}

export default LoginReducer;