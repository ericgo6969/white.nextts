const async = async (req: any, res: any) => {
    const url = decodeURIComponent(req.query.url);
    const result = await fetch(url);
    const body: any = result.body;
    body.pipe(res);
};

export default async;
