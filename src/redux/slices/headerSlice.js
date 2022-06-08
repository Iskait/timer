import { createSlice } from "@reduxjs/toolkit";

const headerSlcie = createSlice({
    name: 'header',
    initialState: 'STOPWATCH',
    reducers: {
        stopWatch: (state) => state = 'STOPWATCH',
        timer: (state) => state = 'TIMER',
    }
})


export const headerSelector = (state) => state.header;

export const { stopWatch, timer } = headerSlcie.actions;

export default headerSlcie.reducer;