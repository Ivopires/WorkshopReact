import types, { VisibilityFilters as vf } from "../actions/actionTypes";

const visibilityFilter = (state = vf.SHOW_ACTIVE, action) => {
    switch (action.type) {

        case types.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
};

export default visibilityFilter;
