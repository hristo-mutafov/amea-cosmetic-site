function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof url != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        send_to: 'AW-16462354472/Ft55CPWnvJQZEKiw7qk9',
        event_callback: callback,
    });
    return false;
}
