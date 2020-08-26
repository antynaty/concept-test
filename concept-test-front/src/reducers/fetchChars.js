const initState = {
  chars:[],
  loading: false,
  error: false
}

const fetchCharsReducer = (state = initState, action) => {
  switch (action.type) { 
    case 'FETCH_CHARS_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_CHARS_SUCCESS':
      return {
        ...state,
        loading: false,
        chars: action.chars
      }
    case 'FETCH_CHARS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default fetchCharsReducer;