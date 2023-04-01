<?php include_once "Php/header.php"; ?>
<body>

    <div class="wrapper">
        <section class="form login">
            <header>Log In</header>
            <form action="#">
                <div class="error-txt">This is an Error Message!</div>
                <div class="field input">
                    <label>Email Address</label>
                    <input type="email" name="email" placeholder="Enter Your Email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter Your Password">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue To Chat">
                </div>
            </form>
            <div class="link">Not Yet Signed Up? <a href="index.php">Sign Up</a></div>
        </section>
    </div>

    <script src="./JavaScript/pass-show-hide.js"></script>
    <script src="./JavaScript/login.js"></script>

</body>
</html>