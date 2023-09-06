function total() {
    var Latte;
    var Cappuccino;
    var Espresso;
    var Machiato;
    var FlatWhite;
    var Americano;
    var MintChocolate;
    var CaramelBreeze;
    var CookiesCream;
    var HazelNutMocha;
    var MatchaCream;
    var VanillaCream;
    var HotChocolate;
    var RedVelvet;
    var sum;
    Latte = parseInt(document.getElementById("qty1").value);
    Cappuccino = parseInt(document.getElementById("qty2").value);
    Espresso = parseInt(document.getElementById("qty3").value);
    Machiato = parseInt(document.getElementById("qty4").value);
    FlatWhite = parseInt(document.getElementById("qty5").value);
    Americano = parseInt(document.getElementById("qty6").value);
    MintChocolate = parseInt(document.getElementById("qty7").value);
    CaramelBreeze = parseInt(document.getElementById("qty8").value);
    CookiesCream = parseInt(document.getElementById("qty9").value);
    HazelNutMocha = parseInt(document.getElementById("qty10").value);
    MatchaCream = parseInt(document.getElementById("qty11").value);
    VanillaCream = parseInt(document.getElementById("qty12").value);
    HotChocolate = parseInt(document.getElementById("qty13").value);
    RedVelvet = parseInt(document.getElementById("qty14").value);
    sum = (Latte * 4.50) + (Cappuccino * 4.50) + (Espresso * 4.50) + (Machiato * 4.50) + (FlatWhite * 4.50) + (Americano * 4.50) + (MintChocolate * 4.50) + (CaramelBreeze * 4.50) + (CookiesCream * 4.50) + (HazelNutMocha * 4.50) + (MatchaCream * 4.50) + (VanillaCream * 4.50) + (HotChocolate * 4.50) + (RedVelvet * 4.50)
    document.getElementById("total_cost").innerHTML = "AUD "+sum+".00";

  }
  function submit() {
    alert("Your Order has been Submitted, Successfully!");
  }