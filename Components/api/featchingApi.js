





let Forcast = async (city) => {


    try {

        // this api give us city detail and city id 
        let city_api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7325e8f168c7e0cb87805d65153d4a2`)

        let city_api_response = await city_api.json()

        const { id } = city_api_response

        // this api give us hourly  weather data
        let weather_api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=d7325e8f168c7e0cb87805d65153d4a2`)

        let weather_api_response = await weather_api.json();

        const { list } = weather_api_response


        let hourly_data = []

        for (let i = 0; i < list.length; i++) {

            const {dt, main: { temp, pressure, humidity }, dt_txt, weather: [{ main, description, icon }] } = list[i]

            const hourly_Forcast = {
                temp: temp,
                pressure: pressure,
                humidity: humidity,
                dt_txt: dt_txt,
                cloud: main,
                description: description,
                icon: icon,
                time:dt
            }
            hourly_data = [...hourly_data, hourly_Forcast]
        }

        const data_return = [city_api_response, hourly_data]

        return data_return

    } catch (error) {

        return false;
    }


    // Forcast function end hear 
}



export default Forcast


