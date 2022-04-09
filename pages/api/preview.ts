import { linkResolver, createClient } from "../../prismicio";
import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = createClient({ req });
    setPreviewData({ req, res });
    await redirectToPreviewURL({ req, res, client, linkResolver });
}
