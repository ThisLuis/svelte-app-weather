<script>
  import { getWeatherFrom } from '../services/weather';
	import weatherFooter from '../components/weather-footer.svelte';
    import WeatherFooter from '../components/weather-footer.svelte';
	const weatherPromise = getWeatherFrom();

</script>

<!-- reenderizando -->

{#await weatherPromise then weather }
	<section>
		<h1>{weather.locationName}</h1>
		<h2>{weather.temperature}º</h2>
		<h3>{weather.conditionText}</h3>
	</section>
	<WeatherFooter />
{/await}

<!-- estilos -->

<style>
	section {
		padding: 16px;
	}

  h1 {
    font-weight: 300;
    color: #333;
    text-transform: uppercase;
    padding: 16px 0 0 0;
  }

  h2{
    font-weight: 300;
    font-size: 120px;
    color: #333;
    text-transform: uppercase;
    padding: 0;
  }

  h3 {
    font-weight: 700;
    transform: rotate(-90deg);
    position: absolute;
    top: 56px;
    right: 12px;
  }
</style>

