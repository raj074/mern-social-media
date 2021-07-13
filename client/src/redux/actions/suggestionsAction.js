import { GLOBALTYPES } from '../actions/globalTypes';
import { getDataAPI } from '../../utils/fetchData';


export const SUGGEST_TYPES = {
  LOADING: "LOADING_SUGGESTIONS",
  GET_USERS: "GET_USERS_SUGGESTIONS",
};


export const getSuggestions = (token) => async dispatch => {
    try {
        dispatch({type: SUGGEST_TYPES.LOADING, payload: true });

        const res = await getDataAPI(`suggestionsUser`, token);
        
        dispatch({ type: SUGGEST_TYPES.GET_USERS, payload: res.data });

        dispatch({type: SUGGEST_TYPES.LOADING, payload: false });
        
    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg} });
    }
}