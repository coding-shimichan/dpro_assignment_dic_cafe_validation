function showDropMenu() {
  $("#drop_menu_btn").click(function () {
    $("#drop_menu").slideToggle("500");
  });
}

$(function () {
  showDropMenu();
});
