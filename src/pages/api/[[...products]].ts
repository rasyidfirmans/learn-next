// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData, retrieveDataById } from "@/utilities/db/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode: number;
    data: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    if (req.query.products && req.query.products[1]) {
        const data = await retrieveDataById("products", req.query.products[1]);
        return res.status(200).json({status: true, statusCode: 200, data: data});
    } else if (req.query.products) {
        const data = await retrieveData("products");
        return res.status(200).json({status: true, statusCode: 200, data: data});
    }
}
