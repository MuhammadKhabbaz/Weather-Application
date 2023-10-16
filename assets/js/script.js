const APIKey = "81b7be1d73e2a1718a1bc853ef5bdcaa";
const searchBar = $("#search-bar");
const searchbtn = $("#searchbtn")
const searchHistory = $("#searchHistory")
const resultscontainer = $(".results")
const cityheading = $("#cityheading")
const alertmsg = $("#alert")

window.onload = function() {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    for (let i = 0; i < history.length; i++) {
        let historylist = document.createElement("li");
        let clickHL = document.createElement("a")
        clickHL.setAttribute("href","#")
        clickHL.setAttribute("id","Historysearch")
        clickHL.textContent = history[i];
        historylist.append(clickHL);
        searchHistory.append(historylist);
    }
  };

function fetchURL(url, citysearched){
    fetch(url)
        .then(function(response){
            console.log("Response:", response);
            if (!response.ok) {
                alertmsg.css("display","block");
                resultscontainer.css("visibility","hidden")
                throw new Error('Network response was not ok: ' + response.statusText);
            }else{
                $("#alert").css("display","none");
                resultscontainer.css("visibility","visible")
            }
            return response.json();
        })
        .then(function(data){
            console.log("Data:", data);
            // setting current weather data
            let iconCode = data.list[0].weather[0].icon;
            let iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
            // Updating the img element's src attribute to display the icon
            $("#icon").attr("src", iconUrl);
            $("#temp").text("Temp: " + data.list[0].main.temp + " °C");
            $("#wind").text("Wind: "+data.list[0].wind.speed+"km/h")
            $("#humidity").text("Humidity: "+data.list[0].main.humidity+"%")

            iconCode = data.list[1].weather[0].icon;
            iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
            // Updating the img element's src attribute to display the icon
            $("#icon1").attr("src", iconUrl);
            $("#temp1").text("Temp: " + data.list[1].main.temp + " °C");
            $("#wind1").text("Wind: "+data.list[1].wind.speed+"km/h")
            $("#humidity1").text("Humidity: "+data.list[1].main.humidity+"%")

            iconCode = data.list[2].weather[0].icon;
            iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
            // Updating the img element's src attribute to display the icon
            $("#icon2").attr("src", iconUrl);
            $("#temp2").text("Temp: " + data.list[2].main.temp + " °C");
            $("#wind2").text("Wind: "+data.list[2].wind.speed+"km/h")
            $("#humidity2").text("Humidity: "+data.list[2].main.humidity+"%")

            iconCode = data.list[3].weather[0].icon;
            iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
            // Updating the img element's src attribute to display the icon
            $("#icon3").attr("src", iconUrl);
            $("#temp3").text("Temp: " + data.list[3].main.temp + " °C");
            $("#wind3").text("Wind: "+data.list[3].wind.speed+"km/h")
            $("#humidity3").text("Humidity: "+data.list[3].main.humidity+"%")

            iconCode = data.list[4].weather[0].icon;
            iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
            // Updating the img element's src attribute to display the icon
            $("#icon4").attr("src", iconUrl);
            $("#temp4").text("Temp: " + data.list[4].main.temp + " °C");
            $("#wind4").text("Wind: "+data.list[4].wind.speed+"km/h")
            $("#humidity4").text("Humidity: "+data.list[4].main.humidity+"%")

            iconCode = data.list[5].weather[0].icon;
            iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";
            // Updating the img element's src attribute to display the icon
            $("#icon5").attr("src", iconUrl);
            $("#temp5").text("Temp: " + data.list[5].main.temp + " °C");
            $("#wind5").text("Wind: "+data.list[5].wind.speed+"km/h")
            $("#humidity5").text("Humidity: "+data.list[5].main.humidity+"%")

            saveCityToHistory(citysearched);
        })
        .catch(function (error) {
            console.log('There has been a problem with your fetch operation:', error.message);
        });
}
function saveCityToHistory(city) {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(city.toUpperCase())) {
        history.push(city.toUpperCase());
        localStorage.setItem('searchHistory', JSON.stringify(history));

        let historylist = document.createElement("li");
        let clickHL = document.createElement("a")
        clickHL.setAttribute("href","#")
        clickHL.setAttribute("id","Historysearch")
        clickHL.textContent = city.toUpperCase();
        historylist.append(clickHL);
        searchHistory.append(historylist);
    }
}


searchbtn.on("click", function(){
    const citysearched = searchBar.val();
    const requestURL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q="+citysearched+"&appid="+APIKey
    //fetching URL
    fetchURL(requestURL,citysearched);
    //displaying data
    resultscontainer.css("visibility","visible")
    cityheading.text(citysearched.toUpperCase())
})
$("#searchHistory").on("click", "#Historysearch", function(event){
    event.preventDefault(); // Prevent default behavior
    let cityFromHistory = $(this).text();
    console.log(cityFromHistory);
    searchBar.val(cityFromHistory);

    const requestURL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=" + cityFromHistory + "&appid=" + APIKey;
    fetchURL(requestURL, cityFromHistory);
    resultscontainer.css("visibility", "visible");
    cityheading.text(cityFromHistory);
});
//day.js

const today = dayjs();
$("#date").text("("+today.format("MMM D, YYYY")+")")

const date1 = dayjs().add(1, 'day')
$("#date1").text(date1.format('MMM DD, YYYY'))

const date2 = dayjs().add(2, 'day')
$("#date2").text(date2.format('MMM DD, YYYY'))

const date3 = dayjs().add(3, 'day')
$("#date3").text(date3.format('MMM DD, YYYY'))

const date4 = dayjs().add(4, 'day')
$("#date4").text(date4.format('MMM DD, YYYY'))

const date5 = dayjs().add(5, 'day')
$("#date5").text(date5.format('MMM DD, YYYY'))




