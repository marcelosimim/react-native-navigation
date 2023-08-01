import { Image, Pressable, Text, View, StyleSheet, Platform } from "react-native"

export default function MealItem({ item }) {
    return (
        <View style={styles.mealItem}>
            <Pressable>
                <View>
                    <Image source={{ uri: item.imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{item.duration}m</Text>
                    <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        backgroundColor: 'white',
        elevation: 1,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})