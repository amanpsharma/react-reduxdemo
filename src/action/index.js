import uuidv4 from 'uuid/v4'
import {ADD_POST, DELETE_POST} from './type'

export const createPost = ({title, mobile, body}) =>({
    type:ADD_POST,
    payload: {
        id: uuidv4(),
        title,
        mobile,
        body
    }
})

export const deletePost = id =>({
    type: DELETE_POST,
    payload:{
        id
    }
})