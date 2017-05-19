  var i = 0;
            var pC, leg ; 
            //onload="read_london_borough_profile();"
            read_london_borough_profile();
            var featuresStr = "[{ \"position\":[51.512344, -0.090985],\"location\": \"City of London\"}, {\"position\":[51.546483, 0.12935],\"location\": \"Barking and Dagenham\"}, {\"position\":[51.62515, -0.152936],\"location\": \"Barnet\"}, {\"position\":[51.451902, 0.117179],\"location\": \"Bexley\"}, {\"position\":[51.567281, -0.271057],\"location\": \"Brent\"}, {\"position\":[51.367971, 0.070062],\"location\": \"Bromley\"}, {\"position\":[51.551706, -0.158826],\"location\": \"Camden\"}, {\"position\":[51.376165, -0.098234],\"location\": \"Croydon\"}, {\"position\":[51.525026, -0.3415],\"location\": \"Ealing\"}, {\"position\":[51.652299, -0.080712],\"location\": \"Enfield\"}, {\"position\":[51.483462, 0.05862],\"location\": \"Greenwich\"}, {\"position\":[51.551795, -0.064644],\"location\": \"Hackney\"}, {\"position\":[51.499017, -0.22915],\"location\": \"Hammersmith and Fulham\"}, {\"position\":[51.590611, -0.110971],\"location\": \"Haringey\"}, {\"position\":[51.572524, -0.333422],\"location\": \"Harrow\"}, {\"position\":[51.577924, 0.212083],\"location\": \"Havering\"}, {\"position\":[51.535183, -0.448138],\"location\": \"Hillingdon\"}, {\"position\":[51.482836, -0.388206],\"location\": \"Hounslow\"}, {\"position\":[51.546506, -0.105806],\"location\": \"Islington\"}, {\"position\":[51.499081, -0.193825],\"location\": \"Kensington and Chelsea\"}, {\"position\":[51.41233, -0.300689],\"location\": \"Kingston upon Thames\"}, {\"position\":[51.457148, -0.123068],\"location\": \"Lambeth\"}, {\"position\":[51.441458, -0.011701],\"location\": \"Lewisham\"}, {\"position\":[51.409774, -0.210809],\"location\": \"Merton\"}, {\"position\":[51.525516, 0.035216],\"location\": \"Newham\"}, {\"position\":[51.58861, 0.082398],\"location\": \"Redbridge\"}, {\"position\":[51.461305, -0.303771],\"location\": \"Richmond upon Thames\"}, {\"position\":[51.483448, -0.082088],\"location\": \"Southwark\"}, {\"position\":[51.361428, -0.193961],\"location\": \"Sutton\"}, {\"position\":[51.520261, -0.02934],\"location\": \"Tower Hamlets\"}, {\"position\":[51.588638, -0.011763],\"location\": \"Waltham Forest\"}, {\"position\":[51.457072, -0.181782],\"location\": \"Wandsworth\"}, {\"position\":[51.497495, -0.135658],\"location\": \"Westminster\"}]";
            var featuresJson = JSON.parse(featuresStr);
            var map;
            var service;
            var marktimes = 0;
            

           // var aaa = "asdfjkldsf";






            function myMap() {
                map = new google.maps.Map(document.getElementById('googleMap'), {
                    zoom: 10,
                    center: new google.maps.LatLng(51.52, -0.128),
                    mapTypeId: 'terrain'
                    });
                    
                    //map.addListener('idle', performSearch);
                    featuresJson.forEach(function(element) {
                        var symbola = new Map();
                        symbola.path = google.maps.SymbolPath.CIRCLE;
                        symbola.scale = 10;
                        console.log(map_of_comsuption_accessment.get(element["location"])[1]/15);
                        var radius = map_of_comsuption_accessment.get(element["location"])[1]/15;
                        symbola.scale = radius;
                        symbola.fillColor = 'red';
                        symbola.fillOpacity = .4;
                        symbola.strokeColor = 'white';
                        symbola.strokeWeight = .5;
                        var marker = new google.maps.Marker({
                            map: map,
                            position: new google.maps.LatLng(element["position"][0], element["position"][1]),
                            icon: symbola,
                            key4Map: element["location"]
                        });
                        
                     
                        
                        marker.addListener("click", function(){
                        
                           
                        dashboard('#dashboard');


                         





function dashboard(id){
    document.getElementById("location").innerHTML=element["location"]; 
                                 var barColor = 'steelblue';
    function segColor(c){ return {RentPerMouth:"#807dba", landscaping:"#e08214",travel:"#41ab5d",safety:"#FF4040",school:"#FFD39B"}[c]; }
    

var freqData=[
{State:'City of London',freq:{RentPerMouth:1.6769,landscaping:0.533,travel:0.96,safety:0.99,school:0.82}}
,{State:'Barking and Dagenham',freq:{RentPerMouth:0.67445,landscaping:0.419,travel:0.37,safety:0.968,school:0.74}}
,{State:'Barnet',freq:{RentPerMouth:1.30627,landscaping:0.259,travel:0.37,safety:0.975,school:0.8}}
,{State:'Bexley',freq:{RentPerMouth:0.70754,landscaping:0.356,travel:0.32,safety:0.98,school:0.75}}
,{State:'Brent',freq:{RentPerMouth:1.20903,landscaping:0.262,travel:0.47,safety:0.967,school:0.75}}
,{State:'Bromley',freq:{RentPerMouth:0.96882,landscaping:0.345,travel:0.39,safety:0.978,school:0.8}}
,{State:'Camden',freq:{RentPerMouth:1.6631,landscaping:0.427,travel:0.69,safety:0.957,school:0.82}}
,{State:'Croydon',freq:{RentPerMouth:0.88553,landscaping:0.236,travel:0.41,safety:0.97,school:0.74}}
,{State:'Ealing',freq:{RentPerMouth:1.29707,landscaping:0.401,travel:0.42,safety:0.97,school:0.79}}
,{State:'Enfield',freq:{RentPerMouth:1.02084,landscaping:0.386,travel:0.37,safety:0.97,school:0.75}}
,{State:'Greenwich',freq:{RentPerMouth:0.80334,landscaping:0.348,travel:0.36,safety:0.84,school:0.69}}
,{State:'Hackney',freq:{RentPerMouth:1.12978,landscaping:0.514,travel:0.5,safety:0.81,school:0.65}}
,{State:'Hammersmith and Fulham',freq:{RentPerMouth:1.5244,landscaping:0.282,travel:0.59,safety:0.96,school:0.8}}
,{State:'Haringey',freq:{RentPerMouth:1.322,landscaping:0.501,travel:0.51,safety:0.95,school:0.76}}
,{State:'Harrow',freq:{RentPerMouth:0.9972,landscaping:0.344,travel:0.36,safety:0.98,school:0.8}}
,{State:'Havering',freq:{RentPerMouth:0.75342,landscaping:0.34164,travel:0.31863,safety:0.97818,school:0.7766}}
,{State:'Hillingdon',freq:{RentPerMouth:0.92315,landscaping:0.27662,travel:0.28929,safety:0.93181,school:0.73822}}
,{State:'Hounslow',freq:{RentPerMouth:1.18857,landscaping:0.3675,travel:0.3848,safety:0.96854,school:0.80366}}
,{State:'Islington',freq:{RentPerMouth:1.64686,landscaping:0.47757,travel:0.70767,safety:0.95487,school:0.77998}}
,{State:'Kensington and Chelsea',freq:{RentPerMouth:2.41098,landscaping:0.52152,travel:0.74072,safety:0.9608,school:0.85502}}
,{State:'Lambeth',freq:{RentPerMouth:1.30442,landscaping:0.49006,travel:0.63043,safety:0.96022,school:0.77602}}
,{State:'Lewisham',freq:{RentPerMouth:0.95319,landscaping:0.33018,travel:0.48576,safety:0.9716,school:0.78001}}
,{State:'Merton',freq:{RentPerMouth:1.37655,landscaping:0.37869,travel:0.43253,safety:0.96303,school:0.80155}}
,{State:'Newham',freq:{RentPerMouth:0.86096,landscaping:0.31695,travel:0.48425,safety:0.9558,school:0.76407}}
,{State:'Redbridge',freq:{RentPerMouth:0.803904,landscaping:0.28961,travel:0.34664,safety:0.90431,school:0.76064}}
,{State:'Richmond upon Thames',freq:{RentPerMouth:1.48,landscaping:0.40,travel:0.38,safety:0.98,school:0.85}}
,{State:'Kingston upon Thames',freq:{RentPerMouth:1.15,landscaping:0.24,travel:0.37,safety:0.98,school:0.81}}

,{State:'Southwark',freq:{RentPerMouth:1.307,landscaping:0.38002,travel:0.59865,safety:0.96114,school:0.77793}}
,{State:'Sutton',freq:{RentPerMouth:0.90563,landscaping:0.29081,travel:0.36363,safety:0.9797,school:0.81659}}
,{State:'Tower Hamlets',freq:{RentPerMouth:0.131,landscaping:0.546,travel:0.59,safety:0.95,school:0.78}}

,{State:'Westminster',freq:{RentPerMouth:3.98034,landscaping:0.97011,travel:0.71456,safety:0.952,school:0.85}}
,{State:'Waltham Forest',freq:{RentPerMouth:0.88,landscaping:0.356,travel:0.44,safety:0.97,school:0.76}}
,{State:'Wandsworth',freq:{RentPerMouth:1.43,landscaping:0.97,travel:0.71,safety:0.952,school:0.85}}
];

                            
                           freqData.forEach(function(d){
        d.freq.RentPerMouth = Math.round(d.freq.RentPerMouth*100)/100;
        d.freq.landscaping = Math.round(d.freq.landscaping*100)/100;
        d.freq.travel = Math.round(d.freq.travel*100)/100;
        d.freq.safety = Math.round(d.freq.safety*100)/100;
        d.freq.school = Math.round(d.freq.school*100)/100;
        d.total=d.freq.landscaping+d.freq.travel+d.freq.safety+d.freq.school-d.freq.RentPerMouth/2.5;
        d.total = Math.round(d.total*100)/100;
        });

                            

                            var st = freqData.filter(function(s){ return s.State == element["location"];})[0],
                             nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
                            
                            // call update functions of pie-chart and legend. 
                            function isEmptyObject(obj) {
                                for (var key in obj) {
                                return false;
                                    }
                                return true;
                                    }
                               
                            if(i == 0){
                             pC = pieChart(nD); // create the pie-chart.
                             leg= legend(nD);  // create the legend.   
                             i++;
                            }else{
                            pC.update(nD);
                            leg.update(nD);  
                        }
                        
                                                     
                            
                                //id = '#dashboard';
                               // pC = pieChart(nD);
                               // leg= legend(nD);

                         //   }
                            
                                
                             



         function pieChart(pD){
        var pC ={},    pieDim ={w:250, h: 250};
        pieDim.r = Math.min(pieDim.w, pieDim.h) / 2;
                //生成SVG
        // create svg for pie chart.
        var piesvg = d3.select(id).append("svg")
            .attr("width", pieDim.w).attr("height", pieDim.h).append("g")
            .attr("transform", "translate("+pieDim.w/2+","+pieDim.h/2+")");
        //弧生成器
        // create function to draw the arcs of the pie slices.
        var arc = d3.svg.arc().outerRadius(pieDim.r - 10).innerRadius(0);

        // create a function to compute the pie slice angles.
        var pie = d3.layout.pie().sort(null).value(function(d) { return d.freq; });

        // Draw the pie slices.
        piesvg.selectAll("path").data(pie(pD)).enter().append("path").attr("d", arc)
            .each(function(d) { this._current = d; })
            .style("fill", function(d) { return segColor(d.data.type); })
            .on("mouseover",mouseover).on("mouseout",mouseout);

        // create function to update pie-chart. This will be used by histogram.
        pC.update = function(nD){
            piesvg.selectAll("path").data(pie(nD)).transition().duration(500)
                .attrTween("d", arcTween);
        }        
        // Utility function to be called on mouseover a pie slice.
        
        function mouseover(d){
            // call the update function of histogram with new data.
            hG.update(fData.map(function(v){ 
                return [v.State,v.freq[d.data.type]];}),segColor(d.data.type));
        }
        //Utility function to be called on mouseout a pie slice.
        function mouseout(d){
            // call the update function of histogram with all data.
            hG.update(fData.map(function(v){
                return [v.State,v.total];}), barColor);
        }
        
        // Animating the pie-slice requiring a custom function which specifies
        // how the intermediate paths should be drawn.
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) { return arc(i(t));    };
        }    
        return pC;
    }


// function to handle legend.
    function legend(lD){
        var leg = {};
            
        // create table for legend.
        var legend = d3.select(id).append("table").attr('class','legend');
        
        // create one row per segment.
        var tr = legend.append("tbody").selectAll("tr").data(lD).enter().append("tr");
            
        // create the first column for each segment.
        tr.append("td").append("svg").attr("width", '16').attr("height", '16').append("rect")
            .attr("width", '16').attr("height", '16')
			.attr("fill",function(d){ return segColor(d.type); });
            
        // create the second column for each segment.
        tr.append("td").text(function(d){ return d.type;});

        // create the third column for each segment.
        tr.append("td").attr("class",'legendFreq')
            .text(function(d){ return d3.format(",")(d.freq);});

        // create the fourth column for each segment.
        tr.append("td").attr("class",'legendPerc')
            .text(function(d){ return getLegend(d,lD);});

        // Utility function to be used to update the legend.
        leg.update = function(nD){
            // update the data attached to the row elements.
            var l = legend.select("tbody").selectAll("tr").data(nD);

            // update the frequencies.
            l.select(".legendFreq").text(function(d){ return d3.format(",")(d.freq);});

            // update the percentage column.
            l.select(".legendPerc").text(function(d){ return getLegend(d,nD);});        
        }
        
        function getLegend(d,aD){ // Utility function to compute percentage.
            return d3.format("%")(d.freq/d3.sum(aD.map(function(v){ return v.freq; })));
        }

        return leg;
    }


}


                        });

                    }, this);


           
               
            
                    
                }
  
/*
            function mouseover(d){  // utility function to be called on mouseover.
            // filter for selected state.
            var st = fData.filter(function(s){ return s.State == d[0];})[0],
                nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
             
            // call update functions of pie-chart and legend.    
            pC.update(nD);
            leg.update(nD);
        }
*/




                //设置地图标记样式
                
                function getCircle(radius) {
                    return {
                    path: google.maps.SymbolPath.CIRCLE,
                    fillColor: 'red',
                    fillOpacity: .2,
                    scale: Math.pow(2, radius) / 2,
                    strokeColor: 'white',
                    strokeWeight: .5
                    };
                }
                
                function performSearch() {
                    if(marktimes++ != 0) return;
                    infoWindow = new google.maps.InfoWindow();
                    service = new google.maps.places.PlacesService(map);
                    var request = {
                        bounds: map.getBounds(),
                        keyword: "Southampton",
                        //name: "SO17 3TJ"
                    };
                    service.radarSearch(request, search_callback);
                }
                
                function search_callback(results, status) {
                    if (status !== google.maps.places.PlacesServiceStatus.OK) {
                        console.error(status);
                        return;
                    }
                    createMarker(results);
                }
                function createMarker(places) {
                    for (var key in places) {
                        var place = places[key];
                        var placeLoc = place.geometry.location;
                        var marker = new google.maps.Marker({
                        map: map,
                        position: place.geometry.location
                        });
                    }
                }