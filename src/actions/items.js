
import C from '../constants'

export function itemsHasErrored(bool) {
    return {
        type: C.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: C.ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchSuccess(items) {
    return {
        type: C.ITEMS_FETCH_SUCCESS,
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}