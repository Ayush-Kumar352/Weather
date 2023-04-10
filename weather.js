$(document).ready(function() {
    $("#city").on("keyup", function(x) {
        var cityName = x.target.value;
        const APIkey = "19823ef131512169c6156c12c0105ad5";
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
        }).done(function(weatherdata) {
            console.log(weatherdata);
            $("#wc").html(`
            <div class="row">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><u><b>Weather</b></u>:<br>${weatherdata.weather[0].description}</h5>
                        <p class="card-text"><u>Temperature(in K)</u>: ${weatherdata.main.temp}</p>
                        <p class="card-text"><u>Humidity</u>: ${weatherdata.main.humidity}</p>
                        <p class="card-text"><u>
                        <a href="https://en.wikipedia.org/wiki/${weatherdata.name}"class="btn btn-primary">${weatherdata.name}</a>
                    </div>
                </div>
            </div>
            `)
        })
    })
})