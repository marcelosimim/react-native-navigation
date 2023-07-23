import { Pressable, View, Text, StyleSheet, Platform } from 'react-native'

export default function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.10,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8
    },
    button: {
        flex: 1
    },  
    buttonPressed: {
        opacity: 0.5
    }, 
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})