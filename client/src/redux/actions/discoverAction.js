import { GLOBALTYPES } from './globalTypes';
import { getDataAPI } from '../../utils/fetchData';

export const DISCOVER_TYPES = {
    LOADING: 'LOADING_DISCOVER',
    GET_POSTS: 'GET_DISCOVER_POSTS',
    UPDATE_POSTS: 'UPDATE_DISCOVER_POSTS',

}

export const getDiscoverPosts = (token) => async (dispatch) => {
    try {
        dispatch({type: DISCOVER_TYPES.LOADING, payload: true });

        const res = await getDataAPI(`post_discover`, token);
        
        dispatch({ type: DISCOVER_TYPES.GET_POSTS, payload: res.data });

        dispatch({type: DISCOVER_TYPES.LOADING, payload: false });

    } catch (err) {
        dispatch({type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg} });
    }
} 


