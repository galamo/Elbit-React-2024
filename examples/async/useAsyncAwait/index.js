
const axios = require("axios")

const countriesUrl = "https://restcountries.com/v3.1/all"

async function getCountriesData(){
    try {
            const result = await axios.get(countriesUrl)
            const result2 = await fetch(countriesUrl)
            const countries = await result2.json()
            console.log(countries[128].name.common)
            console.log(result.data[128].name.common)
    } catch (error) {
            console.log(error.message)
            console.log("Something went wrong!")
    }
}


getCountriesData()