$("button#buttonSubmit").click(function () {
    console.log("Yeah, you clicked on 'Submit'!");
});

$("button#button2").click(function () {
    $("button#buttonSubmit").text("Some new text..")
    console.log("Now you clicked on the 2nd button and changed the text on the 1st button!");
});


$("button#button3").click(function() {
    $("button#buttonSubmit").css('background', "pink");
    $("button#button2").css('background', "violet");
    $("button#button3").css('background', "purple");
});

