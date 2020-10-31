import { useState, useEffect } from "react";
import Axios from "axios";
import { CITIES_API_URL } from "../../utils/constants";

const useCities = () => {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getCities(query) {
            setError(false);
            try {
                const response = (await Axios.get(`${CITIES_API_URL}&q=${query}`)).data;
                setList(response.results);
            } catch {
                setError(true);
            }
        }

        if (search.length > 1) {
            getCities(search);
        } else {
            setList([]);
        }
    }, [search]);

    return { list, setSearch, error };
};

export default useCities;
