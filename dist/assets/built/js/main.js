var secondaryColors,primaryColors,localSecondaryColor,localPrimaryColor;function recalculatePostHeight(){var e=$("#main .post-square").width();$("#main .post-square").height(e)}switcherActive?(secondaryColors=["brown","green","red","blue"],primaryColors=["dark","light"],localSecondaryColor=localStorage.getItem("sec-color"),localPrimaryColor=localStorage.getItem("pri-color"),$("body").addClass(null==localSecondaryColor?"brown":localSecondaryColor),$("body").addClass(null==localPrimaryColor?"dark":localPrimaryColor),$(".secondary-colors .circular-selector").on("click",function(e){secondaryColors.forEach(function(e){$("body").hasClass(e)&&$("body").removeClass(e)});e=$(e.delegateTarget).data("value");$("body").addClass(e),localStorage.setItem("sec-color",e)}),$(".primary-colors .circular-selector").on("click",function(e){primaryColors.forEach(function(e){$("body").hasClass(e)&&$("body").removeClass(e)});e=$(e.delegateTarget).data("value");$("body").addClass(e),localStorage.setItem("pri-color",e)})):$("body").addClass(themeColors),recalculatePostHeight(),cssBackgrounds=new LazyLoad({elements_selector:".lazy"}),articleImages=new LazyLoad({container:document.getElementById("main")}),$("input, textarea").placeholder(),$("#search-field").ghostHunter({results:"#results",onKeyUp:!0,onPageLoad:!1,result_template:'<a href="{{link}}" id="gh-{{ref}}" class="gh-search-item result post-presentation"><h3>{{title}}<span>{{pubDate}}</span></h3></a>',info_template:'<div class="result-info"><span>Found {{amount}} posts.</span></div>',indexing_start:function(){$(".fa-spinner").addClass("spinner-active"),$("#search-field").prop("disabled",!0)},indexing_end:function(){$(".fa-spinner").removeClass("spinner-active"),$("#search-field").prop("disabled",!1)}}),$(".carousel").each(function(){var e=$(this),a=new Hammer(this,{recognizers:[[Hammer.Swipe,{direction:Hammer.DIRECTION_HORIZONTAL}]]});a.on("swipeleft",function(){e.carousel("next")}),a.on("swiperight",function(){e.carousel("prev")})}),$(document).ready(function(){$("#main-navbar.sticky-ok").sticky({topSpacing:0}),$(".paged .latest-post").css("margin-top",$("#main-navbar").height()+30),$(".search-panel-toggle").click(function(e){$("#search-section").toggleClass("is-visible"),$("body").toggleClass("custom-modal-open"),e.preventDefault()}),$(function(o){var r=1,l=window.location.pathname;o(document);o("#load-more").on("click",function(){var e,a;r!==maxPages?(e=/(?:page\/)(\d)(?:\/)$/i,(a=(a=l).replace(/#(.*)$/g,"").replace("////g","/")).match(e)&&(r=parseInt(a.match(e)[1]),a=a.replace(e,"")),a=(l=a)+"page/"+(r+=1)+"/",o("#load-more").html('<div class="spinner-border" role="status"><span class="sr-only">'+loadingMessage+"</span></div>"),o.get(a,function(e){e=document.createRange().createContextualFragment(e).querySelectorAll("#post-loop-wrapper > div");e.length&&([].forEach.call(e,function(e){o("#post-loop-wrapper").append(e),cssBackgrounds.update()}),recalculatePostHeight())}).fail(function(e){404===e.status&&o("#load-more").text(endMessage)}).always(function(){r===maxPages?o("#load-more").text(endMessage):o("#load-more").html(Message+'<i class="fas fa-arrow-down"></i>')})):o("#load-more").text(endMessage)})})}),$(window).resize(function(){recalculatePostHeight()});
//# sourceMappingURL=main.js.map