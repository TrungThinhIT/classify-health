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
    if (height < 150 || weight < 40) {
      type = 5;
    } else if (
      (height >= 150 && height <= 153) ||
      (weight >= 40 && weight <= 44)
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
  var type1weight = "";
  var type1height = "";
  var type2weight = "";
  var type2height = "";
  var type3weight = "";
  var type3height = "";
  var type4weight = "";
  var type4height = "";
  var type5weight = "";
  var type5height = "";
  if (gender == 0) {
    type1weight = "50 trở lên";
    type1height = "163 trở lên";
    type2weight = "47 - 49";
    type2height = "158 - 162";
    type3weight = "45 - 46";
    type3height = "154 - 157";
    type4weight = "41 - 44";
    type4height = "150 - 153";
    type5weight = "dưới 40";
    type5height = "dưới 150";
  } else {
    type1weight = "45 trở lên";
    type1height = "155 trở lên";
    type2weight = "43 - 44";
    type2height = "151 - 154";
    type3weight = "40 - 42";
    type3height = "147 - 150";
    type4weight = "38 - 39";
    type4height = "143 - 146";
    type5weight = "dưới 38";
    type5height = "dưới 143";
  }

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
