
var map_of_comsuption_accessment = new Map();

function read_london_borough_profile() {

    d3.csv("./../data/london-borough-profiles.csv", function(data) {
        console.log(data);
        for (var k in data) {
            var key = data[k];
            var accessment = (key["Proportion_of_population_of_working-age,_2015"] * 3 + 
                key["Proportion_of_population_aged_65_and_over,_2015"] * 2 + key["Proportion_of_population_aged_0-15,_2015"] * 0.5) / 
                key["Population_density_(per_hectare)_2017"] * 50;
            var info = new Array();
            info.push(key["Population_density_(per_hectare)_2017"]);
            info.push(accessment);
            info.push(key["code"]);
            map_of_comsuption_accessment.set(key["Area_name"], info);
        }
    });
}
