
// CREATE A DYNAMIC TABLE

let columns = document.getElementById("NumberOfColumns");
let rows = document.getElementById("NumberOfRows");
let createTable = document.getElementById("createTable");

function generate_table() {

    let body = document.getElementById("table");
  
    let table = document.createElement("table");
    let tableBody = document.createElement("tbody");
  
    for (let i = 0; i < rows.value; i++) {
      let row = document.createElement("tr");
    
    for (let j = 0; j < columns.value; j++) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(`Row: ${i+1} Column: ${j+1}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.style.border = "2px solid black";
    }
  
        tableBody.appendChild(row);
    }
  
        table.appendChild(tableBody);
        
        body.appendChild(table);
        table.style.border = '2px solid black';

}

  createTable.addEventListener('click', function(){
    generate_table(); },{
      once: true
})


