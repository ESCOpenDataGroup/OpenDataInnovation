function dashboard(id, fData){
    var barColor = 'steelblue';
    function segColor(c){ return {RentPerMouth:"#807dba", landscaping:"#e08214",travel:"#41ab5d",safety:"#FF4040",school:"#FFD39B"}[c]; }
    
    // compute total for each state.
    
    fData.forEach(function(d){
        d.freq.RentPerMouth = Math.round(d.freq.RentPerMouth*100)/100;
        d.freq.landscaping = Math.round(d.freq.landscaping*100)/100;
        d.freq.travel = Math.round(d.freq.travel*100)/100;
        d.freq.safety = Math.round(d.freq.safety*100)/100;
        d.freq.school = Math.round(d.freq.school*100)/100;
        d.total=d.freq.landscaping+d.freq.travel+d.freq.safety+d.freq.school-d.freq.RentPerMouth/2.5;
        d.total = Math.round(d.total*100)/100;
        });




//柱图
    // function to handle histogram.
    function histoGram(fD){
        var hG={},    hGDim = {t: 60, r: 0, b: 30, l: 0};
        hGDim.w = 1400 - hGDim.l - hGDim.r, 
        hGDim.h = 300 - hGDim.t - hGDim.b;
            
        //create svg for histogram.
        var hGsvg = d3.select(id).append("svg")
            .attr("width", hGDim.w + hGDim.l + hGDim.r)
            .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
            .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");
//x轴
        // create function for x-axis mapping.
        var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1)
                .domain(fD.map(function(d) { return d[0]; }));

        // Add x-axis to the histogram svg.
        hGsvg.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + hGDim.h + ")")
            .call(d3.svg.axis().scale(x).orient("bottom"));
//y轴
        // Create function for y-axis map.
        var y = d3.scale.linear().range([hGDim.h, 0])
                .domain([0, d3.max(fD, function(d) { return d[1]; })]);
//柱形
        // Create bars for histogram to contain rectangles and freq labels.
        var bars = hGsvg.selectAll(".bar").data(fD).enter()
                .append("g").attr("class", "bar");
        
        //create the rectangles.
        bars.append("rect")
            .attr("x", function(d) { return x(d[0]); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("width", x.rangeBand())
            .attr("height", function(d) { return hGDim.h - y(d[1]); })
            .attr('fill',barColor)
            .on("mouseover",mouseover)// mouseover is defined beRentPerMouth.
            .on("mouseout",mouseout);// mouseout is defined beRentPerMouth.
            
        //Create the frequency labels above the rectangles.
        bars.append("text").text(function(d){ return d3.format(",")(d[1])})
            .attr("x", function(d) { return x(d[0])+x.rangeBand()/8; })
            .attr("y", function(d) { return y(d[1])-5; })
            .attr("text-anchor", "landscapingdle");
  
   //鼠标移动功能     
        function mouseover(d){  // utility function to be called on mouseover.
            // filter for selected state.
            var st = fData.filter(function(s){ return s.State == d[0];})[0],
                nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
               
            // call update functions of pie-chart and legend.    
            pC.update(nD);
            leg.update(nD);
        }
        
        function mouseout(d){    // utility function to be called on mouseout.
            // reset the pie-chart and legend.    
            pC.update(tF);
            leg.update(tF);
        }
        
        // create function to update the bars. This will be used by pie-chart.
        hG.update = function(nD, color){
            // update the domain of the y-axis map to reflect change in frequencies.
            y.domain([0, d3.max(nD, function(d) { return d[1]; })]);
            
            // Attach the new data to the bars.
            var bars = hGsvg.selectAll(".bar").data(nD);
            
            // transition the height and color of rectangles.
            bars.select("rect").transition().duration(500)
                .attr("y", function(d) {return y(d[1]); })
                .attr("height", function(d) { return hGDim.h - y(d[1]); })
                .attr("fill", color);

            // transition the frequency labels location and change value.
            bars.select("text").transition().duration(500)
                .text(function(d){ return d3.format(",")(d[1])})
                .attr("y", function(d) {return y(d[1])-5; });            
        }        
        return hG;
    }
    


/*




//柱图
    // function to handle histogram.
    function histoGram(tF){
        var hG={},    hGDim = {t: 60, r: 0, b: 30, l: 0};
        hGDim.w = 1400 - hGDim.l - hGDim.r, 
        hGDim.h = 300 - hGDim.t - hGDim.b;
            
        //create svg for histogram.
        var hGsvg = d3.select(id).append("svg")
            .attr("width", hGDim.w + hGDim.l + hGDim.r)
            .attr("height", hGDim.h + hGDim.t + hGDim.b).append("g")
            .attr("transform", "translate(" + hGDim.l + "," + hGDim.t + ")");
//x轴
        // create function for x-axis mapping.
        var x = d3.scale.ordinal().rangeRoundBands([0, hGDim.w], 0.1)
                .domain(tF.map(function(d) { return d.freq; }));

        // Add x-axis to the histogram svg.
        hGsvg.append("g").attr("class", "x axis")
            .attr("transform", "translate(0," + hGDim.h + ")")
            .call(d3.svg.axis().scale(x).orient("bottom"));
//y轴
        // Create function for y-axis map.
        var y = d3.scale.linear().range([hGDim.h, 0])
                .domain([0, d3.max(tF, function(d) { return d[1]; })]);
//柱形
        // Create bars for histogram to contain rectangles and freq labels.
        var bars = hGsvg.selectAll(".bar").data(tF).enter()
                .append("g").attr("class", "bar");
        
        //create the rectangles.
        bars.append("rect")
            .attr("x", function(d) { return x(d[0]); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("width", x.rangeBand())
            .attr("height", function(d) { return hGDim.h - y(d[1]); })
            .attr('fill',barColor)
            .on("mouseover",mouseover)// mouseover is defined beRentPerMouth.
            .on("mouseout",mouseout);// mouseout is defined beRentPerMouth.
            
        //Create the frequency labels above the rectangles.
        bars.append("text").text(function(d){ return d3.format(",")(d[1])})
            .attr("x", function(d) { return x(d[0])+x.rangeBand()/8; })
            .attr("y", function(d) { return y(d[1])-5; })
            .attr("text-anchor", "landscapingdle");
   //鼠标移动功能     
        function mouseover(d){  // utility function to be called on mouseover.
            // filter for selected state.
            var st = fData.filter(function(s){ return s.State == d[0];})[0],
                nD = d3.keys(st.freq).map(function(s){ return {type:s, freq:st.freq[s]};});
               
            // call update functions of pie-chart and legend.    
            pC.update(nD);
            leg.update(nD);
        }
        
        function mouseout(d){    // utility function to be called on mouseout.
            // reset the pie-chart and legend.    
            pC.update(tF);
            leg.update(tF);
        }
        
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
        return hgg;
    }
    








*/




    // function to handle pieChart.
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
    
    // calculate total frequency by segment for all state.
    var tF = ['RentPerMouth','landscaping','travel','safety','school'].map(function(d){ 
        return {type:d, freq: d3.sum(fData.map(function(t){ 
            t.freq[d] = t.freq[d];
             t.freq[d] = Number(t.freq[d]).toFixed(3);
            //t.freq[d] = parseFloat((t.freq[d]/100).toPrecision(12)) ;// = 0.03
            //t.freq[d] = parseInt(t.freq[d]*100);
           // t.freq[d] = parseFloat(t.freq[d]).toFixed(2);
            return t.freq[d];}))}; 
    });    
    
    // calculate total frequency by state for all segment.
    var sF = fData.map(function(d){return [d.State,d.total];});

    var hG = histoGram(sF), // create the histogram.
       // hgg = histoGram(tF),
        pC = pieChart(tF), // create the pie-chart.
        leg= legend(tF);  // create the legend.
}
var freqData=[
{State:'CityOfLondon',freq:{RentPerMouth:1.6769,landscaping:0.533,travel:0.96,safety:0.99,school:0.82}}
,{State:'Barking',freq:{RentPerMouth:0.67445,landscaping:0.419,travel:0.37,safety:0.968,school:0.74}}
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
,{State:'Hammersmith',freq:{RentPerMouth:1.5244,landscaping:0.282,travel:0.59,safety:0.96,school:0.8}}
,{State:'Haringey',freq:{RentPerMouth:1.322,landscaping:0.501,travel:0.51,safety:0.95,school:0.76}}
,{State:'Harrow',freq:{RentPerMouth:0.9972,landscaping:0.344,travel:0.36,safety:0.98,school:0.8}}
,{State:'Havering',freq:{RentPerMouth:0.75342,landscaping:0.34164,travel:0.31863,safety:0.97818,school:0.7766}}
,{State:'Hillingdon',freq:{RentPerMouth:0.92315,landscaping:0.27662,travel:0.28929,safety:0.93181,school:0.73822}}
,{State:'Hounslow',freq:{RentPerMouth:1.18857,landscaping:0.3675,travel:0.3848,safety:0.96854,school:0.80366}}
,{State:'Islington',freq:{RentPerMouth:1.64686,landscaping:0.47757,travel:0.70767,safety:0.95487,school:0.77998}}
,{State:'Kensingtona',freq:{RentPerMouth:2.41098,landscaping:0.52152,travel:0.74072,safety:0.9608,school:0.85502}}
,{State:'Lambeth',freq:{RentPerMouth:1.30442,landscaping:0.49006,travel:0.63043,safety:0.96022,school:0.77602}}
,{State:'Lewisham',freq:{RentPerMouth:0.95319,landscaping:0.33018,travel:0.48576,safety:0.9716,school:0.78001}}
,{State:'Merton',freq:{RentPerMouth:1.37655,landscaping:0.37869,travel:0.43253,safety:0.96303,school:0.80155}}
,{State:'Newham',freq:{RentPerMouth:0.86096,landscaping:0.31695,travel:0.48425,safety:0.9558,school:0.76407}}
,{State:'Redbridge',freq:{RentPerMouth:0.803904,landscaping:0.28961,travel:0.34664,safety:0.90431,school:0.76064}}
,{State:'Southwark',freq:{RentPerMouth:1.307,landscaping:0.38002,travel:0.59865,safety:0.96114,school:0.77793}}
,{State:'Sutton',freq:{RentPerMouth:0.90563,landscaping:0.29081,travel:0.36363,safety:0.9797,school:0.81659}}
,{State:'Westminster',freq:{RentPerMouth:3.98034,landscaping:0.97011,travel:0.71456,safety:0.952,school:0.85}}


];

dashboard('#dashboard2',freqData);