$(document).ready(function () {

  $("#login_button").click(function () {
    var m = $("#log_mobile_no").val();
    var p = $("#log_password").val();
    $("#passjs").html("");
    $("#mobilejs").html("");
    $("#passmobjs").html(" ");

    if (m == "") {
      $("#mobilejs").html("**empty field");

      return false;
    }
    if (isNaN(m)) {
      $("#mobilejs").html("**input only digits");

      return false;
    }
    if (m.length != 10) {
      $("#mobilejs").html("**mobile no. should be of 10 digits");

      return false;
    }
    else {
      $("#mobilejs").html("");

    }




    if (p == "") {
      $("#passjs").html("**empty field");

      return false;
    }
    if (p.length < 6) {
      $("#passjs").html("**password should be of minimum 6 chars. long");

      return false;
    }
    else {
      $("#passjs").html("");

    }





    var data = {
      "mobile_no": $("#log_mobile_no").val(),
      "password": $("#log_password").val()
    };
    //console.log(data);
    $.post("login.php", data,
      function (status1) {
        status1 = JSON.parse(status1);

        var entry = status1["entry"];

        if (entry == false) {
          $("#passmobjs").html("wrong username or password");
          return false;
        }

        else {
          console.log(status1);
          status1["mob"] = m;

          var items;

          sessionStorage.setItem("items", JSON.stringify(status1));

          if (status1["role"] == 1)
            window.location.href = "farmer_login.html";
          else if (status1["role"] == 2)

            window.location.href = "Industrialist.html";


        }






      });



  });
});