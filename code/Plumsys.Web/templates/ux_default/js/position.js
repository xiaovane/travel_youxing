if (json.errMsg == "success") {
    $("#map-canvas").width(800).height(500);
    var poi = json.data;

    function initialize() {
        var myLatlng = new google.maps.LatLng(poi[0].pointY, poi[0].pointX);
        var mapOptions = {
            center: myLatlng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
        var rednum = 0, bluenum = 0;
        var html = "<table cellpadding='0' cellspacing='0' border='0'>";
        $(poi).each(function (index, element) {
            var name = element.name ? "<b>中文名:</b>" + element.name : "";
            var name_language = element.nameLanguage ? "<b>英文名:</b>" + element.nameLanguage : "";
            var address = element.address ? "<b>地&nbsp;&nbsp;址&nbsp;:</b>" + element.address : "";
            if (element.type == 1) {
                bluenum += 1;
                html += "<tr><th><img src=\"http://img02.haiwaner.com/hwpc/res/images/googleMapIcon/icon_location_blue_" + bluenum + ".png\" alt=\"\" />进入地点:</th><td><p>" + name_language + "</p><p>" + name + "</p><p>" + address + "</p></td></tr>";
            } else {
                rednum += 1;
                var t_name = element.type == 2 ? "换票地点" : element.type == 3 ? "集合地点" : element.type == 4 ? "解散地点" :element.type == 9 ? "取票地点":"使用地点";
                html += "<tr><th><img src=\"http://img02.haiwaner.com/hwpc/res/images/googleMapIcon/icon_location_red_" + rednum + ".png\" alt=\"\" />" + t_name + ":</th><td><p>" + name_language + "</p><p>" + name + "</p><p>" + address + "</p></td></tr>";
            }
            var position = new google.maps.LatLng(element.pointY, element.pointX);
            var marker = new google.maps.Marker({
                position: position,
                map: map,
                title: element.name,
                icon: getMarkerImage(element.type, element.type == 1 ? bluenum : rednum)
            });
            attachSecretMessage(marker, element.name, element.address);

        });
        html += "</table>";
        $("#map_title").html(html);
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    function attachSecretMessage(marker, message, address) {
        var add = address ? address : "";
        var infowindow = new google.maps.InfoWindow({
            content: "<b>中文名:</b>" + message + "<br/><b>地址:</b>" + add
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(marker.get('map'), marker);
        });
    }

    function getMarkerImage(type, num) {
        console.log(type);
        var basePath = "http://img02.haiwaner.com/hwpc/res/images/googleMapIcon";
        if (type == 1) {
            if (num > 0 && num < 7) {
                return changeImgSize(basePath + "/icon_location_blue_" + num + ".png");
            } else {
                return changeImgSize(basePath + "/icon_location_blue.png");
            }
        } else {
            if (num > 0 && num < 7) {
                return changeImgSize(basePath + "/icon_location_red_" + num + ".png");
            } else {
                return changeImgSize(basePath + "/icon_location_red.png");
            }
        }
    }

    function changeImgSize(image) {
        return new google.maps.MarkerImage(image,
            null, /* size is determined at runtime */
            null, /* origin is 0,0 */
            null, /* anchor is bottom center of the scaled image */
            new google.maps.Size(33, 44)
        );
    }
}
function changeTitle(id) {
    $(".tour-related").children().children("span").removeClass("hover");
    $(".tour-related").children().children("span:eq(" + id + ")").addClass("hover");
    $(".tour-related").children("ul").hide();
    $(".tour-related").children("ul#" + id).show();

    var container = $(".tour-related").children("ul#" + id);
    $("img.lazy_img").lazyload({
        container: container
    });
}