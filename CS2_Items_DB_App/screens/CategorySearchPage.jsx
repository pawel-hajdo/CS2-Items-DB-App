import {ScrollView, StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../styles/globalStyles";
import {useEffect, useState} from "react";
import BoxTile from "../components/boxTile";
import {
    getAgentsFromApi,
    getCollectionsFromApi,
    getCratesFromApi,
    getGraffitiFromApi,
    getMusicKitsFromApi
} from "../api/SkinsApiManager";

const CategorySearchPage = ({ route, navigation }) => {
    const {category} = route.params;
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        switch (category) {
            case "Cases":
                getCratesFromApi().then(data => {
                    const filteredData = data.filter(item => item.type === "Case");
                    setCategoryData(filteredData);
                });
                break;
            case "Collections":
                getCollectionsFromApi().then(setCategoryData);
                break;
            case "Agents":
                getAgentsFromApi().then(setCategoryData);
                break;
            case "Sticker Capsules":
                getCratesFromApi().then(data => {
                    const filteredData = data.filter(item => item.type === "Sticker Capsule");
                    setCategoryData(filteredData);
                });
                break;
            case "Graffiti":
                getGraffitiFromApi().then(setCategoryData);
                break;
            case "Music kits":
                getCratesFromApi().then(data => {
                    const filteredData = data.filter(item => item.type === "Music Kit Box");
                    setCategoryData(filteredData);
                });
                break;
        }

    }, []);

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.headlineText, {paddingTop: 8}]}>{category}</Text>
            <ScrollView>
                <View style={styles.boxContainer}>
                    {categoryData.map((item) => (
                        <BoxTile key={item.id} boxName={item.name} boxImage={item.image} navigation={navigation}/>
                    ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    }
})
export default CategorySearchPage;