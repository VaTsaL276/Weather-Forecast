                                //Vatsal Bhalani
                                // WD-07-MLB1
                                // WD-MAJOR-JULY-(WD-07-MLB1)
                                // vatsalbhalani7@gmail.com


// main.js :-

function GetInfo() {
    document.getElementById("cityInput").defaultValue = "Delhi";
    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = ""+newName.value+"";
   
fetch(' https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&units=metric&appid=269bd898ebcd91b611156bb9db3692f4')
.then(response => response.json())
.then(data => {

    
    //Temp
    for(i = 0; i<5; i++){
        document.getElementById("temp" + (i+1)).innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>  ' + Number(data.list[i].main.temp)+" °C";
    }
    //Getting the min and max values for each day
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min)+" °C";
    }
    // Max Temp
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max)+ " °C";
    }
    // Wind Speed
    for(i = 0; i<5; i++){
        document.getElementById("wind" + (i+1)).innerHTML = Number(data.list[i].wind.speed)+ " KM/H";
    }
    // Humidity
    for(i = 0; i<5; i++){
        document.getElementById("humidity" + (i+1)).innerHTML = Number(data.list[i].main.humidity)+ " %";
    }
    // Climate
    for(i = 0; i<5; i++){
        document.getElementById("type" + (i+1)).innerHTML = String(data.list[i].weather[0].description);
    }

    // Icon according to type of weather
    for(i = 0; i<5; i++)
    {
        if((data.list[i].weather[0].main) == 'Clouds'){
            document.getElementById("img" + (i+1)).innerHTML = '<i class="fa-solid fa-cloud" style="color : white;"></i>';
        }
        if((data.list[i].weather[0].main) == 'Clear')
        {
            document.getElementById("img" + (i+1)).innerHTML = '<i class="fa-solid fa-sun" style="color:yellow;"></i>';
        }
        if((data.list[i].weather[0].main) == 'Rain')
        {
            document.getElementById("img" + (i+1)).innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
        }
    }

    // BackGround according to type of weather

    if((data.list[0].weather[0].description) == 'overcast clouds'){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3ZlcmNhc3QlMjBza3l8ZW58MHx8MHx8&w=1000&q=80')";
    }
    if((data.list[0].weather[0].description) == 'broken clouds'){
        document.body.style.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/02/17/35/64/1000_F_217356409_2gMYgmsYERGmrJrD2VxWTpvWNydN0bOt.jpg')";
    }
    if((data.list[0].weather[0].description) == 'few clouds'){
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/b9/04/89/b90489ba101563d221994aaf9add8f35.jpg')";
    }
    if((data.list[0].weather[0].description) == 'light rain'){
        document.body.style.backgroundImage = "url('https://rare-gallery.com/thumbs/575269-rain-lights.jpg')";
    }
    if((data.list[0].weather[0].description) == 'scattered clouds'){
        document.body.style.backgroundImage = "url('https://c0.wallpaperflare.com/preview/532/447/657/scattered-white-clouds.jpg')";
    }
    if((data.list[0].weather[0].description) == 'clear sky'){
        document.body.style.backgroundImage = "url('https://rare-gallery.com/thumbs/129266-sunset-clear-sky-hd.jpg')";
    }
    if((data.list[0].weather[0].description) == 'moderate rain'){
        document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/29/54/7zcTjw.jpg')";
    }
    if((data.list[0].weather[0].description) == 'heavy rain'){
        document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/JRA45Ghi4Vk/maxresdefault.jpg')";
    }


 console.log(data)
})
}
function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Delhi";
    GetInfo();
}



