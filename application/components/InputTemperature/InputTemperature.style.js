import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        alignSelf: "stretch",
        position: 'relative',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 20,
        padding: 10
    },
    unit: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingRight: 10
    }
})