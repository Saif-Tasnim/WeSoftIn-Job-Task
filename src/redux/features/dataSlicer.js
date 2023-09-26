import { createSlice } from '@reduxjs/toolkit';


export const dataSlicer = createSlice({
    name: "storedData",
    initialState: {
        value: [],
    },
    reducers: {
        addUser: (state, { payload }) => {
            state.value.push(payload)
        },
    }
})

export const { addUser } = dataSlicer.actions;

export default dataSlicer.reducer;











