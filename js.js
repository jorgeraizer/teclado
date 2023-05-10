document.addEventListener('keydown', function(event) {
    var keyPressed = event.key.toLowerCase();
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.add('pressed');
            break;
        }
        if (keyPressed == "arrowleft")
        {
            keyPressed = "←"
        }

        if (keyPressed == "arrowright")
        {
            keyPressed = "→"
        }

        if (keyPressed == "arrowup")
        {
            keyPressed = "↑"
        }

        if (keyPressed == "arrowdown")
        {
            keyPressed = "↓"
        }

        if (keyPressed == "control")
        {
            keyPressed = "ctrl"
        }

        if (keyPressed == "1")
        {
            keyPressed = "!1"
        }

        if (keyPressed == "2")
        {
            keyPressed = "@2"
        }

        if (keyPressed == "3")
        {
            keyPressed = "#3"
        }

        if (keyPressed == "4")
        {
            keyPressed = "$4"
        }

        if (keyPressed == "5")
        {
            keyPressed = "%5"
        }

        if (keyPressed == "6")
        {
            keyPressed = "¨6"
        }

        if (keyPressed == "7")
        {
            keyPressed = "&7"
        }

        if (keyPressed == "8")
        {
            keyPressed = "*8"
        }

        if (keyPressed == "9")
        {
            keyPressed = "(9"
        }

        if (keyPressed == "0")
        {
            keyPressed = ")0"
        }

        if (keyPressed == "2")
        {
            keyPressed = "@2"
        }

        if (keyPressed == "3")
        {
            keyPressed = "#3"
        }

        if (keyPressed == "4")
        {
            keyPressed = "$4"
        }

        if (keyPressed == "5")
        {
            keyPressed = "%5"
        }

        if (keyPressed == "6")
        {
            keyPressed = "¨6"
        }

        if (keyPressed == "7")
        {
            keyPressed = "&7"
        }

        if (keyPressed == "8")
        {
            keyPressed = "*8"
        }

        if (keyPressed == "9")
        {
            keyPressed = "(9"
        }

        if (keyPressed == "[")
        {
            keyPressed = "{["
        }

        if (keyPressed == "]")
        {
            keyPressed = "}]"
        }

        if (keyPressed == ",")
        {
            keyPressed = "<,"
        }

        if (keyPressed == ".")
        {
            keyPressed = ">."
        }

        if (keyPressed == "/")
        {
            keyPressed = "?/"
        }

        if (keyPressed == "capslock")
        {
            keyPressed = "caps lock"
        }

        if (keyPressed == ";")
        {
            keyPressed = ":;"
        }

        if (keyPressed == "-")
        {
            keyPressed = "_-"
        }

        if (keyPressed == "=")
        {
            keyPressed = "+="
        }

       

        
        

        
       
    }
});

document.addEventListener('keyup', function(event) {
    var keyPressed = event.key.toLowerCase();
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent.toLowerCase() === keyPressed) {
            buttons[i].classList.remove('pressed');
            break;
        }
        if (keyPressed == "arrowleft")
        {
            keyPressed = "←"
        }

        if (keyPressed == "arrowright")
        {
            keyPressed = "→"
        }

        if (keyPressed == "arrowup")
        {
            keyPressed = "↑"
        }

        if (keyPressed == "arrowdown")
        {
            keyPressed = "↓"
        }

        if (keyPressed == "control")
        {
            keyPressed = "ctrl"
        }

        if (keyPressed == "1")
        {
            keyPressed = "!1"
        }

        if (keyPressed == "2")
        {
            keyPressed = "@2"
        }

        if (keyPressed == "3")
        {
            keyPressed = "#3"
        }

        if (keyPressed == "4")
        {
            keyPressed = "$4"
        }

        if (keyPressed == "5")
        {
            keyPressed = "%5"
        }

        if (keyPressed == "6")
        {
            keyPressed = "¨6"
        }

        if (keyPressed == "7")
        {
            keyPressed = "&7"
        }

        if (keyPressed == "8")
        {
            keyPressed = "*8"
        }

        if (keyPressed == "9")
        {
            keyPressed = "(9"
        }

        if (keyPressed == "0")
        {
            keyPressed = ")0"
        }

        if (keyPressed == "[")
        {
            keyPressed = "{["
        }

        if (keyPressed == "]")
        {
            keyPressed = "}]"
        }

        if (keyPressed == ",")
        {
            keyPressed = "<,"
        }

        if (keyPressed == ".")
        {
            keyPressed = ">."
        }

        if (keyPressed == "/")
        {
            keyPressed = "?/"
        }

        if (keyPressed == "capslock")
        {
            keyPressed = "caps lock"
        }

        if (keyPressed == ";")
        {
            keyPressed = ":;"
        }

        if (keyPressed == "-")
        {
            keyPressed = "_-"
        }

        if (keyPressed == "=")
        {
            keyPressed = "+="
        }

       
    }
});
