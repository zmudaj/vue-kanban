import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

// register all data here
let state = {
    board: [],
    activeBoard: {},
    error: {}
}

let handleError = (err)=>{
    state.error = err
}

export default {
    // all data lives in the state
    state,
    // actions are responsible for managing all async requests
    // all CRUD commands go here
    actions:{
        getBoards(){
            api.get('boards').then(res => {
                state.boards = res.data.data
            }).catch(handleError)
        },
        getBoard(id){
            api('board/' + id)
            .then(res =>{
                state.activeBoard = res.data.data
            })
            .catch(handleError)
        }
    }

}