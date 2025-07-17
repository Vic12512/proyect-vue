import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=18.4719&longitude=-69.8923&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m;
    return nuevaTemperatura;
}