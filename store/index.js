import { createStore, combineReducers} from 'redux'
import ArticleReducer from './reducers/article.reducer'

//reducers
import CategoryReducer from './reducers/category.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    articles: ArticleReducer
})


export default createStore(RootReducer)
