function myFunction(){
    var input, filter, table, tr, td, id, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for(i=0; i<tr.length; i++)
    {
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        
        if(td || td1){
            txtValue = td.txtContent || td.innerText;
            txtValue1 = td1.txtContent || td1.innerText;

            if(txtValue.toUpperCase().indexOf(filter)>-1 ||  txtValue1.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}