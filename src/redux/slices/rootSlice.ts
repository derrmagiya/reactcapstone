import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Fitness {
    exercise: string;
    distance: number;
    duration: number;
    calories_burned: number;
    heart_rate: number;
    steps: number;
    workout_date: string;
    workout_time: string;
}

export interface FitnessState extends Fitness {
}

const initialState: FitnessState = {
    exercise: 'Running',
    distance: 0,
    duration: 0,
    calories_burned: 0,
    heart_rate: 0,
    steps: 0,
    workout_date: '',
    workout_time: '',
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseExercise: (state, action: PayloadAction<string>) => { state.exercise = action.payload },
        chooseDistance: (state, action: PayloadAction<number>) => { state.distance = action.payload },
        chooseDuration: (state, action: PayloadAction<number>) => { state.duration = action.payload },
        chooseBurned: (state, action: PayloadAction<number>) => { state.calories_burned = action.payload },
        chooseHeart: (state, action: PayloadAction<number>) => { state.heart_rate = action.payload },
        chooseSteps: (state, action: PayloadAction<number>) => { state.steps = action.payload },
        chooseDate: (state, action: PayloadAction<string>) => { state.workout_date = action.payload },
        chooseTime: (state, action: PayloadAction<string>) => { state.workout_time = action.payload }
    }
});


//Export our Reducers
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    chooseExercise,
    chooseDistance,
    chooseDuration,
    chooseBurned,
    chooseHeart,
    chooseSteps,
    chooseDate,
    chooseTime,
} = rootSlice.actions;
