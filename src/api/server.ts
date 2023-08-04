let token = 'dc1e0d4db365f4f23a929dd78b43bb1ed5bf7bb184c7b904'; 
import { FitnessState } from "../redux/slices/rootSlice";



export const serverCalls = {
    get: async () => {
        const response = await fetch('https://fitnesstracker3.glitch.me/api/fitnesses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async(data: FitnessState) => { 
        const response = await fetch('https://fitnesstracker3.glitch.me/api/fitnesses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
         });

         if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json() 
    },
    update : async(id: string, data: FitnessState) => { 
        const response = await fetch(`https://fitnesstracker3.glitch.me/api/fitnesses/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
         });

         if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json() 
    },
    delete: async(id: string) => {
        const response = await fetch(`https://fitnesstracker3.glitch.me/api/fitnesses/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
         });

         if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }
    }
}