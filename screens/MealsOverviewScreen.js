import { MEALS } from "../data/dummy-data"
import { StyleSheet, Text, View } from "react-native"

export default function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId

    return (
        <View style={styles.container}>
            <Text>Meats Overview Screen - {catId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})