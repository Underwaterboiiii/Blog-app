import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {Feather} from '@expo/vector-icons'

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost, getBlogPosts}=useContext(Context)

    useEffect(()=>{
        getBlogPosts()

        navigation.addListener('focus', ()=> {
            getBlogPosts()
        })
    }, [])

    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={(blog)=>blog.title}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Show', {id: item.id})}>
                    <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                    <Feather style ={styles.icon} name="trash" />
                    </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen