function sanitizeHTML(text) {
    const regex = /(<([^>]+)>)/ig
    return String(text).replace(regex, "") 
}

module.exports = sanitizeHTML