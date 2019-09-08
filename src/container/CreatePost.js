import { connect } from 'react-redux'
import {createPost} from '../action'
import Newpost from '../componets/NewPost'

const mapDispatchToProps = dispatch => {
    return {
        onAddPost : post => {
            dispatch(createPost(post))
        }
    }
}

export default connect(null, mapDispatchToProps)(Newpost)