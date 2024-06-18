// import axios from 'axios'
const axios =  require('axios');

async function getLeads() {
	// const resoo = await axios.get('https://puppeteer-render-9bsg.onrender.com/google')
	const resoo = await axios
		.get('https://puppeteer-render-9bsg.onrender.com/leads/?search=eatery+uyo')
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

	return resoo
}

getLeads().then((data) => {
	console.log(data)
})

