import MealItem from "../components/MealItem"
import { MEALS } from "../data/dummy-data"
import { FlatList, StyleSheet, Text, View } from "react-native"

export default function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData) {
        return (
            <MealItem item={itemData.item}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})