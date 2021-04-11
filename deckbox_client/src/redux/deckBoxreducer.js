export default(state = [], action) => {
    switch(action.type) {
        case "SET_USER":
            return action.payload.deckBoxes || state
        case "ADD_DECK_BOX":
            return [...state, action.payload]
        case "REMOVE_DECK_BOX":
            return state.filter(item => item !== action.payload)
        default:
            return state
    }
}