const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bd389a1d2msh0647c8f3ac961a6p18d38cjsn7ad44acb7af3',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


export async function getWeatherFrom (query = 'Buenos Aires') {
	const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
  const response = await fetch(url, FETCH_OPTIONS)
	const data = await response.json();

	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, is_day, feelslike_c, temp_c, wind_kph, wind_dir } = current;
	const { code, text} = condition;
	return {
		conditionCode: code,
		conditionText: text,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	}
}

