<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>BotBoot</title>
    <script type="text/javascript">
        var a = Math.ceil(Math.random() * 10);
        var b = Math.ceil(Math.random() * 10);       
        var c = a + b;

        function DrawBotBoot() {
            document.write("What is "+ a + " + " + b +"? ");
            document.write("<input id='BotBootInput' type='text' maxlength='2' size='2'/>");
        }    

        function ValidBotBoot() {
            var d = document.getElementById('BotBootInput').value;
            if (d == c) {
                window.location.href = "https://www.google.com";
            } else {
                alert("Incorrect answer. Please try again.");
            }
        }
    </script>
</head>
<body>
    Are you human?<br />
    <script type="text/javascript">DrawBotBoot()</script>
    <input id="Button1" type="button" value="Check" onclick="ValidBotBoot();"/>
</body>
</html>
