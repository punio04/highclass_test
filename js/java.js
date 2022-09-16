$(document).ready(function () {
  var over18 = jQuery.cookie('over18');
  if (over18 !== "Yes") {
    confirm();
  }
  $('.remove_cookie').click(function () {
    $.cookie('over18', '', { expires: 0 });
    location.reload();
  });
});

function confirm() {
  jQuery('#modal').modal({
    opacity: 80,
    overlayCss: { backgroundColor: "#000" },
    containerId: 'confirm_modal',
    position: ["30%",],
    onShow: function (dialog) {
      var modal = this;
      jQuery('.yes', dialog.data[0]).click(function () {
        var clifetime = new Date();
        clifetime.setTime(clifetime.getTime() + (2 * 60 * 60 * 1000));//2時間
        jQuery.cookie('over18', 'Yes', { expires: clifetime });
        modal.close();
      });
    }
  });
}