function showWeather() {
    let weather = prompt("Which weather would you like to see? \n➡️ Sunny\n➡️ Rainy\n➡️ Cloudy\n➡️ Cold\n➡️ Fall\n➡️ Spring").toLowerCase();
    let weatherCard = document.getElementById("weatherCard");

    let body = document.querySelector('body');

    weatherCard.style.display = "block";

    if (weather === "sunny") {
        weatherCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./assests/sunny.gif" class="card-img-top" alt="sunny">
                <div class="card-body">
                  <h5 class="card-title" style="font-weight: bold;">Sunny</h5>
                  <p class="card-text">Sunny weather refers to a type of pleasant day with sun rising in the sky . With no sense of rain.🔆</p>
                  <a href="https://www.pnc.com/en/about-pnc/corporate-responsibility/grow-up-great/lesson-center/weather/sunny-days.html#:~:text=Sunny%20weather%20days%20are%20days,time%20outside%20in%20the%20summer." target="_blank" class="btn btn-warning"> For More Info click here!</a>
                </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/sunnybg.gif')";
    }else if (weather === "rainy") {
        weatherCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./assests/rainy.gif" class="card-img-top" alt="sunny">
                <div class="card-body">
                  <h5 class="card-title" style="font-weight: bold;">Rainy</h5>
                  <p class="card-text">A rainy day is a day when the sky is covered with dark clouds, and raindrops fall from the clouds.⛈️</p>
                  <a href="https://www.metoffice.gov.uk/weather/learn-about/weather/types-of-weather/rain/rainy-seasons" target="_blank" class="btn btn-success"> For More Info click here!</a>
                </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/rainybg.gif')";
    }else if (weather === "cloudy") {
        weatherCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./assests/cloudy.gif" class="card-img-top" alt="sunny">
                <div class="card-body">
                  <h5 class="card-title" style="font-weight: bold;">Cloudy</h5>
                  <p class="card-text">Cloudy days can cause a feeling of depresion in some people because of the simple fact that the sun just isnt there.☁️</p>
                  <a href="https://byjus.com/question-answer/cloudy-days-are-warmer-why/" target="_blank" class="btn btn-info"> For More Info click here!</a>
                </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/couldybg.gif')";
    }else if (weather === "cold") {
        weatherCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./assests/cold.gif" class="card-img-top" alt="sunny">
                <div class="card-body">
                  <h5 class="card-title" style="font-weight: bold;">Cold</h5>
                  <p class="card-text">Most cold symptoms go away within a week in most cases. If you still feel sick after 7 days, consult with your provider.❄️</p>
                  <a href="https://www.bbc.co.uk/bitesize/articles/zdbk4xs" target="_blank" class="btn btn-primary"> For More Info click here!</a>
                </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/coldbg.gif')";
    }else if (weather === "fall") {
        weatherCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./assests/fall.gif" class="card-img-top" alt="sunny">
                <div class="card-body">
                  <h5 class="card-title" style="font-weight: bold;">Fall</h5>
                  <p class="card-text">Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably.🍂</p>
                  <a href="https://www.almanac.com/content/first-day-fall-autumnal-equinox" target="_blank" class="btn btn-danger"> For More Info click here!</a>
                </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/fallbg.gif')";
    }else if (weather === "spring") {
        weatherCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="./assests/spring.gif" class="card-img-top" alt="sunny">
                <div class="card-body">
                  <h5 class="card-title" style="font-weight: bold;">Spring</h5>
                  <p class="card-text">Spring days often bring a sense of freshness and renewal. After the cold and dreary winter, spring brings warmer temperatures, blooming flowers, and budding leaves.🌺</p>
                  <a href="https://www.britannica.com/science/spring-season" target="_blank" class="btn btn-secondary"> For More Info click here!</a>
                </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/springbg.gif')";
    }else{
        weatherCard.innerHTML = `
            <div class="card unknown" style="width: 18rem;">
            <div class="card-body text-white" style="border-radius: 20px; background-color: rgb(166, 0, 0);">
                <h5 class="card-title" style="font-weight: bold;">Unknown Weather</h5>
                <p class="card-text">Please enter a valid weather <br>➡️ Sunny <br>➡️ Rainy <br>➡️ Cloudy <br>➡️ Cold <br>➡️ Fall <br>➡️ Spring.</p>
            </div>
            </div>`;

            body.style.backgroundImage = "url('./assests/unknown.gif')";
    }
}

window.onload = showWeather;