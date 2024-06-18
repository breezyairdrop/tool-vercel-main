import axios from 'axios';

export default async function api(req, res) {
	let cronId = ""
	if (req?.query?.search != "") {
		cronId = req?.query?.cronId

		// console.log("omo")
		const resoo = await axios
		.get(`https://puppeteer-render-9bsg.onrender.com/leads/?search=${req?.query?.search}`)
		.then(function (response) {
			// handle success
			res.json({cronId: cronId, result: response.data})

			// console.log(response.data, "shey")
		})
		.catch(function (error) {
			// handle error
			console.log(error)
		})
		.finally(function () {
			// always executed
			// console.log('shout')
		})

	}
	

}
