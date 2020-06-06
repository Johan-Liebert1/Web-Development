var number_of_squares = 6;
var colors = generate_random_color(number_of_squares);
var squares = document.querySelectorAll(".square");
var picked_color = colors[pick_random_color()];
var color_display = document.getElementById("color_display");
color_display.textContent = picked_color;
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset_button = document.querySelector("#reset");
var mode_button = document.querySelectorAll(".mode");

easybtn.addEventListener("click", function () {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    number_of_squares = 3;
    colors = generate_random_color(number_of_squares);
    picked_color = colors[pick_random_color()];
    color_display.textContent = picked_color;
    h1.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++) {
        if (i <= 2)
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }

})

hardbtn.addEventListener("click", function () {
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    number_of_squares = 6;
    colors = generate_random_color(number_of_squares);
    picked_color = colors[pick_random_color()];
    color_display.textContent = picked_color;
    h1.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.backgroundColor = colors[i];
        if (i > 2)
            squares[i].style.display = "block";
    }
})

reset_button.addEventListener("click", function () {
    colors = generate_random_color(number_of_squares);
    picked_color = colors[pick_random_color()];
    color_display.textContent = picked_color;
    message.textContent = "";
    this.textContent = "new colors"; //Always use this to refer to the current element

    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = colors[i];

    h1.style.backgroundColor = "steelblue";
})

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        //to get the color of the clicked box
        var clicked_color = this.style.backgroundColor;
        if (clicked_color === picked_color) {
            message.textContent = "Correct";
            change_color_of_squares_after_winning(picked_color);
            h1.style.backgroundColor = picked_color;
            reset_button.textContent = "Play Again";
        }
        else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    })
}

function change_color_of_squares_after_winning(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pick_random_color() {
    return Math.floor(Math.random() * colors.length);
}

function generate_random_color(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        string = "";
        string += "rgb(";
        string += (Math.floor(Math.random() * 255));
        string += ", "
        string += (Math.floor(Math.random() * 255));
        string += ", "
        string += (Math.floor(Math.random() * 255));
        string += ")"
        array.push(string);
    }
    return array;
}