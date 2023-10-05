const APIKey = "81b7be1d73e2a1718a1bc853ef5bdcaa";
const citysearch = document.getElementById("search-bar");
const searchbtn = document.getElementById("searchbtn")
const searchHistory = document.getElementById("searchHistory")
const selectedCity = document.getElementById("selected-city")
const city = citysearch.value

function updateHistoryList(city) {
    let historylist = document.createElement("li");
    historylist.textContent = city;
    historylist.addEventListener("click", function() {
        console.log(historylist)
      });
    searchHistory.append(historylist);
}

window.onload = function() {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    for (let i = 0; i < history.length; i++) {
        let historylist = document.createElement("li");
        historylist.textContent = history[i];
        searchHistory.append(historylist);
      }
}

searchbtn.addEventListener("click", function(){
    
    let history = JSON.parse(localStorage.getItem('history')) || [];
    if (city.trim() === ""){
        return
    }else if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('history', JSON.stringify(history));
        updateHistoryList(city);
    }
    selectedCity.textContent = city;
    document.querySelector(".results").style.visibility = "visible"
    
    
    
})

var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=" + APIKey;
    fetch(requestURL)
        .then(function(response){
            console.log(response.body)
            return response.json();
        })
        .then(function(data){
            console.log(data)
        })