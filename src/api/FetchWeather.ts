const API_KEY = "98b9837897d9813b115c5481a17aecd0";

export const getWeatherByCoords = async (LAT: number, LON: number): Promise<any> => {
    const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;

    const response = await fetch(API_COORDS);
    const data = response.json();
    return data;
}

export const getWeatherByCity = async (CITY: string): Promise<any> => {
    const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

    const response = await fetch(API_CITY);
    const respData = response.json();
    return respData;
}