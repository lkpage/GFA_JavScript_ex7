$("button#buttonSubmit").click(function () {
    console.log("Yeah, you clicked on 'Submit'!");
});

$("button#button2").click(function () {
    $("button#buttonSubmit").text("Some new text..")
    console.log("Now you clicked on the 2nd button and changed the text on the 1st button!");
});

buttonColor = "blue";
$('button').css('background', buttonColor);

var button3clickCount = 0;

$('#button3').click(function () {
    button3clickCount++;
    if (button3clickCount == 1) {
        var buttonColor = $('input').val();
        console.log(buttonColor);
        if (buttonColor == "black") {
            $("button").css('color', 'white');
        } else {
            $("button").css('color', 'black');
        }
        $("button").css('background-color', buttonColor);
    } else {
        alert("The color can be changed only once!")
    }
});