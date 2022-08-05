import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default  ArticleDetailScreen = ({ route }) => {
    const article = route.params.article;
    
    return (
        <View style= {styles.container}>
            <Text style={styles.title}>{article.name}</Text>
            <Text style={styles.title}>{article.price}</Text>
            <Text style={styles.title}>{article.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: '',
        marginBottom: 10,
    }
})