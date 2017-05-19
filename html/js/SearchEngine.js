function ObjSearch()
{   
    this.kw = '';
    this.search = function()
    { 
        OutputHtml(this);
    }

    this.searchCp = function()
    {    
          var jsonObj = new Array();
          var kw = this.kw;
          $.each(vCp.london,function(index,content){ 
            if(content.address.indexOf(kw)!=-1)
            {                  
                jsonObj.push({"address":content.address,"post_code":content.post_code,"price":content.price
			});                           
            }
         }); 
         return jsonObj; 
    }
}
//define method to obtain ID
function __$$(id){return document.getElementById(id);}
//jump page 
function GotoPage(num){ 
	Page = num;
	OutputHtml(os);
} 
//each page capacity
var PageSize = 50; 
var Page = 1; 

function OutputHtml(){
    
    var vobj = arguments[0];	
	var siteList = '';
	       
	        siteList = os.searchCp();
            //obtain data
	        var obj = eval(siteList);  
	        var sites = obj;

	//obtain pages number
	var Pages = Math.floor((sites.length - 1) / PageSize) + 1; 
	
	if(Page < 1)Page = 1;  
	if(Page > Pages)Page = Pages; 
	var Temp = "";
	//serial number
	var BeginNO = (Page - 1) * PageSize + 1; 
	var EndNO = Page * PageSize; 
	if(EndNO > sites.length) EndNO = sites.length;
	if(EndNO == 0) BeginNO = 0;
	
	if(!(Page <= Pages)) Page = Pages;
	__$$("total").innerHTML = "Total pages:<strong class='f90'>" + sites.length + "</strong>&nbsp;&nbsp;Display:<strong class='f90'>" + BeginNO + "-" + EndNO + "</strong>"; 
	
	
	if(Page > 1 && Page !== 1){Temp ="<a href='javascript:void(0)' onclick='GotoPage(1)'>&lt;&lt;First Page</a> <a href='javascript:void(0)' onclick='GotoPage(" + (Page - 1) + ")'>Previous Page</a>&nbsp;"}else{Temp = "&lt;&lt;First Page Previous Page&nbsp;"};

    //list of pages
	var PageFrontSum = 3; 
	var PageBackSum = 3; 

	var PageFront = PageFrontSum - (Page - 1);
	var PageBack = PageBackSum - (Pages - Page);
	if(PageFront > 0 && PageBack < 0)PageBackSum += PageFront; 
	if(PageBack > 0 && PageFront < 0)PageFrontSum += PageBack; 
	var PageFrontBegin = Page - PageFrontSum;
	if(PageFrontBegin < 1)PageFrontBegin = 1;
	var PageFrontEnd = Page + PageBackSum;
	if(PageFrontEnd > Pages)PageFrontEnd = Pages;
	
	if(PageFrontBegin != 1) Temp += '<a href="javascript:void(0)" onclick="GotoPage(' + (Page - 10) + ')" title="Previous 10 Page">..</a>';
	for(var i = PageFrontBegin;i < Page;i ++){
		Temp += " <a href='javascript:void(0)' onclick='GotoPage(" + i + ")'>" + i + "</a>";
	}
	Temp += " <strong class='f90'>" + Page + "</strong>";
	for(var i = Page + 1;i <= PageFrontEnd;i ++){
		Temp += " <a href='javascript:void(0)' onclick='GotoPage(" + i + ")'>" + i + "</a>";
	}
	if(PageFrontEnd != Pages) Temp += " <a href='javascript:void(0)' onclick='GotoPage(" + (Page + 10) + ")' title='Next 10 Page'>..</a>";
	
	if(Page != Pages){Temp += "&nbsp;&nbsp;<a href='javascript:void(0)' onclick='GotoPage(" + (Page + 1) + ");'>Next Page</a> <a href='javascript:void(0)' onclick='GotoPage(" + Pages + ")'>Last Page&gt;&gt;</a>"}else{Temp += "&nbsp;&nbsp;Next Page Last Page&gt;&gt;"}
	
	__$$("pagelist").innerHTML = Temp;


	//output data
	if(EndNO == 0){ 
	    __$$("pagelist").innerHTML='';
		__$$("content").innerHTML = "<br><p>No Related data</p>";
        alert("Sorry,there is no avalible house for you");
		return;
	}
	var html = "<table border='1px'><tr><th>Adress</th><th>Post code</th><th>Price(k)</th><tr>";
		
	for(var i = BeginNO - 1;i < EndNO;i ++){
                        
           	     
		        html += "<tr><td>" +sites[i].address+ "</td><td>"+sites[i].post_code +"</td><td>"+sites[i].price/1000 +"</td></tr>";		        
         
            
        
        
	}
	html+="</table>"
	__$$("content").innerHTML = html;
	clickShow(); 

  //use key board to turn
	document.onkeydown=function(e){
		var theEvent = window.event || e;
		var code = theEvent.keyCode || theEvent.which;
		if(code==37){
			if(Page > 1 && Page !== 1){
				GotoPage(Page - 1);
				
			}
		}
		if(code==39){
			if(Page != Pages){
				GotoPage(Page + 1);
			}
		}
	} 
	


	

	
function wheel(event){
	var delta = 0;
	if (!event) 
		event = window.event;
	if (event.wheelDelta) {
		delta = event.wheelDelta / 120;

	if (window.opera)
		delta = -delta;
	} else if (event.detail) { 
	/** In Mozilla, sign of delta is different than in IE.
	* Also, delta is multiple of 3.
	*/
	delta = -event.detail / 3;
	}

	if (delta)
		handle(delta);
}

if (window.addEventListener)

	window.addEventListener("DOMMouseScroll", wheel, false);

	window.onmousewheel = document.onmousewheel = wheel;
	
	
}








