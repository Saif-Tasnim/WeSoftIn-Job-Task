import { createSlice } from '@reduxjs/toolkit';


export const dataSlicer = createSlice({
    name: "storedData",
    initialState: {
        value: [],
        singleValue: null,
    },
    reducers: {
        addUser: (state, { payload }) => {
            state.value.push(payload);

        },

        findUser: (state, { payload }) => {
            // console.log(state.value?.[0]);
            const find = state.value[0].find(st => st.id == payload);
            // return { ...state, singleValue: find };
            state.singleValue = find;
        }

    }
})

export const { addUser, findUser } = dataSlicer.actions;

export default dataSlicer.reducer;











