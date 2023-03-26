import React from 'react'
import style from '../styles/index.module.css'
import Searchbar from '@/Components/Searchbar/Searchbar'
import Citydata from '@/Components/Citydata/Citydata'
import Weather from '@/Components/Weatherdata/Weather'

const index = () => {
    return (
        <div className={style.index}>
            <Searchbar />
            <br />
            <Citydata />
            <br/>
            <Weather />
        </div>
    )
}

export default index