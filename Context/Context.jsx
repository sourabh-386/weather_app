
import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

import Forcast from '@/Components/api/featchingApi';

console.log('ContextProvider is rundered outside')

const Context = createContext(null);

const ContextProvider = ({ children }) => {

    console.log('ContextProvider is rundered inside')

    const [finalData,setfinalData]=useState('')


    const get_city_name = async (value) => {
        // console.log(value)
        let output = await Forcast(value)


        if (output === false) {

            alert('city not found')

        }
        else {
            setfinalData(output)
            // const [city_data, weather_data] = output

            console.log(finalData)
            // console.log(weather_data)

        }




    }

    useEffect(() => {
        console.log('useeffect is rendring')
        get_city_name('delhi')
    },[])

    const sending_data = { get_city_name ,finalData}
    return (
        <Context.Provider value={sending_data}>{children}</Context.Provider>
    )
}


export { Context, ContextProvider }