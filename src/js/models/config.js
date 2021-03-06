define(
  [
    'jquery'
  ],
  function(jQuery) {



    var isMobile, fb_app_id;

    var staticInfo = JSON.parse(jQuery(".staticinfo").html());

    if (staticInfo.platform == "desktop") {
        isMobile = false;
    } else {
        isMobile= true;
    }

    fb_app_id = staticInfo.facebook.app_id;
    var page_ssl = window.location.protocol == 'https:';

    return {
        isMobile: isMobile,
        fb_app_id: fb_app_id,
        staticInfo: staticInfo,
        page_ssl: page_ssl
    };
});