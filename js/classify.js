$(document).ready(function () {
  loadClassify();
});

$("#height,#weight").keyup(function () {
  classify();
});
$("#gender").change(function () {
  loadClassify();
  classify();
});

function classify() {
  var gender = $("#gender").val();
  var height = $("#height").val();
  var weight = $("#weight").val();
  var type = $("#type").val();

  var bmi = weight / ((height / 100) * (height / 100));
  $("#bmi").val(bmi.toFixed(2));

  // ---- //
  $("#type" + type).removeClass("table-active");
  if (gender == 0) {
    if (height < 150 || weight < 41) {
      type = 5;
    } else if (
      (height >= 150 && height <= 153) ||
      (weight >= 41 && weight <= 44)
    ) {
      type = 4;
    } else if (
      (height >= 154 && height <= 157) ||
      (weight >= 45 && weight <= 46)
    ) {
      type = 3;
    } else if (
      (height >= 158 && height <= 162) ||
      (weight >= 47 && weight <= 49)
    ) {
      type = 2;
    } else if (height >= 163 || weight >= 50) {
      type = 1;
    }
  } else {
    if (height < 143 || weight < 38) {
      type = 5;
    } else if (
      (height >= 143 && height <= 146) ||
      (weight >= 38 && weight <= 39)
    ) {
      type = 4;
    } else if (
      (height >= 147 && height <= 150) ||
      (weight >= 40 && weight <= 42)
    ) {
      type = 3;
    } else if (
      (height >= 151 && height <= 154) ||
      (weight >= 43 && weight <= 44)
    ) {
      type = 2;
    } else if (height >= 155 || weight >= 45) {
      type = 1;
    }
  }
  console.log("TYPE");
  console.log(type);
  $("#type").val(type);
  $("#type" + type).addClass("table-active");
}

function loadClassify() {
  var gender = $("#gender").val();

  var type1weight = gender == 0 ? "50 trở lên" : "45 trở lên";
  var type1height = gender == 0 ? "163 trở lên" : "155 trở lên";

  var type2weight = gender == 0 ? "47 - 49" : "43 - 44";
  var type2height = gender == 0 ? "158 - 162" : "151 - 154";

  var type3weight = gender == 0 ? "45 - 46" : "40 - 42";
  var type3height = gender == 0 ? "154 - 157" : "147 - 150";

  var type4weight = gender == 0 ? "41 - 44" : "38 - 39";
  var type4height = gender == 0 ? "150 - 153" : "143 - 146";

  var type5weight = gender == 0 ? "dưới 41" : "dưới 38";
  var type5height = gender == 0 ? "dưới 150" : "dưới 143";

  $("#type1weight").html(type1weight);
  $("#type1height").html(type1height);
  $("#type2weight").html(type2weight);
  $("#type2height").html(type2height);
  $("#type3weight").html(type3weight);
  $("#type3height").html(type3height);
  $("#type4weight").html(type4weight);
  $("#type4height").html(type4height);
  $("#type5weight").html(type5weight);
  $("#type5height").html(type5height);
}
