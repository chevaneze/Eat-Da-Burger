$(document).ready(function () {
    $(".change-devour").on("click", (event) => {
        event.preventDefault();
        let id = $(this).sibling(".burger-id");
        console.log("Onclick id" + id);
        alert('clicked');
 
        $.ajax("/burger/" + id, {
            type: "PUT",
        }).then((data) => {
            console.log("changed devoured to true");
            location.reload();
        }
        );
    });

    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        let newburger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log(newburger);

        $.ajax("/burger", {
            type: "POST",
            data: newburger
        }).then(() => {
            console.log("created new burger");
            location.reload();
        }
        );
    });

    $(".delete-burger").on("click", (event) => {
        var id = $(this).data("id");


        $.ajax("/burger/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("deleted burger", id);
            location.reload();
        })
    })
});
