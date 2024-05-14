function isValidURL(value)
{
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // check protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // check domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // check OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // check port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // check query string
    '(\\#[-a-z\\d_]*)?$','i'); // check fragment locator
    return urlPattern.test(value);
} 

export { isValidURL }