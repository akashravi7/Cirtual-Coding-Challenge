var object;
/*{"Data": [{
  "Name": "Danny Michell",
  "Technician": "Wayne George",
  "Order_Date": "05 Sep 2016",
  "Type": "REPAIR",
  "Cell_Number": "(504) 313-5430",
  "Email": "august.luettgen@brakus.biz",
  "Order": "Done"
},{
  "Name": "Tyler Sherman",
  "Technician": "Troy Stephens",
  "Order_Date": "17 Sep 2016",
  "Type": "REPAIR",
  "Cell_Number": "(560) 432-5431",
  "Email": "korey.white@gmail.com",
  "Order": "Done"
},{
  "Name": "Eddie Moody",
  "Technician": "Jeff Kim",
  "Order_Date": "17 Apr 2016",
  "Type": "QUOTE",
  "Cell_Number": "(534) 253-9943",
  "Email": "jayde_kemmer@yahoo.com",
  "Order": "Done"
},{
  "Name": "Pearl Mann",
  "Technician": "Charles Morrison",
  "Order_Date": "08 Apr 2016",
  "Type": "REPAIR",
  "Cell_Number": "",
  "Email": "albertha.cassin@yahoo.com",
  "Order": "Done"
},{
  "Name": "Bess Gray",
  "Technician": "Charles Morrison",
  "Order_Date": "10 Feb 2016",
  "Type": "QUOTE",
  "Cell_Number": "(336) 543-4521",
  "Email": "akeem.hermiston@gmail.com",
  "Order": "In Progress"
},{
  "Name": "Minerva Ray",
  "Technician": "Thomas Davis",
  "Order_Date": "15 Jun 2016",
  "Type": "INSURANCE",
  "Cell_Number": "(153) 900-3884",
  "Email": "rutherford.fredrick@darrion.info",
  "Order": "In Progress"
},{
  "Name": "Agnes Poole",
  "Technician": "Jeff Kim",
  "Order_Date": "20 Jan 2016",
  "Type": "INSURANCE",
  "Cell_Number": "(248) 487-7777",
  "Email": "ashly_mertz@gmail.com",
  "Order": "In Progress"
},{
  "Name": "Maria Castro",
  "Technician": "Charles Morrison",
  "Order_Date": "17 Apr 2016",
  "Type": "REPAIR",
  "Cell_Number": "(194) 538-4563",
  "Email": "camila_mante@yahoo.com",
  "Order": "In Progress"
},{
  "Name": "Allen McLaughlin",
  "Technician": "Charles Morrison",
  "Order_Date": "08 Dec 2016",
  "Type": "REPAIR",
  "Cell_Number": "",
  "Email": "",
  "Order": "In Progress"
},{
  "Name": "Lydia Vargas",
  "Technician": "Jeff Kim",
  "Order_Date": "29 Aug 2016",
  "Type": "WARRANTY",
  "Cell_Number": "(240) 433-5513",
  "Email": "rolando.connelly@yahoo.com",
  "Order": "In Progress"
},{
  "Name": "Beatrice Hayes",
  "Technician": "Wayne George",
  "Order_Date": "19 Sep 2016",
  "Type": "REPAIR",
  "Cell_Number": "(113) 533-5543",
  "Email": "cartwright.henry@alejandra.biz",
  "Order": "Cancelled"
},{
  "Name": "Stella Ramos",
  "Technician": "Jeff Kim",
  "Order_Date": "20 Sep 2016",
  "Type": "QUOTE",
  "Cell_Number": "(504) 331-4352",
  "Email": "demetrius.carter@keeley.name",
  "Order": "In Progress"
},{
  "Name": "Jared Page",
  "Technician": "Ivan Jenkins",
  "Order_Date": "01 Jun 2016",
  "Type": "QUOTE",
  "Cell_Number": "(504) 312-6432",
  "Email": "kade.sauer@hotmail.com",
  "Order": "In Progress"
},{
  "Name": "Clyde Riley",
  "Technician": "Wayne George",
  "Order_Date": "11 Oct 2016",
  "Type": "REPAIR",
  "Cell_Number": "(222) 495-0305",
  "Email": "brayan_muller@yahoo.com",
  "Order": "In Progress"
},{
  "Name": "Dominic Francis",
  "Technician": "Leonard Boone",
  "Order_Date": "14 Jul 2016",
  "Type": "WARRANTY",
  "Cell_Number": "(242) 464-5673",
  "Email": "feest.lessie@gmail.com",
  "Order": "In Progress"
},{
  "Name": "Ola Lawson",
  "Technician": "Charles Morrison",
  "Order_Date": "25 Jul 2016",
  "Type": "REPAIR",
  "Cell_Number": "(888) 353-4642",
  "Email": "klocko.virginia@daryl.tv",
  "Order": "Cancelled"
},{
  "Name": "Pearl Rose",
  "Technician": "Wayne George",
  "Order_Date": "28 Jan 2016",
  "Type": "QUOTE",
  "Cell_Number": "(264) 435-2352",
  "Email": "renner_harold@sheridan.ca",
  "Order": "In Progress"
},{
  "Name": "Maxim Woods",
  "Technician": "Jeff Kim",
  "Order_Date": "30 Nov 2016",
  "Type": "WARRANTY",
  "Cell_Number": "(268) 563-6809",
  "Email": "lehan_bedka@paris.tv",
  "Order": "In Progress"
}]};*/

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