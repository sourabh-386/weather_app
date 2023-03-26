import React from 'react'
import { useContext } from 'react'
import { Context } from '@/Context/Context'
import style from './Citydata.module.css'
import { DateTime } from 'luxon'

import moment from 'moment/moment'
import Image from 'next/image'


const Citydata = () => {
    const { finalData } = useContext(Context)
    const [city_api_response] = finalData
    console.log(city_api_response)

    if (city_api_response) {

        var { id, dt, main: { temp, temp_min, temp_max, pressure, humidity }, name, weather: [{ main, description, icon }], sys: { sunrise, sunset }, timezone, visibility, wind: { speed } } = city_api_response

    }

    const time_fun = ((dt, timezone, format = "hh:mm a") => {
        return (DateTime.fromSeconds(dt).setZone(timezone).toFormat(format))
    })

    const img = ((code) => {
        return (`http://openweathermap.org/img/wn/${code}@2x.png`)

    })

    console.log(moment(dt * 1000).format("h:mm A"))


    return (
        <div>
            {city_api_response ? (<div className={style.citydata}>
                <div className={style.time}>
                    <h1 className={style.cityname}>{name}</h1>

                    <div>
                        <p className={style.main_time}>{moment(dt * 1000).format("h:mm A")}</p>
                        <p className={style.main_data}>{moment(dt * 1000).format("MMMM Do YYYY")}</p>
                    </div>


                </div>



                <div className={style.otherdata}>
                    <div className={style.img_main}>
                        <img src={img(icon)} alt="img" id={style.img} />
                        <h2 style={{ opacity: '0.5' } } className={style.cloud}>{main}</h2>

                    </div>

                    <h1 id={style.temp_main}><i class="bi bi-thermometer-half"></i>{(temp - 273).toFixed(1)}<sup>o</sup></h1>
                    <div className={style.sun}>
                        <div><i class="bi bi-sunrise-fill"></i> Sunreise - { } {moment(sunset * 1000).format("hh:mm A")}</div>
                        <div><i class="bi bi-sunset-fill"></i> Sunset - {moment(sunrise * 1000).format("hh:mm A")}</div>
                        <div><i class="bi bi-arrow-up"></i>  Max-temp - {(temp_max - 273).toFixed(1)}<sup>o</sup></div>
                        <div><i class="bi bi-arrow-down"></i>  Min-temp - {(temp_min - 273).toFixed(1)}<sup>o</sup></div>

                    </div>
                </div>
                <div className={style.citydata_foot}>
                    <div>Humidity - {humidity}%</div>
                    <div>Wind Speed - {speed} km/h</div>
                    <p>Visibility - {(visibility) / 1000} Km</p>
                    <p>Pressure - {pressure} mb</p>


                </div>


            </div>) : <center><h1>Loading...</h1></center>}

        </div>
    )
}

export default Citydata