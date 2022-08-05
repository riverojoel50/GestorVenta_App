import react from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

export default ArticleItem = ({item, onSelected}) => {
    return(
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.articleItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.price}</Text>
                    <Text style={styles.details}>{item.amount}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    articleItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#CCC'
    },
    title: {
        fontSize: 20,
        fontFamily: 'BitterBold'
    },
    details:{
        fontSize: 18,
    }
});