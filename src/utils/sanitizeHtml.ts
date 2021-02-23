function sanitizeHTML(text: string) {
    const regex = /(<([^>]+)>)/ig
    return text.replace(regex, "") 
}

export { sanitizeHTML }