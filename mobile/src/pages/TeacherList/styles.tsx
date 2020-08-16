import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -70,
        padding: 16,
    },
    searchForm: {
        marginBottom: 8,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    submitButton: {
        flexDirection: 'row',
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }

})

export default styles;