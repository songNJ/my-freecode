function checkusernamepsd()
{
    if (document.getElementById("checkcode").value == "")
    {
        alert("验证码不能为空,请重新输入.");
        return;
    }
    if (document.getElementById("username").value == "" || document.getElementById("password").value == "")
    {
        alert("用户名和密码不能为空,请完整输入.");
        return;
    }
    document.getElementById("loginform").submit();
}
function checkLoginInfo(event)
{
    var e = event ? event : (window.event ? window.event : null);
    var currKey = e.keyCode||e.which||e.charCode;
    if (currKey == 13 && (document.activeElement.id == "checkcode" || document.activeElement.id == "checkcode1"))
        checkusernamepsd();
}
function checkLoginInfologonpage(event)
{
    var e = event ? event : (window.event ? window.event : null);
    var currKey = e.keyCode||e.which||e.charCode;
    if (currKey == 13 && (document.activeElement.id == "checkcode" || document.activeElement.id == "checkcode1" || document.activeElement.id == "password"))
        checkusernamepsd();
}
function showfocuscontent(focusindex)
{
    for (var i=1;i<=3;i++)
    {
        if (i.toString() == focusindex)
        {
            document.getElementById("focussectiontitle" + i).className = "focus-section-title-a-active";
            document.getElementById("focus-section-content-" + i).display = "block";
        }
        else
        {
            document.getElementById("focussectiontitle" + i).className = "focus-section-title-a-inactive";
            document.getElementById("focus-section-content-" + i).display = "disable";
        }
    }
}
function recalculateSubItemsPosition()
{
    var categoryIds = new Array(9);
    categoryIds[0] = "2022";
    categoryIds[1] = "2024";
    categoryIds[2] = "2057";
    categoryIds[3] = "2068";
    categoryIds[4] = "2072";
    categoryIds[5] = "2110";
    categoryIds[6] = "2111";
    categoryIds[7] = "2083";
    categoryIds[8] = "2082";
    
    for (var i=0;i<categoryIds.length;i++)
    {
        if ($("#category" + categoryIds[i]).length > 0) {
            document.getElementById('category' + categoryIds[i]).style.display = 'none';
            document.getElementById('category' + categoryIds[i]).style.left = document.getElementById('all-contents').offsetLeft + 160 + 'px';
        }
    }
    
    //if (document.getElementById("danbaojiaoyi-desc-window"))
    //    document.getElementById("danbaojiaoyi-desc-window").style.display = 'none';
    
    if (document.getElementById("promotion-window"))
        document.getElementById("promotion-window").style.display = 'none';
        
    if (document.getElementById("vip-window"))
        document.getElementById("vip-window").style.display = 'none';
        

}
function showCategoryCollection(e)
{
    if (window.ActiveXObject)
        document.getElementById("sidebar-category-collection").style.left = document.getElementById("all-contents").offsetLeft + "px";
    else
        document.getElementById("sidebar-category-collection").style.left = document.getElementById("all-contents").offsetLeft + "px";
    
    document.getElementById("sidebar-category-collection").style.top = "166px";
    document.getElementById("sidebar-category-collection").style.display = "";

    document.getElementById("all-category-title").className = "all-category-title-up";
    if (document.getElementById("category-collection-control").className.indexOf("category-collection-control-main") == -1) {
        document.getElementById("category-collection-control").className = document.getElementById("category-collection-control").className + " category-collection-control-main";
    }
}
function hideCategoryCollection(e)
{
    objLeft = document.getElementById("sidebar-category-collection").offsetLeft;
    objTop = document.getElementById("sidebar-category-collection").offsetTop;
    objWidth = document.getElementById("sidebar-category-collection").offsetWidth;
    objHeight = document.getElementById("sidebar-category-collection").offsetHeight;

    var currentMouse = new MousePosition(e);
    if (currentMouse.X >= objLeft && currentMouse.X <= objLeft + objWidth &&
        currentMouse.Y >= objTop && currentMouse.Y <= objTop + objHeight)
        return;

    /*
    document.getElementById("category-collection-control").style.marginLeft = "3px";
    document.getElementById("category-collection-control").style.width = "184px";
    document.getElementById("all-category-title").style.paddingLeft = "7px";
    */

    document.getElementById("all-category-title").className = "all-category-title-down";
    document.getElementById("sidebar-category-collection").style.display = "none";

    if (document.getElementById("category-collection-control").className.indexOf("category-collection-control-main") != -1) {
        document.getElementById("category-collection-control").className = "";
    }

}
//var currentCategoryId = 0;
function isMouseLeaveOrEnter(e, handler) {  
    if (e.type != 'mouseout' && e.type != 'mouseover') return false;  
    var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;  
    while (reltg && reltg != handler)  
        reltg = reltg.parentNode;  
    return (reltg != handler);  
}
function displayCategorySubitems(categoryId)
{
    currentCategoryId = categoryId;
    objCategory = document.getElementById("category" + categoryId);
    objCategory.style.display = "";
    
    if (objCategory.parentNode.className.indexOf('sidebar-category-item-focus') == -1)
        objCategory.parentNode.className = objCategory.parentNode.className.replace("sidebar-category-item","sidebar-category-item-focus");
    
    parentTop = getAbsolutePosition(objCategory.parentNode).y;
    
    if (document.getElementById('category-collection-control').attributes["floating"].nodeValue == "false")
    {
        objCategory.style.left = document.getElementById("all-contents").offsetLeft + 160 + "px";
        objCategory.style.top = parentTop + "px"
    }
    else
    {
        objCategory.style.left = "160px";
        objCategory.style.top = parentTop - 166 + "px"
    }
}
function hideCategorySubitems(categoryId,e)
{
    var currentMouse = new MousePosition(e);
    
    objCategory = document.getElementById("category" + categoryId);
    parentTop = getAbsolutePosition(objCategory.parentNode).y;
    
    //IE服务器与本地环境不一至，但FIREFOX的服务器与客户端环境却是一致的
    if (window.ActiveXObject)
        parentTop = parentTop - 200;
    
    parentHeight = objCategory.parentNode.offsetHeight;
    objHeight = objCategory.offsetHeight;
    objWidth = objCategory.offsetWidth;
    objTop = getAbsolutePosition(objCategory).y;
    sidebarWidth = document.getElementById("sidebar-category-collection").offsetWidth;
    sidebarLeft = getAbsolutePosition(document.getElementById("sidebar-category-collection")).x;
    
    
    if (currentMouse.X > sidebarLeft && currentMouse.X < sidebarLeft + sidebarWidth &&
        currentMouse.Y > parentTop && currentMouse.Y < parentTop + parentHeight)
        return;
    
    objCategory.parentNode.className = objCategory.parentNode.className.replace("sidebar-category-item-focus","sidebar-category-item");
    
    objCategory.style.display = "none";
}
function decimal(num,v)
{
    var vv = Math.pow(10,v);
    return Math.round(num*vv)/vv;
}
function displayVipWindow(oriPrice, vipCardObjId)
{
    document.getElementById("discount98").innerHTML = "<span id=\"discount98\">" + decimal(oriPrice * 0.98, 0) + "</span>";
    document.getElementById("discount96").innerHTML = "<span id=\"discount96\">" + decimal(oriPrice * 0.96, 0) + "</span>";
    //document.getElementById("discount95").innerHTML = "<span id=\"discount95\">" + decimal(oriPrice * 0.95, 0) + "</span>";
    //document.getElementById("discount92").innerHTML = "<span id=\"discount92\">" + decimal(oriPrice * 0.92, 0) + "</span>";

    vipCardObj = document.getElementById(vipCardObjId);
    objTop = getAbsolutePosition(vipCardObj).y;
    objLeft = getAbsolutePosition(vipCardObj).x;
    document.getElementById("vip-window").style.display = '';
    document.getElementById("vip-window").style.top = objTop + 13 + "px";
    document.getElementById("vip-window").style.left = objLeft + 144 + "px";
}
function hideVipWindow(e)
{
    var currentMouse = new MousePosition(e);
    
    vipWindowObj = document.getElementById("vip-window");
    
    objHeight = vipWindowObj.offsetHeight;
    objWidth = vipWindowObj.offsetWidth;
    objTop = getAbsolutePosition(vipWindowObj).y;
    objLeft = getAbsolutePosition(vipWindowObj).x;
    
    if (currentMouse.X >= objLeft && currentMouse.X <= objLeft + objWidth - 20 &&
        currentMouse.Y >= objTop - 3 && currentMouse.Y <= objTop + objHeight - 20)
        return;

    document.getElementById("vip-window").style.display = 'none';
}
function displayPromotionWindow(promotionPrice, promotionCardObjId)
{
    document.getElementById("promotion-amount").innerHTML = "<span id=\"promotion-amount\">" + promotionPrice + "</span>";

    pormotionCardObj = document.getElementById(promotionCardObjId);
    objTop = getAbsolutePosition(pormotionCardObj).y;
    objLeft = getAbsolutePosition(pormotionCardObj).x;
    document.getElementById("promotion-window").style.display = '';
    document.getElementById("promotion-window").style.top = objTop + 13 + "px";
    document.getElementById("promotion-window").style.left = objLeft + 134 + "px";
}
function hidePromotionWindow(e)
{
    var currentMouse = new MousePosition(e);
    
    promotionWindowObj = document.getElementById("promotion-window");
    
    objHeight = promotionWindowObj.offsetHeight;
    objWidth = promotionWindowObj.offsetWidth;
    objTop = getAbsolutePosition(promotionWindowObj).y;
    objLeft = getAbsolutePosition(promotionWindowObj).x;
    
    if (currentMouse.X >= objLeft && currentMouse.X <= objLeft + objWidth - 20 &&
        currentMouse.Y >= objTop && currentMouse.Y <= objTop + objHeight - 20)
        return;

    document.getElementById("promotion-window").style.display = 'none';
}
//function displayDanbaojiaoyiDescWindow()
//{
//    danbaojiaoyiDescObj = document.getElementById("danbaojiaoyi-desc");
//    objTop = getAbsolutePosition(danbaojiaoyiDescObj).y;
//    objLeft = getAbsolutePosition(danbaojiaoyiDescObj).x;
//    document.getElementById("danbaojiaoyi-desc-window").style.display = '';
//    document.getElementById("danbaojiaoyi-desc-window").style.top = objTop + 15 + "px";
//    document.getElementById("danbaojiaoyi-desc-window").style.left = objLeft + 134 + "px";
//}
//function hideDanbaojiaoyiDescWindow(e)
//{
//    var currentMouse = new MousePosition(e);
    
//    danbaojiaoyiDescWindowObj = document.getElementById("danbaojiaoyi-desc-window");
    
//    objHeight = danbaojiaoyiDescWindowObj.offsetHeight;
//    objWidth = danbaojiaoyiDescWindowObj.offsetWidth;
//    objTop = getAbsolutePosition(danbaojiaoyiDescWindowObj).y;
//    objLeft = getAbsolutePosition(danbaojiaoyiDescWindowObj).x;
    
//    if (currentMouse.X >= objLeft && currentMouse.X <= objLeft + objWidth - 20 &&
//        currentMouse.Y >= objTop && currentMouse.Y <= objTop + objHeight - 20)
//        return;

//    document.getElementById("danbaojiaoyi-desc-window").style.display = 'none';
//}
function MousePosition(e)
{
    posx=0;posy=0;
    var ev=(!e)?window.event:e;//IE:Moz
    if (ev.pageX){//Moz
        posx=ev.pageX;
        posy=ev.pageY;
        //在ff下ev.pageX与ev.pageY似乎已经包含pageXOffset与pageYOffset的值，故注释之，否则如vipwindow的鼠标位置计算不正确
        //posx=ev.pageX+window.pageXOffset;
        //posy=ev.pageY+window.pageYOffset;
    }
    else if(ev.clientX){//IE
        if(document.documentElement){//IE 6+ strict mode
            posx = ev.clientX + document.documentElement.scrollLeft;
            posy = ev.clientY + document.documentElement.scrollTop;
        }
        else if(document.body){//Other IE
            posx = ev.clientX + document.body.scrollLeft;
            posy = ev.clientY + document.body.scrollTop;
        }
    }
    else{return false}//old browsers

    this.X = posx;
    this.Y = posy;
}
/*
function MousePosition(ev) { 
    var point = { x:0, y:0 }; 
    if(typeof window.pageYOffset != 'undefined') { 
        point.x = window.pageXOffset; 
        point.y = window.pageYOffset; 
    } 
    else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
        point.x = document.documentElement.scrollLeft; 
        point.y = document.documentElement.scrollTop; 
    } 
    else if(typeof document.body != 'undefined') {
        point.x = document.body.scrollLeft; 
        point.y = document.body.scrollTop; 
    } 
    point.x += ev.clientX; 
    point.y += ev.clientY; 
    return point; 
}
*/
function getAbsolutePosition(obj) {
    var left = 0;
    var top = 0;
    while (obj.offsetParent) {
        if( obj.id != "DialogMove")
        {
            left += obj.offsetLeft;
            top += obj.offsetTop;
        }
        obj = obj.offsetParent;
    }      
    left += obj.offsetLeft;
    top += obj.offsetTop;      
    return {x:left, y:top};
}


var time = "";
var index = 1;
var lastImageStyleHDivActiveClass = "";
var lastImageStyleMHDivActiveClass = "";
var lastProductLinkID = "";
var lastProductImageX = 0;
var menuMouseLocatedAt = "";
var subMenuMouseLocatedAt = "";
var currentMenu = "";

var zoomOutSlideInterval;
var currentSlideWidth = 2200;
var currentSlideHeight = 493;

function zoomOutSlide() {
    currentSlideWidth = currentSlideWidth - 3;
    var currentSlideHeight = ((493 - 430) / (2200 - 1920)) * (currentSlideWidth - 1920) + 430;
    $("#navigation-poster").css({ 'background-size': currentSlideWidth + "px " + currentSlideHeight + "px" });
    if (currentSlideWidth <= 1920) {
        $("#navigation-poster").css({ 'background-size': 1920 + "px " + 430 + "px" });
        clearInterval(zoomOutSlideInterval);
    }
}

$(document).ready(function () {

    zoomOutSlideInterval = setInterval(zoomOutSlide, 20);

    $("#poster-selection div").mouseover(function () {
        $("#poster-selection div").removeClass("focus-poster-selection");
        $(this).addClass("focus-poster-selection");
        $("#navigation-poster").css("backgroundImage", "url(" + $(this).attr("pic") + ")");
        $("#current-poster-link").attr("href", $(this).attr("link"));
        currentSlideWidth = 2200;
        currentSlideHeight = 493;
        $("#navigation-poster").css({ 'background-size': currentSlideWidth + "px " + currentSlideHeight + "px" });
        clearInterval(zoomOutSlideInterval);
        zoomOutSlideInterval = setInterval(zoomOutSlide, 20);
    });


    // 导航左侧栏js效果 start
    $(".pullDownList li").hover(function () {
        $(this).find(".listi1").children("img").eq(0).css("display", "none");
        $(this).find(".listi1").children("img").eq(1).css("display", "block");
        $(".jMenuListCon").fadeIn();
        var index = $(this).index(".pullDownList li");
        if (!($(this).hasClass("menulihover") || $(this).hasClass("menuliselected"))) {
            $($(".jBannerList")[index]).css("display", "block").siblings().css("display", "none");
            $($(".jBannerList")[index]).removeClass("jBannerExposure");
            setTimeout(function () {
                $($(".jBannerList")[index]).addClass("jBannerExposure");
            }, 60)
        } else {
        }
        $(this).addClass("menulihover").siblings().removeClass("menulihover");
        $(this).addClass("menuliselected").siblings().removeClass("menuliselected");
        $($(".jMenuListConin")[index]).fadeIn().siblings().fadeOut();
    }, function () {
        $(this).find(".listi1").children("img").eq(0).css("display", "block");
        $(this).find(".listi1").children("img").eq(1).css("display", "none");
    });
    $(".pullDown").mouseleave(function () {
        $(".jMenuListCon").fadeOut();
        $(".jMenuListConin").fadeOut();
        $(".pullDownList li").removeClass("menulihover");
        $(".menuliselected").removeClass("menuliselected");
    });
    // 导航左侧栏js效果  end

    $(".jMenuListCon").hide();
    var s = window.location.href;
    if ($("#ispcmainpage").length > 0) {
        $(".pullDownList").show();
        //$(".jMenuListCon").show();

    } else {
        $(".pullDown").hover(function () {
            $(".pullDownList").show();

        }, function () {
            $(".pullDownList").hide();
        })
    }



    //if ($("#ucjisumoshi-note").length > 0)//若用UC浏览则会创建ucjisumoshi-note元素，若能执行到这里说明UC未使用极速模式，则将相关提示隐藏。
    //    $("#ucjisumoshi-note").hide();

    //if ($.browser.msie && $.browser.version == "6.0")
    if ('undefined' == typeof (document.body.style.maxHeight))
        $("#order-guarantee,#service,#friend-links,#page-footer-friendship-links,#page-footer-partsiteinfo,#page-footer-pic").css("margin-left", $("#all-contents").offset().left - 60);
    else if (navigator.userAgent.indexOf("MSIE 7.0") > 0)
        $("#order-guarantee,#service,#friend-links,#page-footer-friendship-links,#page-footer-partsiteinfo,#page-footer-pic").css("margin-left", $("#all-contents").offset().left - 130);
    else
        $("#order-guarantee,#service,#friend-links,#page-footer-friendship-links,#page-footer-partsiteinfo,#page-footer-pic").css("margin-left", $("#all-contents").offset().left);

    //默认就将其展开
    $("#im").removeClass("im-simple");
    $("#im").addClass("im-expand");
    $("#im").css("left", $("body").width() - $("#im").width());
    $("#im-expand-content").show();

    $("#new-onlyicon").css("left", $("#top-content").offset().left + 300);

    $("#im").css("left", $("body").width() - $("#im").width());
    $("#im").show();

    $(window).resize(function () {

        if ('undefined' == typeof (document.body.style.maxHeight))
            $("#order-guarantee,#service,#friend-links,#page-footer-friendship-links,#page-footer-partsiteinfo,#page-footer-pic").css("margin-left", $("#all-contents").offset().left - 60);
        else if (navigator.userAgent.indexOf("MSIE 7.0") > 0)
            $("#order-guarantee,#service,#friend-links,#page-footer-friendship-links,#page-footer-partsiteinfo,#page-footer-pic").css("margin-left", $("#all-contents").offset().left - 130);
        else
            $("#order-guarantee,#service,#friend-links,#page-footer-friendship-links,#page-footer-partsiteinfo,#page-footer-pic").css("margin-left", $("#all-contents").offset().left);

        $("#im").css("left", $("body").width() - $("#im").width());
        $("#new-onlyicon").css("left", $("#top-content").offset().left + 300);
    });

    if ('undefined' == typeof (document.body.style.maxHeight)) {
        $("#im").mouseover(function () {
            $("#im").removeClass("im-simple");
            $("#im").addClass("im-expand");
            $("#im").css("left", $("body").width() - $("#im").width());
            $("#im-expand-content").show();
        });
        $("#im").mouseout(function () {
            $("#im").removeClass("im-expand");
            $("#im").addClass("im-simple");
            $("#im").css("left", $("body").width() - $("#im").width());
            $("#im-expand-content").hide();
        });
    }
    $(".webim").mouseover(function () {
        $(this).addClass("webim-active");
    });
    $(".webim").mouseout(function () {
        $(this).removeClass("webim-active");
    });

    //slideShow();

    showimg(index);
    //鼠标移入移出
    $(".imgnum span,#banner_img li img").hover(function () {
        clearTimeout(time);
        var icon = $(this).attr("index");
        $(".imgnum span").removeClass("onselect").eq(icon - 1).addClass("onselect");
        $("#banner_img li").hide().stop(true, true).eq(icon - 1).fadeIn("slow");
    }, function () {
        index = $(this).attr("index") >= $("#banner_img li").length ? 1 : parseInt($(this).attr("index")) + 1;
        time = setTimeout("showimg(" + index + ")", 10000);
    });
    $("#banner_img li img").bind("click", function () {
        window.open($(this).attr("link"), "_blank");
    });

    /*
    $("#top-menu-tabs-navigation").click(function() {
    $('body').append('<div class="lightBoxMask" style="width:' + $(window).width() + 'px;height:' + $(window).height() + 'px;"></div>')
    .append('<div class="lightBox" style="width:300px;height:200px;"><div class="lightBoxContainer" style="width:300px;height:200px;"></div><div class="lightBoxClose">关闭</div></div>');

        $('.lightBox').css({
    opacity: 0,
    left: ($(window).width() - $('.lightBox').width()) / 2,
    top: ($(window).height() - $('.lightBox').height()) / 2
    }).fadeTo(1000, 1);

        $('.lightBoxClose').click(removeLightBox);
    $('.lightBoxMask').css({ opacity: 0 }).fadeTo(500, 0.8).click(removeLightBox);
    });
    */

    /*
    if ($(".image-style-h-div")) {
        $("#image-style-h-div-a").addClass("image-style-h-div-a-active");
        $(".image-style-h-div").mouseover(function() {
            $(".image-style-h-div").removeClass("image-style-h-div-active");
            var divId = $(this).prop("id");
            $(this).addClass(divId + "-active");
            $(this).addClass("image-style-h-div-active");
            if (lastImageStyleHDivActiveClass != "" && lastImageStyleHDivActiveClass != divId + "-active") {
                $("." + lastImageStyleHDivActiveClass).removeClass(lastImageStyleHDivActiveClass);
                $("#" + lastImageStyleHDivActiveClass.replace("-active", "-products")).hide();
            }
            $("#" + divId + "-products").show();

            lastImageStyleHDivActiveClass = divId + "-active";
        });
        lastImageStyleHDivActiveClass = "image-style-h-div-a-active";
    }
    */
    if ($(".image-style-mh-div")) {
        $("#image-style-mh-div-a").addClass("image-style-mh-div-a-active");
        $(".image-style-mh-div").mouseover(function () {
            $(".image-style-mh-div").removeClass("image-style-mh-div-active");
            var divId = $(this).prop("id");
            $(this).addClass(divId + "-active");
            $(this).addClass("image-style-mh-div-active");
            if (lastImageStyleMHDivActiveClass != "" && lastImageStyleMHDivActiveClass != divId + "-active") {
                $("." + lastImageStyleMHDivActiveClass).removeClass(lastImageStyleMHDivActiveClass);
                $("#" + lastImageStyleMHDivActiveClass.replace("-active", "-products")).hide();
            }
            $("#" + divId + "-products").show();
            $(".corner-shadow").removeClass("corner-shadow");
            if (divId == "image-style-mh-div-c")
                $("#image-style-mh-div-additional-links").addClass("corner-shadow");
            else if (divId == "image-style-mh-div-a")
                $("#image-style-mh-div-b").addClass("corner-shadow");
            else if (divId == "image-style-mh-div-b")
                $("#image-style-mh-div-c").addClass("corner-shadow");

            lastImageStyleMHDivActiveClass = divId + "-active";
        });
        lastImageStyleMHDivActiveClass = "image-style-mh-div-a-active";
    }
    if ($(".product-image-by-sales-volume-link")) {
        $(".product-image-by-sales-volume-link").mouseover(function () {
            $("#product-image-index-first").css("background-position", "0px -3860px");
            $(".product-image-by-sales-volume-image-first").removeClass("product-image-by-sales-volume-image-first");
            $(".product-image-by-sales-volume-image").hide();
            $(this).next().show();

            if (lastProductLinkID != "") {
                $("#" + lastProductLinkID + " .product-image-index").css("background-position", lastProductImageX + "px -3860px");
            }

            var offsetValue = 0 - parseInt($(this).attr("index")) * 18;
            $(this).find(".product-image-index").css("background-position", offsetValue + "px -3875px");
            lastProductLinkID = $(this).prop("id");
            lastProductImageX = offsetValue;
        });

    }
    if ($("#tab-links li").length > 0) {
        $("#tab-links li").mouseover(function () {
            if ($(this).prop("id") == "menu-flowers" || $(this).prop("id") == "menu-cake") {
                if (currentMenu != "")
                    $("#" + currentMenu).removeClass("color-normal-hover");

                $(".sub-menu").hide();

                $(this).addClass("color-normal-hover");
                subMenuMouseLocatedAt = "";
                menuMouseLocatedAt = $(this).prop("id");
                currentMenu = $(this).prop("id");
                $("#sub-menu-of-" + menuMouseLocatedAt.replace("menu-", "")).css("top", $(this).offset().top + 31);

                if ('undefined' == typeof (document.body.style.maxHeight))
                    $("#sub-menu-of-" + menuMouseLocatedAt.replace("menu-", "")).css("left", $(this).offset().left - 1);
                else
                    $("#sub-menu-of-" + menuMouseLocatedAt.replace("menu-", "")).css("left", $(this).offset().left + 4);

                $("#sub-menu-of-" + menuMouseLocatedAt.replace("menu-", "")).show();
            }
        });
        $("#tab-links li").mouseout(function () {
            if ($(this).prop("id") == "menu-flowers" || $(this).prop("id") == "menu-cake") {
                setTimeout("delayToHideSubMenu('sub-menu-of-" + menuMouseLocatedAt.replace("menu-", "") + "')", 500);
                menuMouseLocatedAt = "";
            }
        });
        $(".sub-menu").mouseover(function () {
            subMenuMouseLocatedAt = $(this).prop("id");
        });
        $(".sub-menu").mouseout(function () {
            subMenuMouseLocatedAt = "";
            setTimeout("delayToHideSubMenu('" + $(this).prop("id") + "')", 500);
        });
        $(".sub-menu li").click(function () {
            window.open($(this).attr("href"), '_self');
        });
    }
    if ($(".add-to-compare").length > 0) {
        $(".add-to-compare").click(function () {
            if ($(".goods-paging-top").length > 0) //当前位于商品分类频道页
                products.AddProductToCompare($(this).attr("pid"), $(this).attr("desc"), AddProductToCompare_callback);
            else if ($(".product-detail").length > 0) //当前位于商品页
                product.AddProductToCompare($(this).attr("pid"), $(this).attr("desc"), AddProductToCompare_callback);
            else if ($("#products-promotion").length > 0) //当前位于promotion
                promotion.AddProductToCompare($(this).attr("pid"), $(this).attr("desc"), AddProductToCompare_callback);


        });
    }
    if ($("#compare-panel-small").length > 0) {
        $("#compare-panel-small").click(function () {
            $(this).addClass("compare-panel-small-hidden");
            $("#compare-panel").removeClass("compare-panel-hidden");
            $("#hideAsSmallControl img").attr("src", $("#hideAsSmallControl img").attr("domain") + "compare.html?hideassmall=0");
        });
    }

    if ($("#tag").length > 0) {
        $("#tag").click(function () {
            if ($(this).val() == "输入商品编号或类别；例如:62515,百合,花盒,小熊..") {
                $(this).val("");
                $(this).addClass("tag-focus");
            }
        });
        $("#tag").blur(function () {
            if ($(this).val() == "输入商品编号或类别；例如:62515,百合,花盒,小熊..") {
                $(this).removeClass("tag-focus");
            }
            else if ($(this).val() == "") {
                $(this).val("输入商品编号或类别；例如:62515,百合,花盒,小熊..");
                $(this).removeClass("tag-focus");
            }
        });

        if ($("#tag").val() == "输入商品编号或类别；例如:62515,百合,花盒,小熊..") {
            $("#tag").removeClass("tag-focus");
        }
        else if ($("#tag").val() == "") {
            $("#tag").val("输入商品编号或类别；例如:62515,百合,花盒,小熊..");
            $("#tag").removeClass("tag-focus");
        }
        else if (!$("#tag").hasClass("tag-focus")) {
            $("#tag").addClass("tag-focus");
        }
    }

    adcheck();
});
function adcheck() {
    //需要对sld和theme做检查后再放出
    //for (var b = $("body").children().length - 1; b >= 0; b--) {
    //    if ($("body").children()[b].id == "page-footer" || $("body").children()[b].id == "page-footer-partsiteinfo" || $("body").children()[b].id == "page-footer-pic")
    //        break;

    //    if ($("body").children()[b].className == "sub-menu")
    //        break;

    //    var checkElement = $("body").children()[b];
    //    if (checkElement.tagName.toLowerCase() != "script") {
    //        var elementorname = checkElement.tagName;
    //        var className = checkElement.className;
    //        var idName = checkElement.id;
    //        if (className != null && className != undefined && className != "")
    //            elementorname += "(className:" + className + ")";
    //        else if (idName != null && idName != undefined && idName != "")
    //            elementorname += "(id:" + idName + ")";

    //        $("<img src=\"http://www.amflower.com/vote.html?logad=1&pagename=" + document.title + "&pcormobile=pc&elementorname=" + elementorname + "\">").appendTo(checkElement);
    //        break;
    //    }
    //}
}

function isint(strNumber)
{
    if (strNumber == "")
        return false;

    var strValidChars = "0123456789";
    var i
    var strChar

    for (i=0 ; i < strNumber.length; i++) {
        strChar = strNumber.charAt(i);
        if (strValidChars.indexOf(strChar) == -1)
            return false;
    }
    return true;
}
function checkToSearchBySpecifiedPieces(event, fromMenuOrProducts) {
    var e = event ? event : (window.event ? window.event : null);
    var currKey = e.keyCode || e.which || e.charCode;
    if (currKey == 13)
        searchProductsBySpecifiedPieces(fromMenuOrProducts);
}
function searchProductsBySpecifiedPieces(fromMenuOrProducts) {
    var flowerPieces = "";
    var currentDomain = "";
    if ($("#user-specified-flower-pieces").length > 0) {
        if ($("#menu-specified-flower-pieces").length > 0 && fromMenuOrProducts == "frommenu") {
            flowerPieces = $("#menu-specified-flower-pieces").val();
            currentDomain = $("#menu-specified-flower-pieces").attr("currentdomain");
        }
        else {
            flowerPieces = $("#user-specified-flower-pieces").val();
            currentDomain = $("#user-specified-flower-pieces").attr("currentdomain");
        }
    }
    if (flowerPieces == "" && $("#menu-specified-flower-pieces").length > 0) {
        flowerPieces = $("#menu-specified-flower-pieces").val();
        currentDomain = $("#menu-specified-flower-pieces").attr("currentdomain");
    }

    if (flowerPieces == "") {
        alert("请输入要订购的朵数。")
        return;
    }
    if (!isint(flowerPieces) ||
        flowerPieces.length > 1 && flowerPieces.substring(0, 1) == "0") {
        alert("必须为数字类型，请重新输入。")
        return;
    }
    if (parseInt(flowerPieces) < 11) {
        alert("必须为11朵以上，请输入大于11的数字。")
        return;
    }

    if (flowerPieces.length > 4) {
        alert("数字过大，请修改为小于10000的朵数。")
        return;
    }

    window.open(currentDomain + "flowers/all-page-1.html?orderby=customized&user-specified-flower-pieces=" + flowerPieces, "_self");
}
function AddProductToCompare_callback(res) {
    if (res.value != null && res.value != "") {
        if (res.value == "max") {
            alert("最多只能添加6款商品进行对比。");
            return;
        }
        if ($("#compare-panel").hasClass("compare-panel-hidden")) {
            $("#compare-panel").removeClass("compare-panel-hidden");
            $("#compare-panel-small").addClass("compare-panel-small-hidden");
            $("#hideAsSmallControl img").attr("src", $("#hideAsSmallControl img").attr("domain") + "compare.html?hideassmall=0");
        }
        $("#compare-panel-products ul").append(res.value);
    }
}
function hideComparePanel() {
    $("#compare-panel").addClass("compare-panel-hidden");
    $("#compare-panel-small").removeClass("compare-panel-small-hidden");
    $("#hideAsSmallControl img").attr("src", $("#hideAsSmallControl img").attr("domain") + "compare.html?hideassmall=1");
}
function removeCompareItem(pid) {
    $("#compare-item-" + pid).remove();
    $("#clearComparePidsSession img").attr("src", $("#clearComparePidsSession img").attr("domain") + "compare.html?removeitem=" + pid);
}
function clearCompareItems() {
    $("#compare-panel-products ul li").remove();
    $("#clearComparePidsSession img").attr("src", $("#clearComparePidsSession img").attr("domain") + "compare.html?clearall=1");
}



function delayToHideSubMenu(subMenuId) {
    if (menuMouseLocatedAt == "" && subMenuMouseLocatedAt == "") {
        $("#" + subMenuId).hide();
        $("#" + currentMenu).removeClass("color-normal-hover");
    }
}
function showimg(num) {
    index = num;
    $(".imgnum span").removeClass("onselect").eq(index - 1).addClass("onselect");
    $("#banner_img li").hide().stop(true, true).eq(index - 1).fadeIn("slow");
    index = index + 1 > $("#banner_img li").length ? 1 : index + 1;

    time = setTimeout("showimg(" + index + ")", 4000);
}
var imwindow = null;
function openImwindow(kfid, productId) {
    if (productId == "")
        window.open($("#domainname").val() + 'imlive.html?kf=' + kfid, 'amimwindow', 'height=600, width=630, top=100, left=500, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
    else
        window.open($("#domainname").val() + 'imlive.html?id=' + productId + '&kf=' + kfid, 'amimwindow', 'height=600, width=630, top=100, left=500, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
        
        
}
function removeLightBox() {
    $('.lightBoxMask').fadeTo(300, 0, function() {
        $(this).remove();
    });
    $('.lightBox').fadeTo(100, 0, function() {
        $(this).remove();
    });
}
//var mhbg;
//function changeMHBG() {
//    if ($("#mainpage-section-hot").hasClass("mainpage-section-hot-bg-a")) {
//        $("#mainpage-section-hot").removeClass("mainpage-section-hot-bg-a")
//        $("#mainpage-section-hot").addClass("mainpage-section-hot-bg-b")
//    }
//    else if ($("#mainpage-section-hot").hasClass("mainpage-section-hot-bg-b")) {
//        $("#mainpage-section-hot").removeClass("mainpage-section-hot-bg-b")
//        $("#mainpage-section-hot").addClass("mainpage-section-hot-bg-c")
//    }
//    else if ($("#mainpage-section-hot").hasClass("mainpage-section-hot-bg-c")) {
//        $("#mainpage-section-hot").removeClass("mainpage-section-hot-bg-c")
//        $("#mainpage-section-hot").addClass("mainpage-section-hot-bg-a")
//    }
//}
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;
}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
$(window).resize(function() {
    $('.lightBoxMask').css({
        width: $(window).width(),
        height: $(window).height()
    });

    $('.lightBox').css({
        left: ($(window).width() - $('.lightBox').width()) / 2,
        top: ($(window).height() - $('.lightBox').height()) / 2
    });
});
