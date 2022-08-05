import React from 'react';
import { FlatList, Text } from 'react-native';
import GridItem from '../components/GridItem';
import { CATEGORIES } from '../data/categories'


export default function CategoriesScreen({navigation}) {
    const handleSelectedCategory = (item) => {
        navigation.navigate('Articles', {
            categoryID: item.id,
            name: item.title,
        });
    }

    const renderGridItem = ({item}) => (
        <GridItem item={item} onSelected={handleSelectedCategory} />
        // <Text>{item.id}</Text>
    )

    return(
        <FlatList
            data={CATEGORIES}
            keyExtractor = {item => item.id}
            renderItem = {renderGridItem}
            numColumns={2}
        />
        
    )
}