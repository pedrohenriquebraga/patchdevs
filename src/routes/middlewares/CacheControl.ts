import { Request, Response, NextFunction } from "express"

const CacheControl = (req: Request, res: Response, next: NextFunction) => {
    if (req.method == "GET") {
        res.set({"Cache-Control": "private, max-age=30, stale-while-revalidate=60"})
    } else {
        res.set({"Cache-Control": "no-store"})
    }

    return next()
}

export { CacheControl }