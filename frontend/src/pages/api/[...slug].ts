import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	let slugs = (req.query.slug as string[]) || [];
	let instance = axios.create({
		baseURL: 'http://69.28.91.84:8000/api/',
	});

	try {
		let data = await instance({
			method: req.method?.toLowerCase(),
			url: slugs.join('/'),
			headers: {
				...req.headers,
			},
			data: req.body,
		});

		return res.send(data.data);
	} catch (error: any) {
		return res.send(error.response.data);
	}
}
