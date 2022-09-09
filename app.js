function checkPasswordMatch() {
    var password = $("#inputPassword4").val();
    var confirmPassword = $("#inputPasswordConfirm4").val();
    if (password != confirmPassword)
        alert("Passwords does not match!");
}
$(document).ready(function () {
   $("#inputPasswordConfirm4").focusout(checkPasswordMatch);
});

feather.replace({ 'aria-hidden': 'true' });

$(".togglePassword").click(function (e) {
    e.preventDefault();
    var type = $(this).parent().parent().find(".password").attr("type");
    if(type == "password"){
        $("svg.feather.feather-eye").replaceWith(feather.icons["eye-off"].toSvg());        $(this).parent().parent().find(".password").attr("type","text");
    }else if(type == "text"){
        $("svg.feather.feather-eye-off").replaceWith(feather.icons["eye"].toSvg());
        $(this).parent().parent().find(".password").attr("type","password");
    }
});
