let api = "32dd142acfaabcb02d63fcc5141cf28b";

let button = document.querySelector("button");
let input = document.querySelector("input");

function geoURL(city) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${city},IN&limit=1&appid=${api}`;
}

weatherURL = (lat, lon) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
}

button.addEventListener("click", () => {
    let url = geoURL(input.value);
    console.log(url);

    axios.get(url)
        .then((res) => {
            let data = res.data[0];
            let lat = data.lat;
            let lon = data.lon;

            return {lat,lon}
        }).then(data =>{


            let lat = data.lat;
            let lon = data.lon;
            let url = weatherURL(lat,lon);
            console.log(url)

            return axios.get(url); 


        }).then((res) => {
            let data = res.data;
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
});