import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './slices/headerSlice';
import stopwatchReducer from './slices/stopwatchSlice';
import lapsReducer from './slices/lapsSlice';
import countdownReducer from './slices/countdownSlice';
import timesetterReducer from './slices/timesetterSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        stopwatch: stopwatchReducer,
        laps: lapsReducer,
        countdown: countdownReducer,
        timesetter: timesetterReducer,
    },
})