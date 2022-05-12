let initState = {
    flag: false
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        // case 'FLIP': return true
        case 'FLIP': {
            state.flag = !state.flag;
            // console.log("flag--> "+state.flag);
            return { ...state }
        }
        default: return state
    }

}

export default reducer;