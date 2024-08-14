// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
    let str = url.includes('www.') ? 'www.' : url.includes('//') ? '//' : ""
    console.log(str + " string")
    const startDomain = url.indexOf(str) + str.length
    console.log(startDomain + " start string")
    url = url.substring(startDomain)
    return url.split('.')[0]
}

console.log(domainName("3ohcm7ph0dos05j5kd5-u0avh.pro/index.php"))

// function domainName(url){
//     return  url.replace('http://', '')
//         .replace('https://', '')
//         .replace('www.', '')
//         .split('.')[0];
// }