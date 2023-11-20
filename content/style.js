import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    teclaBranca:{
        width: '95%',
        height: '14%',
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'black',
        marginLeft: 1,
        borderWidth: 1,
        marginTop: 1,
        marginBottom: 1,
        position: 'relative'
    },

    teclaPreta:{
        width: '60%',
        height: '9%',
        borderRadius: 8,
        backgroundColor: 'black',
        borderColor: 'white',
        marginLeft: 1,
        borderWidth: 1,
        marginRight: '40%',
        position:  'absolute'
    }
});

export default styles;