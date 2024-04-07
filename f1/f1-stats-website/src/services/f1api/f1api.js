const axios = require('axios');


export const fetch_f1_rankings = async(url, year) => {
    const options = {
        method: 'GET',
        url: 'https://api-formula-1.p.rapidapi.com/' +  url, 
        params: { season: year },
        headers: {
          'X-RapidAPI-Key': 'aab88935aemshbf9715733d12537p1d684cjsn0ad7bfefdc23',
          'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
      };
      
    try {
        const response = await axios.request(options);
        return response.response;
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}