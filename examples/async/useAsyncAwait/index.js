
const axios = require("axios")

const countriesUrl = "https://restcountries.com/v3.1/all"

async function getCountriesData(){
    try {
            const result = await axios.get(countriesUrl)
            console.log(result.data[128].name.common)
    } catch (error) {
            console.log(error.message)
            console.log("Something went wrong!")
    }
}


sdmsd
getCountriesData()