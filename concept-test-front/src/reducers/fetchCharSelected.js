const initState = {
  charSelected:'',
  loading: false,
  error: false
}

const fetchCharSelectedReducer = (state = initState, action) => {
  switch (action.type) { 
    case 'FETCH_CHAR_SELECTED_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CHAR_SELECTED_SUCCESS':
      return {
        ...state,
        loading: false,
        charSelected: action.charSelected
      }
    case 'FETCH_CHAR_SELECTED_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default fetchCharSelectedReducer;