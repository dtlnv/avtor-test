import { useEffect, useState } from "react";
import { WEATHER_API_URL } from "../../utils/constants";
import Axios from "axios";
import { useSelector } from "react-redux";

const useWeather = () => {
  const [currentCity, setCurrentCity] = useState({});
  const [followingCities, setFollowingCities] = useState([]);
  const cities = useSelector((store) => store.cities);

  // set current city
  useEffect(() => {
    async function getCurrentCity(position) {
      try {
        setCurrentCity(
          (
            await Axios.get(
              `${WEATHER_API_URL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            )
          ).data
        );
      } catch {
        setCurrentCity({
          cityId: 0,
          name: "Current location",
          error: true,
        });
      }
    }

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
  }, []);

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

  return { currentCity, followingCities }
};

export default useWeather;
