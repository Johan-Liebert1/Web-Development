window.setTimeout(function () {
    var list = [];
    var what_to_do = prompt("What do you want to do? ");

    if (what_to_do != "new" && what_to_do !== "list" && what_to_do !== "quit") {
        console.log("Wrong input! ");
    }

    else {
        while (what_to_do !== "quit") {
            if (what_to_do === "new") {
                var new_item = prompt("Enter a new to-do ");
                list.push(new_item);
            }

            else if (what_to_do === "list") {
                console.log(list);
            }

            what_to_do = prompt("What do you want to do? ");
        }
    }
    // put all of your JS code from the lecture here
}, 500);