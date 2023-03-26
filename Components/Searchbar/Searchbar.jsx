import React,{ useState} from 'react'
import { useContext } from 'react'
import { Context } from '@/Context/Context'
import style from './Searchbar.module.css'
const Searchbar = () => {


    const {get_city_name}=useContext(Context)

    let [city, setcity] = useState('')


    const enter_city = (e) => {
        setcity(e.target.value)
    }


    const submit_city = () => {

        if (city === '') {
            alert('Enter City Name')
        }
        else {
           
            get_city_name(city)
        }
    }

  


  return (
    <div>
         <div className={style.main}>
            <div className='search'>
                <input type="text" placeholder='Enter City' onChange={enter_city} value={city} id={style.input} autoComplete='off' spellCheck='false' />
                <button onClick={submit_city} id={style.btn}><i class="bi bi-search"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Searchbar