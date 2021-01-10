import React,{useState} from "react"
import {View, Text, Image, FlatList, Alert, StyleSheet} from "react-native"
import uuid from "react-uuid"

import Header from '../ components/Header'
import ListItem from '../components/ListItem'
import AddItem from '../components/AddItem'

// localhost
// 10.0.2.2:8081
const ShoppingCart = () => {
    const [items,setItems] = useState([
        {id:uuid(),text:'Milk'},
        {id:uuid(),text:'Eggs'},
        {id:uuid(),text:'Bead'},
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id)
        })
    }

    const addItem = (text) => {
        if(!text){
            Alert.alert('Error','Please Enter an item',[
                {text:'Ok', onPress: () => console.log("OK Pressed")}
            ],{ cancelable: true })
        }else{
            setItems(prevItems => {
                return [{id:uuid(),text},...prevItems]
            })
        }
    }

    return(
        <View style={styles.container}>
            <Header title='Shopping List'/>
            <AddItem addItem={addItem}/>
            <FlatList
                data={items}
                renderItem={
                    ({item}) => <ListItem item={item} deleteItem={deleteItem}/>
                }
            />
            {/* <Text style={styles.text}>Hello World</Text> */}
            {/* <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // paddingTop:60,
    }
    // container:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center',
    // },    
    // text:{
    //     color:'darkslateblue',
    //     fontSize:30,
    // },
    // img:{
    //     width:100,
    //     height:100,
    //     borderRadius:100/2,
    // },
})

export default ShoppingCart