$(function() {
    hljs.initHighlightingOnLoad();
});
var ghosthunter_key = 'd4fa7311d7fc619c128d55f4bd';
var ghost_root_url = "/ghost/api/v2"
$(".ghost-hunter #search-field").ghostHunter({
  results: ".ghost-hunter #results",
  includebodysearch: true,
  onKeyUp: true,
  result_template: "<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><h2>{{title}}<span class='small'>{{pubDate}}</span></h2></a>",
  info_template: "<p class='number'>Number of posts found: {{amount}}</p>"
});
$(".ghost-hunter-search").click(function() {
  $("body").addClass("noscroll");
  $(".ghost-hunter").addClass("visible");
  $(".ghost-hunter #search-field").focus();
});
$(".ghost-hunter .close").click(function() {
  $("body").removeClass("noscroll");
  $(".ghost-hunter").removeClass("visible");
});
