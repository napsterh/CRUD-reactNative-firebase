import React, {useEffect} from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import firebase from '../database/firebase';

const UsersDetailsScreen = (props) => {

    const getUserById = async (id) => {
       const dbRef =  firebase.db.collection('users').doc(id);
       const doc = await dbRef.get();
       const user = doc.data();
       console.log(user)
    }
    
    useEffect(() => {
        getUserById(props.route.params.userId)
    })

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    }


    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Nombre de usuario"
                    onChangeText={(value) => handleChangeText('name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Correo de usuario"
                    onChangeText={(value) => handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Teléfono de usuario"
                    onChangeText={(value) => handleChangeText('phone', value)}
                />
            </View>
            <View>
                <Button title="Guardar Usuario" onPress={() => alert('trabajando')}/>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default UsersDetailsScreen