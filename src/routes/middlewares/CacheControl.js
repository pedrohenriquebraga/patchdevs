const CacheControl = (req, res, next) => {
    if (req.method == "GET") {
        res.set({"Cache-Control": "private, max-age=30, stale-while-revalidate=60"})
    } else {
        res.set({"Cache-Control": "no-store"})
    }

    return next()
}

module.exports = CacheControl