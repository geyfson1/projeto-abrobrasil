import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

    img: {
        width: 70,
        height: 70,
    },

    img2: {
        width: '100%',
        height: 250,
        position: 'absolute',
        top: 0
    },

    textinput: {
        height: 50,
        width: "90%",
        padding: 10,
        backgroundColor: "#fff",
        borderBottomWidth: 2,
        borderRadius: 2,
        borderColor: 'black',
        color: 'black'
    },

    prodContainer: {
        margin: 20,
        textAlign: 'center',
        flexDirection: 'row',
        flexWrap: "wrap",
    },

    botao2: {
        width: '90%',
        height: 50,
        borderRadius: 2,
        borderColor: '#00a895',
        borderWidth: 2,
        margin: 20,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    botao3: {
        width: '90%',
        height: 70,
        borderRadius: 2,
        borderColor: '#00a895',
        borderWidth: 2,
        margin: 20,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    botao4: {
        width: '35%',
        height: 50,
        borderRadius: 2,
        borderColor: '#00a895',
        borderWidth: 2,
        margin: 20,
        flexDirection: 'row',
        flexWrap: "wrap",
    },
})