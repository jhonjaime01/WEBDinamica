const xhr = new XMLHttpRequest();
const xhrTow = new XMLHttpRequest();

xhr.open("GET","./Resouces/departments.json",true);
xhrTow.open("GET","./Resouces/towns.json",true)

xhr.onreadystatechange = ()=>{
  if( xhr.readyState === 4 ){
    const department = JSON.parse( xhr.responseText)
    showTowns(department)
  }

  if(xhrTow.readyState === 4){
    const deparments = JSON.parse(xhrTow.responseText)
    showDepartments(deparments);
  }
}
xhr.send();

function showTowns(department){
  
    const option = document.getElementById('');
  
    department.forEach((client)=>{
      const option = document.createElement('optinon');

      const colName = document.createElement('td');
      colName.appendChild(document.createTextNode(client.name));
      option.appendChild(colName);

      const colId = document.createElement('td');
      colId.appendChild( document.createTextNode(client.code));
      //row.appendChild(colId);
  
      body.appendChild(option);
    })
  }

 function showDepartments(deparments){

    console.log(deparments);

    const selectDpartment = getElementById('departamento');

    deparments.forEach((client)=>{

        const colName = document.createElement("option")
        colName.appendChild(document.createTextNode(client.code))

    });

  }