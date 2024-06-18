"use server";

import * as cheerio from 'cheerio';
import puppeteer from "puppeteer";
import fs from "fs";

export async function SearchGoogleMaps(parsedData) {

	try {
		const browser = await puppeteer.launch({
			headless: 'new',
			args: ['--no-sandbox'],
			executablePath: ''
		})

		const page = await browser.newPage()
		const query = parsedData

		try {
			await page.goto(
				`https://www.google.com/maps/search/${query
					.split(' ')
					.join('+')}`
			)
		} catch (error) {
			console.log('error going to page')
		}

		async function autoScroll(page) {
			await page.evaluate(async () => {
				const wrapper = document.querySelector('div[role="feed"]')

				await new Promise((resolve, reject) => {
					var totalHeight = 0
					var distance = 1000
					var scrollDelay = 3000

					var timer = setInterval(async () => {
						var scrollHeightBefore = wrapper.scrollHeight
						wrapper.scrollBy(0, distance)
						totalHeight += distance

						if (totalHeight >= scrollHeightBefore) {
							totalHeight = 0
							await new Promise((resolve) =>
								setTimeout(resolve, scrollDelay)
							)

							// Calculate scrollHeight after waiting
							var scrollHeightAfter = wrapper.scrollHeight

							if (scrollHeightAfter > scrollHeightBefore) {
								// More content loaded, keep scrolling
								return
							} else {
								// No more content loaded, stop scrolling
								clearInterval(timer)
								resolve()
							}
						}
					}, 200)
				})
			})
		}

		await autoScroll(page)

		const html = await page.content()
		const pages = await browser.pages()
		await Promise.all(pages.map((page) => page.close()))

		await browser.close()
		// console.log('browser closed')

		// get all a tag parent where a tag href includes /maps/place/
		const $ = cheerio.load(html)
		// console.log($.html)
		const aTags = $('a')
		const parents = []
		aTags.each((i, el) => {
			const href = $(el).attr('href')
			if (!href) {
				return
			}
			if (href.includes('/maps/place/')) {
				parents.push($(el).parent())
			}
		})

		const buisnesses = []

		let indexCount = -1
		parents.forEach((parent) => {
			indexCount += 1

			const url = parent.find('a').attr('href')
			// get a tag where data-value="Website"
			const website = parent.find('a[data-value="Website"]').attr('href')
			const storeName = parent.find('div.fontHeadlineSmall').text()
			// find span that includes class fontBodyMedium
			const ratingText = parent
				.find('span.fontBodyMedium > span')
				.attr('aria-label')

			// get the first div that includes the class fontBodyMedium
			const bodyDiv = parent.find('div.fontBodyMedium').first()
			const children = bodyDiv.children()
			const lastChild = children.last()
			const firstOfLast = lastChild.children().first()
			const lastOfLast = lastChild.children().last()

			buisnesses.push({
				index: indexCount,
				placeId: `ChI${url?.split('?')?.[0]?.split('ChI')?.[1]}`,
				address: firstOfLast?.text()?.split('·')?.[1]?.trim(),
				category: firstOfLast?.text()?.split('·')?.[0]?.trim(),
				phone: lastOfLast?.text()?.split('·')?.[1]?.trim(),
				googleUrl: url,
				bizWebsite: website,
				storeName,
				ratingText,
				stars: ratingText?.split('stars')?.[0]?.trim()
					? Number(ratingText?.split('stars')?.[0]?.trim())
					: null,
				numberOfReviews: ratingText
					?.split('stars')?.[1]
					?.replace('Reviews', '')
					?.trim()
					? Number(
						ratingText
							?.split('stars')?.[1]
							?.replace('Reviews', '')
							?.trim()
					)
					: null
			})
		})

		// fs.writeFileSync(`./${parsedData}.json`, JSON.stringify(buisnesses))

		// console.log(buisnesses)
		return buisnesses

	} catch (error) {
		console.log('error at googleMaps', error.message)
	}
}


export async function exportData(data) {
	try {
	  const jsonContent = JSON.stringify(data, null, 4);
	  fs.writeFile("myData.json", jsonContent, "utf8", (err) => {
		if (err) {
		  console.error("An error occurred while writing JSON to a file.");
		  return console.error(err);
		}
  
		console.log("JSON file has been saved.");
	  });
	} catch (error) {
	  console.error(error);
	}
  }
  