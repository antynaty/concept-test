const initState = {
  page: 1,
  nextPage: null,
  prevPage: null,
}

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        page: state.page + action.page
      };
    case 'DECREMENT':
      return {
        ...state,
        page: state.page - action.page
      };
    case 'PREV_PAGE':
      return {
        ...state,
        prevPage: action.page
      };
    case 'NEXT_PAGE':
      return {
        ...state,
        nextPage: action.page
      };
    default:
      return state;
  }
}

export default pageReducer;