var object; //Stores the data to be loaded onto the table

/**
 *  This function sends a request to pull the JSON data from the gist file online.
 **/
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

/**
 *This function is invoked onload of body of the page
 **/
function initialize(){
		getJSON('https://gist.githubusercontent.com/akashravi7/ce6dbf5a91716613ec09aac2544b99d3/raw/23028c2ab28a430518c0dac267df51747d4b7d72/cirtual_challenge_data.json', function(err, data) {
		if (err != null) {
			alert('Something went wrong: ' + err);
		} else {
			object=data;
			loaddata(data.Data);
	    }
    });
}

/**
 *Function to load the JSON data to the table 
 **/
function loaddata(x){
	var obj={};
	obj.Data=[];
	obj.Data=x;
	var table = document.getElementById("main-table");
	var temp="";
	var rowCount=table.rows.length;
	for(i=1;i<rowCount;i++){
		table.deleteRow(1);
	}
	for(i=0;i<obj.Data.length;i++){
		var row = table.insertRow(i+1);
	    var x=row.insertCell(0);
		if(obj.Data[i].Order=="Done"){
			x.innerHTML='<img src="Resources/Tick.png" style="height:20px;">';
		}
		else if(obj.Data[i].Order=="In Progress"){
			x.innerHTML="";
		}
		else if(obj.Data[i].Order=="Cancelled"){
			x.innerHTML='<img src="Resources/Cancel.png" style="height:20px;">';
		}
		x=row.insertCell(1);
		x.innerHTML=obj.Data[i].Name!=""? obj.Data[i].Name: "NOT ON FILE";
		x=row.insertCell(2);
		x.innerHTML=obj.Data[i].Technician!=""? obj.Data[i].Technician: "NOT ON FILE";;
		x=row.insertCell(3);
		x.innerHTML=obj.Data[i].Order_Date!=""? obj.Data[i].Order_Date: "NOT ON FILE";;
		x=row.insertCell(4);
		x.innerHTML=obj.Data[i].Type!=""? obj.Data[i].Type: "NOT ON FILE";;
		x=row.insertCell(5);
		x.innerHTML=obj.Data[i].Cell_Number!=""? obj.Data[i].Cell_Number: "NOT ON FILE";;
		x=row.insertCell(6);
		x.innerHTML=obj.Data[i].Email!=""? obj.Data[i].Email: "NOT ON FILE";;
		x=row.insertCell(7);
		if(obj.Data[i].Order=="Done"){
			temp="<select class='list' name='status' onchange='updateTable(this)'>"+
						"<datalist id='browsers'>"+    
						"<option selected value='Done'>Done</option>"+    
						"<option value='In Progress'>In Progress</option>"+
						"<option value='Cancelled'>Cancelled</option>"
				 "</select>";
			row.className='done';
		}
		else if(obj.Data[i].Order=="In Progress"){
			temp="<select class='list' name='status' onchange='updateTable(this)'>"+   
						"<option value='Done'>Done</option>"+    
						"<option selected value='In Progress'>In Progress</option>"+
						"<option value='Cancelled'>Cancelled</option>"
				 "</select>";
			row.className='progress';
		}
		else if(obj.Data[i].Order=="Cancelled"){
			 temp="<select class='list' name='status' onchange='updateTable(this)'>"+
						"<datalist id='browsers'>"+    
						"<option value='Done'>Done</option>"+    
						"<option value='In Progress'>In Progress</option>"+
						"<option selected value='Cancelled'>Cancelled</option>"
				   "</select>";
			row.className='cancelled';
		}
		x.innerHTML=temp;
		
		
	}	
}

/**
 *This function is invoked for every letter entered/deleted in the searchbox
 **/
function search(){
	var searchString=document.getElementById("search-box").value;
	var filteredData=[];
	for(i=0;i<object.Data.length;i++){
		if(object.Data[i].Name.indexOf(searchString)==-1 && object.Data[i].Technician.indexOf(searchString)==-1 && object.Data[i].Order_Date.indexOf(searchString)==-1 && 
		object.Data[i].Type.indexOf(searchString)==-1 && object.Data[i].Cell_Number.indexOf(searchString)==-1 && object.Data[i].Email.indexOf(searchString)==-1 &&
		object.Data[i].Order.indexOf(searchString)==-1){
		}
		else{
			filteredData[filteredData.length]=object.Data[i];
		}
	}
	loaddata(filteredData);
}

/**
 *This function is invoked when the order status is changed in the last column of the table
 **/
function updateTable(cell){
	var rowNumber=cell.parentNode.parentNode.rowIndex-1;
	if(cell.parentNode.parentNode.cells[1].innerHTML==object.Data[rowNumber].Name){
		object.Data[rowNumber].Order=cell.value;
		loaddata(object.Data);		
	}
	else{
		//loop through the data and find matching name
		for(i=0;i<object.Data.length;i++){
			if(cell.parentNode.parentNode.cells[1].innerHTML==object.Data[i].Name){
				object.Data[i].Order=cell.value;
			}
		}
		search();
	}
}