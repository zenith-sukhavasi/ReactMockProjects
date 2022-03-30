import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
    name: 'user',
    initialState: {users:[],
    user: {}
    },
    reducers: {
        addUser(state,action){
            console.log(action.payload)
            const {displayName,uid,email,photoURL} = action.payload
            const values={displayName,uid,email,photoURL}
            console.log('val',values)
            console.log("dis name",displayName,uid,email,photoURL)
            console.log({...action.payload})
            state.user = {...{displayName,uid,email,photoURL}}
            state.user.isLoggedIn=true
            //state.user.displayName =displayName
        },
        deleteUser(state,action){
            state.user={}
        },
        modifyUser(state, action) {
            state.user = { ...state.user, ...action.payload }
          },
    }
});

export const { modifyUser,addUser,deleteUser } = users.actions

export default users.reducer