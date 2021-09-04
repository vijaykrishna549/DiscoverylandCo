window.addEventListener('DOMContentLoaded', function () {

    console.log($)
    
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    const Far = document.getElementById("far"); 
    const Mph = document.getElementById("mph");
    const Degrees = document.getElementById("degrees");
    const City = document.getElementById("city");
    const PlaceName = document.getElementById("placeName");
    const Latitude = document.getElementById("latitude");


    let climate =[{tempertaure:"84f", wind:"40.0mph", position:"246"},
    {tempertaure:"54f", wind:"5.98mph", position:"206"},
    {tempertaure:"86f", wind:"2.8mph", position:"100"},
    {tempertaure:"44f", wind:"51.1mph", position:"332"}];

    let city=[{City1:"Los Cobos, Mexico", PlaceName1:"El Dorado"},
    {City1:"New York", PlaceName1:"United States"},
    {City1:"London", PlaceName1:"England"},
    {City1:"North Carolina", PlaceName1:"Mountaintop"}];

    let Coordinates =[{Latitude1:"260.225N/-105W"}, {Latitude1:"251.255N/-109W"},
    {Latitude1:"170.215N/-405W"}, {Latitude1:"217.225N/-175W"}];


    let count = 0;
    leftButton.addEventListener('click', function () {
        if(count>0) {
            count = count-1
            Far.innerHTML = climate[count].tempertaure
            Mph.innerHTML = climate[count].wind
            Degrees.innerHTML = climate[count].position
            City.innerHTML = city[count].City1
            PlaceName.innerHTML = city[count].PlaceName1
            Latitude.innerHTML = Coordinates[count].Latitude1
        }      
    })

   
    rightButton.addEventListener('click', function () {
        if(count < 4) {
        count = count + 1
        Far.innerHTML = climate[count].tempertaure
            Mph.innerHTML = climate[count].wind
            Degrees.innerHTML = climate[count].position
            City.innerHTML = city[count].City1
            PlaceName.innerHTML = city[count].PlaceName1
            Latitude.innerHTML = Coordinates[count].Latitude1
        
        }
        
    })
            
})





