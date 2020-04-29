// 引入createStore

import {createStore} from 'redux'
import reducer from '../reducer'

// export default (prevState) => createStore(reducer, prevState)

const initialState = {
    menuName: ''
}
const configureStore = () => createStore(reducer, initialState);

export default configureStore;