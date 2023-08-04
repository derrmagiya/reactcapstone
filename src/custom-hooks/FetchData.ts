import React, { useState, useEffect } from 'react';
import { serverCalls } from '../api';
import { FitnessState } from '../redux/slices/rootSlice';
//import our Fitness Interface


export const useGetData = () => {
    const [fitnessData, setData] = useState<FitnessState[]>([]); 

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch()
    }, [])

    return {fitnessData, getData: handleDataFetch}
}
