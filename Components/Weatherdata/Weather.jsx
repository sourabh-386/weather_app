import React from 'react'
import { useContext } from 'react'
import { Context } from '@/Context/Context'
import style from './Weather.module.css'
import Image from 'next/image'
import moment from 'moment'

const Weather = () => {

    const { finalData } = useContext(Context)

    const [city_api_response, hourly_data] = finalData


    const img = ((code) => {
        return (`http://openweathermap.org/img/wn/${code}@2x.png`)

    })
    

   


    return (
        <div>
            {
                hourly_data ? (
                    <div className={style.weather}>
                        {
                            hourly_data.slice(0, 6).map((value) => {
                                return (
                                    <div className={style.child}>
                                        <p>{ moment((value.time)*1000).format("hh:mm A")}</p>
                                        <img src={img(value.icon)} alt="icon" />
                                        <h3>{value.cloud}</h3>
                                        <h2>{(value.temp - 273).toFixed(1)}<sup>o</sup></h2>
                                    </div>
                                )
                            })
                        }

                    </div>
                ) : ''
            }
        </div>
    )
}

export default Weather