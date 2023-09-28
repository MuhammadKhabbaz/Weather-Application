const APIKey = "2c2fa8e9790f0f8c860450c60d20dc6b";
const citysearch = document.getElementById("search-bar");
const searchbtn = document.getElementById("searchbtn")
const searchHistory = document.getElementById("searchHistory")

searchbtn.addEventListener("click", function(){
    localStorage.setItem(city, citysearch.value)
    console.log(citysearch.value)
    let historylist = document.createElement("li")
    historylist.textContent = localStorage.getItem(city);
    searchHistory.append(historylist)

    const citys = citysearch.value
    const requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citys + "&appid=" + APIKey;
    fetch(requestURL)
        .then(function(){
            console.log(city)
        })
})
