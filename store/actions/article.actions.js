export const SELECT_ARTICLE = "SELECT_ARTICLE"
export const FILTERED_ARTICLE = "FILTERED_ARTICLE"


export const selectArticle = (id) => ({
    type: SELECT_ARTICLE,
    id_article: id
})

export const filteredArticle = (id) => ({
    type: FILTERED_ARTICLE,
    id_category: id
})