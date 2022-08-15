import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

//redux
import { useSelector, useDispatch } from 'react-redux';
//actions
import { filteredArticle, selectArticle } from '../store/actions/article.actions';

import { ARTICLES } from '../data/articles'
import ArticleItem from '../components/ArticleItem';

export default function CategoryArticleScreen({navigation, route}) {

    // const articles = ARTICLES.filter(article => article.categoryID === route.params.categoryID)
    
    //Redux
    const dispatch = useDispatch()
    const categoryArticle = useSelector(state => state.articles.filteredArticle)
    const category = useSelector(store => store.categories.selected)

    useEffect(() => {
        dispatch(filteredArticle(category.id_category))
    },[])

    const handleSelected = (item) => {
        dispatch(selectArticle(item.id))
        navigation.navigate('Detail',{
            article: item
        });
    }

    const renderItemArticle = ({item}) => (
        <ArticleItem item={item} onSelected={handleSelected}/>
    )
    
    return(
        <FlatList data={categoryArticle} keyExtractor= {item => item.id} renderItem={renderItemArticle}/>
    )
        
}