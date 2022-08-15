import { CATEGORIES } from '../../data/categories'
import { SELECT_CATEGORY } from "../actions/categories.action"

const initialState = {
    categories: CATEGORIES,
    selected: null
}

export default CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            var IndexCategoria = state.categories.findIndex(c => c.id_category === action.id_category);
            
            if (IndexCategoria === -1) return state;

            return {...state, selected: state.categories[IndexCategoria]};
        default:
            return state;
    }
};
