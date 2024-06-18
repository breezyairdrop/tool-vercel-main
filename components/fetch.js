
import axios from "axios";

async function getLeads() {
    // const response = await fetch("https://puppeteer-render-9bsg.onrender.com/google", {
    //     "headers": {
    //       "accept": "application/json",
    //     }
    //   });
    //   console.log(response.json())
    // return JSON.stringify(response)
    const resoo = await axios.get('https://puppeteer-render-9bsg.onrender.com/google')
  .then(function (response) {
    // handle success
    // console.log(response);
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('shout')
  });

  console.log(resoo)

  return  resoo

}


// console.log(getLeads())

getLeads()