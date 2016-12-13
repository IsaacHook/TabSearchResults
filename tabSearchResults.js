index = 0;
var offset1 = $(".srg>.g>.rc>.r>a").eq(0).offset().top;
var offset2 = $(".srg>.g>.rc>.r>a").eq(1).offset().top - offset1;

function focusOnResult(index) {
    $( document ).ready(function() {
        $(".srg>.g>.rc>.r>a")[index].focus();
    });
}

focusOnResult(index);

 $('body').keyup(function(e) {
    console.log('keyup called');
    var code = e.keyCode || e.which;
    if (code == '9') {
        console.log(index);
        index += 1;
        if (index == $(".srg>.g>.rc>.r>a").length){
            index = 0;
        }
        focusOnResult(index);
        var element = $(".srg>.g>.rc>.r>a").eq(index);
        var center = $(window).height() / 2;
        $('html, body').animate({
            scrollTop: element.offset().top - offset1
        },370);
    }
 });
 