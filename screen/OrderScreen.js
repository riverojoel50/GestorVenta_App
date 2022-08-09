import { FlatList } from "react-native"

export default OrderScreen = () => {
    const renderCardItem = (itemData) => (
        <ItemOrder
            item = {itemData.item}
            onDelete = {onHandlerDeleteItem}

        />
    )
    
    return (
        <View>
             <FlatList
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCardItem}
                numColumns={1}
             />
        </View>
    )
}
