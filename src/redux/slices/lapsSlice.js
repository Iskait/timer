import { createSlice, nanoid } from "@reduxjs/toolkit";

const lapsSlice = createSlice({
    name: 'laps',
    initialState: [],
    reducers: {
        setLaps: (state, action) => {
            state.unshift({
                minutes: action.payload.minutes,
                seconds: action.payload.seconds,
                miliseconds: action.payload.miliseconds,
                position: action.payload.position,
                id: nanoid()
            })
        },
        clearLaps: (state) => state = [],
    },
})

export const { setLaps, clearLaps } = lapsSlice.actions;

export default lapsSlice.reducer;