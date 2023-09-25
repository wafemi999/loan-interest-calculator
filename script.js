function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");

    // To convert the  No. of Years’ into the actual year in the future:
    var year = new Date().getFullYear() + parseInt(years);

    ///condition to check user inputed valid no

    if (principal <= 0) {

        alert("Please enter a positive number!");
        document.getElementById(principal).focus();
        
    }

    else {

        result.innerHTML = "if you deposit $ " + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of "+ "<mark>"+ rate + "%"  + "</mark>" + "\<br\> you will get $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }


    
}
  

function updateRate() {

    //this will get the value inputed by user,
    //then value will change as slider moves 
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText = rateval
    
}