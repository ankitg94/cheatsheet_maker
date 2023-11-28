  
        const searchFun = () => {
            //search bar ke liye
        let filter =document.getElementsByClassName('.myInput').value.toUpperCase();
            //table-->

            //table-->tr(table row)
let tr = myTable.getElementsByTagName('h1');
for(var i=0;i<tr.length;i++){
let td = tr[i].getElementsByClassName('.myInput')[0];
if(td){
let textvale =td.textContent || td.innerHTML;
if(textvale.toUpperCase().indexOf(filter)>-1){
    tr[i].style.display='';
                }
                else{
                    tr[i].style.display='none';
                }
               }
              }
}  

    