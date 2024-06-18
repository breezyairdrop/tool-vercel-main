// import { SearchGoogleMaps } from "../../action/searchGoogleMaps"
// import axios from  axios;
const axios =  require('axios');


export default async function handler(req, res) {
  const { query } = req.query

  console.log('omo')

  const resoo = await axios
		.get(`https://puppeteer-render-9bsg.onrender.com/leads/?search=${query}`)
		.then(function (response) {
			// handle success
			console.log(response.data)
		})
		.catch(function (error) {
			// handle error
			console.log(error)
		})
		.finally(function () {
			// always executed
			console.log('shout')
		})

	// return resoo

  // let waitResponse = await SearchGoogleMaps(query)





  // console.log(query)

  res.status(200).send(JSON.stringify(resoo))
}
