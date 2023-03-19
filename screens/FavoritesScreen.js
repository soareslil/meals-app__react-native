import { StyleSheet, View, Text } from "react-native";

function FavoritesScreen(){
    return <>
        <View style={styles.root}> 
            <Text>Favorite Screen</Text>
        </View>
    </>
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    root: {
        flex:1
    }
})