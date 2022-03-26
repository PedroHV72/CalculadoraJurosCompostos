import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
    },
    titleText:{
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
    },
    result: {
        alignItems: "center",
        backgroundColor: "#ddd",
        paddingBottom: 30,
    },
    resultText: {
        fontSize: 24,
        color: "#000",
        fontWeight: "bold",
    },
    formContext: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#ddd',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 50,
        elevation: 5
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 20,
        padding: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold", 
        padding: 5, 
    },
    textInput: {
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "#FFF",
        color: "#000",
        borderRadius: 6,
        margin: 5,
        padding: 5,
    },
    button: {
        margin: 10,
        backgroundColor: "green",
        alignItems: "center",
        padding: 10,
        borderRadius: 40,
    },
    buttonText: {
        fontSize: 24,
        color: "#DEEBF7",
    }

});

export default styles;