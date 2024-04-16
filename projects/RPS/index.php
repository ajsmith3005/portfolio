<?php session_start();
include 'doctype.php';

$validate = array( 
    "errors"    => false,
    "name"      => true,
    "email"     => true,
    "message"   => true,
    "hcaptcha"  => true
);

$submit_vals = array(
    "name"    => "",
    "email"   => "",
    "message" => ""
);

if (isset($_SESSION['validate'])):
    $validate = $_SESSION['validate'];
endif;

if(isset($_SESSION['submission-status']) && $_SESSION['submission-status'] == "submitted"):
    $submission_status = $_SESSION['submission-status'];
endif;

if(isset($_SESSION['submit-vals'])):
    $submit_vals = $_SESSION['submit-vals'];
endif;

unset($_SESSION['validate']);
unset($_SESSION['submission-status']);
unset($_SESSION['submit-vals']);

?>
<body id="body">
    <?php include 'header.php';?>
    <main>
        <div id="landing">
            <div class="landing-container">
                <h1>Lorem Ipsum Dolor Sit Amet</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <a href="#contact" id="contact-button" class="button">Contact Us</a>
            </div>
        </div>
        <section id="about" class="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="btn-container"><a href="#contact" class="button dark-btn">Contact Us</a></div>
        </section>
        <section id="services" class="services content-wrapper">
            <div class="cards-container">
                <div class="card">
                    <h2>About Part Supply</h2>
                    <div class="card-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li>Ut enim ad minim veniam, quis</li>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat cupidatat</li>
                        </ul>
                        <p>Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div class="card">
                    <h2>Restoration Tools</h2>
                    <div class="card-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li>Ut enim ad minim veniam, quis</li>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat cupidatat</li>
                        </ul>
                        <p>Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div class="card">
                    <h2>Trades Welcome</h2>
                    <div class="card-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li>Ut enim ad minim veniam, quis</li>
                            <li>Duis aute irure dolor in reprehenderit</li>
                            <li>Excepteur sint occaecat cupidatat</li>
                        </ul>
                        <p>Non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact" class="contact">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br><a>555-555-5555</a> | <a>email@email.com</a></p>
            <?php
                if($validate['errors'] == true): 
                    if($validate['hcaptcha'] == false):
                    ?>
                        <p class="message card"><strong>Sorry, something went wrong. Please try submitting again.</strong></p>
                    <?php
                        else: ?>
                    <p class="message card"><strong>Please fill out all required fields.</strong></p>
            <?php
                    endif;
                endif; ?>
            <?php 
                if($submission_status != "submitted"):
                    ?>
                    <form class="content-wrapper" action="./mail.php" method="POST">
                        <label for="name">Name</label>
                        <input class="radiused <?php if($validate['name'] == false): echo "invalid"; endif;?>" name="name" type="text" <?php if ($submit_vals['name']): echo "value='" . $submit_vals['name'] . "'"; endif; ?>>
                        <label for="email">Email</label>
                        <input class="radiused <?php if($validate['email'] == false): echo "invalid"; endif;?>" name="email" type="email" <?php if ($submit_vals['email']): echo "value='" . $submit_vals['email'] . "'"; endif; ?>>
                        <label for="message">Message</label>
                        <textarea class="radiused <?php if($validate['message'] == false): echo "invalid"; endif;?>" name="message" id="message" cols="30" rows="10"><?php if ($submit_vals['message']): echo $submit_vals['message']; endif; ?></textarea>
                        <div class="h-captcha" data-sitekey="b1e94e19-0417-4965-8da8-1c1d3f34c0cd"></div>
                        <input class="button dark-btn submit" type="submit" value="Submit">
                    </form>
            <?php endif; ?>
            <?php 
                if($submission_status == "submitted"):
                    ?>
                    <div class="message card">
                        <p>Your message has been successfully sent! Thank you for reaching out. We'll get back to you soon.</p>
                    </div>
            <?php endif; ?>
        </section>
    </main>
    <?php include 'footer.php';?>
</body>
</html>