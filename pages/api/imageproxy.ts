export default async (req: any, res: any) => {
    try {
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.setHeader('content-type', 'image/png');

        const url = decodeURIComponent(req.query.url);

        if (!url) return res.status(404).end();

        const imageResponse = await fetch(url);

        if (!imageResponse.ok) return res.status(404).end();

        const contentType = imageResponse.headers.get('content-type');

        const { body }: any = imageResponse;

        res.setHeader('content-type', contentType);

        body.pipe(res);
    } catch (error) {
        return res.status(404).end();
    }
};

export const config = {
    api: {
        externalResolver: true,
    },
};
