import { StyleSheet } from "react-native"
export const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    botao: {
        position: "absolute",
        left: 20,
    },

    img: {
        width: 120,
        height: 120,
    },

    img2: {
        width: '100%',
        height: 250,
        position: 'absolute',
        top: 0
    },

    textinput: {
        width: 200,
        height: 35,
        borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        right: 10,
        top: 10,
        borderRadius: 100,
        backgroundColor: 'white'
    },

    prodContainer: {
        margin: 20,
        textAlign: 'center'
    },

    imgEstrela: {
        width: 115,
        height: 30 
    }
})