import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    id: number;
    uid: string
    card_id : string;
    firstname_th : string;
    lastname_th : string;
    email : string;
    token: string,
    role : string,
}

export interface UserState {
    auth: boolean,
    data: UserType
}

const initialState: UserState = {
    auth: false,
    data: { id : 0 , uid : ""  , card_id : "", firstname_th : "" , lastname_th : "" , email : "" ,  token: "" , role : "" }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserType>) => {
            state.data = action.payload
        },
        deleteUser: (state) => {
            state.data = { id : 0 , uid : ""  , card_id : "", firstname_th : "" , lastname_th : "" , email : "" ,  token: "" , role : "" }
        },
        setLoginSuccess: (state) => {
            state.auth = true
        },
        setLoginfail: (state) => {
            state.auth = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setLoginSuccess, setLoginfail } = userSlice.actions

export default userSlice.reducer