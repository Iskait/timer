import { createSlice } from "@reduxjs/toolkit";

const headerSlcie = createSlice({
    name: 'header',
    initialState: window.location.pathname.replace(/\//g, ''),
    reducers: {
        stopWatch: (state) => state = 'timer',
        timer: (state) => state = 'countdown',
    }
})

export const headerSelector = (state) => state.header;

export const { stopWatch, timer } = headerSlcie.actions;

export default headerSlcie.reducer;