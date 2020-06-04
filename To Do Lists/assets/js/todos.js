$("ul").on("click", "li", function () {
    // on will help to run this function on new dynamically created lis
    // to use on, we need to pass in (in the "()" after "$") an element that is always there when the 
    //page loads
    $(this).toggleClass("completed");
})

//click on X to deltete to do

$("ul").on("click", "li span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
        //we won't say this.parent.remove as now "this" points to "this.parent"
    });
    event.stopPropagation();
    //as a click on the span also registers as a click on an li, this will stop the event from bubbling
})

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todo_text = $(this).val();

        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todo_text + "</li>")
        $(this).val("");
    }

})

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})