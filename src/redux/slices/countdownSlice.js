import { createSlice } from "@reduxjs/toolkit";

const countdownSlice = createSlice({
    name: 'countdownSlice',
    initialState: {
        seconds: 0,
        initialSeconds: 0,
        percentage: 100,
        countdownOn: true,
    },
    reducers: {
        togglecountdownOn: (state, action) => {
            if (action.payload) {
                state.countdownOn = action.payload;
            } else {
                state.countdownOn = !state.countdownOn;
            }
        },
        setTimerCount: (state, action) => {
            state.seconds = action.payload.seconds;
            if (state.initialSeconds === 0) {
                state.initialSeconds = state.seconds
            };
        },
        timerRestart: (state) => {
            state.seconds = state.initialSeconds;
        },
        timerTickBack: (state) => {
            state.seconds--;
        },
        timerCancel: (state) => {
            state.initialSeconds = 0;
        },
        setPercentage: (state, action) => {
            state.percentage = ~~action.payload.percentage;
        }
    },
})

export const { 
    togglecountdownOn, 
    setTimerCount, 
    timerRestart, 
    timerTickBack, 
    timerCancel,
    setPercentage 
} = countdownSlice.actions;

export default countdownSlice.reducer;