function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;

     var years = document.getElementById("years").value;
     var interest = principal * years * rate /100;
     var year = new Date().getFullYear()+perseint(years);

}

function updaterate()
{

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innertext=rateval;



}
