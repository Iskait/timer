import { createSlice } from "@reduxjs/toolkit";

const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState: {
        time: 0,
        timerOn: false,
    },
    reducers: {
        resetTime: (state) => {
            state.time = 0
        },
        tickTime: (state) => {
            state.time++
        },
        toggleTimer: (state) => {
            state.timerOn = !state.timerOn
        },
    },
})

export const { resetTime, tickTime, toggleTimer } = stopwatchSlice.actions;

export default stopwatchSlice.reducer;