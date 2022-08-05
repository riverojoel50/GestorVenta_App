import React from 'react';
import { FlatList, Text } from 'react-native';
import GridItem from '../components/GridItem';
import CATEGORIES from '../data/categories'
import { ARTICLES } from '../data/articles'
import ArticleItem from '../components/ArticleItem';

export default function CategoryArticleScreen({navigation, route}) {
    const articles = ARTICLES.filter(article => article.categoryID === route.params.categoryID)

    const handleSelected = (item) => {
        navigation.navigate('Detail',{
            article: item
        });
    }

    const renderItemArticle = ({item}) => (
        <ArticleItem item={item} onSelected={handleSelected}/>
    )
    
    return(
        <FlatList data={articles} keyExtractor= {item => item.id} renderItem={renderItemArticle}/>
    )
        
}