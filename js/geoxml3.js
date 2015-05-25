



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAeMwqaXlXZzeOX6xu0Ufz2XnON_OA:1432529163416";
 
 
 var CS_env = {"profileUrl": "/u/114488177952844137195/", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/3197964839662303775", "token": "ABZ6GAeMwqaXlXZzeOX6xu0Ufz2XnON_OA:1432529163416", "projectHomeUrl": "/p/geoxml3", "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "projectName": "geoxml3", "loggedInUserEmail": "matt@lapora.org"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>geoxml3.js - 
 geoxml3 -
 
 
 KML processor for the Google Maps JavaScript API V3 - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/3197964839662303775/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/3197964839662303775/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/3197964839662303775/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/3197964839662303775/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>matt@lapora.org</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/114488177952844137195/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/114488177952844137195/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Fgeoxml3%2Fsource%2Fbrowse%2Fbranches%2Fkmz%2Fgeoxml3.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/geoxml3">
 <a href="/p/geoxml3/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/geoxml3/"><span itemprop="name">geoxml3</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/geoxml3/"><span itemprop="description">KML processor for the Google Maps JavaScript API V3</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/geoxml3/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 
 
 <a href="/p/geoxml3/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/geoxml3/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/geoxml3/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 
 
 
 <a href="https://code.google.com/export-to-github/export?project=geoxml3">
 <button>Export to GitHub</button>
 
 </a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/geoxml3/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/geoxml3/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/geoxml3/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/geoxml3/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/geoxml3/source/browse/branches/">branches</a><span class="sp">/&nbsp;</span><a href="/p/geoxml3/source/browse/branches/kmz/">kmz</a><span class="sp">/&nbsp;</span>geoxml3.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/geoxml3/source/browse/branches/kmz/geoxml3.js?edit=1"
 ><img src="https://ssl.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/geoxml3/source/browse/branches/kmz/geoxml3.js?r=123" title="Previous">&lsaquo;r123</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r124</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn124_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn124_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn124_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn124_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn124_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn124_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn124_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn124_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn124_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn124_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn124_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn124_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn124_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn124_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn124_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn124_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn124_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn124_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn124_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn124_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn124_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn124_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn124_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn124_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn124_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn124_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn124_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn124_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn124_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn124_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn124_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn124_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn124_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn124_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn124_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn124_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn124_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn124_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn124_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn124_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn124_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn124_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn124_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn124_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn124_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn124_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn124_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn124_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn124_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn124_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn124_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn124_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn124_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn124_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn124_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn124_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn124_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn124_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn124_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn124_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn124_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn124_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn124_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn124_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn124_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn124_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn124_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn124_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn124_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn124_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn124_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn124_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn124_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn124_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn124_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn124_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn124_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn124_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn124_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn124_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn124_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn124_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn124_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn124_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn124_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn124_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn124_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn124_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn124_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn124_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn124_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn124_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn124_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn124_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn124_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn124_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn124_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn124_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn124_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn124_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn124_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn124_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn124_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn124_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn124_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn124_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn124_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn124_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn124_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn124_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn124_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn124_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn124_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn124_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn124_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn124_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn124_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn124_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn124_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn124_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn124_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn124_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn124_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn124_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn124_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn124_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn124_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn124_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn124_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn124_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn124_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn124_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn124_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn124_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn124_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn124_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn124_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn124_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn124_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn124_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn124_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn124_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn124_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn124_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn124_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn124_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn124_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn124_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn124_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn124_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn124_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn124_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn124_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn124_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn124_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn124_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn124_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn124_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn124_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn124_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn124_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn124_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn124_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn124_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn124_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn124_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn124_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn124_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn124_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn124_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn124_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn124_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn124_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn124_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn124_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn124_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn124_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn124_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn124_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn124_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn124_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn124_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn124_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn124_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn124_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn124_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn124_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn124_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn124_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn124_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn124_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn124_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn124_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn124_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn124_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn124_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn124_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn124_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn124_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn124_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn124_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn124_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn124_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn124_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn124_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn124_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn124_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn124_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn124_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn124_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn124_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn124_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn124_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn124_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn124_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn124_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn124_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn124_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn124_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn124_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn124_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn124_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn124_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn124_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn124_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn124_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn124_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn124_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn124_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn124_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn124_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn124_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn124_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn124_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn124_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn124_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn124_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn124_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn124_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn124_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn124_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn124_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn124_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn124_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn124_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn124_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn124_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn124_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn124_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn124_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn124_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn124_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn124_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn124_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn124_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn124_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn124_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn124_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn124_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn124_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn124_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn124_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn124_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn124_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn124_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn124_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn124_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn124_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn124_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn124_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn124_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn124_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn124_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn124_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn124_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn124_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn124_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn124_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn124_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn124_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn124_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn124_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn124_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn124_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn124_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn124_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn124_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn124_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn124_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn124_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn124_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn124_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn124_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn124_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn124_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn124_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn124_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn124_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn124_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn124_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn124_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn124_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn124_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn124_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn124_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn124_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn124_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn124_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn124_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn124_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn124_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn124_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn124_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn124_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn124_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn124_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn124_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn124_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn124_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn124_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn124_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn124_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn124_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn124_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn124_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn124_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn124_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn124_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn124_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn124_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn124_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn124_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn124_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn124_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn124_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn124_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn124_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn124_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn124_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn124_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn124_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn124_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn124_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn124_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn124_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn124_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn124_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn124_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn124_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn124_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn124_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn124_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn124_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn124_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn124_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn124_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn124_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn124_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn124_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn124_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn124_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn124_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn124_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn124_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn124_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn124_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn124_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn124_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn124_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn124_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn124_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn124_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn124_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn124_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn124_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn124_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn124_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn124_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn124_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn124_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn124_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn124_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn124_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn124_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn124_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn124_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn124_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn124_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn124_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn124_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn124_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn124_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn124_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn124_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn124_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn124_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn124_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn124_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn124_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn124_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn124_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn124_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn124_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn124_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn124_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn124_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn124_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn124_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn124_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn124_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn124_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn124_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn124_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn124_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn124_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn124_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn124_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn124_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn124_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn124_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn124_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn124_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn124_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn124_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn124_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn124_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn124_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn124_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn124_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn124_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn124_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn124_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn124_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn124_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn124_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn124_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn124_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn124_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn124_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn124_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn124_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn124_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn124_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn124_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn124_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn124_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn124_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn124_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn124_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn124_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn124_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn124_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn124_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn124_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn124_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn124_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn124_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn124_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn124_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn124_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn124_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn124_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn124_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn124_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn124_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn124_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn124_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn124_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn124_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn124_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn124_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn124_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn124_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn124_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn124_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn124_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn124_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn124_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn124_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn124_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn124_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn124_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn124_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn124_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn124_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn124_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn124_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn124_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn124_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn124_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn124_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn124_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn124_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn124_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn124_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn124_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn124_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn124_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn124_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn124_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn124_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn124_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn124_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn124_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn124_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn124_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn124_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn124_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn124_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn124_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn124_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn124_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn124_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn124_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn124_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn124_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn124_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn124_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn124_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn124_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn124_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn124_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn124_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn124_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn124_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn124_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn124_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn124_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn124_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn124_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn124_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn124_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn124_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn124_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn124_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn124_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn124_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn124_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn124_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn124_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn124_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn124_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn124_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn124_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn124_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn124_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn124_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn124_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn124_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn124_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn124_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn124_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn124_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn124_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn124_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn124_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn124_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn124_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn124_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn124_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn124_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn124_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn124_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn124_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn124_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn124_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn124_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn124_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn124_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn124_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn124_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn124_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn124_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn124_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn124_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn124_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn124_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn124_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn124_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn124_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn124_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn124_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn124_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn124_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn124_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn124_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn124_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn124_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn124_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn124_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn124_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn124_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn124_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn124_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn124_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn124_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn124_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn124_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn124_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn124_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn124_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn124_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn124_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn124_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn124_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn124_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn124_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn124_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn124_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn124_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn124_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn124_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn124_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn124_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn124_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn124_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn124_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn124_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn124_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn124_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn124_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn124_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn124_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn124_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn124_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn124_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn124_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn124_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn124_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn124_630"

><td id="630"><a href="#630">630</a></td></tr
><tr id="gr_svn124_631"

><td id="631"><a href="#631">631</a></td></tr
><tr id="gr_svn124_632"

><td id="632"><a href="#632">632</a></td></tr
><tr id="gr_svn124_633"

><td id="633"><a href="#633">633</a></td></tr
><tr id="gr_svn124_634"

><td id="634"><a href="#634">634</a></td></tr
><tr id="gr_svn124_635"

><td id="635"><a href="#635">635</a></td></tr
><tr id="gr_svn124_636"

><td id="636"><a href="#636">636</a></td></tr
><tr id="gr_svn124_637"

><td id="637"><a href="#637">637</a></td></tr
><tr id="gr_svn124_638"

><td id="638"><a href="#638">638</a></td></tr
><tr id="gr_svn124_639"

><td id="639"><a href="#639">639</a></td></tr
><tr id="gr_svn124_640"

><td id="640"><a href="#640">640</a></td></tr
><tr id="gr_svn124_641"

><td id="641"><a href="#641">641</a></td></tr
><tr id="gr_svn124_642"

><td id="642"><a href="#642">642</a></td></tr
><tr id="gr_svn124_643"

><td id="643"><a href="#643">643</a></td></tr
><tr id="gr_svn124_644"

><td id="644"><a href="#644">644</a></td></tr
><tr id="gr_svn124_645"

><td id="645"><a href="#645">645</a></td></tr
><tr id="gr_svn124_646"

><td id="646"><a href="#646">646</a></td></tr
><tr id="gr_svn124_647"

><td id="647"><a href="#647">647</a></td></tr
><tr id="gr_svn124_648"

><td id="648"><a href="#648">648</a></td></tr
><tr id="gr_svn124_649"

><td id="649"><a href="#649">649</a></td></tr
><tr id="gr_svn124_650"

><td id="650"><a href="#650">650</a></td></tr
><tr id="gr_svn124_651"

><td id="651"><a href="#651">651</a></td></tr
><tr id="gr_svn124_652"

><td id="652"><a href="#652">652</a></td></tr
><tr id="gr_svn124_653"

><td id="653"><a href="#653">653</a></td></tr
><tr id="gr_svn124_654"

><td id="654"><a href="#654">654</a></td></tr
><tr id="gr_svn124_655"

><td id="655"><a href="#655">655</a></td></tr
><tr id="gr_svn124_656"

><td id="656"><a href="#656">656</a></td></tr
><tr id="gr_svn124_657"

><td id="657"><a href="#657">657</a></td></tr
><tr id="gr_svn124_658"

><td id="658"><a href="#658">658</a></td></tr
><tr id="gr_svn124_659"

><td id="659"><a href="#659">659</a></td></tr
><tr id="gr_svn124_660"

><td id="660"><a href="#660">660</a></td></tr
><tr id="gr_svn124_661"

><td id="661"><a href="#661">661</a></td></tr
><tr id="gr_svn124_662"

><td id="662"><a href="#662">662</a></td></tr
><tr id="gr_svn124_663"

><td id="663"><a href="#663">663</a></td></tr
><tr id="gr_svn124_664"

><td id="664"><a href="#664">664</a></td></tr
><tr id="gr_svn124_665"

><td id="665"><a href="#665">665</a></td></tr
><tr id="gr_svn124_666"

><td id="666"><a href="#666">666</a></td></tr
><tr id="gr_svn124_667"

><td id="667"><a href="#667">667</a></td></tr
><tr id="gr_svn124_668"

><td id="668"><a href="#668">668</a></td></tr
><tr id="gr_svn124_669"

><td id="669"><a href="#669">669</a></td></tr
><tr id="gr_svn124_670"

><td id="670"><a href="#670">670</a></td></tr
><tr id="gr_svn124_671"

><td id="671"><a href="#671">671</a></td></tr
><tr id="gr_svn124_672"

><td id="672"><a href="#672">672</a></td></tr
><tr id="gr_svn124_673"

><td id="673"><a href="#673">673</a></td></tr
><tr id="gr_svn124_674"

><td id="674"><a href="#674">674</a></td></tr
><tr id="gr_svn124_675"

><td id="675"><a href="#675">675</a></td></tr
><tr id="gr_svn124_676"

><td id="676"><a href="#676">676</a></td></tr
><tr id="gr_svn124_677"

><td id="677"><a href="#677">677</a></td></tr
><tr id="gr_svn124_678"

><td id="678"><a href="#678">678</a></td></tr
><tr id="gr_svn124_679"

><td id="679"><a href="#679">679</a></td></tr
><tr id="gr_svn124_680"

><td id="680"><a href="#680">680</a></td></tr
><tr id="gr_svn124_681"

><td id="681"><a href="#681">681</a></td></tr
><tr id="gr_svn124_682"

><td id="682"><a href="#682">682</a></td></tr
><tr id="gr_svn124_683"

><td id="683"><a href="#683">683</a></td></tr
><tr id="gr_svn124_684"

><td id="684"><a href="#684">684</a></td></tr
><tr id="gr_svn124_685"

><td id="685"><a href="#685">685</a></td></tr
><tr id="gr_svn124_686"

><td id="686"><a href="#686">686</a></td></tr
><tr id="gr_svn124_687"

><td id="687"><a href="#687">687</a></td></tr
><tr id="gr_svn124_688"

><td id="688"><a href="#688">688</a></td></tr
><tr id="gr_svn124_689"

><td id="689"><a href="#689">689</a></td></tr
><tr id="gr_svn124_690"

><td id="690"><a href="#690">690</a></td></tr
><tr id="gr_svn124_691"

><td id="691"><a href="#691">691</a></td></tr
><tr id="gr_svn124_692"

><td id="692"><a href="#692">692</a></td></tr
><tr id="gr_svn124_693"

><td id="693"><a href="#693">693</a></td></tr
><tr id="gr_svn124_694"

><td id="694"><a href="#694">694</a></td></tr
><tr id="gr_svn124_695"

><td id="695"><a href="#695">695</a></td></tr
><tr id="gr_svn124_696"

><td id="696"><a href="#696">696</a></td></tr
><tr id="gr_svn124_697"

><td id="697"><a href="#697">697</a></td></tr
><tr id="gr_svn124_698"

><td id="698"><a href="#698">698</a></td></tr
><tr id="gr_svn124_699"

><td id="699"><a href="#699">699</a></td></tr
><tr id="gr_svn124_700"

><td id="700"><a href="#700">700</a></td></tr
><tr id="gr_svn124_701"

><td id="701"><a href="#701">701</a></td></tr
><tr id="gr_svn124_702"

><td id="702"><a href="#702">702</a></td></tr
><tr id="gr_svn124_703"

><td id="703"><a href="#703">703</a></td></tr
><tr id="gr_svn124_704"

><td id="704"><a href="#704">704</a></td></tr
><tr id="gr_svn124_705"

><td id="705"><a href="#705">705</a></td></tr
><tr id="gr_svn124_706"

><td id="706"><a href="#706">706</a></td></tr
><tr id="gr_svn124_707"

><td id="707"><a href="#707">707</a></td></tr
><tr id="gr_svn124_708"

><td id="708"><a href="#708">708</a></td></tr
><tr id="gr_svn124_709"

><td id="709"><a href="#709">709</a></td></tr
><tr id="gr_svn124_710"

><td id="710"><a href="#710">710</a></td></tr
><tr id="gr_svn124_711"

><td id="711"><a href="#711">711</a></td></tr
><tr id="gr_svn124_712"

><td id="712"><a href="#712">712</a></td></tr
><tr id="gr_svn124_713"

><td id="713"><a href="#713">713</a></td></tr
><tr id="gr_svn124_714"

><td id="714"><a href="#714">714</a></td></tr
><tr id="gr_svn124_715"

><td id="715"><a href="#715">715</a></td></tr
><tr id="gr_svn124_716"

><td id="716"><a href="#716">716</a></td></tr
><tr id="gr_svn124_717"

><td id="717"><a href="#717">717</a></td></tr
><tr id="gr_svn124_718"

><td id="718"><a href="#718">718</a></td></tr
><tr id="gr_svn124_719"

><td id="719"><a href="#719">719</a></td></tr
><tr id="gr_svn124_720"

><td id="720"><a href="#720">720</a></td></tr
><tr id="gr_svn124_721"

><td id="721"><a href="#721">721</a></td></tr
><tr id="gr_svn124_722"

><td id="722"><a href="#722">722</a></td></tr
><tr id="gr_svn124_723"

><td id="723"><a href="#723">723</a></td></tr
><tr id="gr_svn124_724"

><td id="724"><a href="#724">724</a></td></tr
><tr id="gr_svn124_725"

><td id="725"><a href="#725">725</a></td></tr
><tr id="gr_svn124_726"

><td id="726"><a href="#726">726</a></td></tr
><tr id="gr_svn124_727"

><td id="727"><a href="#727">727</a></td></tr
><tr id="gr_svn124_728"

><td id="728"><a href="#728">728</a></td></tr
><tr id="gr_svn124_729"

><td id="729"><a href="#729">729</a></td></tr
><tr id="gr_svn124_730"

><td id="730"><a href="#730">730</a></td></tr
><tr id="gr_svn124_731"

><td id="731"><a href="#731">731</a></td></tr
><tr id="gr_svn124_732"

><td id="732"><a href="#732">732</a></td></tr
><tr id="gr_svn124_733"

><td id="733"><a href="#733">733</a></td></tr
><tr id="gr_svn124_734"

><td id="734"><a href="#734">734</a></td></tr
><tr id="gr_svn124_735"

><td id="735"><a href="#735">735</a></td></tr
><tr id="gr_svn124_736"

><td id="736"><a href="#736">736</a></td></tr
><tr id="gr_svn124_737"

><td id="737"><a href="#737">737</a></td></tr
><tr id="gr_svn124_738"

><td id="738"><a href="#738">738</a></td></tr
><tr id="gr_svn124_739"

><td id="739"><a href="#739">739</a></td></tr
><tr id="gr_svn124_740"

><td id="740"><a href="#740">740</a></td></tr
><tr id="gr_svn124_741"

><td id="741"><a href="#741">741</a></td></tr
><tr id="gr_svn124_742"

><td id="742"><a href="#742">742</a></td></tr
><tr id="gr_svn124_743"

><td id="743"><a href="#743">743</a></td></tr
><tr id="gr_svn124_744"

><td id="744"><a href="#744">744</a></td></tr
><tr id="gr_svn124_745"

><td id="745"><a href="#745">745</a></td></tr
><tr id="gr_svn124_746"

><td id="746"><a href="#746">746</a></td></tr
><tr id="gr_svn124_747"

><td id="747"><a href="#747">747</a></td></tr
><tr id="gr_svn124_748"

><td id="748"><a href="#748">748</a></td></tr
><tr id="gr_svn124_749"

><td id="749"><a href="#749">749</a></td></tr
><tr id="gr_svn124_750"

><td id="750"><a href="#750">750</a></td></tr
><tr id="gr_svn124_751"

><td id="751"><a href="#751">751</a></td></tr
><tr id="gr_svn124_752"

><td id="752"><a href="#752">752</a></td></tr
><tr id="gr_svn124_753"

><td id="753"><a href="#753">753</a></td></tr
><tr id="gr_svn124_754"

><td id="754"><a href="#754">754</a></td></tr
><tr id="gr_svn124_755"

><td id="755"><a href="#755">755</a></td></tr
><tr id="gr_svn124_756"

><td id="756"><a href="#756">756</a></td></tr
><tr id="gr_svn124_757"

><td id="757"><a href="#757">757</a></td></tr
><tr id="gr_svn124_758"

><td id="758"><a href="#758">758</a></td></tr
><tr id="gr_svn124_759"

><td id="759"><a href="#759">759</a></td></tr
><tr id="gr_svn124_760"

><td id="760"><a href="#760">760</a></td></tr
><tr id="gr_svn124_761"

><td id="761"><a href="#761">761</a></td></tr
><tr id="gr_svn124_762"

><td id="762"><a href="#762">762</a></td></tr
><tr id="gr_svn124_763"

><td id="763"><a href="#763">763</a></td></tr
><tr id="gr_svn124_764"

><td id="764"><a href="#764">764</a></td></tr
><tr id="gr_svn124_765"

><td id="765"><a href="#765">765</a></td></tr
><tr id="gr_svn124_766"

><td id="766"><a href="#766">766</a></td></tr
><tr id="gr_svn124_767"

><td id="767"><a href="#767">767</a></td></tr
><tr id="gr_svn124_768"

><td id="768"><a href="#768">768</a></td></tr
><tr id="gr_svn124_769"

><td id="769"><a href="#769">769</a></td></tr
><tr id="gr_svn124_770"

><td id="770"><a href="#770">770</a></td></tr
><tr id="gr_svn124_771"

><td id="771"><a href="#771">771</a></td></tr
><tr id="gr_svn124_772"

><td id="772"><a href="#772">772</a></td></tr
><tr id="gr_svn124_773"

><td id="773"><a href="#773">773</a></td></tr
><tr id="gr_svn124_774"

><td id="774"><a href="#774">774</a></td></tr
><tr id="gr_svn124_775"

><td id="775"><a href="#775">775</a></td></tr
><tr id="gr_svn124_776"

><td id="776"><a href="#776">776</a></td></tr
><tr id="gr_svn124_777"

><td id="777"><a href="#777">777</a></td></tr
><tr id="gr_svn124_778"

><td id="778"><a href="#778">778</a></td></tr
><tr id="gr_svn124_779"

><td id="779"><a href="#779">779</a></td></tr
><tr id="gr_svn124_780"

><td id="780"><a href="#780">780</a></td></tr
><tr id="gr_svn124_781"

><td id="781"><a href="#781">781</a></td></tr
><tr id="gr_svn124_782"

><td id="782"><a href="#782">782</a></td></tr
><tr id="gr_svn124_783"

><td id="783"><a href="#783">783</a></td></tr
><tr id="gr_svn124_784"

><td id="784"><a href="#784">784</a></td></tr
><tr id="gr_svn124_785"

><td id="785"><a href="#785">785</a></td></tr
><tr id="gr_svn124_786"

><td id="786"><a href="#786">786</a></td></tr
><tr id="gr_svn124_787"

><td id="787"><a href="#787">787</a></td></tr
><tr id="gr_svn124_788"

><td id="788"><a href="#788">788</a></td></tr
><tr id="gr_svn124_789"

><td id="789"><a href="#789">789</a></td></tr
><tr id="gr_svn124_790"

><td id="790"><a href="#790">790</a></td></tr
><tr id="gr_svn124_791"

><td id="791"><a href="#791">791</a></td></tr
><tr id="gr_svn124_792"

><td id="792"><a href="#792">792</a></td></tr
><tr id="gr_svn124_793"

><td id="793"><a href="#793">793</a></td></tr
><tr id="gr_svn124_794"

><td id="794"><a href="#794">794</a></td></tr
><tr id="gr_svn124_795"

><td id="795"><a href="#795">795</a></td></tr
><tr id="gr_svn124_796"

><td id="796"><a href="#796">796</a></td></tr
><tr id="gr_svn124_797"

><td id="797"><a href="#797">797</a></td></tr
><tr id="gr_svn124_798"

><td id="798"><a href="#798">798</a></td></tr
><tr id="gr_svn124_799"

><td id="799"><a href="#799">799</a></td></tr
><tr id="gr_svn124_800"

><td id="800"><a href="#800">800</a></td></tr
><tr id="gr_svn124_801"

><td id="801"><a href="#801">801</a></td></tr
><tr id="gr_svn124_802"

><td id="802"><a href="#802">802</a></td></tr
><tr id="gr_svn124_803"

><td id="803"><a href="#803">803</a></td></tr
><tr id="gr_svn124_804"

><td id="804"><a href="#804">804</a></td></tr
><tr id="gr_svn124_805"

><td id="805"><a href="#805">805</a></td></tr
><tr id="gr_svn124_806"

><td id="806"><a href="#806">806</a></td></tr
><tr id="gr_svn124_807"

><td id="807"><a href="#807">807</a></td></tr
><tr id="gr_svn124_808"

><td id="808"><a href="#808">808</a></td></tr
><tr id="gr_svn124_809"

><td id="809"><a href="#809">809</a></td></tr
><tr id="gr_svn124_810"

><td id="810"><a href="#810">810</a></td></tr
><tr id="gr_svn124_811"

><td id="811"><a href="#811">811</a></td></tr
><tr id="gr_svn124_812"

><td id="812"><a href="#812">812</a></td></tr
><tr id="gr_svn124_813"

><td id="813"><a href="#813">813</a></td></tr
><tr id="gr_svn124_814"

><td id="814"><a href="#814">814</a></td></tr
><tr id="gr_svn124_815"

><td id="815"><a href="#815">815</a></td></tr
><tr id="gr_svn124_816"

><td id="816"><a href="#816">816</a></td></tr
><tr id="gr_svn124_817"

><td id="817"><a href="#817">817</a></td></tr
><tr id="gr_svn124_818"

><td id="818"><a href="#818">818</a></td></tr
><tr id="gr_svn124_819"

><td id="819"><a href="#819">819</a></td></tr
><tr id="gr_svn124_820"

><td id="820"><a href="#820">820</a></td></tr
><tr id="gr_svn124_821"

><td id="821"><a href="#821">821</a></td></tr
><tr id="gr_svn124_822"

><td id="822"><a href="#822">822</a></td></tr
><tr id="gr_svn124_823"

><td id="823"><a href="#823">823</a></td></tr
><tr id="gr_svn124_824"

><td id="824"><a href="#824">824</a></td></tr
><tr id="gr_svn124_825"

><td id="825"><a href="#825">825</a></td></tr
><tr id="gr_svn124_826"

><td id="826"><a href="#826">826</a></td></tr
><tr id="gr_svn124_827"

><td id="827"><a href="#827">827</a></td></tr
><tr id="gr_svn124_828"

><td id="828"><a href="#828">828</a></td></tr
><tr id="gr_svn124_829"

><td id="829"><a href="#829">829</a></td></tr
><tr id="gr_svn124_830"

><td id="830"><a href="#830">830</a></td></tr
><tr id="gr_svn124_831"

><td id="831"><a href="#831">831</a></td></tr
><tr id="gr_svn124_832"

><td id="832"><a href="#832">832</a></td></tr
><tr id="gr_svn124_833"

><td id="833"><a href="#833">833</a></td></tr
><tr id="gr_svn124_834"

><td id="834"><a href="#834">834</a></td></tr
><tr id="gr_svn124_835"

><td id="835"><a href="#835">835</a></td></tr
><tr id="gr_svn124_836"

><td id="836"><a href="#836">836</a></td></tr
><tr id="gr_svn124_837"

><td id="837"><a href="#837">837</a></td></tr
><tr id="gr_svn124_838"

><td id="838"><a href="#838">838</a></td></tr
><tr id="gr_svn124_839"

><td id="839"><a href="#839">839</a></td></tr
><tr id="gr_svn124_840"

><td id="840"><a href="#840">840</a></td></tr
><tr id="gr_svn124_841"

><td id="841"><a href="#841">841</a></td></tr
><tr id="gr_svn124_842"

><td id="842"><a href="#842">842</a></td></tr
><tr id="gr_svn124_843"

><td id="843"><a href="#843">843</a></td></tr
><tr id="gr_svn124_844"

><td id="844"><a href="#844">844</a></td></tr
><tr id="gr_svn124_845"

><td id="845"><a href="#845">845</a></td></tr
><tr id="gr_svn124_846"

><td id="846"><a href="#846">846</a></td></tr
><tr id="gr_svn124_847"

><td id="847"><a href="#847">847</a></td></tr
><tr id="gr_svn124_848"

><td id="848"><a href="#848">848</a></td></tr
><tr id="gr_svn124_849"

><td id="849"><a href="#849">849</a></td></tr
><tr id="gr_svn124_850"

><td id="850"><a href="#850">850</a></td></tr
><tr id="gr_svn124_851"

><td id="851"><a href="#851">851</a></td></tr
><tr id="gr_svn124_852"

><td id="852"><a href="#852">852</a></td></tr
><tr id="gr_svn124_853"

><td id="853"><a href="#853">853</a></td></tr
><tr id="gr_svn124_854"

><td id="854"><a href="#854">854</a></td></tr
><tr id="gr_svn124_855"

><td id="855"><a href="#855">855</a></td></tr
><tr id="gr_svn124_856"

><td id="856"><a href="#856">856</a></td></tr
><tr id="gr_svn124_857"

><td id="857"><a href="#857">857</a></td></tr
><tr id="gr_svn124_858"

><td id="858"><a href="#858">858</a></td></tr
><tr id="gr_svn124_859"

><td id="859"><a href="#859">859</a></td></tr
><tr id="gr_svn124_860"

><td id="860"><a href="#860">860</a></td></tr
><tr id="gr_svn124_861"

><td id="861"><a href="#861">861</a></td></tr
><tr id="gr_svn124_862"

><td id="862"><a href="#862">862</a></td></tr
><tr id="gr_svn124_863"

><td id="863"><a href="#863">863</a></td></tr
><tr id="gr_svn124_864"

><td id="864"><a href="#864">864</a></td></tr
><tr id="gr_svn124_865"

><td id="865"><a href="#865">865</a></td></tr
><tr id="gr_svn124_866"

><td id="866"><a href="#866">866</a></td></tr
><tr id="gr_svn124_867"

><td id="867"><a href="#867">867</a></td></tr
><tr id="gr_svn124_868"

><td id="868"><a href="#868">868</a></td></tr
><tr id="gr_svn124_869"

><td id="869"><a href="#869">869</a></td></tr
><tr id="gr_svn124_870"

><td id="870"><a href="#870">870</a></td></tr
><tr id="gr_svn124_871"

><td id="871"><a href="#871">871</a></td></tr
><tr id="gr_svn124_872"

><td id="872"><a href="#872">872</a></td></tr
><tr id="gr_svn124_873"

><td id="873"><a href="#873">873</a></td></tr
><tr id="gr_svn124_874"

><td id="874"><a href="#874">874</a></td></tr
><tr id="gr_svn124_875"

><td id="875"><a href="#875">875</a></td></tr
><tr id="gr_svn124_876"

><td id="876"><a href="#876">876</a></td></tr
><tr id="gr_svn124_877"

><td id="877"><a href="#877">877</a></td></tr
><tr id="gr_svn124_878"

><td id="878"><a href="#878">878</a></td></tr
><tr id="gr_svn124_879"

><td id="879"><a href="#879">879</a></td></tr
><tr id="gr_svn124_880"

><td id="880"><a href="#880">880</a></td></tr
><tr id="gr_svn124_881"

><td id="881"><a href="#881">881</a></td></tr
><tr id="gr_svn124_882"

><td id="882"><a href="#882">882</a></td></tr
><tr id="gr_svn124_883"

><td id="883"><a href="#883">883</a></td></tr
><tr id="gr_svn124_884"

><td id="884"><a href="#884">884</a></td></tr
><tr id="gr_svn124_885"

><td id="885"><a href="#885">885</a></td></tr
><tr id="gr_svn124_886"

><td id="886"><a href="#886">886</a></td></tr
><tr id="gr_svn124_887"

><td id="887"><a href="#887">887</a></td></tr
><tr id="gr_svn124_888"

><td id="888"><a href="#888">888</a></td></tr
><tr id="gr_svn124_889"

><td id="889"><a href="#889">889</a></td></tr
><tr id="gr_svn124_890"

><td id="890"><a href="#890">890</a></td></tr
><tr id="gr_svn124_891"

><td id="891"><a href="#891">891</a></td></tr
><tr id="gr_svn124_892"

><td id="892"><a href="#892">892</a></td></tr
><tr id="gr_svn124_893"

><td id="893"><a href="#893">893</a></td></tr
><tr id="gr_svn124_894"

><td id="894"><a href="#894">894</a></td></tr
><tr id="gr_svn124_895"

><td id="895"><a href="#895">895</a></td></tr
><tr id="gr_svn124_896"

><td id="896"><a href="#896">896</a></td></tr
><tr id="gr_svn124_897"

><td id="897"><a href="#897">897</a></td></tr
><tr id="gr_svn124_898"

><td id="898"><a href="#898">898</a></td></tr
><tr id="gr_svn124_899"

><td id="899"><a href="#899">899</a></td></tr
><tr id="gr_svn124_900"

><td id="900"><a href="#900">900</a></td></tr
><tr id="gr_svn124_901"

><td id="901"><a href="#901">901</a></td></tr
><tr id="gr_svn124_902"

><td id="902"><a href="#902">902</a></td></tr
><tr id="gr_svn124_903"

><td id="903"><a href="#903">903</a></td></tr
><tr id="gr_svn124_904"

><td id="904"><a href="#904">904</a></td></tr
><tr id="gr_svn124_905"

><td id="905"><a href="#905">905</a></td></tr
><tr id="gr_svn124_906"

><td id="906"><a href="#906">906</a></td></tr
><tr id="gr_svn124_907"

><td id="907"><a href="#907">907</a></td></tr
><tr id="gr_svn124_908"

><td id="908"><a href="#908">908</a></td></tr
><tr id="gr_svn124_909"

><td id="909"><a href="#909">909</a></td></tr
><tr id="gr_svn124_910"

><td id="910"><a href="#910">910</a></td></tr
><tr id="gr_svn124_911"

><td id="911"><a href="#911">911</a></td></tr
><tr id="gr_svn124_912"

><td id="912"><a href="#912">912</a></td></tr
><tr id="gr_svn124_913"

><td id="913"><a href="#913">913</a></td></tr
><tr id="gr_svn124_914"

><td id="914"><a href="#914">914</a></td></tr
><tr id="gr_svn124_915"

><td id="915"><a href="#915">915</a></td></tr
><tr id="gr_svn124_916"

><td id="916"><a href="#916">916</a></td></tr
><tr id="gr_svn124_917"

><td id="917"><a href="#917">917</a></td></tr
><tr id="gr_svn124_918"

><td id="918"><a href="#918">918</a></td></tr
><tr id="gr_svn124_919"

><td id="919"><a href="#919">919</a></td></tr
><tr id="gr_svn124_920"

><td id="920"><a href="#920">920</a></td></tr
><tr id="gr_svn124_921"

><td id="921"><a href="#921">921</a></td></tr
><tr id="gr_svn124_922"

><td id="922"><a href="#922">922</a></td></tr
><tr id="gr_svn124_923"

><td id="923"><a href="#923">923</a></td></tr
><tr id="gr_svn124_924"

><td id="924"><a href="#924">924</a></td></tr
><tr id="gr_svn124_925"

><td id="925"><a href="#925">925</a></td></tr
><tr id="gr_svn124_926"

><td id="926"><a href="#926">926</a></td></tr
><tr id="gr_svn124_927"

><td id="927"><a href="#927">927</a></td></tr
><tr id="gr_svn124_928"

><td id="928"><a href="#928">928</a></td></tr
><tr id="gr_svn124_929"

><td id="929"><a href="#929">929</a></td></tr
><tr id="gr_svn124_930"

><td id="930"><a href="#930">930</a></td></tr
><tr id="gr_svn124_931"

><td id="931"><a href="#931">931</a></td></tr
><tr id="gr_svn124_932"

><td id="932"><a href="#932">932</a></td></tr
><tr id="gr_svn124_933"

><td id="933"><a href="#933">933</a></td></tr
><tr id="gr_svn124_934"

><td id="934"><a href="#934">934</a></td></tr
><tr id="gr_svn124_935"

><td id="935"><a href="#935">935</a></td></tr
><tr id="gr_svn124_936"

><td id="936"><a href="#936">936</a></td></tr
><tr id="gr_svn124_937"

><td id="937"><a href="#937">937</a></td></tr
><tr id="gr_svn124_938"

><td id="938"><a href="#938">938</a></td></tr
><tr id="gr_svn124_939"

><td id="939"><a href="#939">939</a></td></tr
><tr id="gr_svn124_940"

><td id="940"><a href="#940">940</a></td></tr
><tr id="gr_svn124_941"

><td id="941"><a href="#941">941</a></td></tr
><tr id="gr_svn124_942"

><td id="942"><a href="#942">942</a></td></tr
><tr id="gr_svn124_943"

><td id="943"><a href="#943">943</a></td></tr
><tr id="gr_svn124_944"

><td id="944"><a href="#944">944</a></td></tr
><tr id="gr_svn124_945"

><td id="945"><a href="#945">945</a></td></tr
><tr id="gr_svn124_946"

><td id="946"><a href="#946">946</a></td></tr
><tr id="gr_svn124_947"

><td id="947"><a href="#947">947</a></td></tr
><tr id="gr_svn124_948"

><td id="948"><a href="#948">948</a></td></tr
><tr id="gr_svn124_949"

><td id="949"><a href="#949">949</a></td></tr
><tr id="gr_svn124_950"

><td id="950"><a href="#950">950</a></td></tr
><tr id="gr_svn124_951"

><td id="951"><a href="#951">951</a></td></tr
><tr id="gr_svn124_952"

><td id="952"><a href="#952">952</a></td></tr
><tr id="gr_svn124_953"

><td id="953"><a href="#953">953</a></td></tr
><tr id="gr_svn124_954"

><td id="954"><a href="#954">954</a></td></tr
><tr id="gr_svn124_955"

><td id="955"><a href="#955">955</a></td></tr
><tr id="gr_svn124_956"

><td id="956"><a href="#956">956</a></td></tr
><tr id="gr_svn124_957"

><td id="957"><a href="#957">957</a></td></tr
><tr id="gr_svn124_958"

><td id="958"><a href="#958">958</a></td></tr
><tr id="gr_svn124_959"

><td id="959"><a href="#959">959</a></td></tr
><tr id="gr_svn124_960"

><td id="960"><a href="#960">960</a></td></tr
><tr id="gr_svn124_961"

><td id="961"><a href="#961">961</a></td></tr
><tr id="gr_svn124_962"

><td id="962"><a href="#962">962</a></td></tr
><tr id="gr_svn124_963"

><td id="963"><a href="#963">963</a></td></tr
><tr id="gr_svn124_964"

><td id="964"><a href="#964">964</a></td></tr
><tr id="gr_svn124_965"

><td id="965"><a href="#965">965</a></td></tr
><tr id="gr_svn124_966"

><td id="966"><a href="#966">966</a></td></tr
><tr id="gr_svn124_967"

><td id="967"><a href="#967">967</a></td></tr
><tr id="gr_svn124_968"

><td id="968"><a href="#968">968</a></td></tr
><tr id="gr_svn124_969"

><td id="969"><a href="#969">969</a></td></tr
><tr id="gr_svn124_970"

><td id="970"><a href="#970">970</a></td></tr
><tr id="gr_svn124_971"

><td id="971"><a href="#971">971</a></td></tr
><tr id="gr_svn124_972"

><td id="972"><a href="#972">972</a></td></tr
><tr id="gr_svn124_973"

><td id="973"><a href="#973">973</a></td></tr
><tr id="gr_svn124_974"

><td id="974"><a href="#974">974</a></td></tr
><tr id="gr_svn124_975"

><td id="975"><a href="#975">975</a></td></tr
><tr id="gr_svn124_976"

><td id="976"><a href="#976">976</a></td></tr
><tr id="gr_svn124_977"

><td id="977"><a href="#977">977</a></td></tr
><tr id="gr_svn124_978"

><td id="978"><a href="#978">978</a></td></tr
><tr id="gr_svn124_979"

><td id="979"><a href="#979">979</a></td></tr
><tr id="gr_svn124_980"

><td id="980"><a href="#980">980</a></td></tr
><tr id="gr_svn124_981"

><td id="981"><a href="#981">981</a></td></tr
><tr id="gr_svn124_982"

><td id="982"><a href="#982">982</a></td></tr
><tr id="gr_svn124_983"

><td id="983"><a href="#983">983</a></td></tr
><tr id="gr_svn124_984"

><td id="984"><a href="#984">984</a></td></tr
><tr id="gr_svn124_985"

><td id="985"><a href="#985">985</a></td></tr
><tr id="gr_svn124_986"

><td id="986"><a href="#986">986</a></td></tr
><tr id="gr_svn124_987"

><td id="987"><a href="#987">987</a></td></tr
><tr id="gr_svn124_988"

><td id="988"><a href="#988">988</a></td></tr
><tr id="gr_svn124_989"

><td id="989"><a href="#989">989</a></td></tr
><tr id="gr_svn124_990"

><td id="990"><a href="#990">990</a></td></tr
><tr id="gr_svn124_991"

><td id="991"><a href="#991">991</a></td></tr
><tr id="gr_svn124_992"

><td id="992"><a href="#992">992</a></td></tr
><tr id="gr_svn124_993"

><td id="993"><a href="#993">993</a></td></tr
><tr id="gr_svn124_994"

><td id="994"><a href="#994">994</a></td></tr
><tr id="gr_svn124_995"

><td id="995"><a href="#995">995</a></td></tr
><tr id="gr_svn124_996"

><td id="996"><a href="#996">996</a></td></tr
><tr id="gr_svn124_997"

><td id="997"><a href="#997">997</a></td></tr
><tr id="gr_svn124_998"

><td id="998"><a href="#998">998</a></td></tr
><tr id="gr_svn124_999"

><td id="999"><a href="#999">999</a></td></tr
><tr id="gr_svn124_1000"

><td id="1000"><a href="#1000">1000</a></td></tr
><tr id="gr_svn124_1001"

><td id="1001"><a href="#1001">1001</a></td></tr
><tr id="gr_svn124_1002"

><td id="1002"><a href="#1002">1002</a></td></tr
><tr id="gr_svn124_1003"

><td id="1003"><a href="#1003">1003</a></td></tr
><tr id="gr_svn124_1004"

><td id="1004"><a href="#1004">1004</a></td></tr
><tr id="gr_svn124_1005"

><td id="1005"><a href="#1005">1005</a></td></tr
><tr id="gr_svn124_1006"

><td id="1006"><a href="#1006">1006</a></td></tr
><tr id="gr_svn124_1007"

><td id="1007"><a href="#1007">1007</a></td></tr
><tr id="gr_svn124_1008"

><td id="1008"><a href="#1008">1008</a></td></tr
><tr id="gr_svn124_1009"

><td id="1009"><a href="#1009">1009</a></td></tr
><tr id="gr_svn124_1010"

><td id="1010"><a href="#1010">1010</a></td></tr
><tr id="gr_svn124_1011"

><td id="1011"><a href="#1011">1011</a></td></tr
><tr id="gr_svn124_1012"

><td id="1012"><a href="#1012">1012</a></td></tr
><tr id="gr_svn124_1013"

><td id="1013"><a href="#1013">1013</a></td></tr
><tr id="gr_svn124_1014"

><td id="1014"><a href="#1014">1014</a></td></tr
><tr id="gr_svn124_1015"

><td id="1015"><a href="#1015">1015</a></td></tr
><tr id="gr_svn124_1016"

><td id="1016"><a href="#1016">1016</a></td></tr
><tr id="gr_svn124_1017"

><td id="1017"><a href="#1017">1017</a></td></tr
><tr id="gr_svn124_1018"

><td id="1018"><a href="#1018">1018</a></td></tr
><tr id="gr_svn124_1019"

><td id="1019"><a href="#1019">1019</a></td></tr
><tr id="gr_svn124_1020"

><td id="1020"><a href="#1020">1020</a></td></tr
><tr id="gr_svn124_1021"

><td id="1021"><a href="#1021">1021</a></td></tr
><tr id="gr_svn124_1022"

><td id="1022"><a href="#1022">1022</a></td></tr
><tr id="gr_svn124_1023"

><td id="1023"><a href="#1023">1023</a></td></tr
><tr id="gr_svn124_1024"

><td id="1024"><a href="#1024">1024</a></td></tr
><tr id="gr_svn124_1025"

><td id="1025"><a href="#1025">1025</a></td></tr
><tr id="gr_svn124_1026"

><td id="1026"><a href="#1026">1026</a></td></tr
><tr id="gr_svn124_1027"

><td id="1027"><a href="#1027">1027</a></td></tr
><tr id="gr_svn124_1028"

><td id="1028"><a href="#1028">1028</a></td></tr
><tr id="gr_svn124_1029"

><td id="1029"><a href="#1029">1029</a></td></tr
><tr id="gr_svn124_1030"

><td id="1030"><a href="#1030">1030</a></td></tr
><tr id="gr_svn124_1031"

><td id="1031"><a href="#1031">1031</a></td></tr
><tr id="gr_svn124_1032"

><td id="1032"><a href="#1032">1032</a></td></tr
><tr id="gr_svn124_1033"

><td id="1033"><a href="#1033">1033</a></td></tr
><tr id="gr_svn124_1034"

><td id="1034"><a href="#1034">1034</a></td></tr
><tr id="gr_svn124_1035"

><td id="1035"><a href="#1035">1035</a></td></tr
><tr id="gr_svn124_1036"

><td id="1036"><a href="#1036">1036</a></td></tr
><tr id="gr_svn124_1037"

><td id="1037"><a href="#1037">1037</a></td></tr
><tr id="gr_svn124_1038"

><td id="1038"><a href="#1038">1038</a></td></tr
><tr id="gr_svn124_1039"

><td id="1039"><a href="#1039">1039</a></td></tr
><tr id="gr_svn124_1040"

><td id="1040"><a href="#1040">1040</a></td></tr
><tr id="gr_svn124_1041"

><td id="1041"><a href="#1041">1041</a></td></tr
><tr id="gr_svn124_1042"

><td id="1042"><a href="#1042">1042</a></td></tr
><tr id="gr_svn124_1043"

><td id="1043"><a href="#1043">1043</a></td></tr
><tr id="gr_svn124_1044"

><td id="1044"><a href="#1044">1044</a></td></tr
><tr id="gr_svn124_1045"

><td id="1045"><a href="#1045">1045</a></td></tr
><tr id="gr_svn124_1046"

><td id="1046"><a href="#1046">1046</a></td></tr
><tr id="gr_svn124_1047"

><td id="1047"><a href="#1047">1047</a></td></tr
><tr id="gr_svn124_1048"

><td id="1048"><a href="#1048">1048</a></td></tr
><tr id="gr_svn124_1049"

><td id="1049"><a href="#1049">1049</a></td></tr
><tr id="gr_svn124_1050"

><td id="1050"><a href="#1050">1050</a></td></tr
><tr id="gr_svn124_1051"

><td id="1051"><a href="#1051">1051</a></td></tr
><tr id="gr_svn124_1052"

><td id="1052"><a href="#1052">1052</a></td></tr
><tr id="gr_svn124_1053"

><td id="1053"><a href="#1053">1053</a></td></tr
><tr id="gr_svn124_1054"

><td id="1054"><a href="#1054">1054</a></td></tr
><tr id="gr_svn124_1055"

><td id="1055"><a href="#1055">1055</a></td></tr
><tr id="gr_svn124_1056"

><td id="1056"><a href="#1056">1056</a></td></tr
><tr id="gr_svn124_1057"

><td id="1057"><a href="#1057">1057</a></td></tr
><tr id="gr_svn124_1058"

><td id="1058"><a href="#1058">1058</a></td></tr
><tr id="gr_svn124_1059"

><td id="1059"><a href="#1059">1059</a></td></tr
><tr id="gr_svn124_1060"

><td id="1060"><a href="#1060">1060</a></td></tr
><tr id="gr_svn124_1061"

><td id="1061"><a href="#1061">1061</a></td></tr
><tr id="gr_svn124_1062"

><td id="1062"><a href="#1062">1062</a></td></tr
><tr id="gr_svn124_1063"

><td id="1063"><a href="#1063">1063</a></td></tr
><tr id="gr_svn124_1064"

><td id="1064"><a href="#1064">1064</a></td></tr
><tr id="gr_svn124_1065"

><td id="1065"><a href="#1065">1065</a></td></tr
><tr id="gr_svn124_1066"

><td id="1066"><a href="#1066">1066</a></td></tr
><tr id="gr_svn124_1067"

><td id="1067"><a href="#1067">1067</a></td></tr
><tr id="gr_svn124_1068"

><td id="1068"><a href="#1068">1068</a></td></tr
><tr id="gr_svn124_1069"

><td id="1069"><a href="#1069">1069</a></td></tr
><tr id="gr_svn124_1070"

><td id="1070"><a href="#1070">1070</a></td></tr
><tr id="gr_svn124_1071"

><td id="1071"><a href="#1071">1071</a></td></tr
><tr id="gr_svn124_1072"

><td id="1072"><a href="#1072">1072</a></td></tr
><tr id="gr_svn124_1073"

><td id="1073"><a href="#1073">1073</a></td></tr
><tr id="gr_svn124_1074"

><td id="1074"><a href="#1074">1074</a></td></tr
><tr id="gr_svn124_1075"

><td id="1075"><a href="#1075">1075</a></td></tr
><tr id="gr_svn124_1076"

><td id="1076"><a href="#1076">1076</a></td></tr
><tr id="gr_svn124_1077"

><td id="1077"><a href="#1077">1077</a></td></tr
><tr id="gr_svn124_1078"

><td id="1078"><a href="#1078">1078</a></td></tr
><tr id="gr_svn124_1079"

><td id="1079"><a href="#1079">1079</a></td></tr
><tr id="gr_svn124_1080"

><td id="1080"><a href="#1080">1080</a></td></tr
><tr id="gr_svn124_1081"

><td id="1081"><a href="#1081">1081</a></td></tr
><tr id="gr_svn124_1082"

><td id="1082"><a href="#1082">1082</a></td></tr
><tr id="gr_svn124_1083"

><td id="1083"><a href="#1083">1083</a></td></tr
><tr id="gr_svn124_1084"

><td id="1084"><a href="#1084">1084</a></td></tr
><tr id="gr_svn124_1085"

><td id="1085"><a href="#1085">1085</a></td></tr
><tr id="gr_svn124_1086"

><td id="1086"><a href="#1086">1086</a></td></tr
><tr id="gr_svn124_1087"

><td id="1087"><a href="#1087">1087</a></td></tr
><tr id="gr_svn124_1088"

><td id="1088"><a href="#1088">1088</a></td></tr
><tr id="gr_svn124_1089"

><td id="1089"><a href="#1089">1089</a></td></tr
><tr id="gr_svn124_1090"

><td id="1090"><a href="#1090">1090</a></td></tr
><tr id="gr_svn124_1091"

><td id="1091"><a href="#1091">1091</a></td></tr
><tr id="gr_svn124_1092"

><td id="1092"><a href="#1092">1092</a></td></tr
><tr id="gr_svn124_1093"

><td id="1093"><a href="#1093">1093</a></td></tr
><tr id="gr_svn124_1094"

><td id="1094"><a href="#1094">1094</a></td></tr
><tr id="gr_svn124_1095"

><td id="1095"><a href="#1095">1095</a></td></tr
><tr id="gr_svn124_1096"

><td id="1096"><a href="#1096">1096</a></td></tr
><tr id="gr_svn124_1097"

><td id="1097"><a href="#1097">1097</a></td></tr
><tr id="gr_svn124_1098"

><td id="1098"><a href="#1098">1098</a></td></tr
><tr id="gr_svn124_1099"

><td id="1099"><a href="#1099">1099</a></td></tr
><tr id="gr_svn124_1100"

><td id="1100"><a href="#1100">1100</a></td></tr
><tr id="gr_svn124_1101"

><td id="1101"><a href="#1101">1101</a></td></tr
><tr id="gr_svn124_1102"

><td id="1102"><a href="#1102">1102</a></td></tr
><tr id="gr_svn124_1103"

><td id="1103"><a href="#1103">1103</a></td></tr
><tr id="gr_svn124_1104"

><td id="1104"><a href="#1104">1104</a></td></tr
><tr id="gr_svn124_1105"

><td id="1105"><a href="#1105">1105</a></td></tr
><tr id="gr_svn124_1106"

><td id="1106"><a href="#1106">1106</a></td></tr
><tr id="gr_svn124_1107"

><td id="1107"><a href="#1107">1107</a></td></tr
><tr id="gr_svn124_1108"

><td id="1108"><a href="#1108">1108</a></td></tr
><tr id="gr_svn124_1109"

><td id="1109"><a href="#1109">1109</a></td></tr
><tr id="gr_svn124_1110"

><td id="1110"><a href="#1110">1110</a></td></tr
><tr id="gr_svn124_1111"

><td id="1111"><a href="#1111">1111</a></td></tr
><tr id="gr_svn124_1112"

><td id="1112"><a href="#1112">1112</a></td></tr
><tr id="gr_svn124_1113"

><td id="1113"><a href="#1113">1113</a></td></tr
><tr id="gr_svn124_1114"

><td id="1114"><a href="#1114">1114</a></td></tr
><tr id="gr_svn124_1115"

><td id="1115"><a href="#1115">1115</a></td></tr
><tr id="gr_svn124_1116"

><td id="1116"><a href="#1116">1116</a></td></tr
><tr id="gr_svn124_1117"

><td id="1117"><a href="#1117">1117</a></td></tr
><tr id="gr_svn124_1118"

><td id="1118"><a href="#1118">1118</a></td></tr
><tr id="gr_svn124_1119"

><td id="1119"><a href="#1119">1119</a></td></tr
><tr id="gr_svn124_1120"

><td id="1120"><a href="#1120">1120</a></td></tr
><tr id="gr_svn124_1121"

><td id="1121"><a href="#1121">1121</a></td></tr
><tr id="gr_svn124_1122"

><td id="1122"><a href="#1122">1122</a></td></tr
><tr id="gr_svn124_1123"

><td id="1123"><a href="#1123">1123</a></td></tr
><tr id="gr_svn124_1124"

><td id="1124"><a href="#1124">1124</a></td></tr
><tr id="gr_svn124_1125"

><td id="1125"><a href="#1125">1125</a></td></tr
><tr id="gr_svn124_1126"

><td id="1126"><a href="#1126">1126</a></td></tr
><tr id="gr_svn124_1127"

><td id="1127"><a href="#1127">1127</a></td></tr
><tr id="gr_svn124_1128"

><td id="1128"><a href="#1128">1128</a></td></tr
><tr id="gr_svn124_1129"

><td id="1129"><a href="#1129">1129</a></td></tr
><tr id="gr_svn124_1130"

><td id="1130"><a href="#1130">1130</a></td></tr
><tr id="gr_svn124_1131"

><td id="1131"><a href="#1131">1131</a></td></tr
><tr id="gr_svn124_1132"

><td id="1132"><a href="#1132">1132</a></td></tr
><tr id="gr_svn124_1133"

><td id="1133"><a href="#1133">1133</a></td></tr
><tr id="gr_svn124_1134"

><td id="1134"><a href="#1134">1134</a></td></tr
><tr id="gr_svn124_1135"

><td id="1135"><a href="#1135">1135</a></td></tr
><tr id="gr_svn124_1136"

><td id="1136"><a href="#1136">1136</a></td></tr
><tr id="gr_svn124_1137"

><td id="1137"><a href="#1137">1137</a></td></tr
><tr id="gr_svn124_1138"

><td id="1138"><a href="#1138">1138</a></td></tr
><tr id="gr_svn124_1139"

><td id="1139"><a href="#1139">1139</a></td></tr
><tr id="gr_svn124_1140"

><td id="1140"><a href="#1140">1140</a></td></tr
><tr id="gr_svn124_1141"

><td id="1141"><a href="#1141">1141</a></td></tr
><tr id="gr_svn124_1142"

><td id="1142"><a href="#1142">1142</a></td></tr
><tr id="gr_svn124_1143"

><td id="1143"><a href="#1143">1143</a></td></tr
><tr id="gr_svn124_1144"

><td id="1144"><a href="#1144">1144</a></td></tr
><tr id="gr_svn124_1145"

><td id="1145"><a href="#1145">1145</a></td></tr
><tr id="gr_svn124_1146"

><td id="1146"><a href="#1146">1146</a></td></tr
><tr id="gr_svn124_1147"

><td id="1147"><a href="#1147">1147</a></td></tr
><tr id="gr_svn124_1148"

><td id="1148"><a href="#1148">1148</a></td></tr
><tr id="gr_svn124_1149"

><td id="1149"><a href="#1149">1149</a></td></tr
><tr id="gr_svn124_1150"

><td id="1150"><a href="#1150">1150</a></td></tr
><tr id="gr_svn124_1151"

><td id="1151"><a href="#1151">1151</a></td></tr
><tr id="gr_svn124_1152"

><td id="1152"><a href="#1152">1152</a></td></tr
><tr id="gr_svn124_1153"

><td id="1153"><a href="#1153">1153</a></td></tr
><tr id="gr_svn124_1154"

><td id="1154"><a href="#1154">1154</a></td></tr
><tr id="gr_svn124_1155"

><td id="1155"><a href="#1155">1155</a></td></tr
><tr id="gr_svn124_1156"

><td id="1156"><a href="#1156">1156</a></td></tr
><tr id="gr_svn124_1157"

><td id="1157"><a href="#1157">1157</a></td></tr
><tr id="gr_svn124_1158"

><td id="1158"><a href="#1158">1158</a></td></tr
><tr id="gr_svn124_1159"

><td id="1159"><a href="#1159">1159</a></td></tr
><tr id="gr_svn124_1160"

><td id="1160"><a href="#1160">1160</a></td></tr
><tr id="gr_svn124_1161"

><td id="1161"><a href="#1161">1161</a></td></tr
><tr id="gr_svn124_1162"

><td id="1162"><a href="#1162">1162</a></td></tr
><tr id="gr_svn124_1163"

><td id="1163"><a href="#1163">1163</a></td></tr
><tr id="gr_svn124_1164"

><td id="1164"><a href="#1164">1164</a></td></tr
><tr id="gr_svn124_1165"

><td id="1165"><a href="#1165">1165</a></td></tr
><tr id="gr_svn124_1166"

><td id="1166"><a href="#1166">1166</a></td></tr
><tr id="gr_svn124_1167"

><td id="1167"><a href="#1167">1167</a></td></tr
><tr id="gr_svn124_1168"

><td id="1168"><a href="#1168">1168</a></td></tr
><tr id="gr_svn124_1169"

><td id="1169"><a href="#1169">1169</a></td></tr
><tr id="gr_svn124_1170"

><td id="1170"><a href="#1170">1170</a></td></tr
><tr id="gr_svn124_1171"

><td id="1171"><a href="#1171">1171</a></td></tr
><tr id="gr_svn124_1172"

><td id="1172"><a href="#1172">1172</a></td></tr
><tr id="gr_svn124_1173"

><td id="1173"><a href="#1173">1173</a></td></tr
><tr id="gr_svn124_1174"

><td id="1174"><a href="#1174">1174</a></td></tr
><tr id="gr_svn124_1175"

><td id="1175"><a href="#1175">1175</a></td></tr
><tr id="gr_svn124_1176"

><td id="1176"><a href="#1176">1176</a></td></tr
><tr id="gr_svn124_1177"

><td id="1177"><a href="#1177">1177</a></td></tr
><tr id="gr_svn124_1178"

><td id="1178"><a href="#1178">1178</a></td></tr
><tr id="gr_svn124_1179"

><td id="1179"><a href="#1179">1179</a></td></tr
><tr id="gr_svn124_1180"

><td id="1180"><a href="#1180">1180</a></td></tr
><tr id="gr_svn124_1181"

><td id="1181"><a href="#1181">1181</a></td></tr
><tr id="gr_svn124_1182"

><td id="1182"><a href="#1182">1182</a></td></tr
><tr id="gr_svn124_1183"

><td id="1183"><a href="#1183">1183</a></td></tr
><tr id="gr_svn124_1184"

><td id="1184"><a href="#1184">1184</a></td></tr
><tr id="gr_svn124_1185"

><td id="1185"><a href="#1185">1185</a></td></tr
><tr id="gr_svn124_1186"

><td id="1186"><a href="#1186">1186</a></td></tr
><tr id="gr_svn124_1187"

><td id="1187"><a href="#1187">1187</a></td></tr
><tr id="gr_svn124_1188"

><td id="1188"><a href="#1188">1188</a></td></tr
><tr id="gr_svn124_1189"

><td id="1189"><a href="#1189">1189</a></td></tr
><tr id="gr_svn124_1190"

><td id="1190"><a href="#1190">1190</a></td></tr
><tr id="gr_svn124_1191"

><td id="1191"><a href="#1191">1191</a></td></tr
><tr id="gr_svn124_1192"

><td id="1192"><a href="#1192">1192</a></td></tr
><tr id="gr_svn124_1193"

><td id="1193"><a href="#1193">1193</a></td></tr
><tr id="gr_svn124_1194"

><td id="1194"><a href="#1194">1194</a></td></tr
><tr id="gr_svn124_1195"

><td id="1195"><a href="#1195">1195</a></td></tr
><tr id="gr_svn124_1196"

><td id="1196"><a href="#1196">1196</a></td></tr
><tr id="gr_svn124_1197"

><td id="1197"><a href="#1197">1197</a></td></tr
><tr id="gr_svn124_1198"

><td id="1198"><a href="#1198">1198</a></td></tr
><tr id="gr_svn124_1199"

><td id="1199"><a href="#1199">1199</a></td></tr
><tr id="gr_svn124_1200"

><td id="1200"><a href="#1200">1200</a></td></tr
><tr id="gr_svn124_1201"

><td id="1201"><a href="#1201">1201</a></td></tr
><tr id="gr_svn124_1202"

><td id="1202"><a href="#1202">1202</a></td></tr
><tr id="gr_svn124_1203"

><td id="1203"><a href="#1203">1203</a></td></tr
><tr id="gr_svn124_1204"

><td id="1204"><a href="#1204">1204</a></td></tr
><tr id="gr_svn124_1205"

><td id="1205"><a href="#1205">1205</a></td></tr
><tr id="gr_svn124_1206"

><td id="1206"><a href="#1206">1206</a></td></tr
><tr id="gr_svn124_1207"

><td id="1207"><a href="#1207">1207</a></td></tr
><tr id="gr_svn124_1208"

><td id="1208"><a href="#1208">1208</a></td></tr
><tr id="gr_svn124_1209"

><td id="1209"><a href="#1209">1209</a></td></tr
><tr id="gr_svn124_1210"

><td id="1210"><a href="#1210">1210</a></td></tr
><tr id="gr_svn124_1211"

><td id="1211"><a href="#1211">1211</a></td></tr
><tr id="gr_svn124_1212"

><td id="1212"><a href="#1212">1212</a></td></tr
><tr id="gr_svn124_1213"

><td id="1213"><a href="#1213">1213</a></td></tr
><tr id="gr_svn124_1214"

><td id="1214"><a href="#1214">1214</a></td></tr
><tr id="gr_svn124_1215"

><td id="1215"><a href="#1215">1215</a></td></tr
><tr id="gr_svn124_1216"

><td id="1216"><a href="#1216">1216</a></td></tr
><tr id="gr_svn124_1217"

><td id="1217"><a href="#1217">1217</a></td></tr
><tr id="gr_svn124_1218"

><td id="1218"><a href="#1218">1218</a></td></tr
><tr id="gr_svn124_1219"

><td id="1219"><a href="#1219">1219</a></td></tr
><tr id="gr_svn124_1220"

><td id="1220"><a href="#1220">1220</a></td></tr
><tr id="gr_svn124_1221"

><td id="1221"><a href="#1221">1221</a></td></tr
><tr id="gr_svn124_1222"

><td id="1222"><a href="#1222">1222</a></td></tr
><tr id="gr_svn124_1223"

><td id="1223"><a href="#1223">1223</a></td></tr
><tr id="gr_svn124_1224"

><td id="1224"><a href="#1224">1224</a></td></tr
><tr id="gr_svn124_1225"

><td id="1225"><a href="#1225">1225</a></td></tr
><tr id="gr_svn124_1226"

><td id="1226"><a href="#1226">1226</a></td></tr
><tr id="gr_svn124_1227"

><td id="1227"><a href="#1227">1227</a></td></tr
><tr id="gr_svn124_1228"

><td id="1228"><a href="#1228">1228</a></td></tr
><tr id="gr_svn124_1229"

><td id="1229"><a href="#1229">1229</a></td></tr
><tr id="gr_svn124_1230"

><td id="1230"><a href="#1230">1230</a></td></tr
><tr id="gr_svn124_1231"

><td id="1231"><a href="#1231">1231</a></td></tr
><tr id="gr_svn124_1232"

><td id="1232"><a href="#1232">1232</a></td></tr
><tr id="gr_svn124_1233"

><td id="1233"><a href="#1233">1233</a></td></tr
><tr id="gr_svn124_1234"

><td id="1234"><a href="#1234">1234</a></td></tr
><tr id="gr_svn124_1235"

><td id="1235"><a href="#1235">1235</a></td></tr
><tr id="gr_svn124_1236"

><td id="1236"><a href="#1236">1236</a></td></tr
><tr id="gr_svn124_1237"

><td id="1237"><a href="#1237">1237</a></td></tr
><tr id="gr_svn124_1238"

><td id="1238"><a href="#1238">1238</a></td></tr
><tr id="gr_svn124_1239"

><td id="1239"><a href="#1239">1239</a></td></tr
><tr id="gr_svn124_1240"

><td id="1240"><a href="#1240">1240</a></td></tr
><tr id="gr_svn124_1241"

><td id="1241"><a href="#1241">1241</a></td></tr
><tr id="gr_svn124_1242"

><td id="1242"><a href="#1242">1242</a></td></tr
><tr id="gr_svn124_1243"

><td id="1243"><a href="#1243">1243</a></td></tr
><tr id="gr_svn124_1244"

><td id="1244"><a href="#1244">1244</a></td></tr
><tr id="gr_svn124_1245"

><td id="1245"><a href="#1245">1245</a></td></tr
><tr id="gr_svn124_1246"

><td id="1246"><a href="#1246">1246</a></td></tr
><tr id="gr_svn124_1247"

><td id="1247"><a href="#1247">1247</a></td></tr
><tr id="gr_svn124_1248"

><td id="1248"><a href="#1248">1248</a></td></tr
><tr id="gr_svn124_1249"

><td id="1249"><a href="#1249">1249</a></td></tr
><tr id="gr_svn124_1250"

><td id="1250"><a href="#1250">1250</a></td></tr
><tr id="gr_svn124_1251"

><td id="1251"><a href="#1251">1251</a></td></tr
><tr id="gr_svn124_1252"

><td id="1252"><a href="#1252">1252</a></td></tr
><tr id="gr_svn124_1253"

><td id="1253"><a href="#1253">1253</a></td></tr
><tr id="gr_svn124_1254"

><td id="1254"><a href="#1254">1254</a></td></tr
><tr id="gr_svn124_1255"

><td id="1255"><a href="#1255">1255</a></td></tr
><tr id="gr_svn124_1256"

><td id="1256"><a href="#1256">1256</a></td></tr
><tr id="gr_svn124_1257"

><td id="1257"><a href="#1257">1257</a></td></tr
><tr id="gr_svn124_1258"

><td id="1258"><a href="#1258">1258</a></td></tr
><tr id="gr_svn124_1259"

><td id="1259"><a href="#1259">1259</a></td></tr
><tr id="gr_svn124_1260"

><td id="1260"><a href="#1260">1260</a></td></tr
><tr id="gr_svn124_1261"

><td id="1261"><a href="#1261">1261</a></td></tr
><tr id="gr_svn124_1262"

><td id="1262"><a href="#1262">1262</a></td></tr
><tr id="gr_svn124_1263"

><td id="1263"><a href="#1263">1263</a></td></tr
><tr id="gr_svn124_1264"

><td id="1264"><a href="#1264">1264</a></td></tr
><tr id="gr_svn124_1265"

><td id="1265"><a href="#1265">1265</a></td></tr
><tr id="gr_svn124_1266"

><td id="1266"><a href="#1266">1266</a></td></tr
><tr id="gr_svn124_1267"

><td id="1267"><a href="#1267">1267</a></td></tr
><tr id="gr_svn124_1268"

><td id="1268"><a href="#1268">1268</a></td></tr
><tr id="gr_svn124_1269"

><td id="1269"><a href="#1269">1269</a></td></tr
><tr id="gr_svn124_1270"

><td id="1270"><a href="#1270">1270</a></td></tr
><tr id="gr_svn124_1271"

><td id="1271"><a href="#1271">1271</a></td></tr
><tr id="gr_svn124_1272"

><td id="1272"><a href="#1272">1272</a></td></tr
><tr id="gr_svn124_1273"

><td id="1273"><a href="#1273">1273</a></td></tr
><tr id="gr_svn124_1274"

><td id="1274"><a href="#1274">1274</a></td></tr
><tr id="gr_svn124_1275"

><td id="1275"><a href="#1275">1275</a></td></tr
><tr id="gr_svn124_1276"

><td id="1276"><a href="#1276">1276</a></td></tr
><tr id="gr_svn124_1277"

><td id="1277"><a href="#1277">1277</a></td></tr
><tr id="gr_svn124_1278"

><td id="1278"><a href="#1278">1278</a></td></tr
><tr id="gr_svn124_1279"

><td id="1279"><a href="#1279">1279</a></td></tr
><tr id="gr_svn124_1280"

><td id="1280"><a href="#1280">1280</a></td></tr
><tr id="gr_svn124_1281"

><td id="1281"><a href="#1281">1281</a></td></tr
><tr id="gr_svn124_1282"

><td id="1282"><a href="#1282">1282</a></td></tr
><tr id="gr_svn124_1283"

><td id="1283"><a href="#1283">1283</a></td></tr
><tr id="gr_svn124_1284"

><td id="1284"><a href="#1284">1284</a></td></tr
><tr id="gr_svn124_1285"

><td id="1285"><a href="#1285">1285</a></td></tr
><tr id="gr_svn124_1286"

><td id="1286"><a href="#1286">1286</a></td></tr
><tr id="gr_svn124_1287"

><td id="1287"><a href="#1287">1287</a></td></tr
><tr id="gr_svn124_1288"

><td id="1288"><a href="#1288">1288</a></td></tr
><tr id="gr_svn124_1289"

><td id="1289"><a href="#1289">1289</a></td></tr
><tr id="gr_svn124_1290"

><td id="1290"><a href="#1290">1290</a></td></tr
><tr id="gr_svn124_1291"

><td id="1291"><a href="#1291">1291</a></td></tr
><tr id="gr_svn124_1292"

><td id="1292"><a href="#1292">1292</a></td></tr
><tr id="gr_svn124_1293"

><td id="1293"><a href="#1293">1293</a></td></tr
><tr id="gr_svn124_1294"

><td id="1294"><a href="#1294">1294</a></td></tr
><tr id="gr_svn124_1295"

><td id="1295"><a href="#1295">1295</a></td></tr
><tr id="gr_svn124_1296"

><td id="1296"><a href="#1296">1296</a></td></tr
><tr id="gr_svn124_1297"

><td id="1297"><a href="#1297">1297</a></td></tr
><tr id="gr_svn124_1298"

><td id="1298"><a href="#1298">1298</a></td></tr
><tr id="gr_svn124_1299"

><td id="1299"><a href="#1299">1299</a></td></tr
><tr id="gr_svn124_1300"

><td id="1300"><a href="#1300">1300</a></td></tr
><tr id="gr_svn124_1301"

><td id="1301"><a href="#1301">1301</a></td></tr
><tr id="gr_svn124_1302"

><td id="1302"><a href="#1302">1302</a></td></tr
><tr id="gr_svn124_1303"

><td id="1303"><a href="#1303">1303</a></td></tr
><tr id="gr_svn124_1304"

><td id="1304"><a href="#1304">1304</a></td></tr
><tr id="gr_svn124_1305"

><td id="1305"><a href="#1305">1305</a></td></tr
><tr id="gr_svn124_1306"

><td id="1306"><a href="#1306">1306</a></td></tr
><tr id="gr_svn124_1307"

><td id="1307"><a href="#1307">1307</a></td></tr
><tr id="gr_svn124_1308"

><td id="1308"><a href="#1308">1308</a></td></tr
><tr id="gr_svn124_1309"

><td id="1309"><a href="#1309">1309</a></td></tr
><tr id="gr_svn124_1310"

><td id="1310"><a href="#1310">1310</a></td></tr
><tr id="gr_svn124_1311"

><td id="1311"><a href="#1311">1311</a></td></tr
><tr id="gr_svn124_1312"

><td id="1312"><a href="#1312">1312</a></td></tr
><tr id="gr_svn124_1313"

><td id="1313"><a href="#1313">1313</a></td></tr
><tr id="gr_svn124_1314"

><td id="1314"><a href="#1314">1314</a></td></tr
><tr id="gr_svn124_1315"

><td id="1315"><a href="#1315">1315</a></td></tr
><tr id="gr_svn124_1316"

><td id="1316"><a href="#1316">1316</a></td></tr
><tr id="gr_svn124_1317"

><td id="1317"><a href="#1317">1317</a></td></tr
><tr id="gr_svn124_1318"

><td id="1318"><a href="#1318">1318</a></td></tr
><tr id="gr_svn124_1319"

><td id="1319"><a href="#1319">1319</a></td></tr
><tr id="gr_svn124_1320"

><td id="1320"><a href="#1320">1320</a></td></tr
><tr id="gr_svn124_1321"

><td id="1321"><a href="#1321">1321</a></td></tr
><tr id="gr_svn124_1322"

><td id="1322"><a href="#1322">1322</a></td></tr
><tr id="gr_svn124_1323"

><td id="1323"><a href="#1323">1323</a></td></tr
><tr id="gr_svn124_1324"

><td id="1324"><a href="#1324">1324</a></td></tr
><tr id="gr_svn124_1325"

><td id="1325"><a href="#1325">1325</a></td></tr
><tr id="gr_svn124_1326"

><td id="1326"><a href="#1326">1326</a></td></tr
><tr id="gr_svn124_1327"

><td id="1327"><a href="#1327">1327</a></td></tr
><tr id="gr_svn124_1328"

><td id="1328"><a href="#1328">1328</a></td></tr
><tr id="gr_svn124_1329"

><td id="1329"><a href="#1329">1329</a></td></tr
><tr id="gr_svn124_1330"

><td id="1330"><a href="#1330">1330</a></td></tr
><tr id="gr_svn124_1331"

><td id="1331"><a href="#1331">1331</a></td></tr
><tr id="gr_svn124_1332"

><td id="1332"><a href="#1332">1332</a></td></tr
><tr id="gr_svn124_1333"

><td id="1333"><a href="#1333">1333</a></td></tr
><tr id="gr_svn124_1334"

><td id="1334"><a href="#1334">1334</a></td></tr
><tr id="gr_svn124_1335"

><td id="1335"><a href="#1335">1335</a></td></tr
><tr id="gr_svn124_1336"

><td id="1336"><a href="#1336">1336</a></td></tr
><tr id="gr_svn124_1337"

><td id="1337"><a href="#1337">1337</a></td></tr
><tr id="gr_svn124_1338"

><td id="1338"><a href="#1338">1338</a></td></tr
><tr id="gr_svn124_1339"

><td id="1339"><a href="#1339">1339</a></td></tr
><tr id="gr_svn124_1340"

><td id="1340"><a href="#1340">1340</a></td></tr
><tr id="gr_svn124_1341"

><td id="1341"><a href="#1341">1341</a></td></tr
><tr id="gr_svn124_1342"

><td id="1342"><a href="#1342">1342</a></td></tr
><tr id="gr_svn124_1343"

><td id="1343"><a href="#1343">1343</a></td></tr
><tr id="gr_svn124_1344"

><td id="1344"><a href="#1344">1344</a></td></tr
><tr id="gr_svn124_1345"

><td id="1345"><a href="#1345">1345</a></td></tr
><tr id="gr_svn124_1346"

><td id="1346"><a href="#1346">1346</a></td></tr
><tr id="gr_svn124_1347"

><td id="1347"><a href="#1347">1347</a></td></tr
><tr id="gr_svn124_1348"

><td id="1348"><a href="#1348">1348</a></td></tr
><tr id="gr_svn124_1349"

><td id="1349"><a href="#1349">1349</a></td></tr
><tr id="gr_svn124_1350"

><td id="1350"><a href="#1350">1350</a></td></tr
><tr id="gr_svn124_1351"

><td id="1351"><a href="#1351">1351</a></td></tr
><tr id="gr_svn124_1352"

><td id="1352"><a href="#1352">1352</a></td></tr
><tr id="gr_svn124_1353"

><td id="1353"><a href="#1353">1353</a></td></tr
><tr id="gr_svn124_1354"

><td id="1354"><a href="#1354">1354</a></td></tr
><tr id="gr_svn124_1355"

><td id="1355"><a href="#1355">1355</a></td></tr
><tr id="gr_svn124_1356"

><td id="1356"><a href="#1356">1356</a></td></tr
><tr id="gr_svn124_1357"

><td id="1357"><a href="#1357">1357</a></td></tr
><tr id="gr_svn124_1358"

><td id="1358"><a href="#1358">1358</a></td></tr
><tr id="gr_svn124_1359"

><td id="1359"><a href="#1359">1359</a></td></tr
><tr id="gr_svn124_1360"

><td id="1360"><a href="#1360">1360</a></td></tr
><tr id="gr_svn124_1361"

><td id="1361"><a href="#1361">1361</a></td></tr
><tr id="gr_svn124_1362"

><td id="1362"><a href="#1362">1362</a></td></tr
><tr id="gr_svn124_1363"

><td id="1363"><a href="#1363">1363</a></td></tr
><tr id="gr_svn124_1364"

><td id="1364"><a href="#1364">1364</a></td></tr
><tr id="gr_svn124_1365"

><td id="1365"><a href="#1365">1365</a></td></tr
><tr id="gr_svn124_1366"

><td id="1366"><a href="#1366">1366</a></td></tr
><tr id="gr_svn124_1367"

><td id="1367"><a href="#1367">1367</a></td></tr
><tr id="gr_svn124_1368"

><td id="1368"><a href="#1368">1368</a></td></tr
><tr id="gr_svn124_1369"

><td id="1369"><a href="#1369">1369</a></td></tr
><tr id="gr_svn124_1370"

><td id="1370"><a href="#1370">1370</a></td></tr
><tr id="gr_svn124_1371"

><td id="1371"><a href="#1371">1371</a></td></tr
><tr id="gr_svn124_1372"

><td id="1372"><a href="#1372">1372</a></td></tr
><tr id="gr_svn124_1373"

><td id="1373"><a href="#1373">1373</a></td></tr
><tr id="gr_svn124_1374"

><td id="1374"><a href="#1374">1374</a></td></tr
><tr id="gr_svn124_1375"

><td id="1375"><a href="#1375">1375</a></td></tr
><tr id="gr_svn124_1376"

><td id="1376"><a href="#1376">1376</a></td></tr
><tr id="gr_svn124_1377"

><td id="1377"><a href="#1377">1377</a></td></tr
><tr id="gr_svn124_1378"

><td id="1378"><a href="#1378">1378</a></td></tr
><tr id="gr_svn124_1379"

><td id="1379"><a href="#1379">1379</a></td></tr
><tr id="gr_svn124_1380"

><td id="1380"><a href="#1380">1380</a></td></tr
><tr id="gr_svn124_1381"

><td id="1381"><a href="#1381">1381</a></td></tr
><tr id="gr_svn124_1382"

><td id="1382"><a href="#1382">1382</a></td></tr
><tr id="gr_svn124_1383"

><td id="1383"><a href="#1383">1383</a></td></tr
><tr id="gr_svn124_1384"

><td id="1384"><a href="#1384">1384</a></td></tr
><tr id="gr_svn124_1385"

><td id="1385"><a href="#1385">1385</a></td></tr
><tr id="gr_svn124_1386"

><td id="1386"><a href="#1386">1386</a></td></tr
><tr id="gr_svn124_1387"

><td id="1387"><a href="#1387">1387</a></td></tr
><tr id="gr_svn124_1388"

><td id="1388"><a href="#1388">1388</a></td></tr
><tr id="gr_svn124_1389"

><td id="1389"><a href="#1389">1389</a></td></tr
><tr id="gr_svn124_1390"

><td id="1390"><a href="#1390">1390</a></td></tr
><tr id="gr_svn124_1391"

><td id="1391"><a href="#1391">1391</a></td></tr
><tr id="gr_svn124_1392"

><td id="1392"><a href="#1392">1392</a></td></tr
><tr id="gr_svn124_1393"

><td id="1393"><a href="#1393">1393</a></td></tr
><tr id="gr_svn124_1394"

><td id="1394"><a href="#1394">1394</a></td></tr
><tr id="gr_svn124_1395"

><td id="1395"><a href="#1395">1395</a></td></tr
><tr id="gr_svn124_1396"

><td id="1396"><a href="#1396">1396</a></td></tr
><tr id="gr_svn124_1397"

><td id="1397"><a href="#1397">1397</a></td></tr
><tr id="gr_svn124_1398"

><td id="1398"><a href="#1398">1398</a></td></tr
><tr id="gr_svn124_1399"

><td id="1399"><a href="#1399">1399</a></td></tr
><tr id="gr_svn124_1400"

><td id="1400"><a href="#1400">1400</a></td></tr
><tr id="gr_svn124_1401"

><td id="1401"><a href="#1401">1401</a></td></tr
><tr id="gr_svn124_1402"

><td id="1402"><a href="#1402">1402</a></td></tr
><tr id="gr_svn124_1403"

><td id="1403"><a href="#1403">1403</a></td></tr
><tr id="gr_svn124_1404"

><td id="1404"><a href="#1404">1404</a></td></tr
><tr id="gr_svn124_1405"

><td id="1405"><a href="#1405">1405</a></td></tr
><tr id="gr_svn124_1406"

><td id="1406"><a href="#1406">1406</a></td></tr
><tr id="gr_svn124_1407"

><td id="1407"><a href="#1407">1407</a></td></tr
><tr id="gr_svn124_1408"

><td id="1408"><a href="#1408">1408</a></td></tr
><tr id="gr_svn124_1409"

><td id="1409"><a href="#1409">1409</a></td></tr
><tr id="gr_svn124_1410"

><td id="1410"><a href="#1410">1410</a></td></tr
><tr id="gr_svn124_1411"

><td id="1411"><a href="#1411">1411</a></td></tr
><tr id="gr_svn124_1412"

><td id="1412"><a href="#1412">1412</a></td></tr
><tr id="gr_svn124_1413"

><td id="1413"><a href="#1413">1413</a></td></tr
><tr id="gr_svn124_1414"

><td id="1414"><a href="#1414">1414</a></td></tr
><tr id="gr_svn124_1415"

><td id="1415"><a href="#1415">1415</a></td></tr
><tr id="gr_svn124_1416"

><td id="1416"><a href="#1416">1416</a></td></tr
><tr id="gr_svn124_1417"

><td id="1417"><a href="#1417">1417</a></td></tr
><tr id="gr_svn124_1418"

><td id="1418"><a href="#1418">1418</a></td></tr
><tr id="gr_svn124_1419"

><td id="1419"><a href="#1419">1419</a></td></tr
><tr id="gr_svn124_1420"

><td id="1420"><a href="#1420">1420</a></td></tr
><tr id="gr_svn124_1421"

><td id="1421"><a href="#1421">1421</a></td></tr
><tr id="gr_svn124_1422"

><td id="1422"><a href="#1422">1422</a></td></tr
><tr id="gr_svn124_1423"

><td id="1423"><a href="#1423">1423</a></td></tr
><tr id="gr_svn124_1424"

><td id="1424"><a href="#1424">1424</a></td></tr
><tr id="gr_svn124_1425"

><td id="1425"><a href="#1425">1425</a></td></tr
><tr id="gr_svn124_1426"

><td id="1426"><a href="#1426">1426</a></td></tr
><tr id="gr_svn124_1427"

><td id="1427"><a href="#1427">1427</a></td></tr
><tr id="gr_svn124_1428"

><td id="1428"><a href="#1428">1428</a></td></tr
><tr id="gr_svn124_1429"

><td id="1429"><a href="#1429">1429</a></td></tr
><tr id="gr_svn124_1430"

><td id="1430"><a href="#1430">1430</a></td></tr
><tr id="gr_svn124_1431"

><td id="1431"><a href="#1431">1431</a></td></tr
><tr id="gr_svn124_1432"

><td id="1432"><a href="#1432">1432</a></td></tr
><tr id="gr_svn124_1433"

><td id="1433"><a href="#1433">1433</a></td></tr
><tr id="gr_svn124_1434"

><td id="1434"><a href="#1434">1434</a></td></tr
><tr id="gr_svn124_1435"

><td id="1435"><a href="#1435">1435</a></td></tr
><tr id="gr_svn124_1436"

><td id="1436"><a href="#1436">1436</a></td></tr
><tr id="gr_svn124_1437"

><td id="1437"><a href="#1437">1437</a></td></tr
><tr id="gr_svn124_1438"

><td id="1438"><a href="#1438">1438</a></td></tr
><tr id="gr_svn124_1439"

><td id="1439"><a href="#1439">1439</a></td></tr
><tr id="gr_svn124_1440"

><td id="1440"><a href="#1440">1440</a></td></tr
><tr id="gr_svn124_1441"

><td id="1441"><a href="#1441">1441</a></td></tr
><tr id="gr_svn124_1442"

><td id="1442"><a href="#1442">1442</a></td></tr
><tr id="gr_svn124_1443"

><td id="1443"><a href="#1443">1443</a></td></tr
><tr id="gr_svn124_1444"

><td id="1444"><a href="#1444">1444</a></td></tr
><tr id="gr_svn124_1445"

><td id="1445"><a href="#1445">1445</a></td></tr
><tr id="gr_svn124_1446"

><td id="1446"><a href="#1446">1446</a></td></tr
><tr id="gr_svn124_1447"

><td id="1447"><a href="#1447">1447</a></td></tr
><tr id="gr_svn124_1448"

><td id="1448"><a href="#1448">1448</a></td></tr
><tr id="gr_svn124_1449"

><td id="1449"><a href="#1449">1449</a></td></tr
><tr id="gr_svn124_1450"

><td id="1450"><a href="#1450">1450</a></td></tr
><tr id="gr_svn124_1451"

><td id="1451"><a href="#1451">1451</a></td></tr
><tr id="gr_svn124_1452"

><td id="1452"><a href="#1452">1452</a></td></tr
><tr id="gr_svn124_1453"

><td id="1453"><a href="#1453">1453</a></td></tr
><tr id="gr_svn124_1454"

><td id="1454"><a href="#1454">1454</a></td></tr
><tr id="gr_svn124_1455"

><td id="1455"><a href="#1455">1455</a></td></tr
><tr id="gr_svn124_1456"

><td id="1456"><a href="#1456">1456</a></td></tr
><tr id="gr_svn124_1457"

><td id="1457"><a href="#1457">1457</a></td></tr
><tr id="gr_svn124_1458"

><td id="1458"><a href="#1458">1458</a></td></tr
><tr id="gr_svn124_1459"

><td id="1459"><a href="#1459">1459</a></td></tr
><tr id="gr_svn124_1460"

><td id="1460"><a href="#1460">1460</a></td></tr
><tr id="gr_svn124_1461"

><td id="1461"><a href="#1461">1461</a></td></tr
><tr id="gr_svn124_1462"

><td id="1462"><a href="#1462">1462</a></td></tr
><tr id="gr_svn124_1463"

><td id="1463"><a href="#1463">1463</a></td></tr
><tr id="gr_svn124_1464"

><td id="1464"><a href="#1464">1464</a></td></tr
><tr id="gr_svn124_1465"

><td id="1465"><a href="#1465">1465</a></td></tr
><tr id="gr_svn124_1466"

><td id="1466"><a href="#1466">1466</a></td></tr
><tr id="gr_svn124_1467"

><td id="1467"><a href="#1467">1467</a></td></tr
><tr id="gr_svn124_1468"

><td id="1468"><a href="#1468">1468</a></td></tr
><tr id="gr_svn124_1469"

><td id="1469"><a href="#1469">1469</a></td></tr
><tr id="gr_svn124_1470"

><td id="1470"><a href="#1470">1470</a></td></tr
><tr id="gr_svn124_1471"

><td id="1471"><a href="#1471">1471</a></td></tr
><tr id="gr_svn124_1472"

><td id="1472"><a href="#1472">1472</a></td></tr
><tr id="gr_svn124_1473"

><td id="1473"><a href="#1473">1473</a></td></tr
><tr id="gr_svn124_1474"

><td id="1474"><a href="#1474">1474</a></td></tr
><tr id="gr_svn124_1475"

><td id="1475"><a href="#1475">1475</a></td></tr
><tr id="gr_svn124_1476"

><td id="1476"><a href="#1476">1476</a></td></tr
><tr id="gr_svn124_1477"

><td id="1477"><a href="#1477">1477</a></td></tr
><tr id="gr_svn124_1478"

><td id="1478"><a href="#1478">1478</a></td></tr
><tr id="gr_svn124_1479"

><td id="1479"><a href="#1479">1479</a></td></tr
><tr id="gr_svn124_1480"

><td id="1480"><a href="#1480">1480</a></td></tr
><tr id="gr_svn124_1481"

><td id="1481"><a href="#1481">1481</a></td></tr
><tr id="gr_svn124_1482"

><td id="1482"><a href="#1482">1482</a></td></tr
><tr id="gr_svn124_1483"

><td id="1483"><a href="#1483">1483</a></td></tr
><tr id="gr_svn124_1484"

><td id="1484"><a href="#1484">1484</a></td></tr
><tr id="gr_svn124_1485"

><td id="1485"><a href="#1485">1485</a></td></tr
><tr id="gr_svn124_1486"

><td id="1486"><a href="#1486">1486</a></td></tr
><tr id="gr_svn124_1487"

><td id="1487"><a href="#1487">1487</a></td></tr
><tr id="gr_svn124_1488"

><td id="1488"><a href="#1488">1488</a></td></tr
><tr id="gr_svn124_1489"

><td id="1489"><a href="#1489">1489</a></td></tr
><tr id="gr_svn124_1490"

><td id="1490"><a href="#1490">1490</a></td></tr
><tr id="gr_svn124_1491"

><td id="1491"><a href="#1491">1491</a></td></tr
><tr id="gr_svn124_1492"

><td id="1492"><a href="#1492">1492</a></td></tr
><tr id="gr_svn124_1493"

><td id="1493"><a href="#1493">1493</a></td></tr
><tr id="gr_svn124_1494"

><td id="1494"><a href="#1494">1494</a></td></tr
><tr id="gr_svn124_1495"

><td id="1495"><a href="#1495">1495</a></td></tr
><tr id="gr_svn124_1496"

><td id="1496"><a href="#1496">1496</a></td></tr
><tr id="gr_svn124_1497"

><td id="1497"><a href="#1497">1497</a></td></tr
><tr id="gr_svn124_1498"

><td id="1498"><a href="#1498">1498</a></td></tr
><tr id="gr_svn124_1499"

><td id="1499"><a href="#1499">1499</a></td></tr
><tr id="gr_svn124_1500"

><td id="1500"><a href="#1500">1500</a></td></tr
><tr id="gr_svn124_1501"

><td id="1501"><a href="#1501">1501</a></td></tr
><tr id="gr_svn124_1502"

><td id="1502"><a href="#1502">1502</a></td></tr
><tr id="gr_svn124_1503"

><td id="1503"><a href="#1503">1503</a></td></tr
><tr id="gr_svn124_1504"

><td id="1504"><a href="#1504">1504</a></td></tr
><tr id="gr_svn124_1505"

><td id="1505"><a href="#1505">1505</a></td></tr
><tr id="gr_svn124_1506"

><td id="1506"><a href="#1506">1506</a></td></tr
><tr id="gr_svn124_1507"

><td id="1507"><a href="#1507">1507</a></td></tr
><tr id="gr_svn124_1508"

><td id="1508"><a href="#1508">1508</a></td></tr
><tr id="gr_svn124_1509"

><td id="1509"><a href="#1509">1509</a></td></tr
><tr id="gr_svn124_1510"

><td id="1510"><a href="#1510">1510</a></td></tr
><tr id="gr_svn124_1511"

><td id="1511"><a href="#1511">1511</a></td></tr
><tr id="gr_svn124_1512"

><td id="1512"><a href="#1512">1512</a></td></tr
><tr id="gr_svn124_1513"

><td id="1513"><a href="#1513">1513</a></td></tr
><tr id="gr_svn124_1514"

><td id="1514"><a href="#1514">1514</a></td></tr
><tr id="gr_svn124_1515"

><td id="1515"><a href="#1515">1515</a></td></tr
><tr id="gr_svn124_1516"

><td id="1516"><a href="#1516">1516</a></td></tr
><tr id="gr_svn124_1517"

><td id="1517"><a href="#1517">1517</a></td></tr
><tr id="gr_svn124_1518"

><td id="1518"><a href="#1518">1518</a></td></tr
><tr id="gr_svn124_1519"

><td id="1519"><a href="#1519">1519</a></td></tr
><tr id="gr_svn124_1520"

><td id="1520"><a href="#1520">1520</a></td></tr
><tr id="gr_svn124_1521"

><td id="1521"><a href="#1521">1521</a></td></tr
><tr id="gr_svn124_1522"

><td id="1522"><a href="#1522">1522</a></td></tr
><tr id="gr_svn124_1523"

><td id="1523"><a href="#1523">1523</a></td></tr
><tr id="gr_svn124_1524"

><td id="1524"><a href="#1524">1524</a></td></tr
><tr id="gr_svn124_1525"

><td id="1525"><a href="#1525">1525</a></td></tr
><tr id="gr_svn124_1526"

><td id="1526"><a href="#1526">1526</a></td></tr
><tr id="gr_svn124_1527"

><td id="1527"><a href="#1527">1527</a></td></tr
><tr id="gr_svn124_1528"

><td id="1528"><a href="#1528">1528</a></td></tr
><tr id="gr_svn124_1529"

><td id="1529"><a href="#1529">1529</a></td></tr
><tr id="gr_svn124_1530"

><td id="1530"><a href="#1530">1530</a></td></tr
><tr id="gr_svn124_1531"

><td id="1531"><a href="#1531">1531</a></td></tr
><tr id="gr_svn124_1532"

><td id="1532"><a href="#1532">1532</a></td></tr
><tr id="gr_svn124_1533"

><td id="1533"><a href="#1533">1533</a></td></tr
><tr id="gr_svn124_1534"

><td id="1534"><a href="#1534">1534</a></td></tr
><tr id="gr_svn124_1535"

><td id="1535"><a href="#1535">1535</a></td></tr
><tr id="gr_svn124_1536"

><td id="1536"><a href="#1536">1536</a></td></tr
><tr id="gr_svn124_1537"

><td id="1537"><a href="#1537">1537</a></td></tr
><tr id="gr_svn124_1538"

><td id="1538"><a href="#1538">1538</a></td></tr
><tr id="gr_svn124_1539"

><td id="1539"><a href="#1539">1539</a></td></tr
><tr id="gr_svn124_1540"

><td id="1540"><a href="#1540">1540</a></td></tr
><tr id="gr_svn124_1541"

><td id="1541"><a href="#1541">1541</a></td></tr
><tr id="gr_svn124_1542"

><td id="1542"><a href="#1542">1542</a></td></tr
><tr id="gr_svn124_1543"

><td id="1543"><a href="#1543">1543</a></td></tr
><tr id="gr_svn124_1544"

><td id="1544"><a href="#1544">1544</a></td></tr
><tr id="gr_svn124_1545"

><td id="1545"><a href="#1545">1545</a></td></tr
><tr id="gr_svn124_1546"

><td id="1546"><a href="#1546">1546</a></td></tr
><tr id="gr_svn124_1547"

><td id="1547"><a href="#1547">1547</a></td></tr
><tr id="gr_svn124_1548"

><td id="1548"><a href="#1548">1548</a></td></tr
><tr id="gr_svn124_1549"

><td id="1549"><a href="#1549">1549</a></td></tr
><tr id="gr_svn124_1550"

><td id="1550"><a href="#1550">1550</a></td></tr
><tr id="gr_svn124_1551"

><td id="1551"><a href="#1551">1551</a></td></tr
><tr id="gr_svn124_1552"

><td id="1552"><a href="#1552">1552</a></td></tr
><tr id="gr_svn124_1553"

><td id="1553"><a href="#1553">1553</a></td></tr
><tr id="gr_svn124_1554"

><td id="1554"><a href="#1554">1554</a></td></tr
><tr id="gr_svn124_1555"

><td id="1555"><a href="#1555">1555</a></td></tr
><tr id="gr_svn124_1556"

><td id="1556"><a href="#1556">1556</a></td></tr
><tr id="gr_svn124_1557"

><td id="1557"><a href="#1557">1557</a></td></tr
><tr id="gr_svn124_1558"

><td id="1558"><a href="#1558">1558</a></td></tr
><tr id="gr_svn124_1559"

><td id="1559"><a href="#1559">1559</a></td></tr
><tr id="gr_svn124_1560"

><td id="1560"><a href="#1560">1560</a></td></tr
><tr id="gr_svn124_1561"

><td id="1561"><a href="#1561">1561</a></td></tr
><tr id="gr_svn124_1562"

><td id="1562"><a href="#1562">1562</a></td></tr
><tr id="gr_svn124_1563"

><td id="1563"><a href="#1563">1563</a></td></tr
><tr id="gr_svn124_1564"

><td id="1564"><a href="#1564">1564</a></td></tr
><tr id="gr_svn124_1565"

><td id="1565"><a href="#1565">1565</a></td></tr
><tr id="gr_svn124_1566"

><td id="1566"><a href="#1566">1566</a></td></tr
><tr id="gr_svn124_1567"

><td id="1567"><a href="#1567">1567</a></td></tr
><tr id="gr_svn124_1568"

><td id="1568"><a href="#1568">1568</a></td></tr
><tr id="gr_svn124_1569"

><td id="1569"><a href="#1569">1569</a></td></tr
><tr id="gr_svn124_1570"

><td id="1570"><a href="#1570">1570</a></td></tr
><tr id="gr_svn124_1571"

><td id="1571"><a href="#1571">1571</a></td></tr
><tr id="gr_svn124_1572"

><td id="1572"><a href="#1572">1572</a></td></tr
><tr id="gr_svn124_1573"

><td id="1573"><a href="#1573">1573</a></td></tr
><tr id="gr_svn124_1574"

><td id="1574"><a href="#1574">1574</a></td></tr
><tr id="gr_svn124_1575"

><td id="1575"><a href="#1575">1575</a></td></tr
><tr id="gr_svn124_1576"

><td id="1576"><a href="#1576">1576</a></td></tr
><tr id="gr_svn124_1577"

><td id="1577"><a href="#1577">1577</a></td></tr
><tr id="gr_svn124_1578"

><td id="1578"><a href="#1578">1578</a></td></tr
><tr id="gr_svn124_1579"

><td id="1579"><a href="#1579">1579</a></td></tr
><tr id="gr_svn124_1580"

><td id="1580"><a href="#1580">1580</a></td></tr
><tr id="gr_svn124_1581"

><td id="1581"><a href="#1581">1581</a></td></tr
><tr id="gr_svn124_1582"

><td id="1582"><a href="#1582">1582</a></td></tr
><tr id="gr_svn124_1583"

><td id="1583"><a href="#1583">1583</a></td></tr
><tr id="gr_svn124_1584"

><td id="1584"><a href="#1584">1584</a></td></tr
><tr id="gr_svn124_1585"

><td id="1585"><a href="#1585">1585</a></td></tr
><tr id="gr_svn124_1586"

><td id="1586"><a href="#1586">1586</a></td></tr
><tr id="gr_svn124_1587"

><td id="1587"><a href="#1587">1587</a></td></tr
><tr id="gr_svn124_1588"

><td id="1588"><a href="#1588">1588</a></td></tr
><tr id="gr_svn124_1589"

><td id="1589"><a href="#1589">1589</a></td></tr
><tr id="gr_svn124_1590"

><td id="1590"><a href="#1590">1590</a></td></tr
><tr id="gr_svn124_1591"

><td id="1591"><a href="#1591">1591</a></td></tr
><tr id="gr_svn124_1592"

><td id="1592"><a href="#1592">1592</a></td></tr
><tr id="gr_svn124_1593"

><td id="1593"><a href="#1593">1593</a></td></tr
><tr id="gr_svn124_1594"

><td id="1594"><a href="#1594">1594</a></td></tr
><tr id="gr_svn124_1595"

><td id="1595"><a href="#1595">1595</a></td></tr
><tr id="gr_svn124_1596"

><td id="1596"><a href="#1596">1596</a></td></tr
><tr id="gr_svn124_1597"

><td id="1597"><a href="#1597">1597</a></td></tr
><tr id="gr_svn124_1598"

><td id="1598"><a href="#1598">1598</a></td></tr
><tr id="gr_svn124_1599"

><td id="1599"><a href="#1599">1599</a></td></tr
><tr id="gr_svn124_1600"

><td id="1600"><a href="#1600">1600</a></td></tr
><tr id="gr_svn124_1601"

><td id="1601"><a href="#1601">1601</a></td></tr
><tr id="gr_svn124_1602"

><td id="1602"><a href="#1602">1602</a></td></tr
><tr id="gr_svn124_1603"

><td id="1603"><a href="#1603">1603</a></td></tr
><tr id="gr_svn124_1604"

><td id="1604"><a href="#1604">1604</a></td></tr
><tr id="gr_svn124_1605"

><td id="1605"><a href="#1605">1605</a></td></tr
><tr id="gr_svn124_1606"

><td id="1606"><a href="#1606">1606</a></td></tr
><tr id="gr_svn124_1607"

><td id="1607"><a href="#1607">1607</a></td></tr
><tr id="gr_svn124_1608"

><td id="1608"><a href="#1608">1608</a></td></tr
><tr id="gr_svn124_1609"

><td id="1609"><a href="#1609">1609</a></td></tr
><tr id="gr_svn124_1610"

><td id="1610"><a href="#1610">1610</a></td></tr
><tr id="gr_svn124_1611"

><td id="1611"><a href="#1611">1611</a></td></tr
><tr id="gr_svn124_1612"

><td id="1612"><a href="#1612">1612</a></td></tr
><tr id="gr_svn124_1613"

><td id="1613"><a href="#1613">1613</a></td></tr
><tr id="gr_svn124_1614"

><td id="1614"><a href="#1614">1614</a></td></tr
><tr id="gr_svn124_1615"

><td id="1615"><a href="#1615">1615</a></td></tr
><tr id="gr_svn124_1616"

><td id="1616"><a href="#1616">1616</a></td></tr
><tr id="gr_svn124_1617"

><td id="1617"><a href="#1617">1617</a></td></tr
><tr id="gr_svn124_1618"

><td id="1618"><a href="#1618">1618</a></td></tr
><tr id="gr_svn124_1619"

><td id="1619"><a href="#1619">1619</a></td></tr
><tr id="gr_svn124_1620"

><td id="1620"><a href="#1620">1620</a></td></tr
><tr id="gr_svn124_1621"

><td id="1621"><a href="#1621">1621</a></td></tr
><tr id="gr_svn124_1622"

><td id="1622"><a href="#1622">1622</a></td></tr
><tr id="gr_svn124_1623"

><td id="1623"><a href="#1623">1623</a></td></tr
><tr id="gr_svn124_1624"

><td id="1624"><a href="#1624">1624</a></td></tr
><tr id="gr_svn124_1625"

><td id="1625"><a href="#1625">1625</a></td></tr
><tr id="gr_svn124_1626"

><td id="1626"><a href="#1626">1626</a></td></tr
><tr id="gr_svn124_1627"

><td id="1627"><a href="#1627">1627</a></td></tr
><tr id="gr_svn124_1628"

><td id="1628"><a href="#1628">1628</a></td></tr
><tr id="gr_svn124_1629"

><td id="1629"><a href="#1629">1629</a></td></tr
><tr id="gr_svn124_1630"

><td id="1630"><a href="#1630">1630</a></td></tr
><tr id="gr_svn124_1631"

><td id="1631"><a href="#1631">1631</a></td></tr
><tr id="gr_svn124_1632"

><td id="1632"><a href="#1632">1632</a></td></tr
><tr id="gr_svn124_1633"

><td id="1633"><a href="#1633">1633</a></td></tr
><tr id="gr_svn124_1634"

><td id="1634"><a href="#1634">1634</a></td></tr
><tr id="gr_svn124_1635"

><td id="1635"><a href="#1635">1635</a></td></tr
><tr id="gr_svn124_1636"

><td id="1636"><a href="#1636">1636</a></td></tr
><tr id="gr_svn124_1637"

><td id="1637"><a href="#1637">1637</a></td></tr
><tr id="gr_svn124_1638"

><td id="1638"><a href="#1638">1638</a></td></tr
><tr id="gr_svn124_1639"

><td id="1639"><a href="#1639">1639</a></td></tr
><tr id="gr_svn124_1640"

><td id="1640"><a href="#1640">1640</a></td></tr
><tr id="gr_svn124_1641"

><td id="1641"><a href="#1641">1641</a></td></tr
><tr id="gr_svn124_1642"

><td id="1642"><a href="#1642">1642</a></td></tr
><tr id="gr_svn124_1643"

><td id="1643"><a href="#1643">1643</a></td></tr
><tr id="gr_svn124_1644"

><td id="1644"><a href="#1644">1644</a></td></tr
><tr id="gr_svn124_1645"

><td id="1645"><a href="#1645">1645</a></td></tr
><tr id="gr_svn124_1646"

><td id="1646"><a href="#1646">1646</a></td></tr
><tr id="gr_svn124_1647"

><td id="1647"><a href="#1647">1647</a></td></tr
><tr id="gr_svn124_1648"

><td id="1648"><a href="#1648">1648</a></td></tr
><tr id="gr_svn124_1649"

><td id="1649"><a href="#1649">1649</a></td></tr
><tr id="gr_svn124_1650"

><td id="1650"><a href="#1650">1650</a></td></tr
><tr id="gr_svn124_1651"

><td id="1651"><a href="#1651">1651</a></td></tr
><tr id="gr_svn124_1652"

><td id="1652"><a href="#1652">1652</a></td></tr
><tr id="gr_svn124_1653"

><td id="1653"><a href="#1653">1653</a></td></tr
><tr id="gr_svn124_1654"

><td id="1654"><a href="#1654">1654</a></td></tr
><tr id="gr_svn124_1655"

><td id="1655"><a href="#1655">1655</a></td></tr
><tr id="gr_svn124_1656"

><td id="1656"><a href="#1656">1656</a></td></tr
><tr id="gr_svn124_1657"

><td id="1657"><a href="#1657">1657</a></td></tr
><tr id="gr_svn124_1658"

><td id="1658"><a href="#1658">1658</a></td></tr
><tr id="gr_svn124_1659"

><td id="1659"><a href="#1659">1659</a></td></tr
><tr id="gr_svn124_1660"

><td id="1660"><a href="#1660">1660</a></td></tr
><tr id="gr_svn124_1661"

><td id="1661"><a href="#1661">1661</a></td></tr
><tr id="gr_svn124_1662"

><td id="1662"><a href="#1662">1662</a></td></tr
><tr id="gr_svn124_1663"

><td id="1663"><a href="#1663">1663</a></td></tr
><tr id="gr_svn124_1664"

><td id="1664"><a href="#1664">1664</a></td></tr
><tr id="gr_svn124_1665"

><td id="1665"><a href="#1665">1665</a></td></tr
><tr id="gr_svn124_1666"

><td id="1666"><a href="#1666">1666</a></td></tr
><tr id="gr_svn124_1667"

><td id="1667"><a href="#1667">1667</a></td></tr
><tr id="gr_svn124_1668"

><td id="1668"><a href="#1668">1668</a></td></tr
><tr id="gr_svn124_1669"

><td id="1669"><a href="#1669">1669</a></td></tr
><tr id="gr_svn124_1670"

><td id="1670"><a href="#1670">1670</a></td></tr
><tr id="gr_svn124_1671"

><td id="1671"><a href="#1671">1671</a></td></tr
><tr id="gr_svn124_1672"

><td id="1672"><a href="#1672">1672</a></td></tr
><tr id="gr_svn124_1673"

><td id="1673"><a href="#1673">1673</a></td></tr
><tr id="gr_svn124_1674"

><td id="1674"><a href="#1674">1674</a></td></tr
><tr id="gr_svn124_1675"

><td id="1675"><a href="#1675">1675</a></td></tr
><tr id="gr_svn124_1676"

><td id="1676"><a href="#1676">1676</a></td></tr
><tr id="gr_svn124_1677"

><td id="1677"><a href="#1677">1677</a></td></tr
><tr id="gr_svn124_1678"

><td id="1678"><a href="#1678">1678</a></td></tr
><tr id="gr_svn124_1679"

><td id="1679"><a href="#1679">1679</a></td></tr
><tr id="gr_svn124_1680"

><td id="1680"><a href="#1680">1680</a></td></tr
><tr id="gr_svn124_1681"

><td id="1681"><a href="#1681">1681</a></td></tr
><tr id="gr_svn124_1682"

><td id="1682"><a href="#1682">1682</a></td></tr
><tr id="gr_svn124_1683"

><td id="1683"><a href="#1683">1683</a></td></tr
><tr id="gr_svn124_1684"

><td id="1684"><a href="#1684">1684</a></td></tr
><tr id="gr_svn124_1685"

><td id="1685"><a href="#1685">1685</a></td></tr
><tr id="gr_svn124_1686"

><td id="1686"><a href="#1686">1686</a></td></tr
><tr id="gr_svn124_1687"

><td id="1687"><a href="#1687">1687</a></td></tr
><tr id="gr_svn124_1688"

><td id="1688"><a href="#1688">1688</a></td></tr
><tr id="gr_svn124_1689"

><td id="1689"><a href="#1689">1689</a></td></tr
><tr id="gr_svn124_1690"

><td id="1690"><a href="#1690">1690</a></td></tr
><tr id="gr_svn124_1691"

><td id="1691"><a href="#1691">1691</a></td></tr
><tr id="gr_svn124_1692"

><td id="1692"><a href="#1692">1692</a></td></tr
><tr id="gr_svn124_1693"

><td id="1693"><a href="#1693">1693</a></td></tr
><tr id="gr_svn124_1694"

><td id="1694"><a href="#1694">1694</a></td></tr
><tr id="gr_svn124_1695"

><td id="1695"><a href="#1695">1695</a></td></tr
><tr id="gr_svn124_1696"

><td id="1696"><a href="#1696">1696</a></td></tr
><tr id="gr_svn124_1697"

><td id="1697"><a href="#1697">1697</a></td></tr
><tr id="gr_svn124_1698"

><td id="1698"><a href="#1698">1698</a></td></tr
><tr id="gr_svn124_1699"

><td id="1699"><a href="#1699">1699</a></td></tr
><tr id="gr_svn124_1700"

><td id="1700"><a href="#1700">1700</a></td></tr
><tr id="gr_svn124_1701"

><td id="1701"><a href="#1701">1701</a></td></tr
><tr id="gr_svn124_1702"

><td id="1702"><a href="#1702">1702</a></td></tr
><tr id="gr_svn124_1703"

><td id="1703"><a href="#1703">1703</a></td></tr
><tr id="gr_svn124_1704"

><td id="1704"><a href="#1704">1704</a></td></tr
><tr id="gr_svn124_1705"

><td id="1705"><a href="#1705">1705</a></td></tr
><tr id="gr_svn124_1706"

><td id="1706"><a href="#1706">1706</a></td></tr
><tr id="gr_svn124_1707"

><td id="1707"><a href="#1707">1707</a></td></tr
><tr id="gr_svn124_1708"

><td id="1708"><a href="#1708">1708</a></td></tr
><tr id="gr_svn124_1709"

><td id="1709"><a href="#1709">1709</a></td></tr
><tr id="gr_svn124_1710"

><td id="1710"><a href="#1710">1710</a></td></tr
><tr id="gr_svn124_1711"

><td id="1711"><a href="#1711">1711</a></td></tr
><tr id="gr_svn124_1712"

><td id="1712"><a href="#1712">1712</a></td></tr
><tr id="gr_svn124_1713"

><td id="1713"><a href="#1713">1713</a></td></tr
><tr id="gr_svn124_1714"

><td id="1714"><a href="#1714">1714</a></td></tr
><tr id="gr_svn124_1715"

><td id="1715"><a href="#1715">1715</a></td></tr
><tr id="gr_svn124_1716"

><td id="1716"><a href="#1716">1716</a></td></tr
><tr id="gr_svn124_1717"

><td id="1717"><a href="#1717">1717</a></td></tr
><tr id="gr_svn124_1718"

><td id="1718"><a href="#1718">1718</a></td></tr
><tr id="gr_svn124_1719"

><td id="1719"><a href="#1719">1719</a></td></tr
><tr id="gr_svn124_1720"

><td id="1720"><a href="#1720">1720</a></td></tr
><tr id="gr_svn124_1721"

><td id="1721"><a href="#1721">1721</a></td></tr
><tr id="gr_svn124_1722"

><td id="1722"><a href="#1722">1722</a></td></tr
><tr id="gr_svn124_1723"

><td id="1723"><a href="#1723">1723</a></td></tr
><tr id="gr_svn124_1724"

><td id="1724"><a href="#1724">1724</a></td></tr
><tr id="gr_svn124_1725"

><td id="1725"><a href="#1725">1725</a></td></tr
><tr id="gr_svn124_1726"

><td id="1726"><a href="#1726">1726</a></td></tr
><tr id="gr_svn124_1727"

><td id="1727"><a href="#1727">1727</a></td></tr
><tr id="gr_svn124_1728"

><td id="1728"><a href="#1728">1728</a></td></tr
><tr id="gr_svn124_1729"

><td id="1729"><a href="#1729">1729</a></td></tr
><tr id="gr_svn124_1730"

><td id="1730"><a href="#1730">1730</a></td></tr
><tr id="gr_svn124_1731"

><td id="1731"><a href="#1731">1731</a></td></tr
><tr id="gr_svn124_1732"

><td id="1732"><a href="#1732">1732</a></td></tr
><tr id="gr_svn124_1733"

><td id="1733"><a href="#1733">1733</a></td></tr
><tr id="gr_svn124_1734"

><td id="1734"><a href="#1734">1734</a></td></tr
><tr id="gr_svn124_1735"

><td id="1735"><a href="#1735">1735</a></td></tr
><tr id="gr_svn124_1736"

><td id="1736"><a href="#1736">1736</a></td></tr
><tr id="gr_svn124_1737"

><td id="1737"><a href="#1737">1737</a></td></tr
><tr id="gr_svn124_1738"

><td id="1738"><a href="#1738">1738</a></td></tr
><tr id="gr_svn124_1739"

><td id="1739"><a href="#1739">1739</a></td></tr
><tr id="gr_svn124_1740"

><td id="1740"><a href="#1740">1740</a></td></tr
><tr id="gr_svn124_1741"

><td id="1741"><a href="#1741">1741</a></td></tr
><tr id="gr_svn124_1742"

><td id="1742"><a href="#1742">1742</a></td></tr
><tr id="gr_svn124_1743"

><td id="1743"><a href="#1743">1743</a></td></tr
><tr id="gr_svn124_1744"

><td id="1744"><a href="#1744">1744</a></td></tr
><tr id="gr_svn124_1745"

><td id="1745"><a href="#1745">1745</a></td></tr
><tr id="gr_svn124_1746"

><td id="1746"><a href="#1746">1746</a></td></tr
><tr id="gr_svn124_1747"

><td id="1747"><a href="#1747">1747</a></td></tr
><tr id="gr_svn124_1748"

><td id="1748"><a href="#1748">1748</a></td></tr
><tr id="gr_svn124_1749"

><td id="1749"><a href="#1749">1749</a></td></tr
><tr id="gr_svn124_1750"

><td id="1750"><a href="#1750">1750</a></td></tr
><tr id="gr_svn124_1751"

><td id="1751"><a href="#1751">1751</a></td></tr
><tr id="gr_svn124_1752"

><td id="1752"><a href="#1752">1752</a></td></tr
><tr id="gr_svn124_1753"

><td id="1753"><a href="#1753">1753</a></td></tr
><tr id="gr_svn124_1754"

><td id="1754"><a href="#1754">1754</a></td></tr
><tr id="gr_svn124_1755"

><td id="1755"><a href="#1755">1755</a></td></tr
><tr id="gr_svn124_1756"

><td id="1756"><a href="#1756">1756</a></td></tr
><tr id="gr_svn124_1757"

><td id="1757"><a href="#1757">1757</a></td></tr
><tr id="gr_svn124_1758"

><td id="1758"><a href="#1758">1758</a></td></tr
><tr id="gr_svn124_1759"

><td id="1759"><a href="#1759">1759</a></td></tr
><tr id="gr_svn124_1760"

><td id="1760"><a href="#1760">1760</a></td></tr
><tr id="gr_svn124_1761"

><td id="1761"><a href="#1761">1761</a></td></tr
><tr id="gr_svn124_1762"

><td id="1762"><a href="#1762">1762</a></td></tr
><tr id="gr_svn124_1763"

><td id="1763"><a href="#1763">1763</a></td></tr
><tr id="gr_svn124_1764"

><td id="1764"><a href="#1764">1764</a></td></tr
><tr id="gr_svn124_1765"

><td id="1765"><a href="#1765">1765</a></td></tr
><tr id="gr_svn124_1766"

><td id="1766"><a href="#1766">1766</a></td></tr
><tr id="gr_svn124_1767"

><td id="1767"><a href="#1767">1767</a></td></tr
><tr id="gr_svn124_1768"

><td id="1768"><a href="#1768">1768</a></td></tr
><tr id="gr_svn124_1769"

><td id="1769"><a href="#1769">1769</a></td></tr
><tr id="gr_svn124_1770"

><td id="1770"><a href="#1770">1770</a></td></tr
><tr id="gr_svn124_1771"

><td id="1771"><a href="#1771">1771</a></td></tr
><tr id="gr_svn124_1772"

><td id="1772"><a href="#1772">1772</a></td></tr
><tr id="gr_svn124_1773"

><td id="1773"><a href="#1773">1773</a></td></tr
><tr id="gr_svn124_1774"

><td id="1774"><a href="#1774">1774</a></td></tr
><tr id="gr_svn124_1775"

><td id="1775"><a href="#1775">1775</a></td></tr
><tr id="gr_svn124_1776"

><td id="1776"><a href="#1776">1776</a></td></tr
><tr id="gr_svn124_1777"

><td id="1777"><a href="#1777">1777</a></td></tr
><tr id="gr_svn124_1778"

><td id="1778"><a href="#1778">1778</a></td></tr
><tr id="gr_svn124_1779"

><td id="1779"><a href="#1779">1779</a></td></tr
><tr id="gr_svn124_1780"

><td id="1780"><a href="#1780">1780</a></td></tr
><tr id="gr_svn124_1781"

><td id="1781"><a href="#1781">1781</a></td></tr
><tr id="gr_svn124_1782"

><td id="1782"><a href="#1782">1782</a></td></tr
><tr id="gr_svn124_1783"

><td id="1783"><a href="#1783">1783</a></td></tr
><tr id="gr_svn124_1784"

><td id="1784"><a href="#1784">1784</a></td></tr
><tr id="gr_svn124_1785"

><td id="1785"><a href="#1785">1785</a></td></tr
><tr id="gr_svn124_1786"

><td id="1786"><a href="#1786">1786</a></td></tr
><tr id="gr_svn124_1787"

><td id="1787"><a href="#1787">1787</a></td></tr
><tr id="gr_svn124_1788"

><td id="1788"><a href="#1788">1788</a></td></tr
><tr id="gr_svn124_1789"

><td id="1789"><a href="#1789">1789</a></td></tr
><tr id="gr_svn124_1790"

><td id="1790"><a href="#1790">1790</a></td></tr
><tr id="gr_svn124_1791"

><td id="1791"><a href="#1791">1791</a></td></tr
><tr id="gr_svn124_1792"

><td id="1792"><a href="#1792">1792</a></td></tr
><tr id="gr_svn124_1793"

><td id="1793"><a href="#1793">1793</a></td></tr
><tr id="gr_svn124_1794"

><td id="1794"><a href="#1794">1794</a></td></tr
><tr id="gr_svn124_1795"

><td id="1795"><a href="#1795">1795</a></td></tr
><tr id="gr_svn124_1796"

><td id="1796"><a href="#1796">1796</a></td></tr
><tr id="gr_svn124_1797"

><td id="1797"><a href="#1797">1797</a></td></tr
><tr id="gr_svn124_1798"

><td id="1798"><a href="#1798">1798</a></td></tr
><tr id="gr_svn124_1799"

><td id="1799"><a href="#1799">1799</a></td></tr
><tr id="gr_svn124_1800"

><td id="1800"><a href="#1800">1800</a></td></tr
><tr id="gr_svn124_1801"

><td id="1801"><a href="#1801">1801</a></td></tr
><tr id="gr_svn124_1802"

><td id="1802"><a href="#1802">1802</a></td></tr
><tr id="gr_svn124_1803"

><td id="1803"><a href="#1803">1803</a></td></tr
><tr id="gr_svn124_1804"

><td id="1804"><a href="#1804">1804</a></td></tr
><tr id="gr_svn124_1805"

><td id="1805"><a href="#1805">1805</a></td></tr
><tr id="gr_svn124_1806"

><td id="1806"><a href="#1806">1806</a></td></tr
><tr id="gr_svn124_1807"

><td id="1807"><a href="#1807">1807</a></td></tr
><tr id="gr_svn124_1808"

><td id="1808"><a href="#1808">1808</a></td></tr
><tr id="gr_svn124_1809"

><td id="1809"><a href="#1809">1809</a></td></tr
><tr id="gr_svn124_1810"

><td id="1810"><a href="#1810">1810</a></td></tr
><tr id="gr_svn124_1811"

><td id="1811"><a href="#1811">1811</a></td></tr
><tr id="gr_svn124_1812"

><td id="1812"><a href="#1812">1812</a></td></tr
><tr id="gr_svn124_1813"

><td id="1813"><a href="#1813">1813</a></td></tr
><tr id="gr_svn124_1814"

><td id="1814"><a href="#1814">1814</a></td></tr
><tr id="gr_svn124_1815"

><td id="1815"><a href="#1815">1815</a></td></tr
><tr id="gr_svn124_1816"

><td id="1816"><a href="#1816">1816</a></td></tr
><tr id="gr_svn124_1817"

><td id="1817"><a href="#1817">1817</a></td></tr
><tr id="gr_svn124_1818"

><td id="1818"><a href="#1818">1818</a></td></tr
><tr id="gr_svn124_1819"

><td id="1819"><a href="#1819">1819</a></td></tr
><tr id="gr_svn124_1820"

><td id="1820"><a href="#1820">1820</a></td></tr
><tr id="gr_svn124_1821"

><td id="1821"><a href="#1821">1821</a></td></tr
><tr id="gr_svn124_1822"

><td id="1822"><a href="#1822">1822</a></td></tr
><tr id="gr_svn124_1823"

><td id="1823"><a href="#1823">1823</a></td></tr
><tr id="gr_svn124_1824"

><td id="1824"><a href="#1824">1824</a></td></tr
><tr id="gr_svn124_1825"

><td id="1825"><a href="#1825">1825</a></td></tr
><tr id="gr_svn124_1826"

><td id="1826"><a href="#1826">1826</a></td></tr
><tr id="gr_svn124_1827"

><td id="1827"><a href="#1827">1827</a></td></tr
><tr id="gr_svn124_1828"

><td id="1828"><a href="#1828">1828</a></td></tr
><tr id="gr_svn124_1829"

><td id="1829"><a href="#1829">1829</a></td></tr
><tr id="gr_svn124_1830"

><td id="1830"><a href="#1830">1830</a></td></tr
><tr id="gr_svn124_1831"

><td id="1831"><a href="#1831">1831</a></td></tr
><tr id="gr_svn124_1832"

><td id="1832"><a href="#1832">1832</a></td></tr
><tr id="gr_svn124_1833"

><td id="1833"><a href="#1833">1833</a></td></tr
><tr id="gr_svn124_1834"

><td id="1834"><a href="#1834">1834</a></td></tr
><tr id="gr_svn124_1835"

><td id="1835"><a href="#1835">1835</a></td></tr
><tr id="gr_svn124_1836"

><td id="1836"><a href="#1836">1836</a></td></tr
><tr id="gr_svn124_1837"

><td id="1837"><a href="#1837">1837</a></td></tr
><tr id="gr_svn124_1838"

><td id="1838"><a href="#1838">1838</a></td></tr
><tr id="gr_svn124_1839"

><td id="1839"><a href="#1839">1839</a></td></tr
><tr id="gr_svn124_1840"

><td id="1840"><a href="#1840">1840</a></td></tr
><tr id="gr_svn124_1841"

><td id="1841"><a href="#1841">1841</a></td></tr
><tr id="gr_svn124_1842"

><td id="1842"><a href="#1842">1842</a></td></tr
><tr id="gr_svn124_1843"

><td id="1843"><a href="#1843">1843</a></td></tr
><tr id="gr_svn124_1844"

><td id="1844"><a href="#1844">1844</a></td></tr
><tr id="gr_svn124_1845"

><td id="1845"><a href="#1845">1845</a></td></tr
><tr id="gr_svn124_1846"

><td id="1846"><a href="#1846">1846</a></td></tr
><tr id="gr_svn124_1847"

><td id="1847"><a href="#1847">1847</a></td></tr
><tr id="gr_svn124_1848"

><td id="1848"><a href="#1848">1848</a></td></tr
><tr id="gr_svn124_1849"

><td id="1849"><a href="#1849">1849</a></td></tr
><tr id="gr_svn124_1850"

><td id="1850"><a href="#1850">1850</a></td></tr
><tr id="gr_svn124_1851"

><td id="1851"><a href="#1851">1851</a></td></tr
><tr id="gr_svn124_1852"

><td id="1852"><a href="#1852">1852</a></td></tr
><tr id="gr_svn124_1853"

><td id="1853"><a href="#1853">1853</a></td></tr
><tr id="gr_svn124_1854"

><td id="1854"><a href="#1854">1854</a></td></tr
><tr id="gr_svn124_1855"

><td id="1855"><a href="#1855">1855</a></td></tr
><tr id="gr_svn124_1856"

><td id="1856"><a href="#1856">1856</a></td></tr
><tr id="gr_svn124_1857"

><td id="1857"><a href="#1857">1857</a></td></tr
><tr id="gr_svn124_1858"

><td id="1858"><a href="#1858">1858</a></td></tr
><tr id="gr_svn124_1859"

><td id="1859"><a href="#1859">1859</a></td></tr
><tr id="gr_svn124_1860"

><td id="1860"><a href="#1860">1860</a></td></tr
><tr id="gr_svn124_1861"

><td id="1861"><a href="#1861">1861</a></td></tr
><tr id="gr_svn124_1862"

><td id="1862"><a href="#1862">1862</a></td></tr
><tr id="gr_svn124_1863"

><td id="1863"><a href="#1863">1863</a></td></tr
><tr id="gr_svn124_1864"

><td id="1864"><a href="#1864">1864</a></td></tr
><tr id="gr_svn124_1865"

><td id="1865"><a href="#1865">1865</a></td></tr
><tr id="gr_svn124_1866"

><td id="1866"><a href="#1866">1866</a></td></tr
><tr id="gr_svn124_1867"

><td id="1867"><a href="#1867">1867</a></td></tr
><tr id="gr_svn124_1868"

><td id="1868"><a href="#1868">1868</a></td></tr
><tr id="gr_svn124_1869"

><td id="1869"><a href="#1869">1869</a></td></tr
><tr id="gr_svn124_1870"

><td id="1870"><a href="#1870">1870</a></td></tr
><tr id="gr_svn124_1871"

><td id="1871"><a href="#1871">1871</a></td></tr
><tr id="gr_svn124_1872"

><td id="1872"><a href="#1872">1872</a></td></tr
><tr id="gr_svn124_1873"

><td id="1873"><a href="#1873">1873</a></td></tr
><tr id="gr_svn124_1874"

><td id="1874"><a href="#1874">1874</a></td></tr
><tr id="gr_svn124_1875"

><td id="1875"><a href="#1875">1875</a></td></tr
><tr id="gr_svn124_1876"

><td id="1876"><a href="#1876">1876</a></td></tr
><tr id="gr_svn124_1877"

><td id="1877"><a href="#1877">1877</a></td></tr
><tr id="gr_svn124_1878"

><td id="1878"><a href="#1878">1878</a></td></tr
><tr id="gr_svn124_1879"

><td id="1879"><a href="#1879">1879</a></td></tr
><tr id="gr_svn124_1880"

><td id="1880"><a href="#1880">1880</a></td></tr
><tr id="gr_svn124_1881"

><td id="1881"><a href="#1881">1881</a></td></tr
><tr id="gr_svn124_1882"

><td id="1882"><a href="#1882">1882</a></td></tr
><tr id="gr_svn124_1883"

><td id="1883"><a href="#1883">1883</a></td></tr
><tr id="gr_svn124_1884"

><td id="1884"><a href="#1884">1884</a></td></tr
><tr id="gr_svn124_1885"

><td id="1885"><a href="#1885">1885</a></td></tr
><tr id="gr_svn124_1886"

><td id="1886"><a href="#1886">1886</a></td></tr
><tr id="gr_svn124_1887"

><td id="1887"><a href="#1887">1887</a></td></tr
><tr id="gr_svn124_1888"

><td id="1888"><a href="#1888">1888</a></td></tr
><tr id="gr_svn124_1889"

><td id="1889"><a href="#1889">1889</a></td></tr
><tr id="gr_svn124_1890"

><td id="1890"><a href="#1890">1890</a></td></tr
><tr id="gr_svn124_1891"

><td id="1891"><a href="#1891">1891</a></td></tr
><tr id="gr_svn124_1892"

><td id="1892"><a href="#1892">1892</a></td></tr
><tr id="gr_svn124_1893"

><td id="1893"><a href="#1893">1893</a></td></tr
><tr id="gr_svn124_1894"

><td id="1894"><a href="#1894">1894</a></td></tr
><tr id="gr_svn124_1895"

><td id="1895"><a href="#1895">1895</a></td></tr
><tr id="gr_svn124_1896"

><td id="1896"><a href="#1896">1896</a></td></tr
><tr id="gr_svn124_1897"

><td id="1897"><a href="#1897">1897</a></td></tr
><tr id="gr_svn124_1898"

><td id="1898"><a href="#1898">1898</a></td></tr
><tr id="gr_svn124_1899"

><td id="1899"><a href="#1899">1899</a></td></tr
><tr id="gr_svn124_1900"

><td id="1900"><a href="#1900">1900</a></td></tr
><tr id="gr_svn124_1901"

><td id="1901"><a href="#1901">1901</a></td></tr
><tr id="gr_svn124_1902"

><td id="1902"><a href="#1902">1902</a></td></tr
><tr id="gr_svn124_1903"

><td id="1903"><a href="#1903">1903</a></td></tr
><tr id="gr_svn124_1904"

><td id="1904"><a href="#1904">1904</a></td></tr
><tr id="gr_svn124_1905"

><td id="1905"><a href="#1905">1905</a></td></tr
><tr id="gr_svn124_1906"

><td id="1906"><a href="#1906">1906</a></td></tr
><tr id="gr_svn124_1907"

><td id="1907"><a href="#1907">1907</a></td></tr
><tr id="gr_svn124_1908"

><td id="1908"><a href="#1908">1908</a></td></tr
><tr id="gr_svn124_1909"

><td id="1909"><a href="#1909">1909</a></td></tr
><tr id="gr_svn124_1910"

><td id="1910"><a href="#1910">1910</a></td></tr
><tr id="gr_svn124_1911"

><td id="1911"><a href="#1911">1911</a></td></tr
><tr id="gr_svn124_1912"

><td id="1912"><a href="#1912">1912</a></td></tr
><tr id="gr_svn124_1913"

><td id="1913"><a href="#1913">1913</a></td></tr
><tr id="gr_svn124_1914"

><td id="1914"><a href="#1914">1914</a></td></tr
><tr id="gr_svn124_1915"

><td id="1915"><a href="#1915">1915</a></td></tr
><tr id="gr_svn124_1916"

><td id="1916"><a href="#1916">1916</a></td></tr
><tr id="gr_svn124_1917"

><td id="1917"><a href="#1917">1917</a></td></tr
><tr id="gr_svn124_1918"

><td id="1918"><a href="#1918">1918</a></td></tr
><tr id="gr_svn124_1919"

><td id="1919"><a href="#1919">1919</a></td></tr
><tr id="gr_svn124_1920"

><td id="1920"><a href="#1920">1920</a></td></tr
><tr id="gr_svn124_1921"

><td id="1921"><a href="#1921">1921</a></td></tr
><tr id="gr_svn124_1922"

><td id="1922"><a href="#1922">1922</a></td></tr
><tr id="gr_svn124_1923"

><td id="1923"><a href="#1923">1923</a></td></tr
><tr id="gr_svn124_1924"

><td id="1924"><a href="#1924">1924</a></td></tr
><tr id="gr_svn124_1925"

><td id="1925"><a href="#1925">1925</a></td></tr
><tr id="gr_svn124_1926"

><td id="1926"><a href="#1926">1926</a></td></tr
><tr id="gr_svn124_1927"

><td id="1927"><a href="#1927">1927</a></td></tr
><tr id="gr_svn124_1928"

><td id="1928"><a href="#1928">1928</a></td></tr
><tr id="gr_svn124_1929"

><td id="1929"><a href="#1929">1929</a></td></tr
><tr id="gr_svn124_1930"

><td id="1930"><a href="#1930">1930</a></td></tr
><tr id="gr_svn124_1931"

><td id="1931"><a href="#1931">1931</a></td></tr
><tr id="gr_svn124_1932"

><td id="1932"><a href="#1932">1932</a></td></tr
><tr id="gr_svn124_1933"

><td id="1933"><a href="#1933">1933</a></td></tr
><tr id="gr_svn124_1934"

><td id="1934"><a href="#1934">1934</a></td></tr
><tr id="gr_svn124_1935"

><td id="1935"><a href="#1935">1935</a></td></tr
><tr id="gr_svn124_1936"

><td id="1936"><a href="#1936">1936</a></td></tr
><tr id="gr_svn124_1937"

><td id="1937"><a href="#1937">1937</a></td></tr
><tr id="gr_svn124_1938"

><td id="1938"><a href="#1938">1938</a></td></tr
><tr id="gr_svn124_1939"

><td id="1939"><a href="#1939">1939</a></td></tr
><tr id="gr_svn124_1940"

><td id="1940"><a href="#1940">1940</a></td></tr
><tr id="gr_svn124_1941"

><td id="1941"><a href="#1941">1941</a></td></tr
><tr id="gr_svn124_1942"

><td id="1942"><a href="#1942">1942</a></td></tr
><tr id="gr_svn124_1943"

><td id="1943"><a href="#1943">1943</a></td></tr
><tr id="gr_svn124_1944"

><td id="1944"><a href="#1944">1944</a></td></tr
><tr id="gr_svn124_1945"

><td id="1945"><a href="#1945">1945</a></td></tr
><tr id="gr_svn124_1946"

><td id="1946"><a href="#1946">1946</a></td></tr
><tr id="gr_svn124_1947"

><td id="1947"><a href="#1947">1947</a></td></tr
><tr id="gr_svn124_1948"

><td id="1948"><a href="#1948">1948</a></td></tr
><tr id="gr_svn124_1949"

><td id="1949"><a href="#1949">1949</a></td></tr
><tr id="gr_svn124_1950"

><td id="1950"><a href="#1950">1950</a></td></tr
><tr id="gr_svn124_1951"

><td id="1951"><a href="#1951">1951</a></td></tr
><tr id="gr_svn124_1952"

><td id="1952"><a href="#1952">1952</a></td></tr
><tr id="gr_svn124_1953"

><td id="1953"><a href="#1953">1953</a></td></tr
><tr id="gr_svn124_1954"

><td id="1954"><a href="#1954">1954</a></td></tr
><tr id="gr_svn124_1955"

><td id="1955"><a href="#1955">1955</a></td></tr
><tr id="gr_svn124_1956"

><td id="1956"><a href="#1956">1956</a></td></tr
><tr id="gr_svn124_1957"

><td id="1957"><a href="#1957">1957</a></td></tr
><tr id="gr_svn124_1958"

><td id="1958"><a href="#1958">1958</a></td></tr
><tr id="gr_svn124_1959"

><td id="1959"><a href="#1959">1959</a></td></tr
><tr id="gr_svn124_1960"

><td id="1960"><a href="#1960">1960</a></td></tr
><tr id="gr_svn124_1961"

><td id="1961"><a href="#1961">1961</a></td></tr
><tr id="gr_svn124_1962"

><td id="1962"><a href="#1962">1962</a></td></tr
><tr id="gr_svn124_1963"

><td id="1963"><a href="#1963">1963</a></td></tr
><tr id="gr_svn124_1964"

><td id="1964"><a href="#1964">1964</a></td></tr
><tr id="gr_svn124_1965"

><td id="1965"><a href="#1965">1965</a></td></tr
><tr id="gr_svn124_1966"

><td id="1966"><a href="#1966">1966</a></td></tr
><tr id="gr_svn124_1967"

><td id="1967"><a href="#1967">1967</a></td></tr
><tr id="gr_svn124_1968"

><td id="1968"><a href="#1968">1968</a></td></tr
><tr id="gr_svn124_1969"

><td id="1969"><a href="#1969">1969</a></td></tr
><tr id="gr_svn124_1970"

><td id="1970"><a href="#1970">1970</a></td></tr
><tr id="gr_svn124_1971"

><td id="1971"><a href="#1971">1971</a></td></tr
><tr id="gr_svn124_1972"

><td id="1972"><a href="#1972">1972</a></td></tr
><tr id="gr_svn124_1973"

><td id="1973"><a href="#1973">1973</a></td></tr
><tr id="gr_svn124_1974"

><td id="1974"><a href="#1974">1974</a></td></tr
><tr id="gr_svn124_1975"

><td id="1975"><a href="#1975">1975</a></td></tr
><tr id="gr_svn124_1976"

><td id="1976"><a href="#1976">1976</a></td></tr
><tr id="gr_svn124_1977"

><td id="1977"><a href="#1977">1977</a></td></tr
><tr id="gr_svn124_1978"

><td id="1978"><a href="#1978">1978</a></td></tr
><tr id="gr_svn124_1979"

><td id="1979"><a href="#1979">1979</a></td></tr
><tr id="gr_svn124_1980"

><td id="1980"><a href="#1980">1980</a></td></tr
><tr id="gr_svn124_1981"

><td id="1981"><a href="#1981">1981</a></td></tr
><tr id="gr_svn124_1982"

><td id="1982"><a href="#1982">1982</a></td></tr
><tr id="gr_svn124_1983"

><td id="1983"><a href="#1983">1983</a></td></tr
><tr id="gr_svn124_1984"

><td id="1984"><a href="#1984">1984</a></td></tr
><tr id="gr_svn124_1985"

><td id="1985"><a href="#1985">1985</a></td></tr
><tr id="gr_svn124_1986"

><td id="1986"><a href="#1986">1986</a></td></tr
><tr id="gr_svn124_1987"

><td id="1987"><a href="#1987">1987</a></td></tr
><tr id="gr_svn124_1988"

><td id="1988"><a href="#1988">1988</a></td></tr
><tr id="gr_svn124_1989"

><td id="1989"><a href="#1989">1989</a></td></tr
><tr id="gr_svn124_1990"

><td id="1990"><a href="#1990">1990</a></td></tr
><tr id="gr_svn124_1991"

><td id="1991"><a href="#1991">1991</a></td></tr
><tr id="gr_svn124_1992"

><td id="1992"><a href="#1992">1992</a></td></tr
><tr id="gr_svn124_1993"

><td id="1993"><a href="#1993">1993</a></td></tr
><tr id="gr_svn124_1994"

><td id="1994"><a href="#1994">1994</a></td></tr
><tr id="gr_svn124_1995"

><td id="1995"><a href="#1995">1995</a></td></tr
><tr id="gr_svn124_1996"

><td id="1996"><a href="#1996">1996</a></td></tr
><tr id="gr_svn124_1997"

><td id="1997"><a href="#1997">1997</a></td></tr
><tr id="gr_svn124_1998"

><td id="1998"><a href="#1998">1998</a></td></tr
><tr id="gr_svn124_1999"

><td id="1999"><a href="#1999">1999</a></td></tr
><tr id="gr_svn124_2000"

><td id="2000"><a href="#2000">2000</a></td></tr
><tr id="gr_svn124_2001"

><td id="2001"><a href="#2001">2001</a></td></tr
><tr id="gr_svn124_2002"

><td id="2002"><a href="#2002">2002</a></td></tr
><tr id="gr_svn124_2003"

><td id="2003"><a href="#2003">2003</a></td></tr
><tr id="gr_svn124_2004"

><td id="2004"><a href="#2004">2004</a></td></tr
><tr id="gr_svn124_2005"

><td id="2005"><a href="#2005">2005</a></td></tr
><tr id="gr_svn124_2006"

><td id="2006"><a href="#2006">2006</a></td></tr
><tr id="gr_svn124_2007"

><td id="2007"><a href="#2007">2007</a></td></tr
><tr id="gr_svn124_2008"

><td id="2008"><a href="#2008">2008</a></td></tr
><tr id="gr_svn124_2009"

><td id="2009"><a href="#2009">2009</a></td></tr
><tr id="gr_svn124_2010"

><td id="2010"><a href="#2010">2010</a></td></tr
><tr id="gr_svn124_2011"

><td id="2011"><a href="#2011">2011</a></td></tr
><tr id="gr_svn124_2012"

><td id="2012"><a href="#2012">2012</a></td></tr
><tr id="gr_svn124_2013"

><td id="2013"><a href="#2013">2013</a></td></tr
><tr id="gr_svn124_2014"

><td id="2014"><a href="#2014">2014</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn124_1

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_2

><td class="source"> * @fileOverview Renders KML on the Google Maps JavaScript API Version 3<br></td></tr
><tr
id=sl_svn124_3

><td class="source"> * @name GeoXML3<br></td></tr
><tr
id=sl_svn124_4

><td class="source"> * @author Sterling Udell, Larry Ross, Brendan Byrd<br></td></tr
><tr
id=sl_svn124_5

><td class="source"> * @see http://code.google.com/p/geoxml3/<br></td></tr
><tr
id=sl_svn124_6

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_7

><td class="source"> * geoxml3.js<br></td></tr
><tr
id=sl_svn124_8

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_9

><td class="source"> * Renders KML on the Google Maps JavaScript API Version 3<br></td></tr
><tr
id=sl_svn124_10

><td class="source"> * http://code.google.com/p/geoxml3/<br></td></tr
><tr
id=sl_svn124_11

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_12

><td class="source"> * Copyright 2010 Sterling Udell, Larry Ross<br></td></tr
><tr
id=sl_svn124_13

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_14

><td class="source"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);<br></td></tr
><tr
id=sl_svn124_15

><td class="source"> * you may not use this file except in compliance with the License.<br></td></tr
><tr
id=sl_svn124_16

><td class="source"> * You may obtain a copy of the License at<br></td></tr
><tr
id=sl_svn124_17

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_18

><td class="source"> *    http://www.apache.org/licenses/LICENSE-2.0<br></td></tr
><tr
id=sl_svn124_19

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_20

><td class="source"> * Unless required by applicable law or agreed to in writing, software<br></td></tr
><tr
id=sl_svn124_21

><td class="source"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,<br></td></tr
><tr
id=sl_svn124_22

><td class="source"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br></td></tr
><tr
id=sl_svn124_23

><td class="source"> * See the License for the specific language governing permissions and<br></td></tr
><tr
id=sl_svn124_24

><td class="source"> * limitations under the License.<br></td></tr
><tr
id=sl_svn124_25

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_26

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_27

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_28

><td class="source"> * A MultiGeometry object that will allow multiple polylines in a MultiGeometry<br></td></tr
><tr
id=sl_svn124_29

><td class="source"> * containing LineStrings to be treated as a single object<br></td></tr
><tr
id=sl_svn124_30

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_31

><td class="source"> * @param {MutiGeometryOptions} anonymous object.  Available properties:<br></td></tr
><tr
id=sl_svn124_32

><td class="source"> * map: The map on which to attach the MultiGeometry<br></td></tr
><tr
id=sl_svn124_33

><td class="source"> * paths: the individual polylines<br></td></tr
><tr
id=sl_svn124_34

><td class="source"> * polylineOptions: options to use when constructing all the polylines<br></td></tr
><tr
id=sl_svn124_35

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_36

><td class="source"> * @constructor<br></td></tr
><tr
id=sl_svn124_37

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_38

><td class="source">// only if Google Maps API included<br></td></tr
><tr
id=sl_svn124_39

><td class="source">if (!!window.google &amp;&amp; !! google.maps) { <br></td></tr
><tr
id=sl_svn124_40

><td class="source">function MultiGeometry(multiGeometryOptions) {<br></td></tr
><tr
id=sl_svn124_41

><td class="source">   function createPolyline(polylineOptions, mg) {<br></td></tr
><tr
id=sl_svn124_42

><td class="source">     var polyline = new google.maps.Polyline(polylineOptions);<br></td></tr
><tr
id=sl_svn124_43

><td class="source">     google.maps.event.addListener(polyline,&#39;click&#39;, function(evt) { google.maps.event.trigger(mg,&#39;click&#39;,evt);});<br></td></tr
><tr
id=sl_svn124_44

><td class="source">     google.maps.event.addListener(polyline,&#39;dblclick&#39;, function(evt) { google.maps.event.trigger(mg, &#39;dblclick&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_45

><td class="source">     google.maps.event.addListener(polyline,&#39;mousedown&#39;, function(evt) { google.maps.event.trigger(mg, &#39;mousedown&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_46

><td class="source">     google.maps.event.addListener(polyline,&#39;mousemove&#39;, function(evt) { google.maps.event.trigger(mg, &#39;mousemove&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_47

><td class="source">     google.maps.event.addListener(polyline,&#39;mouseout&#39;, function(evt) { google.maps.event.trigger(mg, &#39;mouseout&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_48

><td class="source">     google.maps.event.addListener(polyline,&#39;mouseover&#39;, function(evt) { google.maps.event.trigger(mg, &#39;mouseover&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_49

><td class="source">     google.maps.event.addListener(polyline,&#39;mouseup&#39;, function(evt) { google.maps.event.trigger(mg, &#39;mouseup&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_50

><td class="source">     google.maps.event.addListener(polyline,&#39;rightclick&#39;, function(evt) { google.maps.event.trigger(mg, &#39;rightclick&#39;, evt);});<br></td></tr
><tr
id=sl_svn124_51

><td class="source">     return polyline;<br></td></tr
><tr
id=sl_svn124_52

><td class="source">   }<br></td></tr
><tr
id=sl_svn124_53

><td class="source">   this.setValues(multiGeometryOptions);<br></td></tr
><tr
id=sl_svn124_54

><td class="source">   this.polylines = [];<br></td></tr
><tr
id=sl_svn124_55

><td class="source"><br></td></tr
><tr
id=sl_svn124_56

><td class="source">   for (i=0; i&lt;this.paths.length;i++) {<br></td></tr
><tr
id=sl_svn124_57

><td class="source">     var polylineOptions = multiGeometryOptions;<br></td></tr
><tr
id=sl_svn124_58

><td class="source">     polylineOptions.path = this.paths[i];<br></td></tr
><tr
id=sl_svn124_59

><td class="source">     var polyline = createPolyline(polylineOptions,this);<br></td></tr
><tr
id=sl_svn124_60

><td class="source">     // Bind the polyline properties to the MultiGeometry properties<br></td></tr
><tr
id=sl_svn124_61

><td class="source">     this.polylines.push(polyline);<br></td></tr
><tr
id=sl_svn124_62

><td class="source">   }<br></td></tr
><tr
id=sl_svn124_63

><td class="source">}<br></td></tr
><tr
id=sl_svn124_64

><td class="source">MultiGeometry.prototype = new google.maps.MVCObject();<br></td></tr
><tr
id=sl_svn124_65

><td class="source">MultiGeometry.prototype.changed = function(key) {<br></td></tr
><tr
id=sl_svn124_66

><td class="source">    // alert(key+&quot; changed&quot;);<br></td></tr
><tr
id=sl_svn124_67

><td class="source">    if (this.polylines) {<br></td></tr
><tr
id=sl_svn124_68

><td class="source">	for (var i=0; i&lt;this.polylines.length; i++) {<br></td></tr
><tr
id=sl_svn124_69

><td class="source">	    this.polylines[i].set(key,this.get(key));<br></td></tr
><tr
id=sl_svn124_70

><td class="source">	}<br></td></tr
><tr
id=sl_svn124_71

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_72

><td class="source">};<br></td></tr
><tr
id=sl_svn124_73

><td class="source">MultiGeometry.prototype.setMap = function(map) { this.set(&#39;map&#39;,map); };<br></td></tr
><tr
id=sl_svn124_74

><td class="source">MultiGeometry.prototype.getMap = function() { return this.get(&#39;map&#39;); };<br></td></tr
><tr
id=sl_svn124_75

><td class="source">}<br></td></tr
><tr
id=sl_svn124_76

><td class="source"><br></td></tr
><tr
id=sl_svn124_77

><td class="source">// Extend the global String object with a method to remove leading and trailing whitespace<br></td></tr
><tr
id=sl_svn124_78

><td class="source">if (!String.prototype.trim) {<br></td></tr
><tr
id=sl_svn124_79

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_80

><td class="source"> * Remove leading and trailing whitespace.<br></td></tr
><tr
id=sl_svn124_81

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_82

><td class="source"> * @augments String<br></td></tr
><tr
id=sl_svn124_83

><td class="source"> * @return {String}<br></td></tr
><tr
id=sl_svn124_84

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_85

><td class="source">  String.prototype.trim = function () {<br></td></tr
><tr
id=sl_svn124_86

><td class="source">    return this.replace(/^\s+|\s+$/g, &#39;&#39;);<br></td></tr
><tr
id=sl_svn124_87

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_88

><td class="source">}<br></td></tr
><tr
id=sl_svn124_89

><td class="source"><br></td></tr
><tr
id=sl_svn124_90

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_91

><td class="source"> * @namespace The GeoXML3 namespace.<br></td></tr
><tr
id=sl_svn124_92

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_93

><td class="source">geoXML3 = window.geoXML3 || {instances: []};<br></td></tr
><tr
id=sl_svn124_94

><td class="source"><br></td></tr
><tr
id=sl_svn124_95

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_96

><td class="source"> * Constructor for the root KML parser object.<br></td></tr
><tr
id=sl_svn124_97

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_98

><td class="source"> * &lt;p&gt;All top-level objects and functions are declared under a namespace of geoXML3.<br></td></tr
><tr
id=sl_svn124_99

><td class="source"> * The core object is geoXML3.parser; typically, you&#39;ll instantiate a one parser<br></td></tr
><tr
id=sl_svn124_100

><td class="source"> * per map.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_101

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_102

><td class="source"> * @class Main XML parser.<br></td></tr
><tr
id=sl_svn124_103

><td class="source"> * @param {geoXML3.parserOptions} options<br></td></tr
><tr
id=sl_svn124_104

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_105

><td class="source">geoXML3.parser = function (options) {<br></td></tr
><tr
id=sl_svn124_106

><td class="source">  // Inherit from Google MVC Object to include event handling   <br></td></tr
><tr
id=sl_svn124_107

><td class="source">  google.maps.MVCObject.call(this);   <br></td></tr
><tr
id=sl_svn124_108

><td class="source"><br></td></tr
><tr
id=sl_svn124_109

><td class="source">  // Private variables<br></td></tr
><tr
id=sl_svn124_110

><td class="source">  var parserOptions = new geoXML3.parserOptions(options);<br></td></tr
><tr
id=sl_svn124_111

><td class="source">  var docs        = [];  // Individual KML documents<br></td></tr
><tr
id=sl_svn124_112

><td class="source">  var docsByUrl   = {};  // Same docs as an hash by cleanURL<br></td></tr
><tr
id=sl_svn124_113

><td class="source">  var kmzMetaData = {};  // Extra files from KMZ data<br></td></tr
><tr
id=sl_svn124_114

><td class="source">  var styles      = {};  // Global list of styles<br></td></tr
><tr
id=sl_svn124_115

><td class="source">  var lastPlacemark;<br></td></tr
><tr
id=sl_svn124_116

><td class="source">  var parserName;<br></td></tr
><tr
id=sl_svn124_117

><td class="source">  if (!parserOptions.infoWindow &amp;&amp; parserOptions.singleInfoWindow)<br></td></tr
><tr
id=sl_svn124_118

><td class="source">    parserOptions.infoWindow = new google.maps.InfoWindow();<br></td></tr
><tr
id=sl_svn124_119

><td class="source"><br></td></tr
><tr
id=sl_svn124_120

><td class="source">  var parseKmlString = function (kmlString, docSet) {<br></td></tr
><tr
id=sl_svn124_121

><td class="source">    // Internal values for the set of documents as a whole<br></td></tr
><tr
id=sl_svn124_122

><td class="source">    var internals = {<br></td></tr
><tr
id=sl_svn124_123

><td class="source">      parser: this,<br></td></tr
><tr
id=sl_svn124_124

><td class="source">      docSet: docSet || [],<br></td></tr
><tr
id=sl_svn124_125

><td class="source">      remaining: 1,<br></td></tr
><tr
id=sl_svn124_126

><td class="source">      parseOnly: !(parserOptions.afterParse || parserOptions.processStyles)<br></td></tr
><tr
id=sl_svn124_127

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_128

><td class="source">    thisDoc = new Object();<br></td></tr
><tr
id=sl_svn124_129

><td class="source">    thisDoc.internals = internals;<br></td></tr
><tr
id=sl_svn124_130

><td class="source">    internals.docSet.push(thisDoc);<br></td></tr
><tr
id=sl_svn124_131

><td class="source">    render(geoXML3.xmlParse(kmlString),thisDoc);<br></td></tr
><tr
id=sl_svn124_132

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_133

><td class="source"><br></td></tr
><tr
id=sl_svn124_134

><td class="source">  var parse = function (urls, docSet) {<br></td></tr
><tr
id=sl_svn124_135

><td class="source">    // Process one or more KML documents<br></td></tr
><tr
id=sl_svn124_136

><td class="source">    if (!parserName) {<br></td></tr
><tr
id=sl_svn124_137

><td class="source">      parserName = &#39;geoXML3.instances[&#39; + (geoXML3.instances.push(this) - 1) + &#39;]&#39;;<br></td></tr
><tr
id=sl_svn124_138

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_139

><td class="source"><br></td></tr
><tr
id=sl_svn124_140

><td class="source">    if (typeof urls === &#39;string&#39;) {<br></td></tr
><tr
id=sl_svn124_141

><td class="source">      // Single KML document<br></td></tr
><tr
id=sl_svn124_142

><td class="source">      urls = [urls];<br></td></tr
><tr
id=sl_svn124_143

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_144

><td class="source"><br></td></tr
><tr
id=sl_svn124_145

><td class="source">    // Internal values for the set of documents as a whole<br></td></tr
><tr
id=sl_svn124_146

><td class="source">    var internals = {<br></td></tr
><tr
id=sl_svn124_147

><td class="source">      parser: this,<br></td></tr
><tr
id=sl_svn124_148

><td class="source">      docSet: docSet || [],<br></td></tr
><tr
id=sl_svn124_149

><td class="source">      remaining: urls.length,<br></td></tr
><tr
id=sl_svn124_150

><td class="source">      parseOnly: !(parserOptions.afterParse || parserOptions.processStyles)<br></td></tr
><tr
id=sl_svn124_151

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_152

><td class="source">    var thisDoc, j;<br></td></tr
><tr
id=sl_svn124_153

><td class="source">    for (var i = 0; i &lt; urls.length; i++) {<br></td></tr
><tr
id=sl_svn124_154

><td class="source">      var baseUrl = cleanURL(defileURL(location.pathname), urls[i]);<br></td></tr
><tr
id=sl_svn124_155

><td class="source">      if (docsByUrl[baseUrl]) {<br></td></tr
><tr
id=sl_svn124_156

><td class="source">        // Reloading an existing document<br></td></tr
><tr
id=sl_svn124_157

><td class="source">        thisDoc = docsByUrl[baseUrl];<br></td></tr
><tr
id=sl_svn124_158

><td class="source">        thisDoc.reload = true;<br></td></tr
><tr
id=sl_svn124_159

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_160

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_161

><td class="source">        thisDoc = new Object();<br></td></tr
><tr
id=sl_svn124_162

><td class="source">        thisDoc.baseUrl = baseUrl;<br></td></tr
><tr
id=sl_svn124_163

><td class="source">        internals.docSet.push(thisDoc);<br></td></tr
><tr
id=sl_svn124_164

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_165

><td class="source">      thisDoc.url       = urls[i];<br></td></tr
><tr
id=sl_svn124_166

><td class="source">      thisDoc.internals = internals;<br></td></tr
><tr
id=sl_svn124_167

><td class="source">      fetchDoc(thisDoc.url, thisDoc);<br></td></tr
><tr
id=sl_svn124_168

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_169

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_170

><td class="source"><br></td></tr
><tr
id=sl_svn124_171

><td class="source">  function fetchDoc(url, doc, resFunc) {<br></td></tr
><tr
id=sl_svn124_172

><td class="source">    resFunc = resFunc || function (responseXML) { render(responseXML, doc); };<br></td></tr
><tr
id=sl_svn124_173

><td class="source"><br></td></tr
><tr
id=sl_svn124_174

><td class="source">    if (typeof ZipFile === &#39;function&#39; &amp;&amp; typeof JSIO === &#39;object&#39; &amp;&amp; typeof JSIO.guessFileType === &#39;function&#39;) {  // KMZ support requires these modules loaded<br></td></tr
><tr
id=sl_svn124_175

><td class="source">      contentType = JSIO.guessFileType(doc.baseUrl);<br></td></tr
><tr
id=sl_svn124_176

><td class="source">      if (contentType == JSIO.FileType.Binary || contentType == JSIO.FileType.Unknown) {<br></td></tr
><tr
id=sl_svn124_177

><td class="source">         doc.isCompressed = true;<br></td></tr
><tr
id=sl_svn124_178

><td class="source">         doc.baseDir = doc.baseUrl + &#39;/&#39;;<br></td></tr
><tr
id=sl_svn124_179

><td class="source">         geoXML3.fetchZIP(url, resFunc, doc.internals.parser);<br></td></tr
><tr
id=sl_svn124_180

><td class="source">         return;<br></td></tr
><tr
id=sl_svn124_181

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_182

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_183

><td class="source">    doc.isCompressed = false;<br></td></tr
><tr
id=sl_svn124_184

><td class="source">    doc.baseDir = defileURL(doc.baseUrl);<br></td></tr
><tr
id=sl_svn124_185

><td class="source">    geoXML3.fetchXML(url, resFunc);<br></td></tr
><tr
id=sl_svn124_186

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_187

><td class="source"><br></td></tr
><tr
id=sl_svn124_188

><td class="source">  var hideDocument = function (doc) {<br></td></tr
><tr
id=sl_svn124_189

><td class="source">    if (!doc) doc = docs[0];<br></td></tr
><tr
id=sl_svn124_190

><td class="source">    // Hide the map objects associated with a document<br></td></tr
><tr
id=sl_svn124_191

><td class="source">    var i;<br></td></tr
><tr
id=sl_svn124_192

><td class="source">    if (!!doc.markers) {<br></td></tr
><tr
id=sl_svn124_193

><td class="source">      for (i = 0; i &lt; doc.markers.length; i++) {<br></td></tr
><tr
id=sl_svn124_194

><td class="source">        if(!!doc.markers[i].infoWindow) doc.markers[i].infoWindow.close();<br></td></tr
><tr
id=sl_svn124_195

><td class="source">        doc.markers[i].setVisible(false);<br></td></tr
><tr
id=sl_svn124_196

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_197

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_198

><td class="source">    if (!!doc.ggroundoverlays) {<br></td></tr
><tr
id=sl_svn124_199

><td class="source">      for (i = 0; i &lt; doc.ggroundoverlays.length; i++) {<br></td></tr
><tr
id=sl_svn124_200

><td class="source">        doc.ggroundoverlays[i].setOpacity(0);<br></td></tr
><tr
id=sl_svn124_201

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_202

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_203

><td class="source">    if (!!doc.gpolylines) {<br></td></tr
><tr
id=sl_svn124_204

><td class="source">      for (i=0;i&lt;doc.gpolylines.length;i++) {<br></td></tr
><tr
id=sl_svn124_205

><td class="source">        if(!!doc.gpolylines[i].infoWindow) doc.gpolylines[i].infoWindow.close();<br></td></tr
><tr
id=sl_svn124_206

><td class="source">        doc.gpolylines[i].setMap(null);<br></td></tr
><tr
id=sl_svn124_207

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_208

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_209

><td class="source">    if (!!doc.gpolygons) {<br></td></tr
><tr
id=sl_svn124_210

><td class="source">      for (i=0;i&lt;doc.gpolygons.length;i++) {<br></td></tr
><tr
id=sl_svn124_211

><td class="source">        if(!!doc.gpolygons[i].infoWindow) doc.gpolygons[i].infoWindow.close();<br></td></tr
><tr
id=sl_svn124_212

><td class="source">        doc.gpolygons[i].setMap(null);<br></td></tr
><tr
id=sl_svn124_213

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_214

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_215

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_216

><td class="source"><br></td></tr
><tr
id=sl_svn124_217

><td class="source">  var showDocument = function (doc) {<br></td></tr
><tr
id=sl_svn124_218

><td class="source">    if (!doc) doc = docs[0];<br></td></tr
><tr
id=sl_svn124_219

><td class="source">    // Show the map objects associated with a document<br></td></tr
><tr
id=sl_svn124_220

><td class="source">    var i;<br></td></tr
><tr
id=sl_svn124_221

><td class="source">    if (!!doc.markers) {<br></td></tr
><tr
id=sl_svn124_222

><td class="source">      for (i = 0; i &lt; doc.markers.length; i++) {<br></td></tr
><tr
id=sl_svn124_223

><td class="source">        doc.markers[i].setVisible(true);<br></td></tr
><tr
id=sl_svn124_224

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_225

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_226

><td class="source">    if (!!doc.ggroundoverlays) {<br></td></tr
><tr
id=sl_svn124_227

><td class="source">      for (i = 0; i &lt; doc.ggroundoverlays.length; i++) {<br></td></tr
><tr
id=sl_svn124_228

><td class="source">        doc.ggroundoverlays[i].setOpacity(doc.ggroundoverlays[i].percentOpacity_);<br></td></tr
><tr
id=sl_svn124_229

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_230

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_231

><td class="source">    if (!!doc.gpolylines) {<br></td></tr
><tr
id=sl_svn124_232

><td class="source">      for (i=0;i&lt;doc.gpolylines.length;i++) {<br></td></tr
><tr
id=sl_svn124_233

><td class="source">        doc.gpolylines[i].setMap(parserOptions.map);<br></td></tr
><tr
id=sl_svn124_234

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_235

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_236

><td class="source">    if (!!doc.gpolygons) {<br></td></tr
><tr
id=sl_svn124_237

><td class="source">      for (i=0;i&lt;doc.gpolygons.length;i++) {<br></td></tr
><tr
id=sl_svn124_238

><td class="source">        doc.gpolygons[i].setMap(parserOptions.map);<br></td></tr
><tr
id=sl_svn124_239

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_240

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_241

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_242

><td class="source"><br></td></tr
><tr
id=sl_svn124_243

><td class="source">  var defaultStyle = {<br></td></tr
><tr
id=sl_svn124_244

><td class="source">    balloon: {<br></td></tr
><tr
id=sl_svn124_245

><td class="source">      bgColor:   &#39;ffffffff&#39;,<br></td></tr
><tr
id=sl_svn124_246

><td class="source">      textColor: &#39;ff000000&#39;,<br></td></tr
><tr
id=sl_svn124_247

><td class="source">      text: &quot;&lt;h3&gt;$[name]&lt;/h3&gt;\n&lt;div&gt;$[description]&lt;/div&gt;\n&lt;div&gt;$[geDirections]&lt;/div&gt;&quot;,<br></td></tr
><tr
id=sl_svn124_248

><td class="source">      displayMode: &#39;default&#39;<br></td></tr
><tr
id=sl_svn124_249

><td class="source">    },<br></td></tr
><tr
id=sl_svn124_250

><td class="source">    icon: {<br></td></tr
><tr
id=sl_svn124_251

><td class="source">      scale: 1.0,<br></td></tr
><tr
id=sl_svn124_252

><td class="source">      dim: {<br></td></tr
><tr
id=sl_svn124_253

><td class="source">        x: 0,<br></td></tr
><tr
id=sl_svn124_254

><td class="source">        y: 0,<br></td></tr
><tr
id=sl_svn124_255

><td class="source">        w: -1,<br></td></tr
><tr
id=sl_svn124_256

><td class="source">        h: -1<br></td></tr
><tr
id=sl_svn124_257

><td class="source">      },<br></td></tr
><tr
id=sl_svn124_258

><td class="source">      hotSpot: {<br></td></tr
><tr
id=sl_svn124_259

><td class="source">        x: 0.5,<br></td></tr
><tr
id=sl_svn124_260

><td class="source">        y: 0.5,<br></td></tr
><tr
id=sl_svn124_261

><td class="source">        xunits: &#39;fraction&#39;,<br></td></tr
><tr
id=sl_svn124_262

><td class="source">        yunits: &#39;fraction&#39;<br></td></tr
><tr
id=sl_svn124_263

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_264

><td class="source">    },<br></td></tr
><tr
id=sl_svn124_265

><td class="source">    line: {<br></td></tr
><tr
id=sl_svn124_266

><td class="source">      color: &#39;ffffffff&#39;, // white (KML default)<br></td></tr
><tr
id=sl_svn124_267

><td class="source">      colorMode: &#39;normal&#39;,<br></td></tr
><tr
id=sl_svn124_268

><td class="source">      width: 1.0<br></td></tr
><tr
id=sl_svn124_269

><td class="source">    },<br></td></tr
><tr
id=sl_svn124_270

><td class="source">    poly: {<br></td></tr
><tr
id=sl_svn124_271

><td class="source">      color: &#39;ffffffff&#39;, // white (KML default)<br></td></tr
><tr
id=sl_svn124_272

><td class="source">      colorMode: &#39;normal&#39;,<br></td></tr
><tr
id=sl_svn124_273

><td class="source">      fill: true,<br></td></tr
><tr
id=sl_svn124_274

><td class="source">      outline: true<br></td></tr
><tr
id=sl_svn124_275

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_276

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_277

><td class="source"><br></td></tr
><tr
id=sl_svn124_278

><td class="source">  var kmlNS = &#39;http://www.opengis.net/kml/2.2&#39;;<br></td></tr
><tr
id=sl_svn124_279

><td class="source">  var gxNS  = &#39;http://www.google.com/kml/ext/2.2&#39;;<br></td></tr
><tr
id=sl_svn124_280

><td class="source">  var nodeValue              = geoXML3.nodeValue;<br></td></tr
><tr
id=sl_svn124_281

><td class="source">  var getBooleanValue        = geoXML3.getBooleanValue;<br></td></tr
><tr
id=sl_svn124_282

><td class="source">  var getElementsByTagNameNS = geoXML3.getElementsByTagNameNS;<br></td></tr
><tr
id=sl_svn124_283

><td class="source">  var getElementsByTagName   = geoXML3.getElementsByTagName;<br></td></tr
><tr
id=sl_svn124_284

><td class="source"><br></td></tr
><tr
id=sl_svn124_285

><td class="source">function processStyleUrl(node) {<br></td></tr
><tr
id=sl_svn124_286

><td class="source">  var styleUrlStr = nodeValue(getElementsByTagName(node, &#39;styleUrl&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_287

><td class="source">  if (!!styleUrlStr &amp;&amp; styleUrlStr.indexOf(&#39;#&#39;) != -1) <br></td></tr
><tr
id=sl_svn124_288

><td class="source">    var styleUrl = styleUrlStr.split(&#39;#&#39;);<br></td></tr
><tr
id=sl_svn124_289

><td class="source">  else var styleUrl = [&quot;&quot;,&quot;&quot;];<br></td></tr
><tr
id=sl_svn124_290

><td class="source">  return styleUrl;<br></td></tr
><tr
id=sl_svn124_291

><td class="source">}<br></td></tr
><tr
id=sl_svn124_292

><td class="source"><br></td></tr
><tr
id=sl_svn124_293

><td class="source">  function processStyle(thisNode, baseUrl, styleID, baseDir) {<br></td></tr
><tr
id=sl_svn124_294

><td class="source">    var style = (baseUrl === &#39;{inline}&#39;) ? clone(defaultStyle) : (styles[baseUrl][styleID] = styles[baseUrl][styleID] || clone(defaultStyle));<br></td></tr
><tr
id=sl_svn124_295

><td class="source"><br></td></tr
><tr
id=sl_svn124_296

><td class="source">    var styleNodes = getElementsByTagName(thisNode, &#39;BalloonStyle&#39;);<br></td></tr
><tr
id=sl_svn124_297

><td class="source">    if (!!styleNodes &amp;&amp; styleNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_298

><td class="source">      style.balloon.bgColor     = nodeValue(getElementsByTagName(styleNodes[0], &#39;bgColor&#39;)[0],     style.balloon.bgColor);<br></td></tr
><tr
id=sl_svn124_299

><td class="source">      style.balloon.textColor   = nodeValue(getElementsByTagName(styleNodes[0], &#39;textColor&#39;)[0],   style.balloon.textColor);<br></td></tr
><tr
id=sl_svn124_300

><td class="source">      style.balloon.text        = nodeValue(getElementsByTagName(styleNodes[0], &#39;text&#39;)[0],        style.balloon.text);<br></td></tr
><tr
id=sl_svn124_301

><td class="source">      style.balloon.displayMode = nodeValue(getElementsByTagName(styleNodes[0], &#39;displayMode&#39;)[0], style.balloon.displayMode);<br></td></tr
><tr
id=sl_svn124_302

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_303

><td class="source"><br></td></tr
><tr
id=sl_svn124_304

><td class="source">    // style.list = (unsupported; doesn&#39;t make sense in Google Maps)<br></td></tr
><tr
id=sl_svn124_305

><td class="source"><br></td></tr
><tr
id=sl_svn124_306

><td class="source">    var styleNodes = getElementsByTagName(thisNode, &#39;IconStyle&#39;);<br></td></tr
><tr
id=sl_svn124_307

><td class="source">    if (!!styleNodes &amp;&amp; styleNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_308

><td class="source">      var icon = style.icon;<br></td></tr
><tr
id=sl_svn124_309

><td class="source"><br></td></tr
><tr
id=sl_svn124_310

><td class="source">      icon.scale = parseFloat(nodeValue(getElementsByTagName(styleNodes[0], &#39;scale&#39;)[0], icon.scale));<br></td></tr
><tr
id=sl_svn124_311

><td class="source">      // style.icon.heading   = (unsupported; not supported in API)<br></td></tr
><tr
id=sl_svn124_312

><td class="source">      // style.icon.color     = (unsupported; not supported in API)<br></td></tr
><tr
id=sl_svn124_313

><td class="source">      // style.icon.colorMode = (unsupported; not supported in API)<br></td></tr
><tr
id=sl_svn124_314

><td class="source"><br></td></tr
><tr
id=sl_svn124_315

><td class="source">      styleNodes = getElementsByTagName(styleNodes[0], &#39;hotSpot&#39;);<br></td></tr
><tr
id=sl_svn124_316

><td class="source">      if (!!styleNodes &amp;&amp; styleNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_317

><td class="source">        icon.hotSpot = {<br></td></tr
><tr
id=sl_svn124_318

><td class="source">          x:      styleNodes[0].getAttribute(&#39;x&#39;),<br></td></tr
><tr
id=sl_svn124_319

><td class="source">          y:      styleNodes[0].getAttribute(&#39;y&#39;),<br></td></tr
><tr
id=sl_svn124_320

><td class="source">          xunits: styleNodes[0].getAttribute(&#39;xunits&#39;),<br></td></tr
><tr
id=sl_svn124_321

><td class="source">          yunits: styleNodes[0].getAttribute(&#39;yunits&#39;)<br></td></tr
><tr
id=sl_svn124_322

><td class="source">        };<br></td></tr
><tr
id=sl_svn124_323

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_324

><td class="source"><br></td></tr
><tr
id=sl_svn124_325

><td class="source">      styleNodes = getElementsByTagName(thisNode, &#39;Icon&#39;);<br></td></tr
><tr
id=sl_svn124_326

><td class="source">      if (!!styleNodes &amp;&amp; styleNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_327

><td class="source">        icon.href = nodeValue(getElementsByTagName(styleNodes[0], &#39;href&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_328

><td class="source">        icon.url  = cleanURL(baseDir, icon.href);<br></td></tr
><tr
id=sl_svn124_329

><td class="source">        // Detect images buried in KMZ files (and use a base64 encoded URL)<br></td></tr
><tr
id=sl_svn124_330

><td class="source">        if (kmzMetaData[icon.url]) icon.url = kmzMetaData[icon.url].dataUrl;<br></td></tr
><tr
id=sl_svn124_331

><td class="source"><br></td></tr
><tr
id=sl_svn124_332

><td class="source">        // Support for icon palettes and exact size dimensions<br></td></tr
><tr
id=sl_svn124_333

><td class="source">        icon.dim = {<br></td></tr
><tr
id=sl_svn124_334

><td class="source">          x: parseInt(nodeValue(getElementsByTagNameNS(styleNodes[0], gxNS, &#39;x&#39;)[0], icon.dim.x)),<br></td></tr
><tr
id=sl_svn124_335

><td class="source">          y: parseInt(nodeValue(getElementsByTagNameNS(styleNodes[0], gxNS, &#39;y&#39;)[0], icon.dim.y)),<br></td></tr
><tr
id=sl_svn124_336

><td class="source">          w: parseInt(nodeValue(getElementsByTagNameNS(styleNodes[0], gxNS, &#39;w&#39;)[0], icon.dim.w)),<br></td></tr
><tr
id=sl_svn124_337

><td class="source">          h: parseInt(nodeValue(getElementsByTagNameNS(styleNodes[0], gxNS, &#39;h&#39;)[0], icon.dim.h))<br></td></tr
><tr
id=sl_svn124_338

><td class="source">        };<br></td></tr
><tr
id=sl_svn124_339

><td class="source"><br></td></tr
><tr
id=sl_svn124_340

><td class="source">        // certain occasions where we need the pixel size of the image (like the default settings...)<br></td></tr
><tr
id=sl_svn124_341

><td class="source">        // (NOTE: Scale is applied to entire image, not just the section of the icon palette.  So,<br></td></tr
><tr
id=sl_svn124_342

><td class="source">        //  if we need scaling, we&#39;ll need the img dimensions no matter what.)<br></td></tr
><tr
id=sl_svn124_343

><td class="source">        if (true /* (icon.dim.w &lt; 0 || icon.dim.h &lt; 0) &amp;&amp; (icon.xunits != &#39;pixels&#39; || icon.yunits == &#39;fraction&#39;) || icon.scale != 1.0 */) {<br></td></tr
><tr
id=sl_svn124_344

><td class="source">          // (hopefully, this will load by the time we need it...)<br></td></tr
><tr
id=sl_svn124_345

><td class="source">          icon.img = new Image();<br></td></tr
><tr
id=sl_svn124_346

><td class="source">          icon.img.onload = function() {<br></td></tr
><tr
id=sl_svn124_347

><td class="source">            if (icon.dim.w &lt; 0 || icon.dim.h &lt; 0) {<br></td></tr
><tr
id=sl_svn124_348

><td class="source">              icon.dim.w = this.width;<br></td></tr
><tr
id=sl_svn124_349

><td class="source">              icon.dim.h = this.height;<br></td></tr
><tr
id=sl_svn124_350

><td class="source">            } else {<br></td></tr
><tr
id=sl_svn124_351

><td class="source">              icon.dim.th = this.height;<br></td></tr
><tr
id=sl_svn124_352

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_353

><td class="source">          };<br></td></tr
><tr
id=sl_svn124_354

><td class="source">          icon.img.src = icon.url;<br></td></tr
><tr
id=sl_svn124_355

><td class="source"><br></td></tr
><tr
id=sl_svn124_356

><td class="source">          // sometimes the file is already cached and it never calls onLoad<br></td></tr
><tr
id=sl_svn124_357

><td class="source">          if (icon.img.width &gt; 0) {<br></td></tr
><tr
id=sl_svn124_358

><td class="source">            if (icon.dim.w &lt; 0 || icon.dim.h &lt; 0) {<br></td></tr
><tr
id=sl_svn124_359

><td class="source">             icon.dim.w = icon.img.width;<br></td></tr
><tr
id=sl_svn124_360

><td class="source">             icon.dim.h = icon.img.height;<br></td></tr
><tr
id=sl_svn124_361

><td class="source">            } else {<br></td></tr
><tr
id=sl_svn124_362

><td class="source">             icon.dim.th = icon.img.height;<br></td></tr
><tr
id=sl_svn124_363

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_364

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_365

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_366

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_367

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_368

><td class="source"><br></td></tr
><tr
id=sl_svn124_369

><td class="source">    // style.label = (unsupported; may be possible but not with API)<br></td></tr
><tr
id=sl_svn124_370

><td class="source"><br></td></tr
><tr
id=sl_svn124_371

><td class="source">    styleNodes = getElementsByTagName(thisNode, &#39;LineStyle&#39;);<br></td></tr
><tr
id=sl_svn124_372

><td class="source">    if (!!styleNodes &amp;&amp; styleNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_373

><td class="source">      style.line.color     = nodeValue(getElementsByTagName(styleNodes[0], &#39;color&#39;)[0],     style.line.color);<br></td></tr
><tr
id=sl_svn124_374

><td class="source">      style.line.colorMode = nodeValue(getElementsByTagName(styleNodes[0], &#39;colorMode&#39;)[0], style.line.colorMode);<br></td></tr
><tr
id=sl_svn124_375

><td class="source">      style.line.width     = nodeValue(getElementsByTagName(styleNodes[0], &#39;width&#39;)[0],     style.line.width);<br></td></tr
><tr
id=sl_svn124_376

><td class="source">      // style.line.outerColor      = (unsupported; not supported in API)<br></td></tr
><tr
id=sl_svn124_377

><td class="source">      // style.line.outerWidth      = (unsupported; not supported in API)<br></td></tr
><tr
id=sl_svn124_378

><td class="source">      // style.line.physicalWidth   = (unsupported; unneccesary in Google Maps)<br></td></tr
><tr
id=sl_svn124_379

><td class="source">      // style.line.labelVisibility = (unsupported; possible to implement)<br></td></tr
><tr
id=sl_svn124_380

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_381

><td class="source"><br></td></tr
><tr
id=sl_svn124_382

><td class="source">    styleNodes = getElementsByTagName(thisNode, &#39;PolyStyle&#39;);<br></td></tr
><tr
id=sl_svn124_383

><td class="source">    if (!!styleNodes &amp;&amp; styleNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_384

><td class="source">      style.poly.color     = nodeValue(      getElementsByTagName(styleNodes[0], &#39;color&#39;)[0],     style.poly.color);<br></td></tr
><tr
id=sl_svn124_385

><td class="source">      style.poly.colorMode = nodeValue(      getElementsByTagName(styleNodes[0], &#39;colorMode&#39;)[0], style.poly.colorMode);<br></td></tr
><tr
id=sl_svn124_386

><td class="source">      style.poly.outline   = getBooleanValue(getElementsByTagName(styleNodes[0], &#39;outline&#39;)[0],   style.poly.outline);<br></td></tr
><tr
id=sl_svn124_387

><td class="source">      style.poly.fill      = getBooleanValue(getElementsByTagName(styleNodes[0], &#39;fill&#39;)[0],      style.poly.fill);<br></td></tr
><tr
id=sl_svn124_388

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_389

><td class="source">    return style;<br></td></tr
><tr
id=sl_svn124_390

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_391

><td class="source"><br></td></tr
><tr
id=sl_svn124_392

><td class="source">  // from http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-a-javascript-object<br></td></tr
><tr
id=sl_svn124_393

><td class="source">  // http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone<br></td></tr
><tr
id=sl_svn124_394

><td class="source">  function clone(obj){<br></td></tr
><tr
id=sl_svn124_395

><td class="source">    if(obj == null || typeof(obj) != &#39;object&#39;) return obj;<br></td></tr
><tr
id=sl_svn124_396

><td class="source">    if (obj.cloneNode) return obj.cloneNode(true);<br></td></tr
><tr
id=sl_svn124_397

><td class="source">    var temp = new obj.constructor();<br></td></tr
><tr
id=sl_svn124_398

><td class="source">    for(var key in obj) temp[key] = clone(obj[key]);<br></td></tr
><tr
id=sl_svn124_399

><td class="source">    return temp;<br></td></tr
><tr
id=sl_svn124_400

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_401

><td class="source"><br></td></tr
><tr
id=sl_svn124_402

><td class="source">  function processStyleMap(thisNode, baseUrl, styleID, baseDir) {<br></td></tr
><tr
id=sl_svn124_403

><td class="source">    var pairs = getElementsByTagName(thisNode, &#39;Pair&#39;);<br></td></tr
><tr
id=sl_svn124_404

><td class="source">    var map = new Object();<br></td></tr
><tr
id=sl_svn124_405

><td class="source"><br></td></tr
><tr
id=sl_svn124_406

><td class="source">    // add each key to the map<br></td></tr
><tr
id=sl_svn124_407

><td class="source">    for (var pr=0;pr&lt;pairs.length;pr++) {<br></td></tr
><tr
id=sl_svn124_408

><td class="source">      var pairKey      = nodeValue(getElementsByTagName(pairs[pr], &#39;key&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_409

><td class="source">      var pairStyle    = nodeValue(getElementsByTagName(pairs[pr], &#39;Style&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_410

><td class="source">      var pairStyleUrl = processStyleUrl(pairs[pr]);<br></td></tr
><tr
id=sl_svn124_411

><td class="source">      var pairStyleBaseUrl = pairStyleUrl[0] ? cleanURL(baseDir, pairStyleUrl[0]) : baseUrl;<br></td></tr
><tr
id=sl_svn124_412

><td class="source">      var pairStyleID      = pairStyleUrl[1];<br></td></tr
><tr
id=sl_svn124_413

><td class="source"><br></td></tr
><tr
id=sl_svn124_414

><td class="source">      if (!!pairStyle) {<br></td></tr
><tr
id=sl_svn124_415

><td class="source">        map[pairKey] = processStyle(pairStyle, pairStyleBaseUrl, pairStyleID);<br></td></tr
><tr
id=sl_svn124_416

><td class="source">      } else if (!!pairStyleID &amp;&amp; !!styles[pairStyleBaseUrl][pairStyleID]) {<br></td></tr
><tr
id=sl_svn124_417

><td class="source">        map[pairKey] = clone(styles[pairStyleBaseUrl][pairStyleID]);<br></td></tr
><tr
id=sl_svn124_418

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_419

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_420

><td class="source">    if (!!map[&quot;normal&quot;]) {<br></td></tr
><tr
id=sl_svn124_421

><td class="source">      styles[baseUrl][styleID] = clone(map[&quot;normal&quot;]);<br></td></tr
><tr
id=sl_svn124_422

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn124_423

><td class="source">      styles[baseUrl][styleID] = clone(defaultStyle);<br></td></tr
><tr
id=sl_svn124_424

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_425

><td class="source">    if (!!map[&quot;highlight&quot;] &amp;&amp; !!parserOptions.processStyles) {<br></td></tr
><tr
id=sl_svn124_426

><td class="source">      processStyleID(map[&quot;highlight&quot;]);<br></td></tr
><tr
id=sl_svn124_427

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_428

><td class="source">    styles[baseUrl][styleID].map = clone(map);<br></td></tr
><tr
id=sl_svn124_429

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_430

><td class="source"><br></td></tr
><tr
id=sl_svn124_431

><td class="source">  function processPlacemarkCoords(node, tag) {<br></td></tr
><tr
id=sl_svn124_432

><td class="source">    var parent = getElementsByTagName(node, tag);<br></td></tr
><tr
id=sl_svn124_433

><td class="source">    var coordListA = [];<br></td></tr
><tr
id=sl_svn124_434

><td class="source">    for (var i=0; i&lt;parent.length; i++) {<br></td></tr
><tr
id=sl_svn124_435

><td class="source">      var coordNodes = getElementsByTagName(parent[i], &#39;coordinates&#39;);<br></td></tr
><tr
id=sl_svn124_436

><td class="source">      if (!coordNodes) {<br></td></tr
><tr
id=sl_svn124_437

><td class="source">        if (coordListA.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_438

><td class="source">          break;<br></td></tr
><tr
id=sl_svn124_439

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn124_440

><td class="source">          return [{coordinates: []}];<br></td></tr
><tr
id=sl_svn124_441

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_442

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_443

><td class="source"><br></td></tr
><tr
id=sl_svn124_444

><td class="source">      for (var j=0; j&lt;coordNodes.length;j++) {<br></td></tr
><tr
id=sl_svn124_445

><td class="source">        var coords = nodeValue(coordNodes[j]).trim();<br></td></tr
><tr
id=sl_svn124_446

><td class="source">        coords = coords.replace(/,\s+/g, &#39;,&#39;);<br></td></tr
><tr
id=sl_svn124_447

><td class="source">        var path = coords.split(/\s+/g);<br></td></tr
><tr
id=sl_svn124_448

><td class="source">        var pathLength = path.length;<br></td></tr
><tr
id=sl_svn124_449

><td class="source">        var coordList = [];<br></td></tr
><tr
id=sl_svn124_450

><td class="source">        for (var k = 0; k &lt; pathLength; k++) {<br></td></tr
><tr
id=sl_svn124_451

><td class="source">          coords = path[k].split(&#39;,&#39;);<br></td></tr
><tr
id=sl_svn124_452

><td class="source">          if (!isNaN(coords[0]) &amp;&amp; !isNaN(coords[1])) {<br></td></tr
><tr
id=sl_svn124_453

><td class="source">            coordList.push({<br></td></tr
><tr
id=sl_svn124_454

><td class="source">              lat: parseFloat(coords[1]),<br></td></tr
><tr
id=sl_svn124_455

><td class="source">              lng: parseFloat(coords[0]),<br></td></tr
><tr
id=sl_svn124_456

><td class="source">              alt: parseFloat(coords[2])<br></td></tr
><tr
id=sl_svn124_457

><td class="source">            });<br></td></tr
><tr
id=sl_svn124_458

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_459

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_460

><td class="source">        coordListA.push({coordinates: coordList});<br></td></tr
><tr
id=sl_svn124_461

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_462

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_463

><td class="source">    return coordListA;<br></td></tr
><tr
id=sl_svn124_464

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_465

><td class="source"><br></td></tr
><tr
id=sl_svn124_466

><td class="source">  var render = function (responseXML, doc) {<br></td></tr
><tr
id=sl_svn124_467

><td class="source">    // Callback for retrieving a KML document: parse the KML and display it on the map<br></td></tr
><tr
id=sl_svn124_468

><td class="source">    if (!responseXML || responseXML == &quot;failed parse&quot;) {<br></td></tr
><tr
id=sl_svn124_469

><td class="source">      // Error retrieving the data<br></td></tr
><tr
id=sl_svn124_470

><td class="source">      geoXML3.log(&#39;Unable to retrieve &#39; + doc.url);<br></td></tr
><tr
id=sl_svn124_471

><td class="source">      if (parserOptions.failedParse) parserOptions.failedParse(doc);<br></td></tr
><tr
id=sl_svn124_472

><td class="source">      doc.failed = true;<br></td></tr
><tr
id=sl_svn124_473

><td class="source">      return;<br></td></tr
><tr
id=sl_svn124_474

><td class="source">    } else if (responseXML.parseError &amp;&amp; responseXML.parseError.errorCode != 0) {<br></td></tr
><tr
id=sl_svn124_475

><td class="source">      // IE parse error<br></td></tr
><tr
id=sl_svn124_476

><td class="source">      var err = responseXML.parseError;<br></td></tr
><tr
id=sl_svn124_477

><td class="source">      var msg = &#39;Parse error in line &#39; + err.line + &#39;, col &#39; + err.linePos + &#39; (error code: &#39; + err.errorCode + &quot;)\n&quot; +<br></td></tr
><tr
id=sl_svn124_478

><td class="source">        &quot;\nError Reason: &quot; + err.reason +<br></td></tr
><tr
id=sl_svn124_479

><td class="source">        &#39;Error Line: &#39; + err.srcText;<br></td></tr
><tr
id=sl_svn124_480

><td class="source"><br></td></tr
><tr
id=sl_svn124_481

><td class="source">      geoXML3.log(&#39;Unable to retrieve &#39; + doc.url + &#39;: &#39; + msg);<br></td></tr
><tr
id=sl_svn124_482

><td class="source">      if (parserOptions.failedParse) parserOptions.failedParse(doc);<br></td></tr
><tr
id=sl_svn124_483

><td class="source">      doc.failed = true;<br></td></tr
><tr
id=sl_svn124_484

><td class="source">      return;<br></td></tr
><tr
id=sl_svn124_485

><td class="source">    } else if (responseXML.documentElement &amp;&amp; responseXML.documentElement.nodeName == &#39;parsererror&#39;) {<br></td></tr
><tr
id=sl_svn124_486

><td class="source">      // Firefox parse error<br></td></tr
><tr
id=sl_svn124_487

><td class="source">      geoXML3.log(&#39;Unable to retrieve &#39; + doc.url + &#39;: &#39; + responseXML.documentElement.childNodes[0].nodeValue);<br></td></tr
><tr
id=sl_svn124_488

><td class="source">      if (parserOptions.failedParse) parserOptions.failedParse(doc);<br></td></tr
><tr
id=sl_svn124_489

><td class="source">      doc.failed = true;<br></td></tr
><tr
id=sl_svn124_490

><td class="source">      return;<br></td></tr
><tr
id=sl_svn124_491

><td class="source">    } else if (!doc) {<br></td></tr
><tr
id=sl_svn124_492

><td class="source">      throw &#39;geoXML3 internal error: render called with null document&#39;;<br></td></tr
><tr
id=sl_svn124_493

><td class="source">    } else { //no errors<br></td></tr
><tr
id=sl_svn124_494

><td class="source">      var i;<br></td></tr
><tr
id=sl_svn124_495

><td class="source">      doc.placemarks      = [];<br></td></tr
><tr
id=sl_svn124_496

><td class="source">      doc.groundoverlays  = [];<br></td></tr
><tr
id=sl_svn124_497

><td class="source">      doc.ggroundoverlays = [];<br></td></tr
><tr
id=sl_svn124_498

><td class="source">      doc.networkLinks    = [];<br></td></tr
><tr
id=sl_svn124_499

><td class="source">      doc.gpolygons       = [];<br></td></tr
><tr
id=sl_svn124_500

><td class="source">      doc.gpolylines      = [];<br></td></tr
><tr
id=sl_svn124_501

><td class="source"><br></td></tr
><tr
id=sl_svn124_502

><td class="source">      // Check for dependent KML files<br></td></tr
><tr
id=sl_svn124_503

><td class="source">      var nodes = getElementsByTagName(responseXML, &#39;styleUrl&#39;);<br></td></tr
><tr
id=sl_svn124_504

><td class="source">      var docSet = doc.internals.docSet;<br></td></tr
><tr
id=sl_svn124_505

><td class="source"><br></td></tr
><tr
id=sl_svn124_506

><td class="source">      for (var i = 0; i &lt; nodes.length; i++) {<br></td></tr
><tr
id=sl_svn124_507

><td class="source">        var url = nodeValue(nodes[i]).split(&#39;#&#39;)[0];<br></td></tr
><tr
id=sl_svn124_508

><td class="source">        if (!url)                 continue;  // #id (inside doc)<br></td></tr
><tr
id=sl_svn124_509

><td class="source">        var rUrl = cleanURL( doc.baseDir, url );<br></td></tr
><tr
id=sl_svn124_510

><td class="source">        if (rUrl === doc.baseUrl) continue;  // self<br></td></tr
><tr
id=sl_svn124_511

><td class="source">        if (docsByUrl[rUrl])      continue;  // already loaded<br></td></tr
><tr
id=sl_svn124_512

><td class="source"><br></td></tr
><tr
id=sl_svn124_513

><td class="source">        var thisDoc;<br></td></tr
><tr
id=sl_svn124_514

><td class="source">        var j = docSet.indexOfObjWithItem(&#39;baseUrl&#39;, rUrl);<br></td></tr
><tr
id=sl_svn124_515

><td class="source">        if (j != -1) {<br></td></tr
><tr
id=sl_svn124_516

><td class="source">          // Already listed to be loaded, but probably in the wrong order.<br></td></tr
><tr
id=sl_svn124_517

><td class="source">          // Load it right away to immediately resolve dependency.<br></td></tr
><tr
id=sl_svn124_518

><td class="source">          thisDoc = docSet[j];<br></td></tr
><tr
id=sl_svn124_519

><td class="source">          if (thisDoc.failed) continue;  // failed to load last time; don&#39;t retry it again<br></td></tr
><tr
id=sl_svn124_520

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_521

><td class="source">        else {<br></td></tr
><tr
id=sl_svn124_522

><td class="source">          // Not listed at all; add it in<br></td></tr
><tr
id=sl_svn124_523

><td class="source">          thisDoc           = new Object();<br></td></tr
><tr
id=sl_svn124_524

><td class="source">          thisDoc.url       = rUrl;  // url can&#39;t be trusted inside KMZ files, since it may .. outside of the archive<br></td></tr
><tr
id=sl_svn124_525

><td class="source">          thisDoc.baseUrl   = rUrl;<br></td></tr
><tr
id=sl_svn124_526

><td class="source">          thisDoc.internals = doc.internals;<br></td></tr
><tr
id=sl_svn124_527

><td class="source"><br></td></tr
><tr
id=sl_svn124_528

><td class="source">          doc.internals.docSet.push(thisDoc);<br></td></tr
><tr
id=sl_svn124_529

><td class="source">          doc.internals.remaining++;<br></td></tr
><tr
id=sl_svn124_530

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_531

><td class="source"><br></td></tr
><tr
id=sl_svn124_532

><td class="source">        // render dependent KML first then re-run renderer<br></td></tr
><tr
id=sl_svn124_533

><td class="source">        fetchDoc(rUrl, thisDoc, function (thisResXML) {<br></td></tr
><tr
id=sl_svn124_534

><td class="source">          render(thisResXML, thisDoc);<br></td></tr
><tr
id=sl_svn124_535

><td class="source">          render(responseXML, doc);<br></td></tr
><tr
id=sl_svn124_536

><td class="source">        });<br></td></tr
><tr
id=sl_svn124_537

><td class="source"><br></td></tr
><tr
id=sl_svn124_538

><td class="source">        // to prevent cross-dependency issues, just load the one<br></td></tr
><tr
id=sl_svn124_539

><td class="source">        // file first and re-check the rest later<br></td></tr
><tr
id=sl_svn124_540

><td class="source">        return;<br></td></tr
><tr
id=sl_svn124_541

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_542

><td class="source"><br></td></tr
><tr
id=sl_svn124_543

><td class="source">      // Parse styles<br></td></tr
><tr
id=sl_svn124_544

><td class="source">      doc.styles = styles[doc.baseUrl] = styles[doc.baseUrl] || {};<br></td></tr
><tr
id=sl_svn124_545

><td class="source">      var styleID, styleNodes;<br></td></tr
><tr
id=sl_svn124_546

><td class="source">      nodes = getElementsByTagName(responseXML, &#39;Style&#39;);<br></td></tr
><tr
id=sl_svn124_547

><td class="source">      nodeCount = nodes.length;<br></td></tr
><tr
id=sl_svn124_548

><td class="source">      for (i = 0; i &lt; nodeCount; i++) {<br></td></tr
><tr
id=sl_svn124_549

><td class="source">        thisNode = nodes[i];<br></td></tr
><tr
id=sl_svn124_550

><td class="source">        var styleID = thisNode.getAttribute(&#39;id&#39;);<br></td></tr
><tr
id=sl_svn124_551

><td class="source">        if (!!styleID) processStyle(thisNode, doc.baseUrl, styleID, doc.baseDir);<br></td></tr
><tr
id=sl_svn124_552

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_553

><td class="source">      // Parse StyleMap nodes<br></td></tr
><tr
id=sl_svn124_554

><td class="source">      nodes = getElementsByTagName(responseXML, &#39;StyleMap&#39;);<br></td></tr
><tr
id=sl_svn124_555

><td class="source">      for (i = 0; i &lt; nodes.length; i++) {<br></td></tr
><tr
id=sl_svn124_556

><td class="source">        thisNode = nodes[i];<br></td></tr
><tr
id=sl_svn124_557

><td class="source">        var styleID = thisNode.getAttribute(&#39;id&#39;);<br></td></tr
><tr
id=sl_svn124_558

><td class="source">        if (!!styleID) processStyleMap(thisNode, doc.baseUrl, styleID, doc.baseDir);<br></td></tr
><tr
id=sl_svn124_559

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_560

><td class="source"><br></td></tr
><tr
id=sl_svn124_561

><td class="source">      if (!!parserOptions.processStyles || !parserOptions.createMarker) {<br></td></tr
><tr
id=sl_svn124_562

><td class="source">        // Convert parsed styles into GMaps equivalents<br></td></tr
><tr
id=sl_svn124_563

><td class="source">        processStyles(doc);<br></td></tr
><tr
id=sl_svn124_564

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_565

><td class="source"><br></td></tr
><tr
id=sl_svn124_566

><td class="source">      // Parse placemarks<br></td></tr
><tr
id=sl_svn124_567

><td class="source">      if (!!doc.reload &amp;&amp; !!doc.markers) {<br></td></tr
><tr
id=sl_svn124_568

><td class="source">        for (i = 0; i &lt; doc.markers.length; i++) {<br></td></tr
><tr
id=sl_svn124_569

><td class="source">          doc.markers[i].active = false;<br></td></tr
><tr
id=sl_svn124_570

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_571

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_572

><td class="source">      var placemark, node, coords, path, marker, poly;<br></td></tr
><tr
id=sl_svn124_573

><td class="source">      var pathLength, marker, polygonNodes, coordList;<br></td></tr
><tr
id=sl_svn124_574

><td class="source">      var placemarkNodes = getElementsByTagName(responseXML, &#39;Placemark&#39;);<br></td></tr
><tr
id=sl_svn124_575

><td class="source">      for (pm = 0; pm &lt; placemarkNodes.length; pm++) {<br></td></tr
><tr
id=sl_svn124_576

><td class="source">        // Init the placemark object<br></td></tr
><tr
id=sl_svn124_577

><td class="source">        node = placemarkNodes[pm];<br></td></tr
><tr
id=sl_svn124_578

><td class="source">        var styleUrl = processStyleUrl(node);<br></td></tr
><tr
id=sl_svn124_579

><td class="source">        placemark = {<br></td></tr
><tr
id=sl_svn124_580

><td class="source">          name:         nodeValue(getElementsByTagName(node, &#39;name&#39;)[0]),<br></td></tr
><tr
id=sl_svn124_581

><td class="source">          description:  nodeValue(getElementsByTagName(node, &#39;description&#39;)[0]),<br></td></tr
><tr
id=sl_svn124_582

><td class="source">          styleUrl:     styleUrl.join(&#39;#&#39;),<br></td></tr
><tr
id=sl_svn124_583

><td class="source">          styleBaseUrl: styleUrl[0] ? cleanURL(doc.baseDir, styleUrl[0]) : doc.baseUrl,<br></td></tr
><tr
id=sl_svn124_584

><td class="source">          styleID:      styleUrl[1],<br></td></tr
><tr
id=sl_svn124_585

><td class="source">          visibility:        getBooleanValue(getElementsByTagName(node, &#39;visibility&#39;)[0], true),<br></td></tr
><tr
id=sl_svn124_586

><td class="source">          balloonVisibility: getBooleanValue(getElementsByTagNameNS(node, gxNS, &#39;balloonVisibility&#39;)[0], !parserOptions.suppressInfoWindows),<br></td></tr
><tr
id=sl_svn124_587

><td class="source">          id:           node.getAttribute(&#39;id&#39;)<br></td></tr
><tr
id=sl_svn124_588

><td class="source">        };<br></td></tr
><tr
id=sl_svn124_589

><td class="source">        placemark.style = (styles[placemark.styleBaseUrl] &amp;&amp; styles[placemark.styleBaseUrl][placemark.styleID]) || clone(defaultStyle);<br></td></tr
><tr
id=sl_svn124_590

><td class="source">        // inline style overrides shared style<br></td></tr
><tr
id=sl_svn124_591

><td class="source">        var inlineStyles = getElementsByTagName(node, &#39;Style&#39;);<br></td></tr
><tr
id=sl_svn124_592

><td class="source">        if (inlineStyles &amp;&amp; (inlineStyles.length &gt; 0)) {<br></td></tr
><tr
id=sl_svn124_593

><td class="source">          var style = processStyle(node, &#39;{inline}&#39;, &#39;{inline}&#39;);<br></td></tr
><tr
id=sl_svn124_594

><td class="source">          processStyleID(style);<br></td></tr
><tr
id=sl_svn124_595

><td class="source">          if (style) placemark.style = style;<br></td></tr
><tr
id=sl_svn124_596

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_597

><td class="source"><br></td></tr
><tr
id=sl_svn124_598

><td class="source">        if (/^https?:\/\//.test(placemark.description)) {<br></td></tr
><tr
id=sl_svn124_599

><td class="source">          placemark.description = [&#39;&lt;a href=&quot;&#39;, placemark.description, &#39;&quot;&gt;&#39;, placemark.description, &#39;&lt;/a&gt;&#39;].join(&#39;&#39;);<br></td></tr
><tr
id=sl_svn124_600

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_601

><td class="source"><br></td></tr
><tr
id=sl_svn124_602

><td class="source">        // record list of variables for substitution<br></td></tr
><tr
id=sl_svn124_603

><td class="source">        placemark.vars = {<br></td></tr
><tr
id=sl_svn124_604

><td class="source">          display: {<br></td></tr
><tr
id=sl_svn124_605

><td class="source">            name:         &#39;Name&#39;,<br></td></tr
><tr
id=sl_svn124_606

><td class="source">            description:  &#39;Description&#39;,<br></td></tr
><tr
id=sl_svn124_607

><td class="source">            address:      &#39;Street Address&#39;,<br></td></tr
><tr
id=sl_svn124_608

><td class="source">            id:           &#39;ID&#39;,<br></td></tr
><tr
id=sl_svn124_609

><td class="source">            Snippet:      &#39;Snippet&#39;,<br></td></tr
><tr
id=sl_svn124_610

><td class="source">            geDirections: &#39;Directions&#39;<br></td></tr
><tr
id=sl_svn124_611

><td class="source">          },<br></td></tr
><tr
id=sl_svn124_612

><td class="source">          val: {<br></td></tr
><tr
id=sl_svn124_613

><td class="source">            name:        placemark.name || &#39;&#39;,<br></td></tr
><tr
id=sl_svn124_614

><td class="source">            description: placemark.description || &#39;&#39;,<br></td></tr
><tr
id=sl_svn124_615

><td class="source">            address:     nodeValue(getElementsByTagName(node, &#39;address&#39;)[0], &#39;&#39;),<br></td></tr
><tr
id=sl_svn124_616

><td class="source">            id:          node.getAttribute(&#39;id&#39;) || &#39;&#39;,<br></td></tr
><tr
id=sl_svn124_617

><td class="source">            Snippet:     nodeValue(getElementsByTagName(node, &#39;Snippet&#39;)[0], &#39;&#39;)<br></td></tr
><tr
id=sl_svn124_618

><td class="source">          },<br></td></tr
><tr
id=sl_svn124_619

><td class="source">          directions: [<br></td></tr
><tr
id=sl_svn124_620

><td class="source">            &#39;f=d&#39;,<br></td></tr
><tr
id=sl_svn124_621

><td class="source">            &#39;source=GeoXML3&#39;<br></td></tr
><tr
id=sl_svn124_622

><td class="source">          ]<br></td></tr
><tr
id=sl_svn124_623

><td class="source">        };<br></td></tr
><tr
id=sl_svn124_624

><td class="source"><br></td></tr
><tr
id=sl_svn124_625

><td class="source">        // add extended data to variables<br></td></tr
><tr
id=sl_svn124_626

><td class="source">        var extDataNodes = getElementsByTagName(node, &#39;ExtendedData&#39;);<br></td></tr
><tr
id=sl_svn124_627

><td class="source">        if (!!extDataNodes &amp;&amp; extDataNodes.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_628

><td class="source">          var dataNodes = getElementsByTagName(extDataNodes[0], &#39;Data&#39;);<br></td></tr
><tr
id=sl_svn124_629

><td class="source">          for (var d = 0; d &lt; dataNodes.length; d++) {<br></td></tr
><tr
id=sl_svn124_630

><td class="source">            var dn    = dataNodes[d];<br></td></tr
><tr
id=sl_svn124_631

><td class="source">            var name  = dn.getAttribute(&#39;name&#39;);<br></td></tr
><tr
id=sl_svn124_632

><td class="source">            if (!name) continue;<br></td></tr
><tr
id=sl_svn124_633

><td class="source">            var dName = nodeValue(getElementsByTagName(dn, &#39;displayName&#39;)[0], name);<br></td></tr
><tr
id=sl_svn124_634

><td class="source">            var val   = nodeValue(getElementsByTagName(dn, &#39;value&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_635

><td class="source"><br></td></tr
><tr
id=sl_svn124_636

><td class="source">            placemark.vars.val[name]     = val;<br></td></tr
><tr
id=sl_svn124_637

><td class="source">            placemark.vars.display[name] = dName;<br></td></tr
><tr
id=sl_svn124_638

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_639

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_640

><td class="source"><br></td></tr
><tr
id=sl_svn124_641

><td class="source">        // process MultiGeometry<br></td></tr
><tr
id=sl_svn124_642

><td class="source">        var GeometryNodes = getElementsByTagName(node, &#39;coordinates&#39;);<br></td></tr
><tr
id=sl_svn124_643

><td class="source">        var Geometry = null;<br></td></tr
><tr
id=sl_svn124_644

><td class="source">        if (!!GeometryNodes &amp;&amp; (GeometryNodes.length &gt; 0)) {<br></td></tr
><tr
id=sl_svn124_645

><td class="source">          for (var gn=0;gn&lt;GeometryNodes.length;gn++) {<br></td></tr
><tr
id=sl_svn124_646

><td class="source">            if (GeometryNodes[gn].parentNode &amp;&amp;<br></td></tr
><tr
id=sl_svn124_647

><td class="source">                GeometryNodes[gn].parentNode.nodeName) {<br></td></tr
><tr
id=sl_svn124_648

><td class="source">              var GeometryPN = GeometryNodes[gn].parentNode;<br></td></tr
><tr
id=sl_svn124_649

><td class="source">              Geometry = GeometryPN.nodeName;<br></td></tr
><tr
id=sl_svn124_650

><td class="source"><br></td></tr
><tr
id=sl_svn124_651

><td class="source">              // Extract the coordinates<br></td></tr
><tr
id=sl_svn124_652

><td class="source">              // What sort of placemark?<br></td></tr
><tr
id=sl_svn124_653

><td class="source">              switch(Geometry) {<br></td></tr
><tr
id=sl_svn124_654

><td class="source">                case &quot;Point&quot;:<br></td></tr
><tr
id=sl_svn124_655

><td class="source">                  placemark.Point = processPlacemarkCoords(node, &quot;Point&quot;)[0];<br></td></tr
><tr
id=sl_svn124_656

><td class="source">                  placemark.latlng = new google.maps.LatLng(placemark.Point.coordinates[0].lat, placemark.Point.coordinates[0].lng);<br></td></tr
><tr
id=sl_svn124_657

><td class="source">                  pathLength = 1;<br></td></tr
><tr
id=sl_svn124_658

><td class="source">                  break;<br></td></tr
><tr
id=sl_svn124_659

><td class="source">                case &quot;LinearRing&quot;:<br></td></tr
><tr
id=sl_svn124_660

><td class="source">                  // Polygon/line<br></td></tr
><tr
id=sl_svn124_661

><td class="source">                  polygonNodes = getElementsByTagName(node, &#39;Polygon&#39;);<br></td></tr
><tr
id=sl_svn124_662

><td class="source">                  // Polygon<br></td></tr
><tr
id=sl_svn124_663

><td class="source">                  if (!placemark.Polygon)<br></td></tr
><tr
id=sl_svn124_664

><td class="source">                    placemark.Polygon = [{<br></td></tr
><tr
id=sl_svn124_665

><td class="source">                      outerBoundaryIs: {coordinates: []},<br></td></tr
><tr
id=sl_svn124_666

><td class="source">                      innerBoundaryIs: [{coordinates: []}]<br></td></tr
><tr
id=sl_svn124_667

><td class="source">                    }];<br></td></tr
><tr
id=sl_svn124_668

><td class="source">                  for (var pg=0;pg&lt;polygonNodes.length;pg++) {<br></td></tr
><tr
id=sl_svn124_669

><td class="source">                     placemark.Polygon[pg] = {<br></td></tr
><tr
id=sl_svn124_670

><td class="source">                       outerBoundaryIs: {coordinates: []},<br></td></tr
><tr
id=sl_svn124_671

><td class="source">                       innerBoundaryIs: [{coordinates: []}]<br></td></tr
><tr
id=sl_svn124_672

><td class="source">                     }<br></td></tr
><tr
id=sl_svn124_673

><td class="source">                     placemark.Polygon[pg].outerBoundaryIs = processPlacemarkCoords(polygonNodes[pg], &quot;outerBoundaryIs&quot;);<br></td></tr
><tr
id=sl_svn124_674

><td class="source">                     placemark.Polygon[pg].innerBoundaryIs = processPlacemarkCoords(polygonNodes[pg], &quot;innerBoundaryIs&quot;);<br></td></tr
><tr
id=sl_svn124_675

><td class="source">                  }<br></td></tr
><tr
id=sl_svn124_676

><td class="source">                  coordList = placemark.Polygon[0].outerBoundaryIs;<br></td></tr
><tr
id=sl_svn124_677

><td class="source">                  break;<br></td></tr
><tr
id=sl_svn124_678

><td class="source"><br></td></tr
><tr
id=sl_svn124_679

><td class="source">                case &quot;LineString&quot;:<br></td></tr
><tr
id=sl_svn124_680

><td class="source">                  pathLength = 0;<br></td></tr
><tr
id=sl_svn124_681

><td class="source">                  placemark.LineString = processPlacemarkCoords(node,&quot;LineString&quot;);<br></td></tr
><tr
id=sl_svn124_682

><td class="source">                  break;<br></td></tr
><tr
id=sl_svn124_683

><td class="source"><br></td></tr
><tr
id=sl_svn124_684

><td class="source">                default:<br></td></tr
><tr
id=sl_svn124_685

><td class="source">                  break;<br></td></tr
><tr
id=sl_svn124_686

><td class="source">              }<br></td></tr
><tr
id=sl_svn124_687

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_688

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_689

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_690

><td class="source"><br></td></tr
><tr
id=sl_svn124_691

><td class="source">        // call the custom placemark parse function if it is defined<br></td></tr
><tr
id=sl_svn124_692

><td class="source">        if (!!parserOptions.pmParseFn) parserOptions.pmParseFn(node, placemark);<br></td></tr
><tr
id=sl_svn124_693

><td class="source">        doc.placemarks.push(placemark);<br></td></tr
><tr
id=sl_svn124_694

><td class="source"><br></td></tr
><tr
id=sl_svn124_695

><td class="source">        // single marker<br></td></tr
><tr
id=sl_svn124_696

><td class="source">        if (placemark.Point) {<br></td></tr
><tr
id=sl_svn124_697

><td class="source">          if (!!google.maps) {<br></td></tr
><tr
id=sl_svn124_698

><td class="source">            doc.bounds = doc.bounds || new google.maps.LatLngBounds();<br></td></tr
><tr
id=sl_svn124_699

><td class="source">            doc.bounds.extend(placemark.latlng);<br></td></tr
><tr
id=sl_svn124_700

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_701

><td class="source"><br></td></tr
><tr
id=sl_svn124_702

><td class="source">          // Potential user-defined marker handler<br></td></tr
><tr
id=sl_svn124_703

><td class="source">          var pointCreateFunc = parserOptions.createMarker || createMarker;<br></td></tr
><tr
id=sl_svn124_704

><td class="source">          var found = false;<br></td></tr
><tr
id=sl_svn124_705

><td class="source">          if (!parserOptions.createMarker) {<br></td></tr
><tr
id=sl_svn124_706

><td class="source">            // Check to see if this marker was created on a previous load of this document<br></td></tr
><tr
id=sl_svn124_707

><td class="source">            if (!!doc) {<br></td></tr
><tr
id=sl_svn124_708

><td class="source">              doc.markers = doc.markers || [];<br></td></tr
><tr
id=sl_svn124_709

><td class="source">              if (doc.reload) {<br></td></tr
><tr
id=sl_svn124_710

><td class="source">                for (var j = 0; j &lt; doc.markers.length; j++) {<br></td></tr
><tr
id=sl_svn124_711

><td class="source">                    if ((doc.markers[j].id == placemark.id) ||<br></td></tr
><tr
id=sl_svn124_712

><td class="source">			// if no id, check position<br></td></tr
><tr
id=sl_svn124_713

><td class="source">                        (!doc.markers[j].id &amp;&amp; <br></td></tr
><tr
id=sl_svn124_714

><td class="source">                         (doc.markers[j].getPosition().equals(placemark.latlng)))) {<br></td></tr
><tr
id=sl_svn124_715

><td class="source">                    found = doc.markers[j].active = true;<br></td></tr
><tr
id=sl_svn124_716

><td class="source">                    break;<br></td></tr
><tr
id=sl_svn124_717

><td class="source">                  }<br></td></tr
><tr
id=sl_svn124_718

><td class="source">                }<br></td></tr
><tr
id=sl_svn124_719

><td class="source">              }<br></td></tr
><tr
id=sl_svn124_720

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_721

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_722

><td class="source">          if (!found) {<br></td></tr
><tr
id=sl_svn124_723

><td class="source">            // Call the marker creator<br></td></tr
><tr
id=sl_svn124_724

><td class="source">            var marker = pointCreateFunc(placemark, doc);<br></td></tr
><tr
id=sl_svn124_725

><td class="source">            if (marker) { <br></td></tr
><tr
id=sl_svn124_726

><td class="source">              marker.active = placemark.visibility;<br></td></tr
><tr
id=sl_svn124_727

><td class="source">              marker.id = placemark.id;<br></td></tr
><tr
id=sl_svn124_728

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_729

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_730

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_731

><td class="source">        // polygon/line<br></td></tr
><tr
id=sl_svn124_732

><td class="source">        var poly, line;<br></td></tr
><tr
id=sl_svn124_733

><td class="source">        if (!!doc) {<br></td></tr
><tr
id=sl_svn124_734

><td class="source">          if (placemark.Polygon)    doc.gpolygons  = doc.gpolygons  || [];<br></td></tr
><tr
id=sl_svn124_735

><td class="source">          if (placemark.LineString) doc.gpolylines = doc.gpolylines || [];<br></td></tr
><tr
id=sl_svn124_736

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_737

><td class="source"><br></td></tr
><tr
id=sl_svn124_738

><td class="source">        var polyCreateFunc = parserOptions.createPolygon    || createPolygon;<br></td></tr
><tr
id=sl_svn124_739

><td class="source">        var lineCreateFunc = parserOptions.createLineString || createPolyline;<br></td></tr
><tr
id=sl_svn124_740

><td class="source">        if (placemark.Polygon) {<br></td></tr
><tr
id=sl_svn124_741

><td class="source">          poly = polyCreateFunc(placemark,doc);<br></td></tr
><tr
id=sl_svn124_742

><td class="source">          if (poly) poly.active = placemark.visibility;<br></td></tr
><tr
id=sl_svn124_743

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_744

><td class="source">        if (placemark.LineString) {<br></td></tr
><tr
id=sl_svn124_745

><td class="source">          line = lineCreateFunc(placemark,doc);<br></td></tr
><tr
id=sl_svn124_746

><td class="source">          if (line) line.active = placemark.visibility;<br></td></tr
><tr
id=sl_svn124_747

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_748

><td class="source">        if (!!google.maps) {<br></td></tr
><tr
id=sl_svn124_749

><td class="source">          doc.bounds = doc.bounds || new google.maps.LatLngBounds();<br></td></tr
><tr
id=sl_svn124_750

><td class="source">          if (poly) doc.bounds.union(poly.bounds);<br></td></tr
><tr
id=sl_svn124_751

><td class="source">          if (line) doc.bounds.union(line.bounds);<br></td></tr
><tr
id=sl_svn124_752

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_753

><td class="source"><br></td></tr
><tr
id=sl_svn124_754

><td class="source">      } // placemark loop<br></td></tr
><tr
id=sl_svn124_755

><td class="source"><br></td></tr
><tr
id=sl_svn124_756

><td class="source">      if (!!doc.reload &amp;&amp; !!doc.markers) {<br></td></tr
><tr
id=sl_svn124_757

><td class="source">        for (i = doc.markers.length - 1; i &gt;= 0 ; i--) {<br></td></tr
><tr
id=sl_svn124_758

><td class="source">          if (!doc.markers[i].active) {<br></td></tr
><tr
id=sl_svn124_759

><td class="source">            if (!!doc.markers[i].infoWindow) {<br></td></tr
><tr
id=sl_svn124_760

><td class="source">              doc.markers[i].infoWindow.close();<br></td></tr
><tr
id=sl_svn124_761

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_762

><td class="source">            doc.markers[i].setMap(null);<br></td></tr
><tr
id=sl_svn124_763

><td class="source">            doc.markers.splice(i, 1);<br></td></tr
><tr
id=sl_svn124_764

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_765

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_766

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_767

><td class="source"><br></td></tr
><tr
id=sl_svn124_768

><td class="source">      // Parse ground overlays<br></td></tr
><tr
id=sl_svn124_769

><td class="source">      if (!!doc.reload &amp;&amp; !!doc.groundoverlays) {<br></td></tr
><tr
id=sl_svn124_770

><td class="source">        for (i = 0; i &lt; doc.groundoverlays.length; i++) {<br></td></tr
><tr
id=sl_svn124_771

><td class="source">          doc.groundoverlays[i].active = false;<br></td></tr
><tr
id=sl_svn124_772

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_773

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_774

><td class="source"><br></td></tr
><tr
id=sl_svn124_775

><td class="source">      if (!!doc) {<br></td></tr
><tr
id=sl_svn124_776

><td class="source">        doc.groundoverlays = doc.groundoverlays || [];<br></td></tr
><tr
id=sl_svn124_777

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_778

><td class="source">      // doc.groundoverlays =[];<br></td></tr
><tr
id=sl_svn124_779

><td class="source">      var groundOverlay, color, transparency, overlay;<br></td></tr
><tr
id=sl_svn124_780

><td class="source">      var groundNodes = getElementsByTagName(responseXML, &#39;GroundOverlay&#39;);<br></td></tr
><tr
id=sl_svn124_781

><td class="source">      for (i = 0; i &lt; groundNodes.length; i++) {<br></td></tr
><tr
id=sl_svn124_782

><td class="source">        node = groundNodes[i];<br></td></tr
><tr
id=sl_svn124_783

><td class="source"><br></td></tr
><tr
id=sl_svn124_784

><td class="source">        // Detect images buried in KMZ files (and use a base64 encoded URL)<br></td></tr
><tr
id=sl_svn124_785

><td class="source">        var gnUrl = cleanURL( doc.baseDir, nodeValue(getElementsByTagName(node, &#39;href&#39;)[0]) );<br></td></tr
><tr
id=sl_svn124_786

><td class="source">        if (kmzMetaData[gnUrl]) gnUrl = kmzMetaData[gnUrl].dataUrl;<br></td></tr
><tr
id=sl_svn124_787

><td class="source"><br></td></tr
><tr
id=sl_svn124_788

><td class="source">        // Init the ground overlay object<br></td></tr
><tr
id=sl_svn124_789

><td class="source">        groundOverlay = {<br></td></tr
><tr
id=sl_svn124_790

><td class="source">          name:        nodeValue(getElementsByTagName(node, &#39;name&#39;)[0]),<br></td></tr
><tr
id=sl_svn124_791

><td class="source">          description: nodeValue(getElementsByTagName(node, &#39;description&#39;)[0]),<br></td></tr
><tr
id=sl_svn124_792

><td class="source">          icon: { href: gnUrl },<br></td></tr
><tr
id=sl_svn124_793

><td class="source">          latLonBox: {<br></td></tr
><tr
id=sl_svn124_794

><td class="source">            north: parseFloat(nodeValue(getElementsByTagName(node, &#39;north&#39;)[0])),<br></td></tr
><tr
id=sl_svn124_795

><td class="source">            east:  parseFloat(nodeValue(getElementsByTagName(node, &#39;east&#39;)[0])),<br></td></tr
><tr
id=sl_svn124_796

><td class="source">            south: parseFloat(nodeValue(getElementsByTagName(node, &#39;south&#39;)[0])),<br></td></tr
><tr
id=sl_svn124_797

><td class="source">            west:  parseFloat(nodeValue(getElementsByTagName(node, &#39;west&#39;)[0]))<br></td></tr
><tr
id=sl_svn124_798

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_799

><td class="source">        };<br></td></tr
><tr
id=sl_svn124_800

><td class="source">        if (!!google.maps) {<br></td></tr
><tr
id=sl_svn124_801

><td class="source">          doc.bounds = doc.bounds || new google.maps.LatLngBounds();<br></td></tr
><tr
id=sl_svn124_802

><td class="source">          doc.bounds.union(new google.maps.LatLngBounds(<br></td></tr
><tr
id=sl_svn124_803

><td class="source">            new google.maps.LatLng(groundOverlay.latLonBox.south, groundOverlay.latLonBox.west),<br></td></tr
><tr
id=sl_svn124_804

><td class="source">            new google.maps.LatLng(groundOverlay.latLonBox.north, groundOverlay.latLonBox.east)<br></td></tr
><tr
id=sl_svn124_805

><td class="source">          ));<br></td></tr
><tr
id=sl_svn124_806

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_807

><td class="source"><br></td></tr
><tr
id=sl_svn124_808

><td class="source">        // Opacity is encoded in the color node<br></td></tr
><tr
id=sl_svn124_809

><td class="source">        var colorNode = getElementsByTagName(node, &#39;color&#39;);<br></td></tr
><tr
id=sl_svn124_810

><td class="source">        if (colorNode &amp;&amp; colorNode.length &gt; 0) {<br></td></tr
><tr
id=sl_svn124_811

><td class="source">          groundOverlay.opacity = geoXML3.getOpacity(nodeValue(colorNode[0]));<br></td></tr
><tr
id=sl_svn124_812

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn124_813

><td class="source">          groundOverlay.opacity = 1.0;  // KML default<br></td></tr
><tr
id=sl_svn124_814

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_815

><td class="source"><br></td></tr
><tr
id=sl_svn124_816

><td class="source">        doc.groundoverlays.push(groundOverlay);<br></td></tr
><tr
id=sl_svn124_817

><td class="source">        if (!!parserOptions.createOverlay) {<br></td></tr
><tr
id=sl_svn124_818

><td class="source">          // User-defined overlay handler<br></td></tr
><tr
id=sl_svn124_819

><td class="source">          parserOptions.createOverlay(groundOverlay, doc);<br></td></tr
><tr
id=sl_svn124_820

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn124_821

><td class="source">          // Check to see if this overlay was created on a previous load of this document<br></td></tr
><tr
id=sl_svn124_822

><td class="source">          var found = false;<br></td></tr
><tr
id=sl_svn124_823

><td class="source">          if (!!doc) {<br></td></tr
><tr
id=sl_svn124_824

><td class="source">            doc.groundoverlays = doc.groundoverlays || [];<br></td></tr
><tr
id=sl_svn124_825

><td class="source">            if (doc.reload) {<br></td></tr
><tr
id=sl_svn124_826

><td class="source">              overlayBounds = new google.maps.LatLngBounds(<br></td></tr
><tr
id=sl_svn124_827

><td class="source">                new google.maps.LatLng(groundOverlay.latLonBox.south, groundOverlay.latLonBox.west),<br></td></tr
><tr
id=sl_svn124_828

><td class="source">                new google.maps.LatLng(groundOverlay.latLonBox.north, groundOverlay.latLonBox.east)<br></td></tr
><tr
id=sl_svn124_829

><td class="source">              );<br></td></tr
><tr
id=sl_svn124_830

><td class="source">              var overlays = doc.groundoverlays;<br></td></tr
><tr
id=sl_svn124_831

><td class="source">              for (i = overlays.length; i--;) {<br></td></tr
><tr
id=sl_svn124_832

><td class="source">                if ((overlays[i].bounds().equals(overlayBounds)) &amp;&amp;<br></td></tr
><tr
id=sl_svn124_833

><td class="source">                    (overlays.url_ === groundOverlay.icon.href)) {<br></td></tr
><tr
id=sl_svn124_834

><td class="source">                  found = overlays[i].active = true;<br></td></tr
><tr
id=sl_svn124_835

><td class="source">                  break;<br></td></tr
><tr
id=sl_svn124_836

><td class="source">                }<br></td></tr
><tr
id=sl_svn124_837

><td class="source">              }<br></td></tr
><tr
id=sl_svn124_838

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_839

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_840

><td class="source"><br></td></tr
><tr
id=sl_svn124_841

><td class="source">          if (!found) {<br></td></tr
><tr
id=sl_svn124_842

><td class="source">            // Call the built-in overlay creator<br></td></tr
><tr
id=sl_svn124_843

><td class="source">            overlay = createOverlay(groundOverlay, doc);<br></td></tr
><tr
id=sl_svn124_844

><td class="source">            overlay.active = true;<br></td></tr
><tr
id=sl_svn124_845

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_846

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_847

><td class="source">        if (!!doc.reload &amp;&amp; !!doc.groundoverlays &amp;&amp; !!doc.groundoverlays.length) {<br></td></tr
><tr
id=sl_svn124_848

><td class="source">          var overlays = doc.groundoverlays;<br></td></tr
><tr
id=sl_svn124_849

><td class="source">          for (i = overlays.length; i--;) {<br></td></tr
><tr
id=sl_svn124_850

><td class="source">            if (!overlays[i].active) {<br></td></tr
><tr
id=sl_svn124_851

><td class="source">              overlays[i].remove();<br></td></tr
><tr
id=sl_svn124_852

><td class="source">              overlays.splice(i, 1);<br></td></tr
><tr
id=sl_svn124_853

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_854

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_855

><td class="source">          doc.groundoverlays = overlays;<br></td></tr
><tr
id=sl_svn124_856

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_857

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_858

><td class="source"><br></td></tr
><tr
id=sl_svn124_859

><td class="source">      // Parse network links<br></td></tr
><tr
id=sl_svn124_860

><td class="source">      var networkLink;<br></td></tr
><tr
id=sl_svn124_861

><td class="source">      var docPath = document.location.pathname.split(&#39;/&#39;);<br></td></tr
><tr
id=sl_svn124_862

><td class="source">      docPath = docPath.splice(0, docPath.length - 1).join(&#39;/&#39;);<br></td></tr
><tr
id=sl_svn124_863

><td class="source">      var linkNodes = getElementsByTagName(responseXML, &#39;NetworkLink&#39;);<br></td></tr
><tr
id=sl_svn124_864

><td class="source">      for (i = 0; i &lt; linkNodes.length; i++) {<br></td></tr
><tr
id=sl_svn124_865

><td class="source">        node = linkNodes[i];<br></td></tr
><tr
id=sl_svn124_866

><td class="source"><br></td></tr
><tr
id=sl_svn124_867

><td class="source">        // Init the network link object<br></td></tr
><tr
id=sl_svn124_868

><td class="source">        networkLink = {<br></td></tr
><tr
id=sl_svn124_869

><td class="source">          name: nodeValue(getElementsByTagName(node, &#39;name&#39;)[0]),<br></td></tr
><tr
id=sl_svn124_870

><td class="source">          link: {<br></td></tr
><tr
id=sl_svn124_871

><td class="source">            href:        nodeValue(getElementsByTagName(node, &#39;href&#39;)[0]),<br></td></tr
><tr
id=sl_svn124_872

><td class="source">            refreshMode: nodeValue(getElementsByTagName(node, &#39;refreshMode&#39;)[0])<br></td></tr
><tr
id=sl_svn124_873

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_874

><td class="source">        };<br></td></tr
><tr
id=sl_svn124_875

><td class="source"><br></td></tr
><tr
id=sl_svn124_876

><td class="source">        // Establish the specific refresh mode<br></td></tr
><tr
id=sl_svn124_877

><td class="source">        if (!networkLink.link.refreshMode) {<br></td></tr
><tr
id=sl_svn124_878

><td class="source">          networkLink.link.refreshMode = &#39;onChange&#39;;<br></td></tr
><tr
id=sl_svn124_879

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_880

><td class="source">        if (networkLink.link.refreshMode === &#39;onInterval&#39;) {<br></td></tr
><tr
id=sl_svn124_881

><td class="source">          networkLink.link.refreshInterval = parseFloat(nodeValue(getElementsByTagName(node, &#39;refreshInterval&#39;)[0]));<br></td></tr
><tr
id=sl_svn124_882

><td class="source">          if (isNaN(networkLink.link.refreshInterval)) {<br></td></tr
><tr
id=sl_svn124_883

><td class="source">            networkLink.link.refreshInterval = 0;<br></td></tr
><tr
id=sl_svn124_884

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_885

><td class="source">        } else if (networkLink.link.refreshMode === &#39;onChange&#39;) {<br></td></tr
><tr
id=sl_svn124_886

><td class="source">          networkLink.link.viewRefreshMode = nodeValue(getElementsByTagName(node, &#39;viewRefreshMode&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_887

><td class="source">          if (!networkLink.link.viewRefreshMode) {<br></td></tr
><tr
id=sl_svn124_888

><td class="source">            networkLink.link.viewRefreshMode = &#39;never&#39;;<br></td></tr
><tr
id=sl_svn124_889

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_890

><td class="source">          if (networkLink.link.viewRefreshMode === &#39;onStop&#39;) {<br></td></tr
><tr
id=sl_svn124_891

><td class="source">            networkLink.link.viewRefreshTime = nodeValue(getElementsByTagName(node, &#39;refreshMode&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_892

><td class="source">            networkLink.link.viewFormat =      nodeValue(getElementsByTagName(node, &#39;refreshMode&#39;)[0]);<br></td></tr
><tr
id=sl_svn124_893

><td class="source">            if (!networkLink.link.viewFormat) {<br></td></tr
><tr
id=sl_svn124_894

><td class="source">              networkLink.link.viewFormat = &#39;BBOX=[bboxWest],[bboxSouth],[bboxEast],[bboxNorth]&#39;;<br></td></tr
><tr
id=sl_svn124_895

><td class="source">            }<br></td></tr
><tr
id=sl_svn124_896

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_897

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_898

><td class="source"><br></td></tr
><tr
id=sl_svn124_899

><td class="source">        if (!/^[\/|http]/.test(networkLink.link.href)) {<br></td></tr
><tr
id=sl_svn124_900

><td class="source">          // Fully-qualify the HREF<br></td></tr
><tr
id=sl_svn124_901

><td class="source">          networkLink.link.href = docPath + &#39;/&#39; + networkLink.link.href;<br></td></tr
><tr
id=sl_svn124_902

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_903

><td class="source"><br></td></tr
><tr
id=sl_svn124_904

><td class="source">        // Apply the link<br></td></tr
><tr
id=sl_svn124_905

><td class="source">        if ((networkLink.link.refreshMode === &#39;onInterval&#39;) &amp;&amp;<br></td></tr
><tr
id=sl_svn124_906

><td class="source">            (networkLink.link.refreshInterval &gt; 0)) {<br></td></tr
><tr
id=sl_svn124_907

><td class="source">          // Reload at regular intervals<br></td></tr
><tr
id=sl_svn124_908

><td class="source">          setInterval(parserName + &#39;.parse(&quot;&#39; + networkLink.link.href + &#39;&quot;)&#39;,<br></td></tr
><tr
id=sl_svn124_909

><td class="source">                      1000 * networkLink.link.refreshInterval);<br></td></tr
><tr
id=sl_svn124_910

><td class="source">        } else if (networkLink.link.refreshMode === &#39;onChange&#39;) {<br></td></tr
><tr
id=sl_svn124_911

><td class="source">          if (networkLink.link.viewRefreshMode === &#39;never&#39;) {<br></td></tr
><tr
id=sl_svn124_912

><td class="source">            // Load the link just once<br></td></tr
><tr
id=sl_svn124_913

><td class="source">            doc.internals.parser.parse(networkLink.link.href, doc.internals.docSet);<br></td></tr
><tr
id=sl_svn124_914

><td class="source">          } else if (networkLink.link.viewRefreshMode === &#39;onStop&#39;) {<br></td></tr
><tr
id=sl_svn124_915

><td class="source">            // Reload when the map view changes<br></td></tr
><tr
id=sl_svn124_916

><td class="source"><br></td></tr
><tr
id=sl_svn124_917

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_918

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_919

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_920

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_921

><td class="source"><br></td></tr
><tr
id=sl_svn124_922

><td class="source">    if (!!doc.bounds) {<br></td></tr
><tr
id=sl_svn124_923

><td class="source">      doc.internals.bounds = doc.internals.bounds || new google.maps.LatLngBounds();<br></td></tr
><tr
id=sl_svn124_924

><td class="source">      doc.internals.bounds.union(doc.bounds);<br></td></tr
><tr
id=sl_svn124_925

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_926

><td class="source">    if (!!doc.markers || !!doc.groundoverlays || !!doc.gpolylines || !!doc.gpolygons) {<br></td></tr
><tr
id=sl_svn124_927

><td class="source">      doc.internals.parseOnly = false;<br></td></tr
><tr
id=sl_svn124_928

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_929

><td class="source"><br></td></tr
><tr
id=sl_svn124_930

><td class="source">    if (!doc.internals.parseOnly) {<br></td></tr
><tr
id=sl_svn124_931

><td class="source">      // geoXML3 is not being used only as a real-time parser, so keep the processed documents around<br></td></tr
><tr
id=sl_svn124_932

><td class="source">      if (!docsByUrl[doc.baseUrl]) {<br></td></tr
><tr
id=sl_svn124_933

><td class="source">        docs.push(doc);<br></td></tr
><tr
id=sl_svn124_934

><td class="source">        docsByUrl[doc.baseUrl] = doc;<br></td></tr
><tr
id=sl_svn124_935

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_936

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_937

><td class="source">        // internal replacement, which keeps the same memory ref loc in docs and docsByUrl<br></td></tr
><tr
id=sl_svn124_938

><td class="source">        for (var i in docsByUrl[doc.baseUrl]) {<br></td></tr
><tr
id=sl_svn124_939

><td class="source">          docsByUrl[doc.baseUrl][i] = doc[i];<br></td></tr
><tr
id=sl_svn124_940

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_941

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_942

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_943

><td class="source"><br></td></tr
><tr
id=sl_svn124_944

><td class="source">    doc.internals.remaining--;<br></td></tr
><tr
id=sl_svn124_945

><td class="source">    if (doc.internals.remaining === 0) {<br></td></tr
><tr
id=sl_svn124_946

><td class="source">      // We&#39;re done processing this set of KML documents<br></td></tr
><tr
id=sl_svn124_947

><td class="source">      // Options that get invoked after parsing completes<br></td></tr
><tr
id=sl_svn124_948

><td class="source">      if (parserOptions.zoom &amp;&amp; !!doc.internals.bounds &amp;&amp;<br></td></tr
><tr
id=sl_svn124_949

><td class="source">	  !doc.internals.bounds.isEmpty() &amp;&amp; !!parserOptions.map) {<br></td></tr
><tr
id=sl_svn124_950

><td class="source">        parserOptions.map.fitBounds(doc.internals.bounds);<br></td></tr
><tr
id=sl_svn124_951

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_952

><td class="source">      if (parserOptions.afterParse) {<br></td></tr
><tr
id=sl_svn124_953

><td class="source">        parserOptions.afterParse(doc.internals.docSet);<br></td></tr
><tr
id=sl_svn124_954

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_955

><td class="source">      google.maps.event.trigger(doc.internals.parser, &#39;parsed&#39;);   <br></td></tr
><tr
id=sl_svn124_956

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_957

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_958

><td class="source"><br></td></tr
><tr
id=sl_svn124_959

><td class="source">  var kmlColor = function (kmlIn, colorMode) {<br></td></tr
><tr
id=sl_svn124_960

><td class="source">    var kmlColor = {};<br></td></tr
><tr
id=sl_svn124_961

><td class="source">    kmlIn = kmlIn || &#39;ffffffff&#39;;  // white (KML 2.2 default)<br></td></tr
><tr
id=sl_svn124_962

><td class="source"><br></td></tr
><tr
id=sl_svn124_963

><td class="source">    var aa = kmlIn.substr(0,2);<br></td></tr
><tr
id=sl_svn124_964

><td class="source">    var bb = kmlIn.substr(2,2);<br></td></tr
><tr
id=sl_svn124_965

><td class="source">    var gg = kmlIn.substr(4,2);<br></td></tr
><tr
id=sl_svn124_966

><td class="source">    var rr = kmlIn.substr(6,2);<br></td></tr
><tr
id=sl_svn124_967

><td class="source"><br></td></tr
><tr
id=sl_svn124_968

><td class="source">    kmlColor.opacity = parseInt(aa, 16) / 256;<br></td></tr
><tr
id=sl_svn124_969

><td class="source">    kmlColor.color   = (colorMode === &#39;random&#39;) ? randomColor(rr, gg, bb) : &#39;#&#39; + rr + gg + bb;<br></td></tr
><tr
id=sl_svn124_970

><td class="source">    return kmlColor;<br></td></tr
><tr
id=sl_svn124_971

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_972

><td class="source"><br></td></tr
><tr
id=sl_svn124_973

><td class="source">  // Implemented per KML 2.2 &lt;ColorStyle&gt; specs<br></td></tr
><tr
id=sl_svn124_974

><td class="source">  var randomColor = function(rr, gg, bb) {<br></td></tr
><tr
id=sl_svn124_975

><td class="source">    var col = { rr: rr, gg: gg, bb: bb };<br></td></tr
><tr
id=sl_svn124_976

><td class="source">    for (var k in col) {<br></td></tr
><tr
id=sl_svn124_977

><td class="source">      var v = col[k];<br></td></tr
><tr
id=sl_svn124_978

><td class="source">      if (v == null) v = &#39;ff&#39;;<br></td></tr
><tr
id=sl_svn124_979

><td class="source"><br></td></tr
><tr
id=sl_svn124_980

><td class="source">      // RGB values are limiters for random numbers (ie: 7f would be a random value between 0 and 7f)<br></td></tr
><tr
id=sl_svn124_981

><td class="source">      v = Math.round(Math.random() * parseInt(rr, 16)).toString(16);<br></td></tr
><tr
id=sl_svn124_982

><td class="source">      if (v.length === 1) v = &#39;0&#39; + v;<br></td></tr
><tr
id=sl_svn124_983

><td class="source">      col[k] = v;<br></td></tr
><tr
id=sl_svn124_984

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_985

><td class="source"><br></td></tr
><tr
id=sl_svn124_986

><td class="source">    return &#39;#&#39; + col.rr + col.gg + col.bb;<br></td></tr
><tr
id=sl_svn124_987

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_988

><td class="source"><br></td></tr
><tr
id=sl_svn124_989

><td class="source">  var processStyleID = function (style) {<br></td></tr
><tr
id=sl_svn124_990

><td class="source">    var icon = style.icon;<br></td></tr
><tr
id=sl_svn124_991

><td class="source">    if (!icon || !icon.href) return;<br></td></tr
><tr
id=sl_svn124_992

><td class="source"><br></td></tr
><tr
id=sl_svn124_993

><td class="source">    if (icon.img &amp;&amp; !icon.img.complete &amp;&amp; (icon.dim.w &lt; 0) &amp;&amp; (icon.dim.h &lt; 0) ) {<br></td></tr
><tr
id=sl_svn124_994

><td class="source">      // we&#39;re still waiting on the image loading (probably because we&#39;ve been blocking since the declaration)<br></td></tr
><tr
id=sl_svn124_995

><td class="source">      // so, let&#39;s queue this function on the onload stack<br></td></tr
><tr
id=sl_svn124_996

><td class="source">      icon.markerBacklog = [];<br></td></tr
><tr
id=sl_svn124_997

><td class="source">      icon.img.onload = function() {<br></td></tr
><tr
id=sl_svn124_998

><td class="source">        if (icon.dim.w &lt; 0 || icon.dim.h &lt; 0) {<br></td></tr
><tr
id=sl_svn124_999

><td class="source">          icon.dim.w = this.width;<br></td></tr
><tr
id=sl_svn124_1000

><td class="source">          icon.dim.h = this.height;<br></td></tr
><tr
id=sl_svn124_1001

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn124_1002

><td class="source">          icon.dim.th = this.height;<br></td></tr
><tr
id=sl_svn124_1003

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1004

><td class="source">        processStyleID(style);<br></td></tr
><tr
id=sl_svn124_1005

><td class="source"><br></td></tr
><tr
id=sl_svn124_1006

><td class="source">        // we will undoubtedly get some createMarker queuing, so set this up in advance<br></td></tr
><tr
id=sl_svn124_1007

><td class="source">        for (var i = 0; i &lt; icon.markerBacklog.length; i++) {<br></td></tr
><tr
id=sl_svn124_1008

><td class="source">          var p = icon.markerBacklog[i][0];<br></td></tr
><tr
id=sl_svn124_1009

><td class="source">          var d = icon.markerBacklog[i][1];<br></td></tr
><tr
id=sl_svn124_1010

><td class="source">          createMarker(p, d);<br></td></tr
><tr
id=sl_svn124_1011

><td class="source">          if (p.marker) p.marker.active = true;<br></td></tr
><tr
id=sl_svn124_1012

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1013

><td class="source">        delete icon.markerBacklog;<br></td></tr
><tr
id=sl_svn124_1014

><td class="source">      };<br></td></tr
><tr
id=sl_svn124_1015

><td class="source">      return;<br></td></tr
><tr
id=sl_svn124_1016

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1017

><td class="source">    else { //if (icon.dim.w &lt; 0 || icon.dim.h &lt; 0) {<br></td></tr
><tr
id=sl_svn124_1018

><td class="source">      if (icon.img &amp;&amp; icon.img.complete) {<br></td></tr
><tr
id=sl_svn124_1019

><td class="source">        // sometimes the file is already cached and it never calls onLoad<br></td></tr
><tr
id=sl_svn124_1020

><td class="source">        if (icon.dim.w &lt; 0 || icon.dim.h &lt; 0) {<br></td></tr
><tr
id=sl_svn124_1021

><td class="source">        icon.dim.w = icon.img.width;<br></td></tr
><tr
id=sl_svn124_1022

><td class="source">        icon.dim.h = icon.img.height;<br></td></tr
><tr
id=sl_svn124_1023

><td class="source">        } else {<br></td></tr
><tr
id=sl_svn124_1024

><td class="source">          icon.dim.th = icon.img.height;<br></td></tr
><tr
id=sl_svn124_1025

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1026

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1027

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_1028

><td class="source">        // settle for a default of 32x32<br></td></tr
><tr
id=sl_svn124_1029

><td class="source">        icon.dim.whGuess = true;<br></td></tr
><tr
id=sl_svn124_1030

><td class="source">        icon.dim.w = 32;<br></td></tr
><tr
id=sl_svn124_1031

><td class="source">        icon.dim.h = 32;<br></td></tr
><tr
id=sl_svn124_1032

><td class="source">        icon.dim.th = 32;<br></td></tr
><tr
id=sl_svn124_1033

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1034

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1035

><td class="source"><br></td></tr
><tr
id=sl_svn124_1036

><td class="source">    // pre-scaled variables<br></td></tr
><tr
id=sl_svn124_1037

><td class="source">    var rnd = Math.round;<br></td></tr
><tr
id=sl_svn124_1038

><td class="source">    var y = icon.dim.y;<br></td></tr
><tr
id=sl_svn124_1039

><td class="source">    if (typeof icon.dim.th !== &#39;undefined&#39; &amp;&amp; icon.dim.th != icon.dim.h) { // palette - reverse kml y for maps<br></td></tr
><tr
id=sl_svn124_1040

><td class="source">      y = Math.abs(y - (icon.dim.th - icon.dim.h));<br></td></tr
><tr
id=sl_svn124_1041

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1042

><td class="source"><br></td></tr
><tr
id=sl_svn124_1043

><td class="source">    var scaled = {<br></td></tr
><tr
id=sl_svn124_1044

><td class="source">      x:  icon.dim.x     * icon.scale,<br></td></tr
><tr
id=sl_svn124_1045

><td class="source">      y: y * icon.scale,<br></td></tr
><tr
id=sl_svn124_1046

><td class="source">      w:  icon.dim.w     * icon.scale,<br></td></tr
><tr
id=sl_svn124_1047

><td class="source">      h:  icon.dim.h     * icon.scale,<br></td></tr
><tr
id=sl_svn124_1048

><td class="source">      aX: icon.hotSpot.x * icon.scale,<br></td></tr
><tr
id=sl_svn124_1049

><td class="source">      aY: icon.hotSpot.y * icon.scale,<br></td></tr
><tr
id=sl_svn124_1050

><td class="source">      iW: (icon.img ? icon.img.width  : icon.dim.w) * icon.scale,<br></td></tr
><tr
id=sl_svn124_1051

><td class="source">      iH: (icon.img ? icon.img.height : icon.dim.h) * icon.scale<br></td></tr
><tr
id=sl_svn124_1052

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_1053

><td class="source"><br></td></tr
><tr
id=sl_svn124_1054

><td class="source">    // Figure out the anchor spot<br></td></tr
><tr
id=sl_svn124_1055

><td class="source">    // Origins, anchor positions and coordinates of the marker increase in the X direction to the right and in<br></td></tr
><tr
id=sl_svn124_1056

><td class="source">    // the Y direction down.<br></td></tr
><tr
id=sl_svn124_1057

><td class="source">    var aX, aY;<br></td></tr
><tr
id=sl_svn124_1058

><td class="source">    switch (icon.hotSpot.xunits) {<br></td></tr
><tr
id=sl_svn124_1059

><td class="source">      case &#39;fraction&#39;:    aX = rnd(scaled.aX * icon.dim.w); break;<br></td></tr
><tr
id=sl_svn124_1060

><td class="source">      case &#39;insetPixels&#39;: aX = rnd(icon.dim.w * icon.scale - scaled.aX); break;<br></td></tr
><tr
id=sl_svn124_1061

><td class="source">      default:            aX = rnd(scaled.aX); break;  // already pixels<br></td></tr
><tr
id=sl_svn124_1062

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1063

><td class="source">    aY = scaled.h - rnd( ((icon.hotSpot.yunits === &#39;fraction&#39;) ? icon.dim.h : 1) * scaled.aY );  // insetPixels Y = pixels Y<br></td></tr
><tr
id=sl_svn124_1064

><td class="source">    var iconAnchor = new google.maps.Point(aX, aY);<br></td></tr
><tr
id=sl_svn124_1065

><td class="source"><br></td></tr
><tr
id=sl_svn124_1066

><td class="source">    // Sizes<br></td></tr
><tr
id=sl_svn124_1067

><td class="source">    // (NOTE: Scale is applied to entire image, not just the section of the icon palette.)<br></td></tr
><tr
id=sl_svn124_1068

><td class="source">    var iconSize   = icon.dim.whGuess  ? null : new google.maps.Size(rnd(scaled.w),  rnd(scaled.h));<br></td></tr
><tr
id=sl_svn124_1069

><td class="source">    var iconScale  = icon.scale == 1.0 ? null :<br></td></tr
><tr
id=sl_svn124_1070

><td class="source">                     icon.dim.whGuess  ?        new google.maps.Size(rnd(scaled.w),  rnd(scaled.h))<br></td></tr
><tr
id=sl_svn124_1071

><td class="source">                                              : new google.maps.Size(rnd(scaled.iW), rnd(scaled.iH));<br></td></tr
><tr
id=sl_svn124_1072

><td class="source">    var iconOrigin = new google.maps.Point(rnd(scaled.x), rnd(scaled.y));<br></td></tr
><tr
id=sl_svn124_1073

><td class="source"><br></td></tr
><tr
id=sl_svn124_1074

><td class="source">    // Detect images buried in KMZ files (and use a base64 encoded URL)<br></td></tr
><tr
id=sl_svn124_1075

><td class="source">    if (kmzMetaData[icon.url]) icon.url = kmzMetaData[icon.url].dataUrl;<br></td></tr
><tr
id=sl_svn124_1076

><td class="source"><br></td></tr
><tr
id=sl_svn124_1077

><td class="source">    // Init the style object with the KML icon<br></td></tr
><tr
id=sl_svn124_1078

><td class="source">    icon.marker = {<br></td></tr
><tr
id=sl_svn124_1079

><td class="source">      url: icon.url,        // url<br></td></tr
><tr
id=sl_svn124_1080

><td class="source">      size: iconSize,       // size<br></td></tr
><tr
id=sl_svn124_1081

><td class="source">      origin: iconOrigin,   // origin<br></td></tr
><tr
id=sl_svn124_1082

><td class="source">      anchor: iconAnchor,   // anchor<br></td></tr
><tr
id=sl_svn124_1083

><td class="source">      scaledSize: iconScale // scaledSize<br></td></tr
><tr
id=sl_svn124_1084

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_1085

><td class="source"><br></td></tr
><tr
id=sl_svn124_1086

><td class="source">    // Look for a predictable shadow<br></td></tr
><tr
id=sl_svn124_1087

><td class="source">    var stdRegEx = /\/(red|blue|green|yellow|lightblue|purple|pink|orange)(-dot)?\.png/;<br></td></tr
><tr
id=sl_svn124_1088

><td class="source">    var shadowSize = new google.maps.Size(59, 32);<br></td></tr
><tr
id=sl_svn124_1089

><td class="source">    var shadowPoint = new google.maps.Point(16, 32);<br></td></tr
><tr
id=sl_svn124_1090

><td class="source">    if (stdRegEx.test(icon.href)) {<br></td></tr
><tr
id=sl_svn124_1091

><td class="source">      // A standard GMap-style marker icon<br></td></tr
><tr
id=sl_svn124_1092

><td class="source">	icon.shadow = {<br></td></tr
><tr
id=sl_svn124_1093

><td class="source">	  url: &#39;http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png&#39;, // url<br></td></tr
><tr
id=sl_svn124_1094

><td class="source">          size: shadowSize,    // size<br></td></tr
><tr
id=sl_svn124_1095

><td class="source">          origin: null,        // origin<br></td></tr
><tr
id=sl_svn124_1096

><td class="source">	  anchor: shadowPoint, // anchor<br></td></tr
><tr
id=sl_svn124_1097

><td class="source">          scaledSize: shadowSize // scaledSize<br></td></tr
><tr
id=sl_svn124_1098

><td class="source">	};<br></td></tr
><tr
id=sl_svn124_1099

><td class="source">    } else if (icon.href.indexOf(&#39;-pushpin.png&#39;) &gt; -1) {<br></td></tr
><tr
id=sl_svn124_1100

><td class="source">      // Pushpin marker icon<br></td></tr
><tr
id=sl_svn124_1101

><td class="source">      icon.shadow = {<br></td></tr
><tr
id=sl_svn124_1102

><td class="source">	url: &#39;http://maps.google.com/mapfiles/ms/micons/pushpin_shadow.png&#39;,  // url<br></td></tr
><tr
id=sl_svn124_1103

><td class="source">        size: shadowSize,    // size<br></td></tr
><tr
id=sl_svn124_1104

><td class="source">        origin: null,        // origin<br></td></tr
><tr
id=sl_svn124_1105

><td class="source">        anchor: shadowPoint, // anchor<br></td></tr
><tr
id=sl_svn124_1106

><td class="source">        scaledSize: shadowSize // scaledSize<br></td></tr
><tr
id=sl_svn124_1107

><td class="source">      };<br></td></tr
><tr
id=sl_svn124_1108

><td class="source">    } /* else {<br></td></tr
><tr
id=sl_svn124_1109

><td class="source">      // Other MyMaps KML standard icon<br></td></tr
><tr
id=sl_svn124_1110

><td class="source">      icon.shadow = new google.maps.MarkerImage(<br></td></tr
><tr
id=sl_svn124_1111

><td class="source">        icon.href.replace(&#39;.png&#39;, &#39;.shadow.png&#39;),                        // url<br></td></tr
><tr
id=sl_svn124_1112

><td class="source">        shadowSize,                                                      // size<br></td></tr
><tr
id=sl_svn124_1113

><td class="source">        null,                                                            // origin<br></td></tr
><tr
id=sl_svn124_1114

><td class="source">        anchorPoint,                                                     // anchor<br></td></tr
><tr
id=sl_svn124_1115

><td class="source">        shadowSize                                                       // scaledSize<br></td></tr
><tr
id=sl_svn124_1116

><td class="source">      );<br></td></tr
><tr
id=sl_svn124_1117

><td class="source">    } */<br></td></tr
><tr
id=sl_svn124_1118

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1119

><td class="source"><br></td></tr
><tr
id=sl_svn124_1120

><td class="source">  var processStyles = function (doc) {<br></td></tr
><tr
id=sl_svn124_1121

><td class="source">    for (var styleID in doc.styles) {<br></td></tr
><tr
id=sl_svn124_1122

><td class="source">      processStyleID(doc.styles[styleID]);<br></td></tr
><tr
id=sl_svn124_1123

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1124

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_1125

><td class="source"><br></td></tr
><tr
id=sl_svn124_1126

><td class="source">  var createMarker = function (placemark, doc) {<br></td></tr
><tr
id=sl_svn124_1127

><td class="source">    // create a Marker to the map from a placemark KML object<br></td></tr
><tr
id=sl_svn124_1128

><td class="source">    var icon = placemark.style.icon;<br></td></tr
><tr
id=sl_svn124_1129

><td class="source"><br></td></tr
><tr
id=sl_svn124_1130

><td class="source">    if ( !icon.marker &amp;&amp; icon.img ) {<br></td></tr
><tr
id=sl_svn124_1131

><td class="source">      // yay, single point of failure is holding up multiple markers...<br></td></tr
><tr
id=sl_svn124_1132

><td class="source">      icon.markerBacklog = icon.markerBacklog || [];<br></td></tr
><tr
id=sl_svn124_1133

><td class="source">      icon.markerBacklog.push([placemark, doc]);<br></td></tr
><tr
id=sl_svn124_1134

><td class="source">      return;<br></td></tr
><tr
id=sl_svn124_1135

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1136

><td class="source"><br></td></tr
><tr
id=sl_svn124_1137

><td class="source">    // Load basic marker properties<br></td></tr
><tr
id=sl_svn124_1138

><td class="source">    var markerOptions = geoXML3.combineOptions(parserOptions.markerOptions, {<br></td></tr
><tr
id=sl_svn124_1139

><td class="source">      map:      parserOptions.map,<br></td></tr
><tr
id=sl_svn124_1140

><td class="source">      position: new google.maps.LatLng(placemark.Point.coordinates[0].lat, placemark.Point.coordinates[0].lng),<br></td></tr
><tr
id=sl_svn124_1141

><td class="source">      title:    placemark.name,<br></td></tr
><tr
id=sl_svn124_1142

><td class="source">      zIndex:   Math.round(placemark.Point.coordinates[0].lat * -100000)&lt;&lt;5,<br></td></tr
><tr
id=sl_svn124_1143

><td class="source">      icon:     icon.marker,<br></td></tr
><tr
id=sl_svn124_1144

><td class="source">      shadow:   icon.shadow,<br></td></tr
><tr
id=sl_svn124_1145

><td class="source">      flat:     !icon.shadow,<br></td></tr
><tr
id=sl_svn124_1146

><td class="source">      visible:  placemark.visibility<br></td></tr
><tr
id=sl_svn124_1147

><td class="source">    });<br></td></tr
><tr
id=sl_svn124_1148

><td class="source"><br></td></tr
><tr
id=sl_svn124_1149

><td class="source">    // Create the marker on the map<br></td></tr
><tr
id=sl_svn124_1150

><td class="source">    var marker = new google.maps.Marker(markerOptions);<br></td></tr
><tr
id=sl_svn124_1151

><td class="source">    if (!!doc) doc.markers.push(marker);<br></td></tr
><tr
id=sl_svn124_1152

><td class="source"><br></td></tr
><tr
id=sl_svn124_1153

><td class="source">    // Set up and create the infowindow if it is not suppressed<br></td></tr
><tr
id=sl_svn124_1154

><td class="source">    createInfoWindow(placemark, doc, marker);<br></td></tr
><tr
id=sl_svn124_1155

><td class="source">    placemark.marker = marker;<br></td></tr
><tr
id=sl_svn124_1156

><td class="source">    return marker;<br></td></tr
><tr
id=sl_svn124_1157

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_1158

><td class="source"><br></td></tr
><tr
id=sl_svn124_1159

><td class="source">  var createOverlay = function (groundOverlay, doc) {<br></td></tr
><tr
id=sl_svn124_1160

><td class="source">    // Add a ProjectedOverlay to the map from a groundOverlay KML object<br></td></tr
><tr
id=sl_svn124_1161

><td class="source"><br></td></tr
><tr
id=sl_svn124_1162

><td class="source">    if (!window.ProjectedOverlay) {<br></td></tr
><tr
id=sl_svn124_1163

><td class="source">      throw &#39;geoXML3 error: ProjectedOverlay not found while rendering GroundOverlay from KML&#39;;<br></td></tr
><tr
id=sl_svn124_1164

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1165

><td class="source"><br></td></tr
><tr
id=sl_svn124_1166

><td class="source">    var bounds = new google.maps.LatLngBounds(<br></td></tr
><tr
id=sl_svn124_1167

><td class="source">        new google.maps.LatLng(groundOverlay.latLonBox.south, groundOverlay.latLonBox.west),<br></td></tr
><tr
id=sl_svn124_1168

><td class="source">        new google.maps.LatLng(groundOverlay.latLonBox.north, groundOverlay.latLonBox.east)<br></td></tr
><tr
id=sl_svn124_1169

><td class="source">    );<br></td></tr
><tr
id=sl_svn124_1170

><td class="source">    var overlayOptions = geoXML3.combineOptions(parserOptions.overlayOptions, {percentOpacity: groundOverlay.opacity*100});<br></td></tr
><tr
id=sl_svn124_1171

><td class="source">    var overlay = new ProjectedOverlay(parserOptions.map, groundOverlay.icon.href, bounds, overlayOptions);<br></td></tr
><tr
id=sl_svn124_1172

><td class="source"><br></td></tr
><tr
id=sl_svn124_1173

><td class="source">    if (!!doc) {<br></td></tr
><tr
id=sl_svn124_1174

><td class="source">      doc.ggroundoverlays = doc.ggroundoverlays || [];<br></td></tr
><tr
id=sl_svn124_1175

><td class="source">      doc.ggroundoverlays.push(overlay);<br></td></tr
><tr
id=sl_svn124_1176

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1177

><td class="source"><br></td></tr
><tr
id=sl_svn124_1178

><td class="source">    return overlay;<br></td></tr
><tr
id=sl_svn124_1179

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_1180

><td class="source"><br></td></tr
><tr
id=sl_svn124_1181

><td class="source">  // Create Polyline<br></td></tr
><tr
id=sl_svn124_1182

><td class="source">  var createPolyline = function(placemark, doc) {<br></td></tr
><tr
id=sl_svn124_1183

><td class="source">    var paths = [];<br></td></tr
><tr
id=sl_svn124_1184

><td class="source">    var bounds = new google.maps.LatLngBounds();<br></td></tr
><tr
id=sl_svn124_1185

><td class="source">    for (var j=0; j&lt;placemark.LineString.length; j++) {<br></td></tr
><tr
id=sl_svn124_1186

><td class="source">      var path = [];<br></td></tr
><tr
id=sl_svn124_1187

><td class="source">      var coords = placemark.LineString[j].coordinates;<br></td></tr
><tr
id=sl_svn124_1188

><td class="source">      for (var i=0;i&lt;coords.length;i++) {<br></td></tr
><tr
id=sl_svn124_1189

><td class="source">        var pt = new google.maps.LatLng(coords[i].lat, coords[i].lng);<br></td></tr
><tr
id=sl_svn124_1190

><td class="source">        path.push(pt);<br></td></tr
><tr
id=sl_svn124_1191

><td class="source">        bounds.extend(pt);<br></td></tr
><tr
id=sl_svn124_1192

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1193

><td class="source">      paths.push(path);<br></td></tr
><tr
id=sl_svn124_1194

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1195

><td class="source">    // point to open the infowindow if triggered<br></td></tr
><tr
id=sl_svn124_1196

><td class="source">    var point = paths[0][Math.floor(path.length/2)];<br></td></tr
><tr
id=sl_svn124_1197

><td class="source">    // Load basic polyline properties<br></td></tr
><tr
id=sl_svn124_1198

><td class="source">    var kmlStrokeColor = kmlColor(placemark.style.line.color, placemark.style.line.colorMode);<br></td></tr
><tr
id=sl_svn124_1199

><td class="source">    var polyOptions = geoXML3.combineOptions(parserOptions.polylineOptions, {<br></td></tr
><tr
id=sl_svn124_1200

><td class="source">      map:           parserOptions.map,<br></td></tr
><tr
id=sl_svn124_1201

><td class="source">      path:          path,<br></td></tr
><tr
id=sl_svn124_1202

><td class="source">      strokeColor:   kmlStrokeColor.color,<br></td></tr
><tr
id=sl_svn124_1203

><td class="source">      strokeWeight:  placemark.style.line.width,<br></td></tr
><tr
id=sl_svn124_1204

><td class="source">      strokeOpacity: kmlStrokeColor.opacity,<br></td></tr
><tr
id=sl_svn124_1205

><td class="source">      title:         placemark.name,<br></td></tr
><tr
id=sl_svn124_1206

><td class="source">      visible:       placemark.visibility<br></td></tr
><tr
id=sl_svn124_1207

><td class="source">    });<br></td></tr
><tr
id=sl_svn124_1208

><td class="source">    if (paths.length &gt; 1) {<br></td></tr
><tr
id=sl_svn124_1209

><td class="source">      polyOptions.paths = paths;<br></td></tr
><tr
id=sl_svn124_1210

><td class="source">      var p = new MultiGeometry(polyOptions);<br></td></tr
><tr
id=sl_svn124_1211

><td class="source">    } else {<br></td></tr
><tr
id=sl_svn124_1212

><td class="source">      polyOptions.path = paths[0];<br></td></tr
><tr
id=sl_svn124_1213

><td class="source">      var p = new google.maps.Polyline(polyOptions);<br></td></tr
><tr
id=sl_svn124_1214

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1215

><td class="source">    var p = new google.maps.Polyline(polyOptions);<br></td></tr
><tr
id=sl_svn124_1216

><td class="source">    p.bounds = bounds;<br></td></tr
><tr
id=sl_svn124_1217

><td class="source"><br></td></tr
><tr
id=sl_svn124_1218

><td class="source">    // setup and create the infoWindow if it is not suppressed<br></td></tr
><tr
id=sl_svn124_1219

><td class="source">    createInfoWindow(placemark, doc, p);<br></td></tr
><tr
id=sl_svn124_1220

><td class="source">    if (!!doc) doc.gpolylines.push(p);<br></td></tr
><tr
id=sl_svn124_1221

><td class="source">    placemark.polyline = p;<br></td></tr
><tr
id=sl_svn124_1222

><td class="source">    return p;<br></td></tr
><tr
id=sl_svn124_1223

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1224

><td class="source"><br></td></tr
><tr
id=sl_svn124_1225

><td class="source">  // Create Polygon<br></td></tr
><tr
id=sl_svn124_1226

><td class="source">  var createPolygon = function(placemark, doc) {<br></td></tr
><tr
id=sl_svn124_1227

><td class="source">    var bounds = new google.maps.LatLngBounds();<br></td></tr
><tr
id=sl_svn124_1228

><td class="source">    var pathsLength = 0;<br></td></tr
><tr
id=sl_svn124_1229

><td class="source">    var paths = [];<br></td></tr
><tr
id=sl_svn124_1230

><td class="source">    for (var polygonPart=0;polygonPart&lt;placemark.Polygon.length;polygonPart++) {<br></td></tr
><tr
id=sl_svn124_1231

><td class="source">      for (var j=0; j&lt;placemark.Polygon[polygonPart].outerBoundaryIs.length; j++) {<br></td></tr
><tr
id=sl_svn124_1232

><td class="source">        var coords = placemark.Polygon[polygonPart].outerBoundaryIs[j].coordinates;<br></td></tr
><tr
id=sl_svn124_1233

><td class="source">        var path = [];<br></td></tr
><tr
id=sl_svn124_1234

><td class="source">        for (var i=0;i&lt;coords.length;i++) {<br></td></tr
><tr
id=sl_svn124_1235

><td class="source">          var pt = new google.maps.LatLng(coords[i].lat, coords[i].lng);<br></td></tr
><tr
id=sl_svn124_1236

><td class="source">          path.push(pt);<br></td></tr
><tr
id=sl_svn124_1237

><td class="source">          bounds.extend(pt);<br></td></tr
><tr
id=sl_svn124_1238

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1239

><td class="source">        paths.push(path);<br></td></tr
><tr
id=sl_svn124_1240

><td class="source">        pathsLength += path.length;<br></td></tr
><tr
id=sl_svn124_1241

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1242

><td class="source">      for (var j=0; j&lt;placemark.Polygon[polygonPart].innerBoundaryIs.length; j++) {<br></td></tr
><tr
id=sl_svn124_1243

><td class="source">        var coords = placemark.Polygon[polygonPart].innerBoundaryIs[j].coordinates;<br></td></tr
><tr
id=sl_svn124_1244

><td class="source">        var path = [];<br></td></tr
><tr
id=sl_svn124_1245

><td class="source">        for (var i=0;i&lt;coords.length;i++) {<br></td></tr
><tr
id=sl_svn124_1246

><td class="source">          var pt = new google.maps.LatLng(coords[i].lat, coords[i].lng);<br></td></tr
><tr
id=sl_svn124_1247

><td class="source">          path.push(pt);<br></td></tr
><tr
id=sl_svn124_1248

><td class="source">          bounds.extend(pt);<br></td></tr
><tr
id=sl_svn124_1249

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1250

><td class="source">        paths.push(path);<br></td></tr
><tr
id=sl_svn124_1251

><td class="source">        pathsLength += path.length;<br></td></tr
><tr
id=sl_svn124_1252

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1253

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1254

><td class="source"><br></td></tr
><tr
id=sl_svn124_1255

><td class="source">    // Load basic polygon properties<br></td></tr
><tr
id=sl_svn124_1256

><td class="source">    var kmlStrokeColor = kmlColor(placemark.style.line.color, placemark.style.line.colorMode);<br></td></tr
><tr
id=sl_svn124_1257

><td class="source">    var kmlFillColor = kmlColor(placemark.style.poly.color, placemark.style.poly.colorMode);<br></td></tr
><tr
id=sl_svn124_1258

><td class="source">    if (!placemark.style.poly.fill) kmlFillColor.opacity = 0.0;<br></td></tr
><tr
id=sl_svn124_1259

><td class="source">    var strokeWeight = placemark.style.line.width;<br></td></tr
><tr
id=sl_svn124_1260

><td class="source">    if (!placemark.style.poly.outline) {<br></td></tr
><tr
id=sl_svn124_1261

><td class="source">      strokeWeight = 0;<br></td></tr
><tr
id=sl_svn124_1262

><td class="source">      kmlStrokeColor.opacity = 0.0;<br></td></tr
><tr
id=sl_svn124_1263

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1264

><td class="source">    var polyOptions = geoXML3.combineOptions(parserOptions.polygonOptions, {<br></td></tr
><tr
id=sl_svn124_1265

><td class="source">      map:           parserOptions.map,<br></td></tr
><tr
id=sl_svn124_1266

><td class="source">      paths:         paths,<br></td></tr
><tr
id=sl_svn124_1267

><td class="source">      title:         placemark.name,<br></td></tr
><tr
id=sl_svn124_1268

><td class="source">      strokeColor:   kmlStrokeColor.color,<br></td></tr
><tr
id=sl_svn124_1269

><td class="source">      strokeWeight:  strokeWeight,<br></td></tr
><tr
id=sl_svn124_1270

><td class="source">      strokeOpacity: kmlStrokeColor.opacity,<br></td></tr
><tr
id=sl_svn124_1271

><td class="source">      fillColor:     kmlFillColor.color,<br></td></tr
><tr
id=sl_svn124_1272

><td class="source">      fillOpacity:   kmlFillColor.opacity,<br></td></tr
><tr
id=sl_svn124_1273

><td class="source">      visible:       placemark.visibility<br></td></tr
><tr
id=sl_svn124_1274

><td class="source">    });<br></td></tr
><tr
id=sl_svn124_1275

><td class="source">    var p = new google.maps.Polygon(polyOptions);<br></td></tr
><tr
id=sl_svn124_1276

><td class="source">    p.bounds = bounds;<br></td></tr
><tr
id=sl_svn124_1277

><td class="source"><br></td></tr
><tr
id=sl_svn124_1278

><td class="source">    createInfoWindow(placemark, doc, p);<br></td></tr
><tr
id=sl_svn124_1279

><td class="source">    if (!!doc) doc.gpolygons.push(p);<br></td></tr
><tr
id=sl_svn124_1280

><td class="source">    placemark.polygon = p;<br></td></tr
><tr
id=sl_svn124_1281

><td class="source">    return p;<br></td></tr
><tr
id=sl_svn124_1282

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1283

><td class="source"><br></td></tr
><tr
id=sl_svn124_1284

><td class="source">  var createInfoWindow = function(placemark, doc, gObj) {<br></td></tr
><tr
id=sl_svn124_1285

><td class="source">    var bStyle = placemark.style.balloon;<br></td></tr
><tr
id=sl_svn124_1286

><td class="source">    var vars = placemark.vars;<br></td></tr
><tr
id=sl_svn124_1287

><td class="source"><br></td></tr
><tr
id=sl_svn124_1288

><td class="source">    if (!placemark.balloonVisibility || bStyle.displayMode === &#39;hide&#39;) return;<br></td></tr
><tr
id=sl_svn124_1289

><td class="source"><br></td></tr
><tr
id=sl_svn124_1290

><td class="source">    // define geDirections <br></td></tr
><tr
id=sl_svn124_1291

><td class="source">    if (placemark.latlng &amp;&amp; <br></td></tr
><tr
id=sl_svn124_1292

><td class="source">        (!parserOptions.suppressDirections || !parserOptions.suppressDirections)) {<br></td></tr
><tr
id=sl_svn124_1293

><td class="source">      vars.directions.push(&#39;sll=&#39; + placemark.latlng.toUrlValue());<br></td></tr
><tr
id=sl_svn124_1294

><td class="source"><br></td></tr
><tr
id=sl_svn124_1295

><td class="source">      var url = &#39;http://maps.google.com/maps?&#39; + vars.directions.join(&#39;&amp;&#39;);<br></td></tr
><tr
id=sl_svn124_1296

><td class="source">      var address = encodeURIComponent( vars.val.address || placemark.latlng.toUrlValue() ).replace(/\%20/g, &#39;+&#39;);<br></td></tr
><tr
id=sl_svn124_1297

><td class="source"><br></td></tr
><tr
id=sl_svn124_1298

><td class="source">      vars.val.geDirections = &#39;&lt;a href=&quot;&#39; + url + &#39;&amp;daddr=&#39; + address + &#39;&quot; target=_blank&gt;To Here&lt;/a&gt; - &lt;a href=&quot;&#39; + url + &#39;&amp;saddr=&#39; + address + &#39;&quot; target=_blank&gt;From Here&lt;/a&gt;&#39;;<br></td></tr
><tr
id=sl_svn124_1299

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1300

><td class="source">    else vars.val.geDirections = &#39;&#39;;<br></td></tr
><tr
id=sl_svn124_1301

><td class="source"><br></td></tr
><tr
id=sl_svn124_1302

><td class="source">    // add in the variables<br></td></tr
><tr
id=sl_svn124_1303

><td class="source">    var iwText = bStyle.text.replace(/\$\[(\w+(\/displayName)?)\]/g, function(txt, n, dn) { return dn ? vars.display[n] : vars.val[n]; });<br></td></tr
><tr
id=sl_svn124_1304

><td class="source">    var classTxt = &#39;geoxml3_infowindow geoxml3_style_&#39; + placemark.styleID;<br></td></tr
><tr
id=sl_svn124_1305

><td class="source"><br></td></tr
><tr
id=sl_svn124_1306

><td class="source">    // color styles<br></td></tr
><tr
id=sl_svn124_1307

><td class="source">    var styleArr = [];<br></td></tr
><tr
id=sl_svn124_1308

><td class="source">    if (bStyle.bgColor   != &#39;ffffffff&#39;) styleArr.push(&#39;background: &#39; + kmlColor(bStyle.bgColor  ).color + &#39;;&#39;);<br></td></tr
><tr
id=sl_svn124_1309

><td class="source">    if (bStyle.textColor != &#39;ff000000&#39;) styleArr.push(&#39;color: &#39;      + kmlColor(bStyle.textColor).color + &#39;;&#39;);<br></td></tr
><tr
id=sl_svn124_1310

><td class="source">    var styleProp = styleArr.length ? &#39; style=&quot;&#39; + styleArr.join(&#39; &#39;) + &#39;&quot;&#39; : &#39;&#39;;<br></td></tr
><tr
id=sl_svn124_1311

><td class="source"><br></td></tr
><tr
id=sl_svn124_1312

><td class="source">    var infoWindowOptions = geoXML3.combineOptions(parserOptions.infoWindowOptions, {<br></td></tr
><tr
id=sl_svn124_1313

><td class="source">      content: &#39;&lt;div class=&quot;&#39; + classTxt + &#39;&quot;&#39; + styleProp + &#39;&gt;&#39; + iwText + &#39;&lt;/div&gt;&#39;,<br></td></tr
><tr
id=sl_svn124_1314

><td class="source">      pixelOffset: new google.maps.Size(0, 2)<br></td></tr
><tr
id=sl_svn124_1315

><td class="source">    });<br></td></tr
><tr
id=sl_svn124_1316

><td class="source"><br></td></tr
><tr
id=sl_svn124_1317

><td class="source">    gObj.infoWindow = parserOptions.infoWindow || new google.maps.InfoWindow(infoWindowOptions);<br></td></tr
><tr
id=sl_svn124_1318

><td class="source">    gObj.infoWindowOptions = infoWindowOptions;<br></td></tr
><tr
id=sl_svn124_1319

><td class="source"><br></td></tr
><tr
id=sl_svn124_1320

><td class="source">    // Info Window-opening event handler<br></td></tr
><tr
id=sl_svn124_1321

><td class="source">    google.maps.event.addListener(gObj, &#39;click&#39;, function(e) {<br></td></tr
><tr
id=sl_svn124_1322

><td class="source">      var iW = this.infoWindow;<br></td></tr
><tr
id=sl_svn124_1323

><td class="source">      iW.close();<br></td></tr
><tr
id=sl_svn124_1324

><td class="source">      iW.setOptions(this.infoWindowOptions);<br></td></tr
><tr
id=sl_svn124_1325

><td class="source"><br></td></tr
><tr
id=sl_svn124_1326

><td class="source">      if      (e &amp;&amp; e.latLng) iW.setPosition(e.latLng);<br></td></tr
><tr
id=sl_svn124_1327

><td class="source">      else if (this.bounds)   iW.setPosition(this.bounds.getCenter());<br></td></tr
><tr
id=sl_svn124_1328

><td class="source"><br></td></tr
><tr
id=sl_svn124_1329

><td class="source">      iW.setContent(&quot;&lt;div id=&#39;geoxml3_infowindow&#39;&gt;&quot;+iW.getContent()+&quot;&lt;/div&gt;&quot;);<br></td></tr
><tr
id=sl_svn124_1330

><td class="source">      google.maps.event.addListenerOnce(iW, &quot;domready&quot;, function() {<br></td></tr
><tr
id=sl_svn124_1331

><td class="source">        var node = document.getElementById(&#39;geoxml3_infowindow&#39;);<br></td></tr
><tr
id=sl_svn124_1332

><td class="source">        var imgArray = node.getElementsByTagName(&#39;img&#39;);<br></td></tr
><tr
id=sl_svn124_1333

><td class="source">        for (var i = 0; i &lt; imgArray.length; i++) <br></td></tr
><tr
id=sl_svn124_1334

><td class="source">        {<br></td></tr
><tr
id=sl_svn124_1335

><td class="source">          var imgUrlIE = imgArray[i].getAttribute(&quot;src&quot;);<br></td></tr
><tr
id=sl_svn124_1336

><td class="source">          var imgUrl  = cleanURL(doc.baseDir, imgUrlIE);<br></td></tr
><tr
id=sl_svn124_1337

><td class="source"><br></td></tr
><tr
id=sl_svn124_1338

><td class="source">          if (kmzMetaData[imgUrl]) {<br></td></tr
><tr
id=sl_svn124_1339

><td class="source">             imgArray[i].src = kmzMetaData[imgUrl].dataUrl;<br></td></tr
><tr
id=sl_svn124_1340

><td class="source">          } else if (kmzMetaData[imgUrlIE]) {<br></td></tr
><tr
id=sl_svn124_1341

><td class="source">             imgArray[i].src = kmzMetaData[imgUrlIE].dataUrl;<br></td></tr
><tr
id=sl_svn124_1342

><td class="source">          }<br></td></tr
><tr
id=sl_svn124_1343

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1344

><td class="source">      });<br></td></tr
><tr
id=sl_svn124_1345

><td class="source">      iW.open(this.map, this.bounds ? null : this);<br></td></tr
><tr
id=sl_svn124_1346

><td class="source">    });<br></td></tr
><tr
id=sl_svn124_1347

><td class="source"><br></td></tr
><tr
id=sl_svn124_1348

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1349

><td class="source"><br></td></tr
><tr
id=sl_svn124_1350

><td class="source">  return {<br></td></tr
><tr
id=sl_svn124_1351

><td class="source">    // Expose some properties and methods<br></td></tr
><tr
id=sl_svn124_1352

><td class="source"><br></td></tr
><tr
id=sl_svn124_1353

><td class="source">    options:     parserOptions,<br></td></tr
><tr
id=sl_svn124_1354

><td class="source">    docs:        docs,<br></td></tr
><tr
id=sl_svn124_1355

><td class="source">    docsByUrl:   docsByUrl,<br></td></tr
><tr
id=sl_svn124_1356

><td class="source">    kmzMetaData: kmzMetaData,<br></td></tr
><tr
id=sl_svn124_1357

><td class="source"><br></td></tr
><tr
id=sl_svn124_1358

><td class="source">    parse:          parse,<br></td></tr
><tr
id=sl_svn124_1359

><td class="source">    render:         render,<br></td></tr
><tr
id=sl_svn124_1360

><td class="source">    parseKmlString: parseKmlString,<br></td></tr
><tr
id=sl_svn124_1361

><td class="source">    hideDocument:   hideDocument,<br></td></tr
><tr
id=sl_svn124_1362

><td class="source">    showDocument:   showDocument,<br></td></tr
><tr
id=sl_svn124_1363

><td class="source">    processStyles:  processStyles,<br></td></tr
><tr
id=sl_svn124_1364

><td class="source">    createMarker:   createMarker,<br></td></tr
><tr
id=sl_svn124_1365

><td class="source">    createOverlay:  createOverlay,<br></td></tr
><tr
id=sl_svn124_1366

><td class="source">    createPolyline: createPolyline,<br></td></tr
><tr
id=sl_svn124_1367

><td class="source">    createPolygon:  createPolygon<br></td></tr
><tr
id=sl_svn124_1368

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_1369

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1370

><td class="source">// End of KML Parser<br></td></tr
><tr
id=sl_svn124_1371

><td class="source"><br></td></tr
><tr
id=sl_svn124_1372

><td class="source">// Helper objects and functions<br></td></tr
><tr
id=sl_svn124_1373

><td class="source">geoXML3.getOpacity = function (kmlColor) {<br></td></tr
><tr
id=sl_svn124_1374

><td class="source">  // Extract opacity encoded in a KML color value. Returns a number between 0 and 1.<br></td></tr
><tr
id=sl_svn124_1375

><td class="source">  if (!!kmlColor &amp;&amp;<br></td></tr
><tr
id=sl_svn124_1376

><td class="source">      (kmlColor !== &#39;&#39;) &amp;&amp;<br></td></tr
><tr
id=sl_svn124_1377

><td class="source">      (kmlColor.length == 8)) {<br></td></tr
><tr
id=sl_svn124_1378

><td class="source">    var transparency = parseInt(kmlColor.substr(0, 2), 16);<br></td></tr
><tr
id=sl_svn124_1379

><td class="source">    return transparency / 255;<br></td></tr
><tr
id=sl_svn124_1380

><td class="source">  } else {<br></td></tr
><tr
id=sl_svn124_1381

><td class="source">    return 1;<br></td></tr
><tr
id=sl_svn124_1382

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1383

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1384

><td class="source"><br></td></tr
><tr
id=sl_svn124_1385

><td class="source">// Log a message to the debugging console, if one exists<br></td></tr
><tr
id=sl_svn124_1386

><td class="source">geoXML3.log = function(msg) {<br></td></tr
><tr
id=sl_svn124_1387

><td class="source">  if (!!window.console) {<br></td></tr
><tr
id=sl_svn124_1388

><td class="source">    console.log(msg);<br></td></tr
><tr
id=sl_svn124_1389

><td class="source">  } else { alert(&quot;log:&quot;+msg); }<br></td></tr
><tr
id=sl_svn124_1390

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1391

><td class="source"><br></td></tr
><tr
id=sl_svn124_1392

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1393

><td class="source"> * Creates a new parserOptions object.<br></td></tr
><tr
id=sl_svn124_1394

><td class="source"> * @class GeoXML3 parser options.<br></td></tr
><tr
id=sl_svn124_1395

><td class="source"> * @param {Object} overrides Any options you want to declare outside of the defaults should be included here.<br></td></tr
><tr
id=sl_svn124_1396

><td class="source"> * @property {google.maps.Map} map The API map on which geo objects should be rendered.<br></td></tr
><tr
id=sl_svn124_1397

><td class="source"> * @property {google.maps.MarkerOptions} markerOptions If the parser is adding Markers to the map itself, any options specified here will be applied to them.<br></td></tr
><tr
id=sl_svn124_1398

><td class="source"> * @property {google.maps.InfoWindowOptions} infoWindowOptions If the parser is adding Markers to the map itself, any options specified here will be applied to their attached InfoWindows.<br></td></tr
><tr
id=sl_svn124_1399

><td class="source"> * @property {ProjectedOverlay.options} overlayOptions If the parser is adding ProjectedOverlays to the map itself, any options specified here will be applied to them.<br></td></tr
><tr
id=sl_svn124_1400

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1401

><td class="source">geoXML3.parserOptions = function (overrides) {<br></td></tr
><tr
id=sl_svn124_1402

><td class="source">  this.map                 = null,<br></td></tr
><tr
id=sl_svn124_1403

><td class="source">  /** If true, the parser will automatically move the map to a best-fit of the geodata after parsing of a KML document completes.<br></td></tr
><tr
id=sl_svn124_1404

><td class="source">   * @type Boolean<br></td></tr
><tr
id=sl_svn124_1405

><td class="source">   * @default true<br></td></tr
><tr
id=sl_svn124_1406

><td class="source">   */<br></td></tr
><tr
id=sl_svn124_1407

><td class="source">  this.zoom                = true,<br></td></tr
><tr
id=sl_svn124_1408

><td class="source">  /**#@+ @type Boolean<br></td></tr
><tr
id=sl_svn124_1409

><td class="source">   *     @default false */<br></td></tr
><tr
id=sl_svn124_1410

><td class="source">  /** If true, only a single Marker created by the parser will be able to have its InfoWindow open at once (simulating the behavior of GMaps API v2). */<br></td></tr
><tr
id=sl_svn124_1411

><td class="source">  this.singleInfoWindow    = false,<br></td></tr
><tr
id=sl_svn124_1412

><td class="source">  /** If true, suppresses the rendering of info windows. */<br></td></tr
><tr
id=sl_svn124_1413

><td class="source">  this.suppressInfoWindows = false,<br></td></tr
><tr
id=sl_svn124_1414

><td class="source">  /**<br></td></tr
><tr
id=sl_svn124_1415

><td class="source">   * Control whether to process styles now or later.<br></td></tr
><tr
id=sl_svn124_1416

><td class="source">   *<br></td></tr
><tr
id=sl_svn124_1417

><td class="source">   * &lt;p&gt;By default, the parser only processes KML &amp;lt;Style&amp;gt; elements into their GMaps equivalents<br></td></tr
><tr
id=sl_svn124_1418

><td class="source">   * if it will be creating its own Markers (the createMarker option is null). Setting this option<br></td></tr
><tr
id=sl_svn124_1419

><td class="source">   * to true will force such processing to happen anyway, useful if you&#39;re going to be calling parser.createMarker<br></td></tr
><tr
id=sl_svn124_1420

><td class="source">   * yourself later. OTOH, leaving this option false removes runtime dependency on the GMaps API, enabling<br></td></tr
><tr
id=sl_svn124_1421

><td class="source">   * the use of geoXML3 as a standalone KML parser.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_1422

><td class="source">   */<br></td></tr
><tr
id=sl_svn124_1423

><td class="source">  this.processStyles       = false,<br></td></tr
><tr
id=sl_svn124_1424

><td class="source">  /**#@-*/<br></td></tr
><tr
id=sl_svn124_1425

><td class="source"><br></td></tr
><tr
id=sl_svn124_1426

><td class="source">  this.markerOptions       = {},<br></td></tr
><tr
id=sl_svn124_1427

><td class="source">  this.infoWindowOptions   = {},<br></td></tr
><tr
id=sl_svn124_1428

><td class="source">  this.overlayOptions      = {},<br></td></tr
><tr
id=sl_svn124_1429

><td class="source"><br></td></tr
><tr
id=sl_svn124_1430

><td class="source">  /**#@+ @event */<br></td></tr
><tr
id=sl_svn124_1431

><td class="source">  /** This function will be called when parsing of a KML document is complete.<br></td></tr
><tr
id=sl_svn124_1432

><td class="source">   * @param {geoXML3.parser#docs} doc Parsed KML data. */<br></td></tr
><tr
id=sl_svn124_1433

><td class="source">  this.afterParse          = null,<br></td></tr
><tr
id=sl_svn124_1434

><td class="source">  /** This function will be called when parsing of a KML document is complete.<br></td></tr
><tr
id=sl_svn124_1435

><td class="source">   * @param {geoXML3.parser#docs} doc Parsed KML data. */<br></td></tr
><tr
id=sl_svn124_1436

><td class="source">  this.failedParse         = null,<br></td></tr
><tr
id=sl_svn124_1437

><td class="source">  /**<br></td></tr
><tr
id=sl_svn124_1438

><td class="source">   * If supplied, this function will be called once for each marker &lt;Placemark&gt; in the KML document, instead of the parser adding its own Marker to the map.<br></td></tr
><tr
id=sl_svn124_1439

><td class="source">   * @param {geoXML3.parser.render#placemark} placemark Placemark object.<br></td></tr
><tr
id=sl_svn124_1440

><td class="source">   * @param {geoXML3.parser#docs} doc Parsed KML data.<br></td></tr
><tr
id=sl_svn124_1441

><td class="source">   */<br></td></tr
><tr
id=sl_svn124_1442

><td class="source">  this.createMarker        = null,<br></td></tr
><tr
id=sl_svn124_1443

><td class="source">  /**<br></td></tr
><tr
id=sl_svn124_1444

><td class="source">   * If supplied, this function will be called once for each &lt;GroundOverlay&gt; in the KML document, instead of the parser adding its own ProjectedOverlay to the map.<br></td></tr
><tr
id=sl_svn124_1445

><td class="source">   * @param {geoXML3.parser.render#groundOverlay} groundOverlay GroundOverlay object.<br></td></tr
><tr
id=sl_svn124_1446

><td class="source">   * @param {geoXML3.parser#docs} doc Parsed KML data.<br></td></tr
><tr
id=sl_svn124_1447

><td class="source">   */<br></td></tr
><tr
id=sl_svn124_1448

><td class="source">  this.createOverlay       = null<br></td></tr
><tr
id=sl_svn124_1449

><td class="source">  /**#@-*/<br></td></tr
><tr
id=sl_svn124_1450

><td class="source"><br></td></tr
><tr
id=sl_svn124_1451

><td class="source">  if (overrides) {<br></td></tr
><tr
id=sl_svn124_1452

><td class="source">    for (var prop in overrides) {<br></td></tr
><tr
id=sl_svn124_1453

><td class="source">      if (overrides.hasOwnProperty(prop)) this[prop] = overrides[prop];<br></td></tr
><tr
id=sl_svn124_1454

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1455

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1456

><td class="source">  return this;<br></td></tr
><tr
id=sl_svn124_1457

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1458

><td class="source"><br></td></tr
><tr
id=sl_svn124_1459

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1460

><td class="source"> * Combine two options objects: a set of default values and a set of override values.<br></td></tr
><tr
id=sl_svn124_1461

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1462

><td class="source"> * @deprecated This has been replaced with {@link geoXML3.parserOptions#combineOptions}.<br></td></tr
><tr
id=sl_svn124_1463

><td class="source"> * @param {geoXML3.parserOptions|Object} overrides Override values.<br></td></tr
><tr
id=sl_svn124_1464

><td class="source"> * @param {geoXML3.parserOptions|Object} defaults Default values.<br></td></tr
><tr
id=sl_svn124_1465

><td class="source"> * @return {geoXML3.parserOptions} Combined result.<br></td></tr
><tr
id=sl_svn124_1466

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1467

><td class="source">geoXML3.combineOptions = function (overrides, defaults) {<br></td></tr
><tr
id=sl_svn124_1468

><td class="source">  var result = {};<br></td></tr
><tr
id=sl_svn124_1469

><td class="source">  if (!!overrides) {<br></td></tr
><tr
id=sl_svn124_1470

><td class="source">    for (var prop in overrides) {<br></td></tr
><tr
id=sl_svn124_1471

><td class="source">      if (overrides.hasOwnProperty(prop))                              result[prop] = overrides[prop];<br></td></tr
><tr
id=sl_svn124_1472

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1473

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1474

><td class="source">  if (!!defaults) {<br></td></tr
><tr
id=sl_svn124_1475

><td class="source">    for (prop in defaults) {<br></td></tr
><tr
id=sl_svn124_1476

><td class="source">      if (defaults.hasOwnProperty(prop) &amp;&amp; result[prop] === undefined) result[prop] = defaults[prop];<br></td></tr
><tr
id=sl_svn124_1477

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1478

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1479

><td class="source">  return result;<br></td></tr
><tr
id=sl_svn124_1480

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1481

><td class="source"><br></td></tr
><tr
id=sl_svn124_1482

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1483

><td class="source"> * Combine two options objects: a set of default values and a set of override values.<br></td></tr
><tr
id=sl_svn124_1484

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1485

><td class="source"> * @function<br></td></tr
><tr
id=sl_svn124_1486

><td class="source"> * @param {geoXML3.parserOptions|Object} overrides Override values.<br></td></tr
><tr
id=sl_svn124_1487

><td class="source"> * @param {geoXML3.parserOptions|Object} defaults Default values.<br></td></tr
><tr
id=sl_svn124_1488

><td class="source"> * @return {geoXML3.parserOptions} Combined result.<br></td></tr
><tr
id=sl_svn124_1489

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1490

><td class="source">geoXML3.parserOptions.prototype.combineOptions = geoXML3.combineOptions;<br></td></tr
><tr
id=sl_svn124_1491

><td class="source"><br></td></tr
><tr
id=sl_svn124_1492

><td class="source">// Retrieve an XML document from url and pass it to callback as a DOM document<br></td></tr
><tr
id=sl_svn124_1493

><td class="source">geoXML3.fetchers = [];<br></td></tr
><tr
id=sl_svn124_1494

><td class="source"><br></td></tr
><tr
id=sl_svn124_1495

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1496

><td class="source"> * Parses a XML string.<br></td></tr
><tr
id=sl_svn124_1497

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1498

><td class="source"> * &lt;p&gt;Parses the given XML string and returns the parsed document in a<br></td></tr
><tr
id=sl_svn124_1499

><td class="source"> * DOM data structure. This function will return an empty DOM node if<br></td></tr
><tr
id=sl_svn124_1500

><td class="source"> * XML parsing is not supported in this browser.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_1501

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1502

><td class="source"> * @param {String} str XML string.<br></td></tr
><tr
id=sl_svn124_1503

><td class="source"> * @return {Element|Document} DOM.<br></td></tr
><tr
id=sl_svn124_1504

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1505

><td class="source">geoXML3.xmlParse = function (str) {<br></td></tr
><tr
id=sl_svn124_1506

><td class="source">  if ((typeof ActiveXObject != &#39;undefined&#39;) || (&quot;ActiveXObject&quot; in window)) {<br></td></tr
><tr
id=sl_svn124_1507

><td class="source">    var doc = new ActiveXObject(&#39;Microsoft.XMLDOM&#39;);<br></td></tr
><tr
id=sl_svn124_1508

><td class="source">    doc.loadXML(str);<br></td></tr
><tr
id=sl_svn124_1509

><td class="source">    return doc;<br></td></tr
><tr
id=sl_svn124_1510

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1511

><td class="source"><br></td></tr
><tr
id=sl_svn124_1512

><td class="source">  if (typeof DOMParser != &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn124_1513

><td class="source">    return (new DOMParser()).parseFromString(str, &#39;text/xml&#39;);<br></td></tr
><tr
id=sl_svn124_1514

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1515

><td class="source"><br></td></tr
><tr
id=sl_svn124_1516

><td class="source">  return document.createElement(&#39;div&#39;, null);<br></td></tr
><tr
id=sl_svn124_1517

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1518

><td class="source"><br></td></tr
><tr
id=sl_svn124_1519

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1520

><td class="source"> * Checks for XML parse error.<br></td></tr
><tr
id=sl_svn124_1521

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1522

><td class="source"> * @param {xmlDOM} XML DOM.<br></td></tr
><tr
id=sl_svn124_1523

><td class="source"> * @return boolean.<br></td></tr
><tr
id=sl_svn124_1524

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1525

><td class="source">// from http://stackoverflow.com/questions/11563554/how-do-i-detect-xml-parsing-errors-when-using-javascripts-domparser-in-a-cross<br></td></tr
><tr
id=sl_svn124_1526

><td class="source">geoXML3.isParseError = function(parsedDocument) {<br></td></tr
><tr
id=sl_svn124_1527

><td class="source">    if ((typeof ActiveXObject != &#39;undefined&#39;) || (&quot;ActiveXObject&quot; in window))<br></td></tr
><tr
id=sl_svn124_1528

><td class="source">	return false;<br></td></tr
><tr
id=sl_svn124_1529

><td class="source">    // parser and parsererrorNS could be cached on startup for efficiency<br></td></tr
><tr
id=sl_svn124_1530

><td class="source">    var p = new DOMParser(),<br></td></tr
><tr
id=sl_svn124_1531

><td class="source">        errorneousParse = p.parseFromString(&#39;&lt;&#39;, &#39;text/xml&#39;),<br></td></tr
><tr
id=sl_svn124_1532

><td class="source">        parsererrorNS = errorneousParse.getElementsByTagName(&quot;parsererror&quot;)[0].namespaceURI;<br></td></tr
><tr
id=sl_svn124_1533

><td class="source"><br></td></tr
><tr
id=sl_svn124_1534

><td class="source">    if (parsererrorNS === &#39;http://www.w3.org/1999/xhtml&#39;) {<br></td></tr
><tr
id=sl_svn124_1535

><td class="source">        // In PhantomJS the parseerror element doesn&#39;t seem to have a special namespace, so we are just guessing here :(<br></td></tr
><tr
id=sl_svn124_1536

><td class="source">        return parsedDocument.getElementsByTagName(&quot;parsererror&quot;).length &gt; 0;<br></td></tr
><tr
id=sl_svn124_1537

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1538

><td class="source"><br></td></tr
><tr
id=sl_svn124_1539

><td class="source">    return parsedDocument.getElementsByTagNameNS(parsererrorNS, &#39;parsererror&#39;).length &gt; 0;<br></td></tr
><tr
id=sl_svn124_1540

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1541

><td class="source"><br></td></tr
><tr
id=sl_svn124_1542

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1543

><td class="source"> * Fetches a XML document.<br></td></tr
><tr
id=sl_svn124_1544

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1545

><td class="source"> * &lt;p&gt;Fetches/parses the given XML URL and passes the parsed document (in a<br></td></tr
><tr
id=sl_svn124_1546

><td class="source"> * DOM data structure) to the given callback.  Documents are downloaded<br></td></tr
><tr
id=sl_svn124_1547

><td class="source"> * and parsed asynchronously.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_1548

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1549

><td class="source"> * @param {String} url URL of XML document.  Must be uncompressed XML only.<br></td></tr
><tr
id=sl_svn124_1550

><td class="source"> * @param {Function(Document)} callback Function to call when the document is processed.<br></td></tr
><tr
id=sl_svn124_1551

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1552

><td class="source">geoXML3.fetchXML = function (url, callback) {<br></td></tr
><tr
id=sl_svn124_1553

><td class="source">  function timeoutHandler() { callback(); };<br></td></tr
><tr
id=sl_svn124_1554

><td class="source"><br></td></tr
><tr
id=sl_svn124_1555

><td class="source">  var xhrFetcher = new Object();<br></td></tr
><tr
id=sl_svn124_1556

><td class="source">  if      (!!geoXML3.fetchers.length) xhrFetcher = geoXML3.fetchers.pop();<br></td></tr
><tr
id=sl_svn124_1557

><td class="source">  else if (!!window.XMLHttpRequest)   xhrFetcher.fetcher = new window.XMLHttpRequest();  // Most browsers<br></td></tr
><tr
id=sl_svn124_1558

><td class="source">  else if (!!window.ActiveXObject) {                                                     // Some IE<br></td></tr
><tr
id=sl_svn124_1559

><td class="source">    // the many versions of IE&#39;s XML fetchers<br></td></tr
><tr
id=sl_svn124_1560

><td class="source">    var AXOs = [<br></td></tr
><tr
id=sl_svn124_1561

><td class="source">      &#39;MSXML2.XMLHTTP.6.0&#39;,<br></td></tr
><tr
id=sl_svn124_1562

><td class="source">      &#39;MSXML2.XMLHTTP.5.0&#39;,<br></td></tr
><tr
id=sl_svn124_1563

><td class="source">      &#39;MSXML2.XMLHTTP.4.0&#39;,<br></td></tr
><tr
id=sl_svn124_1564

><td class="source">      &#39;MSXML2.XMLHTTP.3.0&#39;,<br></td></tr
><tr
id=sl_svn124_1565

><td class="source">      &#39;MSXML2.XMLHTTP&#39;,<br></td></tr
><tr
id=sl_svn124_1566

><td class="source">      &#39;Microsoft.XMLHTTP&#39;,<br></td></tr
><tr
id=sl_svn124_1567

><td class="source">      &#39;MSXML.XMLHTTP&#39;<br></td></tr
><tr
id=sl_svn124_1568

><td class="source">    ];<br></td></tr
><tr
id=sl_svn124_1569

><td class="source">    for (var i = 0; i &lt; AXOs.length; i++) {<br></td></tr
><tr
id=sl_svn124_1570

><td class="source">      try      { xhrFetcher.fetcher = new ActiveXObject(AXOs[i]); break; }<br></td></tr
><tr
id=sl_svn124_1571

><td class="source">      catch(e) { continue; }<br></td></tr
><tr
id=sl_svn124_1572

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1573

><td class="source">    if (!xhrFetcher.fetcher) {<br></td></tr
><tr
id=sl_svn124_1574

><td class="source">      geoXML3.log(&#39;Unable to create XHR object&#39;);<br></td></tr
><tr
id=sl_svn124_1575

><td class="source">      callback(null);<br></td></tr
><tr
id=sl_svn124_1576

><td class="source">      return null;<br></td></tr
><tr
id=sl_svn124_1577

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1578

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1579

><td class="source"><br></td></tr
><tr
id=sl_svn124_1580

><td class="source">  xhrFetcher.fetcher.open(&#39;GET&#39;, url, true);<br></td></tr
><tr
id=sl_svn124_1581

><td class="source">  if (!!xhrFetcher.fetcher.overrideMimeType) xhrFetcher.fetcher.overrideMimeType(&#39;text/xml&#39;);<br></td></tr
><tr
id=sl_svn124_1582

><td class="source">  xhrFetcher.fetcher.onreadystatechange = function () {<br></td></tr
><tr
id=sl_svn124_1583

><td class="source">    if (xhrFetcher.fetcher.readyState === 4) {<br></td></tr
><tr
id=sl_svn124_1584

><td class="source">      // Retrieval complete<br></td></tr
><tr
id=sl_svn124_1585

><td class="source">      if (!!xhrFetcher.xhrtimeout) clearTimeout(xhrFetcher.xhrtimeout);<br></td></tr
><tr
id=sl_svn124_1586

><td class="source">      if (xhrFetcher.fetcher.status &gt;= 400) {<br></td></tr
><tr
id=sl_svn124_1587

><td class="source">        geoXML3.log(&#39;HTTP error &#39; + xhrFetcher.fetcher.status + &#39; retrieving &#39; + url);<br></td></tr
><tr
id=sl_svn124_1588

><td class="source">        callback();<br></td></tr
><tr
id=sl_svn124_1589

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1590

><td class="source">      // Returned successfully<br></td></tr
><tr
id=sl_svn124_1591

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_1592

><td class="source">       if (xhrFetcher.fetcher.responseXML) {<br></td></tr
><tr
id=sl_svn124_1593

><td class="source">        // Sometimes IE will get the data, but won&#39;t bother loading it as an XML doc<br></td></tr
><tr
id=sl_svn124_1594

><td class="source">        var xml = xhrFetcher.fetcher.responseXML;<br></td></tr
><tr
id=sl_svn124_1595

><td class="source">        if (xml &amp;&amp; !xml.documentElement &amp;&amp; !xml.ownerElement) {<br></td></tr
><tr
id=sl_svn124_1596

><td class="source">         xml.loadXML(xhrFetcher.fetcher.responseText);<br></td></tr
><tr
id=sl_svn124_1597

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1598

><td class="source">       } else {// handle valid xml sent with wrong MIME type <br></td></tr
><tr
id=sl_svn124_1599

><td class="source">        xml=geoXML3.xmlParse(xhrFetcher.fetcher.responseText);<br></td></tr
><tr
id=sl_svn124_1600

><td class="source">       }<br></td></tr
><tr
id=sl_svn124_1601

><td class="source">       // handle parse errors<br></td></tr
><tr
id=sl_svn124_1602

><td class="source">       if (xml.parseError &amp;&amp; (xml.parseError.errorCode != 0)) {<br></td></tr
><tr
id=sl_svn124_1603

><td class="source">        geoXML3.log(&quot;XML parse error &quot;+xml.parseError.errorCode+&quot;, &quot;+xml.parseError.reason+&quot;\nLine:&quot;+xml.parseError.line+&quot;, Position:&quot;+xml.parseError.linepos+&quot;, srcText:&quot;+xml.parseError.srcText);<br></td></tr
><tr
id=sl_svn124_1604

><td class="source">        xml = &quot;failed parse&quot;<br></td></tr
><tr
id=sl_svn124_1605

><td class="source">       } else if (geoXML3.isParseError(xml)) {<br></td></tr
><tr
id=sl_svn124_1606

><td class="source">        geoXML3.log(&quot;XML parse error&quot;);<br></td></tr
><tr
id=sl_svn124_1607

><td class="source">        xml = &quot;failed parse&quot;<br></td></tr
><tr
id=sl_svn124_1608

><td class="source">       }<br></td></tr
><tr
id=sl_svn124_1609

><td class="source">       callback(xml);          <br></td></tr
><tr
id=sl_svn124_1610

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1611

><td class="source">      // We&#39;re done with this fetcher object<br></td></tr
><tr
id=sl_svn124_1612

><td class="source">      geoXML3.fetchers.push(xhrFetcher);<br></td></tr
><tr
id=sl_svn124_1613

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1614

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_1615

><td class="source"><br></td></tr
><tr
id=sl_svn124_1616

><td class="source">  xhrFetcher.xhrtimeout = setTimeout(timeoutHandler, 60000);<br></td></tr
><tr
id=sl_svn124_1617

><td class="source">  xhrFetcher.fetcher.send(null);<br></td></tr
><tr
id=sl_svn124_1618

><td class="source">  return null;<br></td></tr
><tr
id=sl_svn124_1619

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1620

><td class="source"><br></td></tr
><tr
id=sl_svn124_1621

><td class="source">var IEversion = function() {<br></td></tr
><tr
id=sl_svn124_1622

><td class="source">  // http://msdn.microsoft.com/workshop/author/dhtml/overview/browserdetection.asp<br></td></tr
><tr
id=sl_svn124_1623

><td class="source">  // Returns the version of Internet Explorer or a -1<br></td></tr
><tr
id=sl_svn124_1624

><td class="source">  // (indicating the use of another browser).<br></td></tr
><tr
id=sl_svn124_1625

><td class="source">  var rv = -1; // Return value assumes failure<br></td></tr
><tr
id=sl_svn124_1626

><td class="source">  if (navigator.appName == &#39;Microsoft Internet Explorer&#39;) {<br></td></tr
><tr
id=sl_svn124_1627

><td class="source">    var ua = navigator.userAgent;<br></td></tr
><tr
id=sl_svn124_1628

><td class="source">    var re = new RegExp(&quot;MSIE ([0-9]{1,}[\.0-9]{0,})&quot;);<br></td></tr
><tr
id=sl_svn124_1629

><td class="source">    if (re.exec(ua) != null) {<br></td></tr
><tr
id=sl_svn124_1630

><td class="source">      rv = parseFloat( RegExp.$1 );<br></td></tr
><tr
id=sl_svn124_1631

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1632

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1633

><td class="source">  return rv;<br></td></tr
><tr
id=sl_svn124_1634

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1635

><td class="source"><br></td></tr
><tr
id=sl_svn124_1636

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1637

><td class="source"> * Fetches a KMZ document.<br></td></tr
><tr
id=sl_svn124_1638

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1639

><td class="source"> * &lt;p&gt;Fetches/parses the given ZIP URL, parses each image file, and passes<br></td></tr
><tr
id=sl_svn124_1640

><td class="source"> * the parsed KML document to the given callback.  Documents are downloaded<br></td></tr
><tr
id=sl_svn124_1641

><td class="source"> * and parsed asynchronously, though the KML file is always passed after the<br></td></tr
><tr
id=sl_svn124_1642

><td class="source"> * images have been processed, in case the callback requires the image data.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_1643

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1644

><td class="source"> * @requires ZipFile.complete.js<br></td></tr
><tr
id=sl_svn124_1645

><td class="source"> * @param {String} url URL of KMZ document.  Must be a valid KMZ/ZIP archive.<br></td></tr
><tr
id=sl_svn124_1646

><td class="source"> * @param {Function(Document)} callback Function to call when the document is processed.<br></td></tr
><tr
id=sl_svn124_1647

><td class="source"> * @param {geoXML3.parser} parser A geoXML3.parser object.  This is used to populate the KMZ image data.<br></td></tr
><tr
id=sl_svn124_1648

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1649

><td class="source"> * @see http://code.google.com/apis/kml/documentation/kmzarchives.html<br></td></tr
><tr
id=sl_svn124_1650

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1651

><td class="source">geoXML3.fetchZIP = function (url, callback, parser) {<br></td></tr
><tr
id=sl_svn124_1652

><td class="source">  // Just need a single &#39;new&#39; declaration with a really long function...<br></td></tr
><tr
id=sl_svn124_1653

><td class="source">  var zipFile = new ZipFile(url, function (zip) {<br></td></tr
><tr
id=sl_svn124_1654

><td class="source">    // Retrieval complete<br></td></tr
><tr
id=sl_svn124_1655

><td class="source"><br></td></tr
><tr
id=sl_svn124_1656

><td class="source">    // Check for ERRORs in zip.status<br></td></tr
><tr
id=sl_svn124_1657

><td class="source">    for (var i = 0; i &lt; zip.status.length; i++) {<br></td></tr
><tr
id=sl_svn124_1658

><td class="source">      var msg = zip.status[i];<br></td></tr
><tr
id=sl_svn124_1659

><td class="source">      if      (msg.indexOf(&quot;ERROR&quot;) == 0) {<br></td></tr
><tr
id=sl_svn124_1660

><td class="source">        geoXML3.log(&#39;HTTP/ZIP error retrieving &#39; + url + &#39;: &#39; + msg);<br></td></tr
><tr
id=sl_svn124_1661

><td class="source">        callback();<br></td></tr
><tr
id=sl_svn124_1662

><td class="source">        return;<br></td></tr
><tr
id=sl_svn124_1663

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1664

><td class="source">      else if (msg.indexOf(&quot;WARNING&quot;) == 0) {  // non-fatal, but still might be useful<br></td></tr
><tr
id=sl_svn124_1665

><td class="source">        geoXML3.log(&#39;HTTP/ZIP warning retrieving &#39; + url + &#39;: &#39; + msg);<br></td></tr
><tr
id=sl_svn124_1666

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1667

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1668

><td class="source"><br></td></tr
><tr
id=sl_svn124_1669

><td class="source">    // Make sure KMZ structure is according to spec (with a single KML file in the root dir)<br></td></tr
><tr
id=sl_svn124_1670

><td class="source">    var KMLCount = 0;<br></td></tr
><tr
id=sl_svn124_1671

><td class="source">    var KML;<br></td></tr
><tr
id=sl_svn124_1672

><td class="source">    for (var i = 0; i &lt; zip.entries.length; i++) {<br></td></tr
><tr
id=sl_svn124_1673

><td class="source">      var name = zip.entries[i].name;<br></td></tr
><tr
id=sl_svn124_1674

><td class="source">      if (!/\.kml$/.test(name)) continue;<br></td></tr
><tr
id=sl_svn124_1675

><td class="source"><br></td></tr
><tr
id=sl_svn124_1676

><td class="source">      KMLCount++;<br></td></tr
><tr
id=sl_svn124_1677

><td class="source">      if (KMLCount == 1) KML = i;<br></td></tr
><tr
id=sl_svn124_1678

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_1679

><td class="source">        geoXML3.log(&#39;KMZ warning retrieving &#39; + url + &#39;: found extra KML &quot;&#39; + name + &#39;&quot; in KMZ; discarding...&#39;);<br></td></tr
><tr
id=sl_svn124_1680

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1681

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1682

><td class="source"><br></td></tr
><tr
id=sl_svn124_1683

><td class="source">    // Returned successfully, but still needs extracting<br></td></tr
><tr
id=sl_svn124_1684

><td class="source">    var baseUrl = cleanURL(defileURL(url), url) + &#39;/&#39;;<br></td></tr
><tr
id=sl_svn124_1685

><td class="source">    var kmlProcessing = {  // this is an object just so it gets passed properly<br></td></tr
><tr
id=sl_svn124_1686

><td class="source">      timer: null,<br></td></tr
><tr
id=sl_svn124_1687

><td class="source">      extractLeft: 0,<br></td></tr
><tr
id=sl_svn124_1688

><td class="source">      timerCalls: 0<br></td></tr
><tr
id=sl_svn124_1689

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_1690

><td class="source">    var extractCb = function(entry, entryContent) {<br></td></tr
><tr
id=sl_svn124_1691

><td class="source">      var mdUrl = cleanURL(baseUrl, entry.name);<br></td></tr
><tr
id=sl_svn124_1692

><td class="source">      var ext = entry.name.substring(entry.name.lastIndexOf(&quot;.&quot;) + 1).toLowerCase();<br></td></tr
><tr
id=sl_svn124_1693

><td class="source">      kmlProcessing.extractLeft--;<br></td></tr
><tr
id=sl_svn124_1694

><td class="source"><br></td></tr
><tr
id=sl_svn124_1695

><td class="source">      if ((typeof entryContent.description == &quot;string&quot;) &amp;&amp; (entryContent.name == &quot;Error&quot;)) {<br></td></tr
><tr
id=sl_svn124_1696

><td class="source">        geoXML3.log(&#39;KMZ error extracting &#39; + mdUrl + &#39;: &#39; + entryContent.description);<br></td></tr
><tr
id=sl_svn124_1697

><td class="source">        callback();<br></td></tr
><tr
id=sl_svn124_1698

><td class="source">        return;<br></td></tr
><tr
id=sl_svn124_1699

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1700

><td class="source"><br></td></tr
><tr
id=sl_svn124_1701

><td class="source">      // MIME types that can be used in KML<br></td></tr
><tr
id=sl_svn124_1702

><td class="source">      var mime;<br></td></tr
><tr
id=sl_svn124_1703

><td class="source">      if (ext === &#39;jpg&#39;) ext = &#39;jpeg&#39;;<br></td></tr
><tr
id=sl_svn124_1704

><td class="source">      if (/^(gif|jpeg|png)$/.test(ext)) mime = &#39;image/&#39; + ext;<br></td></tr
><tr
id=sl_svn124_1705

><td class="source">      else if (ext === &#39;mp3&#39;)           mime = &#39;audio/mpeg&#39;;<br></td></tr
><tr
id=sl_svn124_1706

><td class="source">      else if (ext === &#39;m4a&#39;)           mime = &#39;audio/mp4&#39;;<br></td></tr
><tr
id=sl_svn124_1707

><td class="source">      else if (ext === &#39;m4a&#39;)           mime = &#39;audio/MP4-LATM&#39;;<br></td></tr
><tr
id=sl_svn124_1708

><td class="source">      else                              mime = &#39;application/octet-stream&#39;;<br></td></tr
><tr
id=sl_svn124_1709

><td class="source"><br></td></tr
><tr
id=sl_svn124_1710

><td class="source">      parser.kmzMetaData[mdUrl] = {};<br></td></tr
><tr
id=sl_svn124_1711

><td class="source">      parser.kmzMetaData[mdUrl].entry = entry;<br></td></tr
><tr
id=sl_svn124_1712

><td class="source">      // data:image/gif;base64,R0lGODlhEAAOALMA...<br></td></tr
><tr
id=sl_svn124_1713

><td class="source">      parser.kmzMetaData[mdUrl].dataUrl = &#39;data:&#39; + mime + &#39;;base64,&#39; + base64Encode(entryContent);<br></td></tr
><tr
id=sl_svn124_1714

><td class="source">      // IE cannot handle GET requests beyond 2071 characters, even if it&#39;s an inline image<br></td></tr
><tr
id=sl_svn124_1715

><td class="source">	if (/msie/i.test(navigator.userAgent) &amp;&amp; !/opera/i.test(navigator.userAgent))<br></td></tr
><tr
id=sl_svn124_1716

><td class="source">        { <br></td></tr
><tr
id=sl_svn124_1717

><td class="source">            if (((IEversion() &lt; 8.0) &amp;&amp;<br></td></tr
><tr
id=sl_svn124_1718

><td class="source">                 (parser.kmzMetaData[mdUrl].dataUrl.length &gt; 2071)) ||<br></td></tr
><tr
id=sl_svn124_1719

><td class="source">                ((IEversion &lt; 9.0) &amp;&amp; <br></td></tr
><tr
id=sl_svn124_1720

><td class="source">                 (parser.kmzMetaData[mdUrl].dataUrl.length &gt; 32767))) {<br></td></tr
><tr
id=sl_svn124_1721

><td class="source">             parser.kmzMetaData[mdUrl].dataUrl =<br></td></tr
><tr
id=sl_svn124_1722

><td class="source">             // this is a simple IE icon; to hint at the problem...<br></td></tr
><tr
id=sl_svn124_1723

><td class="source">             &#39;data:image/gif;base64,R0lGODlhDwAQAOMPADBPvSpQ1Dpoyz1p6FhwvU2A6ECP63CM04CWxYCk+V6x+UK++Jao3rvC3fj7+v///yH5BAEKAA8ALAAAAAAPABAAAASC8Mk5mwCAUMlWwcLRHEelLA&#39; +<br></td></tr
><tr
id=sl_svn124_1724

><td class="source">             &#39;oGDMgzSsiyGCAhCETDPMh5XQCBwYBrNBIKWmg0MCQHj8MJU5IoroYCY6AAAgrDIbbQDGIK6DR5UPhlNo0JAlSUNAiDgH7eNAxEDWAKCQM2AAFheVxYAA0AIkFOJ1gBcQQaUQKKA5w7LpcEBwkJaKMUEQA7&#39;;<br></td></tr
><tr
id=sl_svn124_1725

><td class="source">            } <br></td></tr
><tr
id=sl_svn124_1726

><td class="source">       }<br></td></tr
><tr
id=sl_svn124_1727

><td class="source">       parser.kmzMetaData[internalSrc(entry.name)]=parser.kmzMetaData[mdUrl];	<br></td></tr
><tr
id=sl_svn124_1728

><td class="source"><br></td></tr
><tr
id=sl_svn124_1729

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_1730

><td class="source">    var kmlExtractCb = function(entry, entryContent) {<br></td></tr
><tr
id=sl_svn124_1731

><td class="source">      if ((typeof entryContent.description == &quot;string&quot;) &amp;&amp; (entryContent.name == &quot;Error&quot;)) {<br></td></tr
><tr
id=sl_svn124_1732

><td class="source">        geoXML3.log(&#39;KMZ error extracting &#39; + mdUrl + &#39;: &#39; + entryContent.description);<br></td></tr
><tr
id=sl_svn124_1733

><td class="source">        callback();<br></td></tr
><tr
id=sl_svn124_1734

><td class="source">        return;<br></td></tr
><tr
id=sl_svn124_1735

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1736

><td class="source"><br></td></tr
><tr
id=sl_svn124_1737

><td class="source">      // check to see if the KML is the last file extracted<br></td></tr
><tr
id=sl_svn124_1738

><td class="source">      clearTimeout(kmlProcessing.timer);<br></td></tr
><tr
id=sl_svn124_1739

><td class="source">      if (kmlProcessing.extractLeft &lt;= 1) {<br></td></tr
><tr
id=sl_svn124_1740

><td class="source">        kmlProcessing.extractLeft--;<br></td></tr
><tr
id=sl_svn124_1741

><td class="source">        callback(geoXML3.xmlParse(entryContent));<br></td></tr
><tr
id=sl_svn124_1742

><td class="source">        return;<br></td></tr
><tr
id=sl_svn124_1743

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1744

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_1745

><td class="source">        // KML file isn&#39;t last yet; it may need to use those files, so wait a bit (100ms)<br></td></tr
><tr
id=sl_svn124_1746

><td class="source">        kmlProcessing.timerCalls++;<br></td></tr
><tr
id=sl_svn124_1747

><td class="source">        if (kmlProcessing.timerCalls &lt; 100) {<br></td></tr
><tr
id=sl_svn124_1748

><td class="source">          kmlProcessing.timer = setTimeout(function() { kmlExtractCb(entry, entryContent); }, 100);<br></td></tr
><tr
id=sl_svn124_1749

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1750

><td class="source">        else {<br></td></tr
><tr
id=sl_svn124_1751

><td class="source">          geoXML3.log(&#39;KMZ warning extracting &#39; + url + &#39;: entire ZIP has not been extracted after 10 seconds; running through KML, anyway...&#39;);<br></td></tr
><tr
id=sl_svn124_1752

><td class="source">          kmlProcessing.extractLeft--;<br></td></tr
><tr
id=sl_svn124_1753

><td class="source">          callback(geoXML3.xmlParse(entryContent));<br></td></tr
><tr
id=sl_svn124_1754

><td class="source">        }<br></td></tr
><tr
id=sl_svn124_1755

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1756

><td class="source">      return;<br></td></tr
><tr
id=sl_svn124_1757

><td class="source">    };<br></td></tr
><tr
id=sl_svn124_1758

><td class="source">    for (var i = 0; i &lt; zip.entries.length; i++) {<br></td></tr
><tr
id=sl_svn124_1759

><td class="source">      var entry = zip.entries[i];<br></td></tr
><tr
id=sl_svn124_1760

><td class="source">      var ext = entry.name.substring(entry.name.lastIndexOf(&quot;.&quot;) + 1).toLowerCase();<br></td></tr
><tr
id=sl_svn124_1761

><td class="source">      if (!/^(gif|jpe?g|png|kml)$/.test(ext)) continue;  // not going to bother to extract files we don&#39;t support<br></td></tr
><tr
id=sl_svn124_1762

><td class="source">      if (ext === &quot;kml&quot; &amp;&amp; i != KML)          continue;  // extra KMLs get discarded<br></td></tr
><tr
id=sl_svn124_1763

><td class="source">      if (!parser &amp;&amp; ext != &quot;kml&quot;)            continue;  // cannot store images without a parser object<br></td></tr
><tr
id=sl_svn124_1764

><td class="source"><br></td></tr
><tr
id=sl_svn124_1765

><td class="source">      // extract asynchronously<br></td></tr
><tr
id=sl_svn124_1766

><td class="source">      kmlProcessing.extractLeft++;<br></td></tr
><tr
id=sl_svn124_1767

><td class="source">      if (ext === &quot;kml&quot;) entry.extract(kmlExtractCb);<br></td></tr
><tr
id=sl_svn124_1768

><td class="source">      else               entry.extract(extractCb);<br></td></tr
><tr
id=sl_svn124_1769

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1770

><td class="source">  });<br></td></tr
><tr
id=sl_svn124_1771

><td class="source"><br></td></tr
><tr
id=sl_svn124_1772

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1773

><td class="source"><br></td></tr
><tr
id=sl_svn124_1774

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1775

><td class="source"> * Extract the text value of a DOM node, with leading and trailing whitespace trimmed.<br></td></tr
><tr
id=sl_svn124_1776

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1777

><td class="source"> * @param {Element} node XML node/element.<br></td></tr
><tr
id=sl_svn124_1778

><td class="source"> * @param {Any} delVal Default value if the node doesn&#39;t exist.<br></td></tr
><tr
id=sl_svn124_1779

><td class="source"> * @return {String|Null}<br></td></tr
><tr
id=sl_svn124_1780

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1781

><td class="source">geoXML3.nodeValue = function(node, defVal) {<br></td></tr
><tr
id=sl_svn124_1782

><td class="source">  var retStr=&quot;&quot;;<br></td></tr
><tr
id=sl_svn124_1783

><td class="source">  if (!node) {<br></td></tr
><tr
id=sl_svn124_1784

><td class="source">    return (typeof defVal === &#39;undefined&#39; || defVal === null) ? null : defVal;<br></td></tr
><tr
id=sl_svn124_1785

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1786

><td class="source">   if(node.nodeType==3||node.nodeType==4||node.nodeType==2){<br></td></tr
><tr
id=sl_svn124_1787

><td class="source">      retStr+=node.nodeValue;<br></td></tr
><tr
id=sl_svn124_1788

><td class="source">   }else if(node.nodeType==1||node.nodeType==9||node.nodeType==11){<br></td></tr
><tr
id=sl_svn124_1789

><td class="source">      for(var i=0;i&lt;node.childNodes.length;++i){<br></td></tr
><tr
id=sl_svn124_1790

><td class="source">         retStr+=arguments.callee(node.childNodes[i]);<br></td></tr
><tr
id=sl_svn124_1791

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1792

><td class="source">   }<br></td></tr
><tr
id=sl_svn124_1793

><td class="source">   return retStr;<br></td></tr
><tr
id=sl_svn124_1794

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1795

><td class="source"><br></td></tr
><tr
id=sl_svn124_1796

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1797

><td class="source"> * Loosely translate various values of a DOM node to a boolean.<br></td></tr
><tr
id=sl_svn124_1798

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1799

><td class="source"> * @param {Element} node XML node/element.<br></td></tr
><tr
id=sl_svn124_1800

><td class="source"> * @param {Boolean} delVal Default value if the node doesn&#39;t exist.<br></td></tr
><tr
id=sl_svn124_1801

><td class="source"> * @return {Boolean|Null}<br></td></tr
><tr
id=sl_svn124_1802

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1803

><td class="source">geoXML3.getBooleanValue = function(node, defVal) {<br></td></tr
><tr
id=sl_svn124_1804

><td class="source">  var nodeContents = geoXML3.nodeValue(node);<br></td></tr
><tr
id=sl_svn124_1805

><td class="source">  if (nodeContents === null) return defVal || false;<br></td></tr
><tr
id=sl_svn124_1806

><td class="source">  nodeContents = parseInt(nodeContents);<br></td></tr
><tr
id=sl_svn124_1807

><td class="source">  if (isNaN(nodeContents)) return true;<br></td></tr
><tr
id=sl_svn124_1808

><td class="source">  if (nodeContents == 0) return false;<br></td></tr
><tr
id=sl_svn124_1809

><td class="source">  else return true;<br></td></tr
><tr
id=sl_svn124_1810

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1811

><td class="source"><br></td></tr
><tr
id=sl_svn124_1812

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1813

><td class="source"> * Browser-normalized version of getElementsByTagNameNS.<br></td></tr
><tr
id=sl_svn124_1814

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1815

><td class="source"> * &lt;p&gt;Required because IE8 doesn&#39;t define it.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_1816

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1817

><td class="source"> * @param {Element|Document} node DOM object.<br></td></tr
><tr
id=sl_svn124_1818

><td class="source"> * @param {String} namespace Full namespace URL to search against.<br></td></tr
><tr
id=sl_svn124_1819

><td class="source"> * @param {String} tagname XML local tag name.<br></td></tr
><tr
id=sl_svn124_1820

><td class="source"> * @return {Array of Elements}<br></td></tr
><tr
id=sl_svn124_1821

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1822

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1823

><td class="source">geoXML3.getElementsByTagNameNS = function(node, namespace, tagname) {<br></td></tr
><tr
id=sl_svn124_1824

><td class="source">  if (node &amp;&amp; typeof node.getElementsByTagNameNS != &#39;undefined&#39;) return node.getElementsByTagNameNS(namespace, tagname);<br></td></tr
><tr
id=sl_svn124_1825

><td class="source">  if (!node) return [];<br></td></tr
><tr
id=sl_svn124_1826

><td class="source"><br></td></tr
><tr
id=sl_svn124_1827

><td class="source">  var root = node.documentElement || node.ownerDocument &amp;&amp; node.ownerDocument.documentElement;<br></td></tr
><tr
id=sl_svn124_1828

><td class="source">  if (!root || !root.attributes) return [];<br></td></tr
><tr
id=sl_svn124_1829

><td class="source"><br></td></tr
><tr
id=sl_svn124_1830

><td class="source">  // search for namespace prefix<br></td></tr
><tr
id=sl_svn124_1831

><td class="source">  for (var i = 0; i &lt; root.attributes.length; i++) {<br></td></tr
><tr
id=sl_svn124_1832

><td class="source">    var attr = root.attributes[i];<br></td></tr
><tr
id=sl_svn124_1833

><td class="source">    if      (attr.prefix   === &#39;xmlns&#39; &amp;&amp; attr.nodeValue === namespace) return node.getElementsByTagName(attr.baseName + &#39;:&#39; + tagname);<br></td></tr
><tr
id=sl_svn124_1834

><td class="source">    else if (attr.nodeName === &#39;xmlns&#39; &amp;&amp; attr.nodeValue === namespace) {<br></td></tr
><tr
id=sl_svn124_1835

><td class="source">      // default namespace<br></td></tr
><tr
id=sl_svn124_1836

><td class="source">      if (typeof node.selectNodes != &#39;undefined&#39;) {<br></td></tr
><tr
id=sl_svn124_1837

><td class="source">        // Newer IEs have the SelectionNamespace property that can be used with selectNodes<br></td></tr
><tr
id=sl_svn124_1838

><td class="source">        if (!root.ownerDocument.getProperty(&#39;SelectionNamespaces&#39;))<br></td></tr
><tr
id=sl_svn124_1839

><td class="source">          root.ownerDocument.setProperty(&#39;SelectionNamespaces&#39;, &quot;xmlns:defaultNS=&#39;&quot; + namespace + &quot;&#39;&quot;);<br></td></tr
><tr
id=sl_svn124_1840

><td class="source">        return node.selectNodes(&#39;.//defaultNS:&#39; + tagname);<br></td></tr
><tr
id=sl_svn124_1841

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1842

><td class="source">      else {<br></td></tr
><tr
id=sl_svn124_1843

><td class="source">        // Otherwise, you can still try to tack on the &#39;xmlns&#39; attribute to root<br></td></tr
><tr
id=sl_svn124_1844

><td class="source">        root.setAttribute(&#39;xmlns:defaultNS&#39;, namespace);<br></td></tr
><tr
id=sl_svn124_1845

><td class="source">        return node.getElementsByTagName(&#39;defaultNS:&#39; + tagname);<br></td></tr
><tr
id=sl_svn124_1846

><td class="source">      }<br></td></tr
><tr
id=sl_svn124_1847

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1848

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1849

><td class="source">  return geoXML3.getElementsByTagName(node, tagname);  // try the unqualified version<br></td></tr
><tr
id=sl_svn124_1850

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1851

><td class="source"><br></td></tr
><tr
id=sl_svn124_1852

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1853

><td class="source"> * Browser-normalized version of getElementsByTagName.<br></td></tr
><tr
id=sl_svn124_1854

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1855

><td class="source"> * &lt;p&gt;Required because MSXML 6.0 will treat this function as a NS-qualified function,<br></td></tr
><tr
id=sl_svn124_1856

><td class="source"> * despite the missing NS parameter.&lt;/p&gt;<br></td></tr
><tr
id=sl_svn124_1857

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1858

><td class="source"> * @param {Element|Document} node DOM object.<br></td></tr
><tr
id=sl_svn124_1859

><td class="source"> * @param {String} tagname XML local tag name.<br></td></tr
><tr
id=sl_svn124_1860

><td class="source"> * @return {Array of Elements}<br></td></tr
><tr
id=sl_svn124_1861

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1862

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1863

><td class="source">geoXML3.getElementsByTagName = function(node, tagname) {<br></td></tr
><tr
id=sl_svn124_1864

><td class="source">  if (node &amp;&amp; typeof node.getElementsByTagNameNS != &#39;undefined&#39;) return node.getElementsByTagName(tagname);  // if it has both functions, it should be accurate<br></td></tr
><tr
id=sl_svn124_1865

><td class="source">//  if (node &amp;&amp; typeof node.selectNodes != &#39;undefined&#39;)            return node.selectNodes(&quot;.//*[local-name()=&#39;&quot; + tagname + &quot;&#39;]&quot;);<br></td></tr
><tr
id=sl_svn124_1866

><td class="source">  return node.getElementsByTagName(tagname);  // hope for the best...<br></td></tr
><tr
id=sl_svn124_1867

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1868

><td class="source"><br></td></tr
><tr
id=sl_svn124_1869

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1870

><td class="source"> * Turn a directory + relative URL into an absolute one.<br></td></tr
><tr
id=sl_svn124_1871

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1872

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn124_1873

><td class="source"> * @param {String} d Base directory.<br></td></tr
><tr
id=sl_svn124_1874

><td class="source"> * @param {String} s Relative URL.<br></td></tr
><tr
id=sl_svn124_1875

><td class="source"> * @return {String} Absolute URL.<br></td></tr
><tr
id=sl_svn124_1876

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1877

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1878

><td class="source">var toAbsURL = function (d, s) {<br></td></tr
><tr
id=sl_svn124_1879

><td class="source">  var p, f, i;<br></td></tr
><tr
id=sl_svn124_1880

><td class="source">  var h = location.protocol + &quot;://&quot; + location.host;<br></td></tr
><tr
id=sl_svn124_1881

><td class="source"><br></td></tr
><tr
id=sl_svn124_1882

><td class="source">  if (!s.length)           return &#39;&#39;;<br></td></tr
><tr
id=sl_svn124_1883

><td class="source">  if (/^\w+:/.test(s))     return s;<br></td></tr
><tr
id=sl_svn124_1884

><td class="source">  if (s.indexOf(&#39;/&#39;) == 0) return h + s;<br></td></tr
><tr
id=sl_svn124_1885

><td class="source"><br></td></tr
><tr
id=sl_svn124_1886

><td class="source">  p = d.replace(/\/[^\/]*$/, &#39;&#39;);<br></td></tr
><tr
id=sl_svn124_1887

><td class="source">  f = s.match(/\.\.\//g);<br></td></tr
><tr
id=sl_svn124_1888

><td class="source">  if (f) {<br></td></tr
><tr
id=sl_svn124_1889

><td class="source">    s = s.substring(f.length * 3);<br></td></tr
><tr
id=sl_svn124_1890

><td class="source">    for (i = f.length; i--;) { p = p.substring(0, p.lastIndexOf(&#39;/&#39;)); }<br></td></tr
><tr
id=sl_svn124_1891

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1892

><td class="source"><br></td></tr
><tr
id=sl_svn124_1893

><td class="source">  return h + p + &#39;/&#39; + s;<br></td></tr
><tr
id=sl_svn124_1894

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1895

><td class="source"><br></td></tr
><tr
id=sl_svn124_1896

><td class="source">var internalSrc = function(src) {<br></td></tr
><tr
id=sl_svn124_1897

><td class="source">  //this gets the full url<br></td></tr
><tr
id=sl_svn124_1898

><td class="source">  var url = document.location.href;<br></td></tr
><tr
id=sl_svn124_1899

><td class="source">  //this removes everything after the last slash in the path<br></td></tr
><tr
id=sl_svn124_1900

><td class="source">  url = url.substring(0,url.lastIndexOf(&quot;/&quot;) + 1);<br></td></tr
><tr
id=sl_svn124_1901

><td class="source">  var internalPath= url+src;<br></td></tr
><tr
id=sl_svn124_1902

><td class="source">  return internalPath;<br></td></tr
><tr
id=sl_svn124_1903

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1904

><td class="source"><br></td></tr
><tr
id=sl_svn124_1905

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1906

><td class="source"> * Remove current host from URL<br></td></tr
><tr
id=sl_svn124_1907

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1908

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn124_1909

><td class="source"> * @param {String} s Absolute or relative URL.<br></td></tr
><tr
id=sl_svn124_1910

><td class="source"> * @return {String} Root-based relative URL.<br></td></tr
><tr
id=sl_svn124_1911

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1912

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1913

><td class="source">var dehostURL = function (s) {<br></td></tr
><tr
id=sl_svn124_1914

><td class="source">  var h = location.protocol + &quot;://&quot; + location.host;<br></td></tr
><tr
id=sl_svn124_1915

><td class="source">  h = h.replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g, &#39;\\$1&#39;);  // quotemeta<br></td></tr
><tr
id=sl_svn124_1916

><td class="source">  return s.replace(new RegExp(&#39;^&#39; + h, &#39;i&#39;), &#39;&#39;);<br></td></tr
><tr
id=sl_svn124_1917

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1918

><td class="source"><br></td></tr
><tr
id=sl_svn124_1919

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1920

><td class="source"> * Removes all query strings, #IDs, &#39;../&#39; references, and<br></td></tr
><tr
id=sl_svn124_1921

><td class="source"> * hosts from a URL.<br></td></tr
><tr
id=sl_svn124_1922

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1923

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn124_1924

><td class="source"> * @param {String} d Base directory.<br></td></tr
><tr
id=sl_svn124_1925

><td class="source"> * @param {String} s Absolute or relative URL.<br></td></tr
><tr
id=sl_svn124_1926

><td class="source"> * @return {String} Root-based relative URL.<br></td></tr
><tr
id=sl_svn124_1927

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1928

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1929

><td class="source">var cleanURL  = function (d, s) { return dehostURL(toAbsURL(d ? d.split(&#39;#&#39;)[0].split(&#39;?&#39;)[0] : defileURL(location.pathname), s ? s.split(&#39;#&#39;)[0].split(&#39;?&#39;)[0] : &#39;&#39;)); }<br></td></tr
><tr
id=sl_svn124_1930

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1931

><td class="source"> * Remove filename from URL<br></td></tr
><tr
id=sl_svn124_1932

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1933

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn124_1934

><td class="source"> * @param {String} s Relative URL.<br></td></tr
><tr
id=sl_svn124_1935

><td class="source"> * @return {String} Base directory.<br></td></tr
><tr
id=sl_svn124_1936

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1937

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1938

><td class="source">var defileURL = function (s)    { return s ? s.substr(0, s.lastIndexOf(&#39;/&#39;) + 1) : &#39;/&#39;; }<br></td></tr
><tr
id=sl_svn124_1939

><td class="source"><br></td></tr
><tr
id=sl_svn124_1940

><td class="source"><br></td></tr
><tr
id=sl_svn124_1941

><td class="source">// Some extra Array subs for ease of use<br></td></tr
><tr
id=sl_svn124_1942

><td class="source">// http://stackoverflow.com/questions/143847/best-way-to-find-an-item-in-a-javascript-array<br></td></tr
><tr
id=sl_svn124_1943

><td class="source">Array.prototype.hasObject = (<br></td></tr
><tr
id=sl_svn124_1944

><td class="source">  !Array.indexOf ? function (obj) {<br></td></tr
><tr
id=sl_svn124_1945

><td class="source">    var l = this.length + 1;<br></td></tr
><tr
id=sl_svn124_1946

><td class="source">    while (l--) {<br></td></tr
><tr
id=sl_svn124_1947

><td class="source">      if (this[l - 1] === obj) return true;<br></td></tr
><tr
id=sl_svn124_1948

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1949

><td class="source">    return false;<br></td></tr
><tr
id=sl_svn124_1950

><td class="source">  } : function (obj) {<br></td></tr
><tr
id=sl_svn124_1951

><td class="source">    return (this.indexOf(obj) !== -1);<br></td></tr
><tr
id=sl_svn124_1952

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1953

><td class="source">);<br></td></tr
><tr
id=sl_svn124_1954

><td class="source">Array.prototype.hasItemInObj = function (name, item) {<br></td></tr
><tr
id=sl_svn124_1955

><td class="source">  var l = this.length + 1;<br></td></tr
><tr
id=sl_svn124_1956

><td class="source">  while (l--) {<br></td></tr
><tr
id=sl_svn124_1957

><td class="source">    if (this[l - 1][name] === item) return true;<br></td></tr
><tr
id=sl_svn124_1958

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1959

><td class="source">  return false;<br></td></tr
><tr
id=sl_svn124_1960

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1961

><td class="source">if (!Array.prototype.indexOf) {<br></td></tr
><tr
id=sl_svn124_1962

><td class="source">  Array.prototype.indexOf = function (obj, fromIndex) {<br></td></tr
><tr
id=sl_svn124_1963

><td class="source">    if (fromIndex == null) {<br></td></tr
><tr
id=sl_svn124_1964

><td class="source">      fromIndex = 0;<br></td></tr
><tr
id=sl_svn124_1965

><td class="source">    } else if (fromIndex &lt; 0) {<br></td></tr
><tr
id=sl_svn124_1966

><td class="source">      fromIndex = Math.max(0, this.length + fromIndex);<br></td></tr
><tr
id=sl_svn124_1967

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1968

><td class="source">    for (var i = fromIndex, j = this.length; i &lt; j; i++) {<br></td></tr
><tr
id=sl_svn124_1969

><td class="source">      if (this[i] === obj) return i;<br></td></tr
><tr
id=sl_svn124_1970

><td class="source">    }<br></td></tr
><tr
id=sl_svn124_1971

><td class="source">    return -1;<br></td></tr
><tr
id=sl_svn124_1972

><td class="source">  };<br></td></tr
><tr
id=sl_svn124_1973

><td class="source">}<br></td></tr
><tr
id=sl_svn124_1974

><td class="source">Array.prototype.indexOfObjWithItem = function (name, item, fromIndex) {<br></td></tr
><tr
id=sl_svn124_1975

><td class="source">  if (fromIndex == null) {<br></td></tr
><tr
id=sl_svn124_1976

><td class="source">    fromIndex = 0;<br></td></tr
><tr
id=sl_svn124_1977

><td class="source">  } else if (fromIndex &lt; 0) {<br></td></tr
><tr
id=sl_svn124_1978

><td class="source">    fromIndex = Math.max(0, this.length + fromIndex);<br></td></tr
><tr
id=sl_svn124_1979

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1980

><td class="source">  for (var i = fromIndex, j = this.length; i &lt; j; i++) {<br></td></tr
><tr
id=sl_svn124_1981

><td class="source">    if (this[i][name] === item) return i;<br></td></tr
><tr
id=sl_svn124_1982

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_1983

><td class="source">  return -1;<br></td></tr
><tr
id=sl_svn124_1984

><td class="source">};<br></td></tr
><tr
id=sl_svn124_1985

><td class="source"><br></td></tr
><tr
id=sl_svn124_1986

><td class="source">/**<br></td></tr
><tr
id=sl_svn124_1987

><td class="source"> * Borrowed from jquery.base64.js, with some &quot;Array as input&quot; corrections<br></td></tr
><tr
id=sl_svn124_1988

><td class="source"> *<br></td></tr
><tr
id=sl_svn124_1989

><td class="source"> * @private<br></td></tr
><tr
id=sl_svn124_1990

><td class="source"> * @param {Array of charCodes} input An array of byte ASCII codes (0-255).<br></td></tr
><tr
id=sl_svn124_1991

><td class="source"> * @return {String} A base64-encoded string.<br></td></tr
><tr
id=sl_svn124_1992

><td class="source"> * @author Brendan Byrd<br></td></tr
><tr
id=sl_svn124_1993

><td class="source"> */<br></td></tr
><tr
id=sl_svn124_1994

><td class="source">var base64Encode = function(input) {<br></td></tr
><tr
id=sl_svn124_1995

><td class="source">  var keyString = &quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;;<br></td></tr
><tr
id=sl_svn124_1996

><td class="source">  var output = &quot;&quot;;<br></td></tr
><tr
id=sl_svn124_1997

><td class="source">  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;<br></td></tr
><tr
id=sl_svn124_1998

><td class="source">  var i = 0;<br></td></tr
><tr
id=sl_svn124_1999

><td class="source">  while (i &lt; input.length) {<br></td></tr
><tr
id=sl_svn124_2000

><td class="source">    chr1 = input[i++];<br></td></tr
><tr
id=sl_svn124_2001

><td class="source">    chr2 = input[i++];<br></td></tr
><tr
id=sl_svn124_2002

><td class="source">    chr3 = input[i++];<br></td></tr
><tr
id=sl_svn124_2003

><td class="source">    enc1 = chr1 &gt;&gt; 2;<br></td></tr
><tr
id=sl_svn124_2004

><td class="source">    enc2 = ((chr1 &amp; 3) &lt;&lt; 4) | (chr2 &gt;&gt; 4);<br></td></tr
><tr
id=sl_svn124_2005

><td class="source">    enc3 = ((chr2 &amp; 15) &lt;&lt; 2) | (chr3 &gt;&gt; 6);<br></td></tr
><tr
id=sl_svn124_2006

><td class="source">    enc4 = chr3 &amp; 63;<br></td></tr
><tr
id=sl_svn124_2007

><td class="source"><br></td></tr
><tr
id=sl_svn124_2008

><td class="source">    if      (chr2 == undefined) enc3 = enc4 = 64;<br></td></tr
><tr
id=sl_svn124_2009

><td class="source">    else if (chr3 == undefined) enc4 = 64;<br></td></tr
><tr
id=sl_svn124_2010

><td class="source"><br></td></tr
><tr
id=sl_svn124_2011

><td class="source">    output = output + keyString.charAt(enc1) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4);<br></td></tr
><tr
id=sl_svn124_2012

><td class="source">  }<br></td></tr
><tr
id=sl_svn124_2013

><td class="source">  return output;<br></td></tr
><tr
id=sl_svn124_2014

><td class="source">};<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn124_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn124_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/geoxml3/source/detail?spec=svn124&amp;r=124">r124</a>
 by geocodezip
 on Yesterday (35 hours ago)
 &nbsp; <a href="/p/geoxml3/source/diff?spec=svn124&r=124&amp;format=side&amp;path=/branches/kmz/geoxml3.js&amp;old_path=/branches/kmz/geoxml3.js&amp;old=123">Diff</a>
 </div>
 <pre>fix <a title="MultiGeometry LineString issue (extra lines) " class=closed_ref href="/p/geoxml3/issues/detail?id=24"> Issue 24 </a> (merge in MultiGeometry
object</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/geoxml3/source/detail?r=124&spec=svn124';
 var publish_url = '/p/geoxml3/source/detail?r=124&spec=svn124#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/branches/kmz/geoxml3.js');
 changed_urls.push('/p/geoxml3/source/browse/branches/kmz/geoxml3.js?r\x3d124\x26spec\x3dsvn124');
 
 var selected_path = '/branches/kmz/geoxml3.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/geoxml3/source/browse/branches/kmz/geoxml3.js?r=124&amp;spec=svn124"
 selected="selected"
 >/branches/kmz/geoxml3.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/geoxml3/source/detail?spec=svn124&r=123">r123</a>
 by geocodezip
 on Dec 24, 2014
 &nbsp; <a href="/p/geoxml3/source/diff?spec=svn124&r=123&amp;format=side&amp;path=/branches/kmz/geoxml3.js&amp;old_path=/branches/kmz/geoxml3.js&amp;old=122">Diff</a>
 <br>
 <pre class="ifOpened">fix issue with parsing of hotSpot tag</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/geoxml3/source/detail?spec=svn124&r=122">r122</a>
 by geocodezip
 on Dec 24, 2014
 &nbsp; <a href="/p/geoxml3/source/diff?spec=svn124&r=122&amp;format=side&amp;path=/branches/kmz/geoxml3.js&amp;old_path=/branches/kmz/geoxml3.js&amp;old=121">Diff</a>
 <br>
 <pre class="ifOpened">fix <a title="Problems when using sprites (palette) - kmz branch" class=closed_ref href="/p/geoxml3/issues/detail?id=56"> issue #56 </a> with sprites for markers
(kmz branch)</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/geoxml3/source/detail?spec=svn124&r=121">r121</a>
 by geocodezip
 on Dec 23, 2014
 &nbsp; <a href="/p/geoxml3/source/diff?spec=svn124&r=121&amp;format=side&amp;path=/branches/kmz/geoxml3.js&amp;old_path=/branches/kmz/geoxml3.js&amp;old=117">Diff</a>
 <br>
 <pre class="ifOpened">fix issue with failedParse callback
(<a title="failedParse callback not being called" class=closed_ref href="/p/geoxml3/issues/detail?id=101"> issue #101 </a>)</pre>
 </div>
 
 
 <a href="/p/geoxml3/source/list?path=/branches/kmz/geoxml3.js&start=124">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 79573 bytes,
 2014 lines</div>
 
 <div><a href="//geoxml3.googlecode.com/svn/branches/kmz/geoxml3.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/3197964839662303775/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/3197964839662303775/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/3197964839662303775/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/3197964839662303775/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn124': '/branches/kmz/geoxml3.js'}
 codereviews = CR_controller.setup(
 {"profileUrl": "/u/114488177952844137195/", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/3197964839662303775", "token": "ABZ6GAeMwqaXlXZzeOX6xu0Ufz2XnON_OA:1432529163416", "projectHomeUrl": "/p/geoxml3", "relativeBaseUrl": "", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "projectName": "geoxml3", "loggedInUserEmail": "matt@lapora.org"}, '', 'svn124', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/3197964839662303775/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/3197964839662303775/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

