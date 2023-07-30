import { useEffect, useState } from "react";
import { WEATHER_API_URL } from "../../utils/constants";
import Axios from "axios";
import { useSelector } from "react-redux";

/**
 * @name useWeather
 * @description Returns current city and following cities weather data
 * @returns {object} currentCity - weather of the current city (if user allows using geolocation);
 *                   followingCities - array with weather data of the following cities;
 */
const useWeather = () => {
  const [currentCity, setCurrentCity] = useState({});
  const [followingCities, setFollowingCities] = useState([]);
  const cities = useSelector((store) => store.cities);
  const showCurrentCity = useSelector((store) => store.showCurrentCity);

  // set current city
  useEffect(() => {
    async function getCurrentCity(position) {
      try {
        setCurrentCity(
          (await Axios.get(`${WEATHER_API_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)).data
        );
      } catch {
        setCurrentCity({
          cityId: 0,
          name: "Current location",
          error: true,
        });
      }
    }

    if (!showCurrentCity) {
      setCurrentCity(null);
    } else {
      navigator?.geolocation?.getCurrentPosition(
        async (position) => {
          if (position) {
            getCurrentCity(position);
          }
        },
        (error) => {
          getCurrentCity(null);
        },
        { enableHighAccuracy: true, timeout: 30000, maximumAge: 600000 }
      );
    }
  }, [showCurrentCity]);

  // set following cities
  useEffect(() => {
    async function getCities(list) {
      setFollowingCities(
        await Promise.all(
          list.map(async (city) => {
            try {
              return {
                cityId: city.id,
                ...(await Axios.get(`${WEATHER_API_URL}&q=${city.name}`)).data,
              };
            } catch {
              return {
                cityId: city.id,
                name: city.name,
                error: true,
              };
            }
          })
        )
      );
    }
    if (cities.length > 0) {
      getCities(cities);
    }
  }, [cities]);

  return { currentCity, followingCities };
};

export default useWeather;
