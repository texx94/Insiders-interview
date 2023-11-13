import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface record {
    athletes: object
}
interface dataState {
    messages: record[];
}

const initialState: dataState = {
    messages: []
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<record>) => {
            state.messages = [ ...state.messages, action.payload]
        }
    },
});

export const { addMessage } = dataSlice.actions;

export default dataSlice.reducer;