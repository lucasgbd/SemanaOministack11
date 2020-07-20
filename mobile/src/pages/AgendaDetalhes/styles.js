import { StyleSheet } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    agenda: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

    agendaProperty: {
        fontSize: 14, 
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },

    agendaValue: {
        marginTop: 8,
        fontSize: 15, 
        color: '#737380'
    },

    contatoBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    contatoTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30
    },

    contatoDescription: {
        fontSize: 16,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});