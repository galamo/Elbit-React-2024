import { createSlice } from "@reduxjs/toolkit"
import { CountryApi } from "../../../components/pages/countriesPage"

interface ICountriesState {
    countries: Array<CountryApi>;
    favorites: Array<CountryApi>;
}

const initState: ICountriesState = {
    countries: [],
    favorites: []
}

export const countriesSlice = createSlice({
    name: "countries",
    initialState: initState,
    reducers: {
        setCountries: () => {
            // 
        },
        addToFavorite: () => {
            // "ADD_TO_FAVORITE"
        }
    }
})

export const { setCountries, addToFavorite } = countriesSlice.actions;
export default countriesSlice.reducer