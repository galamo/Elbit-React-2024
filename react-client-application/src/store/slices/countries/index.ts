import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryApi } from "../../../components/pages/countriesPage";
import axios from "axios";

interface ICountriesState {
    countries: Array<CountryApi>;
    favorites: Array<CountryApi>;
    counter: number;
    isLoading: boolean
    errorMessage: string
}

const initState: ICountriesState = {
    countries: [],
    favorites: [],
    counter: 0,
    isLoading: false,
    errorMessage: ""
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState: initState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<CountryApi>) => {
            state.favorites.push(action.payload);
        },
        increaseCounter: (state, action: PayloadAction<number>) => {
            state.counter = state.counter + 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchCountries.fulfilled,
                (state, action: PayloadAction<Array<CountryApi>>) => {
                    state.countries = action.payload
                    state.isLoading = false;
                }
            )
            .addCase(
                fetchCountries.rejected,
                (state) => {
                    state.countries = [];
                    state.isLoading = false;
                    state.errorMessage = "Something went wrong"
                }
            );
    },
});
const URL_ALL = "http://localhost:2200/api/countries-delay";
export const fetchCountries = createAsyncThunk("fetch/countries", async () => {
    try {
        const result = await axios.get(URL_ALL);
        const { data } = result;
        return data;
    } catch (error) {
        return (error as Error).message;
    }
});


export const { addToFavorite, increaseCounter } = countriesSlice.actions;
export default countriesSlice.reducer;
