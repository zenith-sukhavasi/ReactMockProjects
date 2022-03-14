import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
    name: 'user',
    initialState: {users:[],
    user: {}
    },
    reducers: {
        modifyUser(state, action) {
            state.user = { ...state.user, ...action.payload }
          },
    }
});

export const { modifyUser } = users.actions

export default users.reducer