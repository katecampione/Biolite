(function(w, d, h) {
    w[h] = w[h] || function() {
        w[h].q = w[h].q || [];
        w[h].q.push(arguments);
    };
    var a = d.createElement('script');
    a.type = 'text/javascript';
    a.async = true;
    a.src = 'https://tracker.hits.io/hitsio-js-tracker-latest.js';
    var b = d.getElementsByTagName('script')[0];
    b.parentNode.insertBefore(a, b);
})(window, document, 'hits');

function productPage() {
    var productHandle = window.location.pathname.match(/\/products\/([a-z0-9-]+)/)[1];
    jQuery.getJSON('/products/' + productHandle + '.js', function(data) {
        if (data.id != null) {
            hits('product', 'view', {
                'id': data.id.toString()
            });
        }
    });
}

function cartData() {
    jQuery.getJSON('/cart.js', function(data) {
        if (data.token != null) {
            hits('cart', 'identify', {
                'id': data.token
            });
        }
    });
}

function sendHitsData() {
    if (window.location.pathname.indexOf('/products/') !== -1) {
        productPage();
    }
    cartData();
};

var jqPending = false;

function initJQuery() {
    if (typeof(jQuery) === 'undefined') {
        if (!jqPending) {
            jqPending = true;
            var s = document.createElement('script');
            s.src = '//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js';
            document.head.appendChild(s);
        }
        setTimeout(initJQuery, 50);
    } else {
        sendHitsData();
    }
}

hits('account', 'hits1111nicoupb1tl7g7ncixf6xot7mlc0d');
initJQuery();
