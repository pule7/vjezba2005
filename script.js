var request = new XMLHttpRequest();

// endpoint data: https://xsmilex007.github.io/JS-API-example/mydata.json


// otvaramo konekciju prema endpointu, koristimo GET metodu izvršavanja jer želimo dohvatiti podatke (samo ih dohvacamo)
request.open(
    "GET",
    "https://xsmilex007.github.io/JS-API-example/mydata.json",
    true
);


// iniciramo get request prema endpointu
request.send();

// ovdje implementiramo događaj nakon sto smo dohvatili podatke
// isparsat cemo JSON, pretvoriti ga u objekt te ga
// prikazati na stranici
request.onload = function (result){
    console.log(result.currentTarget.response);

    const obj = JSON.parse(result.currentTarget.response);

    let grad = obj.request.query;
    console.log("Grad je: " + grad);

    let country = obj.location.country;
    let region = obj.location.region;
    let temperature = obj.current.temparature;
    let uvIndex = obj.current.uv_index;
    console.log(`Country=˘${country}|Regija=${region}|Temperatura=${temperature}|UV Index=${uvIndex}`);

    document.getElementById("grad").value = grad;
    document.getElementById("country").textContent = country;
    document.getElementById("regija").textContent = region;
    document.getElementById("temperatura").textContent = temperature;
    document.getElementById("uvindex").textContent = uvIndex;
};






