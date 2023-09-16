!DOCTYPE html>
<html>
<head>
    <title>Login Form with JavaScript</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f2f2f2;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        h2 {
            text-align: center;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007BFF;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .error {
            color: red;
            font-size: 14px;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Login</h2>

    <form id="loginForm">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
        </div>

        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>

        <div>
            <input type="submit" value="Login">
        </div>
    </form>
    <div id="error" class="error"></div>
</div>

<script>
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to the server

        // Get input values
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // You can add your login logic here.
        // For this example, we'll just perform basic validation.

        if (username === "" || password === "") {
            document.getElementById("error").textContent = "Username and password are required.";
        } else {
            // Clear any previous error message
            document.getElementById("error").textContent = "";

            // You can submit the form to the server here or perform further actions.
            // For demonstration, we'll show an alert.
            alert("Login successful!");
        }
    });
</script>

</body>
</html>