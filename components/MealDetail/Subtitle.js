import { Text, View, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    </>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        margin: 4,
        textAlign: "center",
      },
      subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginBottom: 10,
      },
});
