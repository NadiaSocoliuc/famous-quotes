let quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. <br> -Nelson Mandela",
"Whoever is happy will make others happy too. <br> -Anne Frank", 
"Tell me and I forget. Teach me and I remember. Involve me and I learn. <br> -Benjamin Franklin", 
"Life is either a daring adventure or nothing at all. <br> -Helen Keller", 
"Life itself is the most wonderful fairy tale. <br> -Hans Christian Andersen"];


function bestQuotes() {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById("displayTheQuote").innerHTML = quotes[randomNumber]
}