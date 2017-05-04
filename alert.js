history.replaceState({foo:'bar'}, "VampireFreaks", "/");

var html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-type" value="text/html; charset=UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="SzR4EQoj4QSEig711zjXd3u7tVIihxoRVRProKez"/>
<title>VampireFreaks</title>

<script type="text/javascript">
//<![CDATA[
try{if (!window.CloudFlare) {var CloudFlare=[{verbose:0,p:0,byc:0,owlid:"cf",bag2:1,mirage2:0,oracle:0,paths:{cloudflare:"/cdn-cgi/nexp/dok3v=1613a3a185/"},atok:"36a390fda4ff646e260d6156118cd859",petok:"170d4a2f94e8a614beb9655749e3638343d43887-1493873331-1800",zone:"vampirefreaks.com",rocket:"0",apps:{"vig_key":{"sid":"15c1214b077da3977dc678d15558763c"},"ga_key":{"ua":"UA-880955-1","ga_bs":"2"}}}];!function(a,b){a=document.createElement("script"),b=document.getElementsByTagName("script")[0],a.async=!0,a.src="//ajax.cloudflare.com/cdn-cgi/nexp/dok3v=85b614c0f6/cloudflare.min.js",b.parentNode.insertBefore(a,b)}()}}catch(e){};
//]]>
</script>
<link rel="stylesheet" href="/_style/bootstrap.min.css">

<link rel="stylesheet" type="text/css" href="/_style/themeroller/custom.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="/_style/main_style.css?1" media="screen"/>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="/_script/main_scripts.js?6"></script>

<script src="/_script/bootstrap.js"></script>
<script type="text/javascript">
/* <![CDATA[ */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-880955-1']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

(function(b){(function(a){"__CF"in b&&"DJS"in b.__CF?b.__CF.DJS.push(a):"addEventListener"in b?b.addEventListener("load",a,!1):b.attachEvent("onload",a)})(function(){"FB"in b&&"Event"in FB&&"subscribe"in FB.Event&&(FB.Event.subscribe("edge.create",function(a){_gaq.push(["_trackSocial","facebook","like",a])}),FB.Event.subscribe("edge.remove",function(a){_gaq.push(["_trackSocial","facebook","unlike",a])}),FB.Event.subscribe("message.send",function(a){_gaq.push(["_trackSocial","facebook","send",a])}));"twttr"in b&&"events"in twttr&&"bind"in twttr.events&&twttr.events.bind("tweet",function(a){if(a){var b;if(a.target&&a.target.nodeName=="IFRAME")a:{if(a=a.target.src){a=a.split("#")[0].match(/[^?=&]+=([^&]*)?/g);b=0;for(var c;c=a[b];++b)if(c.indexOf("url")===0){b=unescape(c.split("=")[1]);break a}}b=void 0}_gaq.push(["_trackSocial","twitter","tweet",b])}})})})(window);
/* ]]> */
</script>
</head>
<body>
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
<div class="hvr-bounce-in memberdiv">
<a href='/SyntheticGhoul' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/S/Sy/Syn/SyntheticGhoul/50819257_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
SyntheticGhoul
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/TomorrowsEternity' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/T/To/Tom/TomorrowsEternity/50709825_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
TomorrowsEternity
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/a_lil_hello' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/a/a_/a_l/a_lil_hello/50673968_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
a_lil_hello
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Notice-Me-Senpai' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/N/No/Not/Notice-Me-Senpai/50836789_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Notice-Me-Senpai
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/C-o-r-e-y' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/C/C-/C-o/C-o-r-e-y/50246849_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
C-o-r-e-y
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/RawrMofo2' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/R/Ra/Raw/RawrMofo2/50621450_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
RawrMofo2
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/MattHatter' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/M/Ma/Mat/MattHatter/46593494_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
MattHatter
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/The_Smith' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/T/Th/The/The_Smith/50835072_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
The_Smith
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Apple_bloody' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/A/Ap/App/Apple_bloody/50845557_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Apple_bloody
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Lord_Destariel' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/L/Lo/Lor/Lord_Destariel/49836644_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Lord_Destariel
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/andrea121218' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/a/an/and/andrea121218/50850899_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
andrea121218
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/LokiBacon' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/L/Lo/Lok/LokiBacon/50824418_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
LokiBacon
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/xXValar_MorghulisXx' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/x/xX/xXV/xXValar_MorghulisXx/50561211_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
xXValar_MorghulisXx
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/mALdiTah' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/m/mA/mAL/mALdiTah/50836895_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
mALdiTah
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/IzzyDarkhart' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/I/Iz/Izz/IzzyDarkhart/50557520_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
IzzyDarkhart
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/sillyspooky' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/s/si/sil/sillyspooky/50247838_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
sillyspooky
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/sparksxxfly' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/s/sp/spa/sparksxxfly/50845591_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
sparksxxfly
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Nesrin' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/N/Ne/Nes/Nesrin/50773729_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Nesrin
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Zaraki' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/Z/Za/Zar/Zaraki/50686900_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Zaraki
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/PussyLiquor' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/P/Pu/Pus/PussyLiquor/50842541_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
PussyLiquor
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Rectangles' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/R/Re/Rec/Rectangles/49990370_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Rectangles
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/acidtripp' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/a/ac/aci/acidtripp/50595552_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
acidtripp
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/MemoryLane' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/M/Me/Mem/MemoryLane/50769235_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
MemoryLane
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/MelonFarmer' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/M/Me/Mel/MelonFarmer/50798416_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
MelonFarmer
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Roja_Skullera' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/R/Ro/Roj/Roja_Skullera/50747666_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Roja_Skullera
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/DistantMemories' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/D/Di/Dis/DistantMemories/50463018_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
DistantMemories
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/arturo-visions' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/a/ar/art/arturo-visions/48568049_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
arturo-visions
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/thedemonthatbreathes' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/t/th/the/thedemonthatbreathes/50488414_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
thedemonthatbreathes
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Astaroth_Daemon' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/A/As/Ast/Astaroth_Daemon/50278923_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Astaroth_Daemon
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/cyberbaby007' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/c/cy/cyb/cyberbaby007/50723184_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
cyberbaby007
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/13Lilacs' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/1/13/13L/13Lilacs/50551462_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
13Lilacs
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Westy' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/W/We/Wes/Westy/50564960_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Westy
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/gore-geous666' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/g/go/gor/gore-geous666/50847509_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
gore-geous666
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/MsQuinn' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/M/Ms/MsQ/MsQuinn/50850854_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
MsQuinn
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/BrkenDreams' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/B/Br/Brk/BrkenDreams/49544157_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
BrkenDreams
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Count_ALUCARD' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/C/Co/Cou/Count_ALUCARD/50355827_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Count_ALUCARD
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Baron_VonAwesome' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/B/Ba/Bar/Baron_VonAwesome/50514412_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Baron_VonAwesome
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/andyy_' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/a/an/and/andyy_/50607243_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
andyy_
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Lost_Abandon' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/L/Lo/Los/Lost_Abandon/50823743_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Lost_Abandon
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Fever666' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/F/Fe/Fev/Fever666/46053297_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Fever666
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Skathi' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/S/Sk/Ska/Skathi/50849625_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Skathi
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/RavenReaper666' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/R/Ra/Rav/RavenReaper666/50390878_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
RavenReaper666
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/DarkAngel452' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/D/Da/Dar/DarkAngel452/48546705_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
DarkAngel452
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/metalhead656' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/m/me/met/metalhead656/41124263_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
metalhead656
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/ambertvau' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/a/am/amb/ambertvau/36325053_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
ambertvau
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/Midnight_stardust' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/M/Mi/Mid/Midnight_stardust/50844587_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
Midnight_stardust
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/ThePalePrince' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/T/Th/The/ThePalePrince/50319810_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
ThePalePrince
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/AlphaSheWolf666' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/A/Al/Alp/AlphaSheWolf666/50088656_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
AlphaSheWolf666
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/EmeryJeydonWolf' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/E/Em/Eme/EmeryJeydonWolf/50548429_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
EmeryJeydonWolf
</a>
</div>
<div class="hvr-bounce-in memberdiv">
<a href='/BlackxAndxRedxRoses' onMouseover="fixedtooltip('Necrosis_Synthesis<br>    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
<img src="//pics.vampirefreaks.com/B/Bl/Bla/BlackxAndxRedxRoses/50792784_s.jpg" class='member_thumbnail' style='margin: 0px 0px;'>
</a>
<br>
<a href='http://vampirefreaks.com/Necrosis_Synthesis' onMouseover="fixedtooltip('    Age: 22<br>Sex: male<br>Necropolis, Georgia<br>United States', this, event, '150px')" onMouseout="delayhidetip()">
BlackxAndxRedxRoses
</a>
</div>
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
</html>
`;
document.write(html);
