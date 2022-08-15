import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SelectCategory } from '../store/actions/categories.action'

import GridItem from '../components/GridItem';


export default function CategoriesScreen({navigation}) {
    const categories = useSelector(store => store.categories.categories) //busca en store/index/rootreducer
    const dispatch = useDispatch()

    const handleSelectedCategory = (item) => {
        dispatch(SelectCategory(item.id_category))
        navigation.navigate('ArticleCategory', {
            name: item.name,
        });
    }

    const renderGridItem = ({item}) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
        // <Text>{item.id}</Text>
    )

    return(
        <FlatList
            data={categories}
            keyExtractor = {item => item.id_category}
            renderItem = {renderGridItem}
            numColumns={2}
        />
        
    )
}