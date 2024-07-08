export function useReportConversion() {
    const reportConversion = (event, phoneNumber) => {
        event.preventDefault();
        gtag_report_conversion(`tel:${phoneNumber}`);
        setTimeout(() => {
            window.location.href = `tel:${phoneNumber}`;
        }, 300);
    };

    return { reportConversion };
}

export function gtag_report_conversion(url) {
    //conversion
    var callback = function () {
        if (typeof (url) !== 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-16604348544/crpGCLv2-b8ZEICBye09',
        'value': 10000.0,
        'currency': 'HUF',
        'event_callback': callback
    });
    return false;
}