import { createSlice } from "@reduxjs/toolkit";

const timesetterSlice = createSlice({
    name: 'timesetter',
    initialState: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        start: false,
    },
    reducers: {
        toggleStart: (state) => {
            state.hours = 0;
            state.minutes = 0;
            state.seconds = 0;
            state.start = !state.start;
        },
        setHours: (state, action) => {
            state.hours = action.payload.hours;
        },
        setMinutes: (state, action) => {
            state.minutes = action.payload.minutes;
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload.seconds;
        }
    },
})

export const { toggleStart, setHours, setMinutes, setSeconds } = timesetterSlice.actions;

export default timesetterSlice.reducer;