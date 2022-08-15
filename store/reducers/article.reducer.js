import { ARTICLES } from '../../data/articles'

import { SELECT_ARTICLE, FILTERED_ARTICLE} from '../actions/article.actions'


const initialState = {
    articles: ARTICLES,
    filteredArticle: [],
    selected: null
}

export default ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ARTICLE: 
            return{...state, selected: state.articles.find(article => article.id === action.id_article)}
        case FILTERED_ARTICLE:
            return {...state, filteredArticle: state.articles.filter(article => article.id_category === action.id_category)}
        default:
            return state
    }
}