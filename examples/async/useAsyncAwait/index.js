
const axios = require("axios")

const countriesUrl = "https://restcountries.com/v3.1/all"
const countriesUrlLocal = "http://localhost:2200/countries-elbit"

async function getCountriesData(){
    try {
            const result = await axios.get(countriesUrlLocal)
            console.log(result.data[128].name.common)
    } catch (error) {
            console.log(error.message)
            console.log("Something went wrong!")
    }
}


getCountriesData()