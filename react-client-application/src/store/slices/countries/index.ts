import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryApi } from "../../../components/pages/countriesPage";

interface ICountriesState {
  countries: Array<CountryApi>;
  favorites: Array<CountryApi>;
  counter: number;
}

const initState: ICountriesState = {
  countries: [],
  favorites: [],
  counter: 0,
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
      .addCase(fetchCountries.pending, (state) => {})
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<CountryApi>) => {}
      )
      .addCase(
        fetchCountries.rejected,
        (state, action: PayloadAction<unknown>) => {}
      );
  },
});

export const fetchCountries = createAsyncThunk("fetch/countries", async () => {
  try {
    const response = await axios.get("INSERT URL");

    return response.data;
  } catch (error) {
    return (error as Error).message;
  }
});

export const { addToFavorite, increaseCounter } = countriesSlice.actions;
export default countriesSlice.reducer;
