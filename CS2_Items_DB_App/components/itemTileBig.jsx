import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ItemQualityBar from "./ItemQualityBar";
const ItemTile = ({itemName, itemImage}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: itemImage }} style={styles.itemImage} />
            <Text style={styles.itemName}>{itemName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15141F',
        width: 145,
        height: 130,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 8
    },
    itemName: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: "regular",
        textAlign: "center"
    },
    itemImage: {
        width: 110,
        height: 85,
    }
});
export default ItemTile;
