export default async function handler(req, res) {
    // const { domain } = req.query
  
    const [configResponse] = await Promise.all([
      fetch(
        `https://puppeteer-render-9bsg.onrender.com/leads/?search=eatery+uyo`,
        {
          method: 'GET',
          headers: {
            // Authorization: `Bearer ${process.env.AUTH_BEARER_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      ),
      
    ])
  
    const configJson = await configResponse.json()
    console.log(configJson, 'configJson')
    
    if (configResponse.status !== 200) {
        console.log('failed')
    //   return res.status(domainResponse.status).send(domainJson)
    }
  
  }

  handler()