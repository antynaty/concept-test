import axios from 'axios';

export const searchChar = idCharSelected => {
  return {
    type: 'SEARCH',
    idCharSelected
  }
};
/*  PAGE NEXT DECREMENT - INCREMENT  */
export const increment = page => {
  return {
    type: 'INCREMENT',
    page
  }
};
export const decrement = page => {
  return {
    type: 'DECREMENT',
    page
  }
};
/*  PAGE NEXT DECREMENT - INCREMENT  */
/*  PAGE NEXT PREV  */
export const nextPage = page => {
  return {
    type: 'NEXT_PAGE',
    page
  }
};
export const prevPage = page => {
  return {
    type: 'PREV_PAGE',
    page
  }
};
/*  PAGE NEXT DECREMENT - INCREMENT  */
/*   FETCH CHARACTERS   */
export const fetchCharsRequest = () => {
  return {
    type: 'FETCH_CHARS_REQUEST'
  }
}
export const fetchCharsSuccess = chars => {
  return {
    type: 'FETCH_CHARS_SUCCESS',
    chars
  }
}
export const fetchCharsFailure = error => {
  return {
    type: 'FETCH_CHARS_FAILURE',
    payload: error
  }
}
/*    FETCH CHAR SELECTED */
export const fetchCharSelectedRequest = () => {
  return {
    type: 'FETCH_CHAR_SELECTED_REQUEST',
  }
}
export const fetchCharSelectedSuccess = charSelected => {
  return {
    type: 'FETCH_CHAR_SELECTED_SUCCESS',
    charSelected
  }
}
export const fetchCharSelectedFailure = error => {
  return {
    type: 'FETCH_CHAR_SELECTED_FAILURE',
    payload: error
  }
} 

export const fetchChars = page => {
  return async function (dispatch) {
    dispatch(fetchCharsRequest());
    try { 
      let response = await axios.get( process.env.REACT_APP_LOCAL + `chars/all?page=${page}&limit=10`); 
      dispatch(fetchCharsSuccess(response.data.resultUsers));
      if (!response.data.next){
        dispatch(nextPage(null))
      } else if (!response.data.previous){
        dispatch(prevPage(null));
      }
      dispatch(nextPage(response.data.next.page));
      dispatch(prevPage(response.data.previous.page));
    } catch (error) {
      dispatch(fetchCharsFailure('No se pudo encontrar los datos')) 
    }
  }
}
export const fetchCharSelected = charId => {
  return async function (dispatch) {
    dispatch(fetchCharSelectedRequest());
    try { 
      let response = await axios.get( process.env.REACT_APP_LOCAL + `chars/${charId}`); 
      dispatch(fetchCharSelectedSuccess(response.data)); 
    } catch (error) {
      dispatch(fetchCharsFailure('No se pudo encontrar el personaje')) 
    }
  }
}
