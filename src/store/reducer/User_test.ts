import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    id: number;
    uid: string
    card_id: string;
    firstname_th: string;
    lastname_th: string;
    email: string;
    token: string,
    role: string,
}

export interface UserState {
    auth: boolean,
    data: UserType
}

const initialState: UserState = {
    auth: false,
    data: {
        id: 1,
        uid: "jirayu.co",
        card_id: "1309901343xxx",
        firstname_th: "จิรายุ",
        lastname_th: "เทสเตอร์",
        email: "test@test.com",
        token: "",
        role: "admin"
    }
}

export const userSliceTest = createSlice({
    name: 'user_test',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserType>) => {
            state.data = action.payload
        },
        deleteUser: (state) => {
            state.data = { id: 0, uid: "", card_id: "", firstname_th: "", lastname_th: "", email: "", token: "", role: "" }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser } = userSliceTest.actions

export default userSliceTest.reducer