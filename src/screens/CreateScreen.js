import React, {useContext} from 'react'
import {StyleSheet, TextInput, Button} from 'react-native'
import {Context} from "../context/BlogContext"
import BlogPostForum from '../components/BlogPostForum'


const CreateScreen = ({navigation})=> {
    const {addBlogPost} = useContext(Context)
    return (
    <BlogPostForum onSubmit={
        (title, content)=>addBlogPost(title, content, ()=>navigation.navigate("Index"))
    }/>)
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
})

export default CreateScreen