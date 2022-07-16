import { NextApiRequest, NextApiResponse } from 'next';
import captureWebsite from 'capture-website'
import chrome from 'chrome-aws-lambda'

const DEFAULT_CARD_WIDTH = 800
const DEFAULT_CARD_HEIGHT = 450

const OGImage = async (request: NextApiRequest, response: NextApiResponse) => {
	const {
		query: {
			url,
		},
	} = request

	try {
		const buffer = await captureWebsite.buffer(decodeURI(String(url)), {
			width: parseInt(String(process.env.CARD_WIDTH)) || DEFAULT_CARD_WIDTH,
			height: parseInt(String(process.env.CARD_HEIGHT)) || DEFAULT_CARD_HEIGHT,
			launchOptions: {
				args: chrome.args,
				executablePath: await chrome.executablePath,
				headless: chrome.headless,
			},
		})

		response.setHeader('Content-Type', 'image/png')
		response.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000')
		response.end(buffer)
	} catch (error) {
		response.status(500).json({
			status: 'error',
			message: error instanceof Error
                ? error.message
                : 'Failed to generate Open Graph image',
		})
	}
}

export default OGImage
