
import C from '../constants'

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case C.ITEMS_HAS_ERRORED:
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case C.ITEMS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case C.ITEMS_FETCH_SUCCESS:
            return action.items;

        default:
            return state;
    }
}