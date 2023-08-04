// External imports
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

//Internal imports
import {
    chooseExercise,
    chooseDistance,
    chooseDuration,
    chooseBurned,
    chooseHeart,
    chooseSteps,
    chooseDate,
    chooseTime } from '../../redux/slices/rootSlice';
import { FitnessState } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks/FetchData';


interface FitnessFormProps {
    id?: string;
    data?: FitnessState
}


export const FitnessForm = (props: FitnessFormProps) => {
    const dispatch = useDispatch();
    // const { fitnessData, getData } = useGetData()
    const store = useStore()
    const { register, handleSubmit } = useForm<FitnessState>({})

    const onSubmit: SubmitHandler<FitnessState> = async(data, event) =>{
        if (event) event.preventDefault();

        if (props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log('Updated Fitness: ${data.name}');
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else {
            dispatch(chooseExercise(data.exercise))
            dispatch(chooseDistance(data.distance))
            dispatch(chooseDuration(data.duration))
            dispatch(chooseBurned(data.calories_burned))
            dispatch(chooseHeart(data.heart_rate))
            dispatch(chooseSteps(data.steps))
            dispatch(chooseDate(data.workout_date))
            dispatch(chooseTime(data.workout_time))

            console.log(store.getState())

            await serverCalls.create(store.getState() as FitnessState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }
    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Exercise Name</label>
                    <Input {...register('exercise')} name='name' placeholder='Exercise Here' />
                </div>
                <div>
                    <label htmlFor='name'>Distance</label>
                    <Input {...register('distance')} name='name' placeholder='Distance Here' />
                </div>
                <div>
                    <label htmlFor='name'>Duration</label>
                    <Input {...register('duration')} name='name' placeholder='Duration Here' />
                </div>
                <div>
                    <label htmlFor='name'>Calories_Burned</label>
                    <Input {...register('calories_burned')} name='name' placeholder='Calories Burned Here' />
                </div>
                <div>
                    <label htmlFor='name'>Heart_Rate</label>
                    <Input {...register('heart_rate')} name='name' placeholder='Heart Rate Here' />
                </div>
                <div>
                    <label htmlFor='name'>Steps</label>
                    <Input {...register('steps')} name='name' placeholder='Steps Here' />
                </div>
                <div>
                    <label htmlFor='name'>Workout_Date</label>
                    <Input {...register('workout_date')} name='name' placeholder='Workout Date Here' />
                </div>
                <div>
                    <label htmlFor='name'>Workout_Time</label>
                    <Input {...register('workout_time')} name='name' placeholder='Workout Time Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
