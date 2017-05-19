var featuresStr = "[{ \"position\":[51.512344, -0.090985],\"location\": \"City of London\"}, {\"position\":[51.546483, 0.12935],\"location\": \"Barking and Dagenham\"}, {\"position\":[51.62515, -0.152936],\"location\": \"Barnet\"}, {\"position\":[51.451902, 0.117179],\"location\": \"Bexley\"}, {\"position\":[51.567281, -0.271057],\"location\": \"Brent\"}, {\"position\":[51.367971, 0.070062],\"location\": \"Bromley\"}, {\"position\":[51.551706, -0.158826],\"location\": \"Camden\"}, {\"position\":[51.376165, -0.098234],\"location\": \"Croydon\"}, {\"position\":[51.525026, -0.3415],\"location\": \"Ealing\"}, {\"position\":[51.652299, -0.080712],\"location\": \"Enfield\"}, {\"position\":[51.483462, 0.05862],\"location\": \"Greenwich\"}, {\"position\":[51.551795, -0.064644],\"location\": \"Hackney\"}, {\"position\":[51.499017, -0.22915],\"location\": \"Hammersmith and Fulham\"}, {\"position\":[51.590611, -0.110971],\"location\": \"Haringey\"}, {\"position\":[51.572524, -0.333422],\"location\": \"Harrow\"}, {\"position\":[51.577924, 0.212083],\"location\": \"Havering\"}, {\"position\":[51.535183, -0.448138],\"location\": \"Hillingdon\"}, {\"position\":[51.482836, -0.388206],\"location\": \"Hounslow\"}, {\"position\":[51.546506, -0.105806],\"location\": \"Islington\"}, {\"position\":[51.499081, -0.193825],\"location\": \"Kensington and Chelsea\"}, {\"position\":[51.41233, -0.300689],\"location\": \"Kingston upon Thames\"}, {\"position\":[51.457148, -0.123068],\"location\": \"Lambeth\"}, {\"position\":[51.441458, -0.011701],\"location\": \"Lewisham\"}, {\"position\":[51.409774, -0.210809],\"location\": \"Merton\"}, {\"position\":[51.525516, 0.035216],\"location\": \"Newham\"}, {\"position\":[51.58861, 0.082398],\"location\": \"Redbridge\"}, {\"position\":[51.461305, -0.303771],\"location\": \"Richmond upon Thames\"}, {\"position\":[51.483448, -0.082088],\"location\": \"Southwark\"}, {\"position\":[51.361428, -0.193961],\"location\": \"Sutton\"}, {\"position\":[51.520261, -0.02934],\"location\": \"Tower Hamlets\"}, {\"position\":[51.588638, -0.011763],\"location\": \"Waltham Forest\"}, {\"position\":[51.457072, -0.181782],\"location\": \"Wandsworth\"}, {\"position\":[51.497495, -0.135658],\"location\": \"Westminster\"}]";
var featuresJson = JSON.parse(featuresStr);
var map_of_comsuption_accessment = new Map();


function read_london_borough_profile() {

    var isRead = false;
    //d3.csv("./../data/london-borough-profiles.csv", csvCallback);
    d3.text("./../data/london-borough-profiles.csv", function(text) {
        var data = d3.csv.parse(text);
        for (var k in data) {
            var key = data[k];
            var accessment = (key["Proportion_of_population_of_working-age,_2015"] * 3 + 
                key["Proportion_of_population_aged_65_and_over,_2015"] * 2 + key["Proportion_of_population_aged_0-15,_2015"] * 0.5) / 
                key["Population_density_(per_hectare)_2017"] * 50;
            //console.log(accessment);
            var info = new Array();
            info.push(key["Population_density_(per_hectare)_2017"]);
            info.push(accessment);
            info.push(key["Code"]);
            map_of_comsuption_accessment.set(key["Area_name"], info);
        }
        map_of_comsuption_accessment.delete(undefined);
        console.log(map_of_comsuption_accessment);
    });
    //d3.csv.parse(strCsv);
    isRead = true;
}

function csvCallback(data) {
    console.log(data);
        for (var k in data) {
            var key = data[k];
            var accessment = (key["Proportion_of_population_of_working-age,_2015"] * 3 + 
                key["Proportion_of_population_aged_65_and_over,_2015"] * 2 + key["Proportion_of_population_aged_0-15,_2015"] * 0.5) / 
                key["Population_density_(per_hectare)_2017"] * 50;
            //console.log(accessment);
            var info = new Array();
            info.push(key["Population_density_(per_hectare)_2017"]);
            info.push(accessment);
            info.push(key["Code"]);
            map_of_comsuption_accessment.set(key["Area_name"], info);
        }
        map_of_comsuption_accessment.delete(undefined);
        console.log(map_of_comsuption_accessment);
}

//通过输入参数返回坐标经纬度
function findLatLng(info) {

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}