<script>
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Buenos%20Aires';
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2bd389a1d2msh0647c8f3ac961a6p18d38cjsn7ad44acb7af3',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const weatherPromise = fetch(url, options)
	.then((response) => response.json())
	.then((data) => {
		const { location, current } = data;
		const { country, localtime, name } = location;
		const { condition, humidity, is_day, feelslike_c, temp_c, wind_kph, wind_dir } = current;
		const { code, text} = condition;

		return {
			conditionCode: code,
			conditionText: text,
			country,
			localtime,
			name,
			humidity,
			isDay: is_day,
			feelsLike: feelslike_c,
			temperature: temp_c,
			windSpeed: wind_kph,
			windDir: wind_dir
		}
	});

</script>


<!-- estilos -->

<style>
    h1 {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>

<!-- reenderizando -->

{#await weatherPromise then weather }
	{console.log(weather)}
	<h1>{weather.temperature}</h1>
{/await}

<h1>Lo que esta reenderizando</h1>