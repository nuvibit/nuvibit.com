// cookie consent
window.addEventListener("load",function(){
    window.wpcb.init({
        "border":"thin",
        "colors":{"popup":{"background":"#606060","text":"#ffffff","border":"#f9f9f9"},
        "button":{"background":"#f9f9f9","text":"#000000"}},
        "corners":"large",
        "content":{
            "href":document.getElementById("js_cookieconsent_href").value,
            "message": document.getElementById("js_cookieconsent_message").value,
            "link": document.getElementById("js_cookieconsent_link").value,
            "button": document.getElementById("js_cookieconsent_dismiss").value
        },
        "position":"bottom-right"
    })
});

// slick carousel
(function ($) {
    'use strict';
    $('.product-image-slider').slick({
        autoplay: false,
        infinite: true,
        arrows: false,
        dots: true,
        customPaging: function (slider, i) {
            var image = $(slider.$slides[i]).data('image');
            return '<img class="img-fluid" src="' + image + '" alt="product-image">';
        }
    });
    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-arrow-right' aria-hidden='true'></i></button>",
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
})(jQuery);

// in december (11) let it snow on landing page
document.addEventListener('DOMContentLoaded', function () {
    const d = new Date();
    var month = d.getMonth();
    if (month == 11) {
        // let it snow
        $("#snow").toggle();
        new Snow('#snow', {
            number: 50,
            r: 5,
            v: 0.8
        });
    }
});

// event_listeners instead of on_click 
const zoom_elements = document.querySelectorAll('.zoom');
zoom_elements.forEach(el => el.addEventListener('click', event => {
    image_zoom(el);
}));

const language_elements = document.querySelectorAll('#lang-element');
language_elements.forEach(el => el.addEventListener('click', event => {
    update_language_pref(el.getAttribute('data-value'));
}));

const redirect_elements = document.querySelectorAll('#badge-element, #testimonial-element');
redirect_elements.forEach(el => el.addEventListener('click', event => {
    redirect(el.getAttribute('data-value'));
}));

const copy_elements = document.querySelectorAll('#copy-element');
copy_elements.forEach(el => el.addEventListener('click', event => {
    copy_url(url = el.getAttribute('data-value'));
}));

const calc_clear_elements = document.querySelectorAll('#ip_range, #subnet_cidrs');
calc_clear_elements.forEach(el => el.addEventListener('input', event => {
    if (el.getAttribute('data-value') == "clear") {
        clearValidate();
    }
}));

const calc_elements = document.querySelectorAll('#calc-element');
calc_elements.forEach(el => el.addEventListener('click', event => {
    if (el.getAttribute('data-value') == "reset") {
        resetCalculator();
    }
    if (el.getAttribute('data-value') == "validate") {
        return subnetCalculatorValidate();
    }
}));

const form_elements = document.querySelectorAll('form[name="vpccalc"]');
form_elements.forEach(el => el.addEventListener('submit', event => {
    event.preventDefault();
    const validation_error = document.getElementById("validation_message")
    if (validation_error.innerHTML == "") {
        subnetCalculator();
    }
}));

// google analytics
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', '{{ site.Config.Services.GoogleAnalytics.ID }}', { 'anonymize_ip': true });

// function to copy content to clipboard and display message
function copy_url(url) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(url).select();
    document.execCommand("copy");
    $temp.remove();
    // display alert message
    $(".alert").show();
    $(".alert").delay(2000).slideUp(200, function () {
        $(this).hide();
    });
}

// function to cancel image zoom
function cancel_zoom() {
    window.removeEventListener('scroll', cancel_zoom);
    var zoomed_img = document.getElementById("zoomed-image")
    if (zoomed_img) {
        zoomed_img.classList.add("img-max-400");
        zoomed_img.removeAttribute("id");
    }
    $(".zoomed").removeClass("zoomed");
    $(".zoom-blur").toggle();
}

// function to image zoom
function image_zoom(element) {
    var zoomed_img = element.firstElementChild;
    if (zoomed_img && zoomed_img.id == "zoomed-image") {
        zoomed_img.classList.add("img-max-400");
        zoomed_img.removeAttribute("id");
    } else if (zoomed_img.classList.contains("img-max-400")) {
        zoomed_img.classList.remove("img-max-400");
        zoomed_img.setAttribute("id", "zoomed-image");
    }
    if (!element.classList.contains("zoomed")) {
        $(".zoomed").removeClass("zoomed");
    }
    element.classList.toggle('zoomed');
    $(".zoom-blur").toggle();

    setTimeout(function () {
        if (element.classList.contains("zoomed")) {
            window.addEventListener('scroll', cancel_zoom, false)
        } else {
            window.removeEventListener('scroll', cancel_zoom);
        }
    }, 100);
}

// function to redirect to subpage
function redirect(url) {
    window.location.href = url;
}

// function to overwrite language preference
function update_language_pref(lang) {
    localStorage.setItem('lang', lang);
}

function uri_translate(uri, lang_now, lang_new) {
    var relocate_uri = uri;
    // english webpage doesn't include prefix in uri
    if (lang_now !== "en") {
        // remove language prefix from uri
        var uri_arr = uri.split('/');
        if (uri_arr[1] === lang_now) {
            uri_arr.splice(1, 1);
            relocate_uri = uri_arr.join('/');
        } else {
            // fail-safe in case uri language prefix could not be removed -> redirect to home
            relocate_uri = "/"
        }
    }
    // add new language prefix to url
    if (lang_new !== "en") {
        relocate_uri = "/" + lang_new + relocate_uri;
    }

    return relocate_uri;
}

// function to copy subnet to clipboard
function copy_subnet(subnet, id) {
    var $temp = $("<input>");
    $("body").append($temp);
    element = document.getElementById(id);
    $temp.val(subnet).select();
    document.execCommand("copy");
    $temp.remove();
    element.classList.add("fa-solid");
}

// function to reset custom validation
function clearValidate() {
    const validation_error = document.getElementById("validation_message")
    if (validation_error.innerHTML != "") {
        document.getElementById('ip_range').classList.remove("btn-validation-error");
        document.getElementById('subnet_cidrs').classList.remove("btn-validation-error");
        validation_error.innerHTML = "";
    }
}

// function to add custom validation message for network ranges and cidr blocks
function subnetCalculatorValidate() {
    const ip_range = document.getElementById('ip_range');
    const ip_range_regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}\s?\/([8-9]|1[0-9]|2[0-8])$/
    const subnet_cidrs = document.getElementById('subnet_cidrs');
    const subnet_cidrs_regex = /^\/?(1[6-9]|2[0-8])(,\s?\/?(1[6-9]|2[0-8]))*$/

    if (ip_range_regex.test(ip_range.value)) {
        document.getElementById("validation_message").innerHTML = "";
        ip_range.classList.remove("btn-validation-error");
    } else {
        let message = "Allowed is a valid IPv4 network range (e.g. 172.31.0.0/16) with CIDR block between 8 and 28"
        ip_range.classList.add("btn-validation-error");
        document.getElementById("validation_message").innerHTML = message;
        return false;
    }

    if (subnet_cidrs_regex.test(subnet_cidrs.value)) {
        document.getElementById("validation_message").innerHTML = "";
        subnet_cidrs.classList.remove("btn-validation-error");
    } else {
        let message = "Allowed is a single CIDR block (e.g. 24) or a comma separated list (e.g. 24,24,24) between 16 and 28"
        subnet_cidrs.classList.add("btn-validation-error");
        document.getElementById("validation_message").innerHTML = message;
        return false;
    }
    return true;
}

function resetCalculator() {
    // reset button values
    document.getElementById("ip_range").value = "";
    document.getElementById("subnet_cidrs").value = "";
    location.reload();
}

// function to calculate subnets based on network range and cidr blocks
function subnetCalculator() {
    // get supernet/major network range from input
    var supernet = document.getElementById("ip_range").value.replace(/\s+/g, '');
    // calculate info of supernet
    var supernet_network = supernet.split("/")[0]
    var supernet_cidr = supernet.split("/")[1]
    // get network address
    var network_info = IpSubnetCalculator.calculateSubnetMask(supernet_network, supernet_cidr);
    // replace ip range with actual network range
    supernet_network = network_info.ipLowStr


    var supernet_ips = 2 ** (32 - supernet_cidr)
    // get cidr blocks from input
    var tmp = document.getElementById("subnet_cidrs").value.replace(/\s+/g, '');
    var subnet_cidrs = tmp.replace("/", "").split(",").sort()
    // define subnet placeholder variables
    var subnets_calculated = []
    var subnet_count = 0
    var subnet_ips_sum = 0
    // if a single cidr block in list then divide network equally
    if (subnet_cidrs.length == 1) {
        prefix_length = subnet_cidrs[0]
        prefix_count = 2 ** (Math.max(prefix_length - supernet_cidr, 0))
        subnet_cidrs = Array(prefix_count).fill(prefix_length)
    }
    // set initial network iteration
    current_network = supernet_network
    subnet_count = subnet_cidrs.length
    // get subnet table to dynamically append with calculation results
    var table = document.getElementsByClassName("subnet-table")[0]
    // delete existing subnet table content
    $(".subnet-table td").remove();
    // loop for every subnet and calculate network address
    for (var i = 0, subnet_cidr; subnet_cidr = subnet_cidrs[i++];) {
        subnet_ips = 2 ** (32 - subnet_cidr)
        subnet = current_network + "/" + subnet_cidr
        subnets_calculated.push(subnet)
        // update current network iteration
        current_subnet_decimal = IpSubnetCalculator.toDecimal(current_network);
        current_subnet_decimal += subnet_ips
        current_network = IpSubnetCalculator.toString(current_subnet_decimal)
        subnet_ips_sum += subnet_ips
        // generate new table row
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        // generate cell content
        copy_id = "copy-subnet" + i
        copy_icon = "<i id='" + copy_id + "' class='fa-regular fa-copy'></i>";
        copy_html = "<span class='copy-table-cell' id='subnet-element' data-value=\"" + subnet + "#" + copy_id + "\">" + copy_icon + "</span>";
        subnet_cell = subnet + copy_html;
        cell1.innerHTML = subnet_cell
        cell2.innerHTML = 2 ** (32 - subnet_cidr) - 5;
        if (subnet_ips_sum > supernet_ips) {
            cell1.style.color = "Red";
            cell2.style.color = "Red";
        }
    }
    // enable subnet calculation stats
    document.getElementById("subnet_stats").hidden = false;
    // check if address space was oversubscribed
    if (subnet_ips_sum > supernet_ips) {
        var status = "not successful";
        if (userLangPref && userLangPref === "de") {
            status = "nicht erfolgreich";
        }
        document.getElementById("subnet_stats_status").style.color = "Red";
        document.getElementById("subnet_stats_usage").style.color = "Red";
    } else {
        var status = "successful";
        if (userLangPref && userLangPref === "de") {
            status = "erfolgreich";
        }
        document.getElementById("subnet_stats_status").style.color = "ForestGreen";
        document.getElementById("subnet_stats_usage").style.color = "ForestGreen";
    }
    // enable and update subnet calculator stats
    subnet_stats_network = document.getElementById("subnet_stats_network");
    subnet_stats_network.innerHTML = supernet_network + "/" + supernet_cidr;
    subnet_stats_count = document.getElementById("subnet_stats_count");
    subnet_stats_count.innerHTML = subnet_count;
    subnet_stats_status = document.getElementById("subnet_stats_status");
    subnet_stats_status.innerHTML = status;
    subnet_stats_usage = document.getElementById("subnet_stats_usage");
    subnet_stats_usage.innerHTML = Math.round(subnet_ips_sum / supernet_ips * 100);
    // add event listener
    const subnet_elements = document.querySelectorAll('#subnet-element');
    subnet_elements.forEach(el => el.addEventListener('click', event => {
        data = el.getAttribute('data-value').split("#");
        copy_subnet(subnet = data[0], id = data[1])
    }));
}

// determine the language preference for the user
var pageLang = document.getElementById("js_pageLang").value;
// get browser language as shortcode - example: de_ch -> de
var browserLang = navigator.language || navigator.userLanguage;
browserLang = browserLang.substring(0, 2);
// get supported languages from hugo
var supportedLang = document.getElementById("js_supportedLang").value.match(/\[(.*?)\]/)[1].split(" ");
// get base url and uri
var base_url = document.getElementById("js_base_url").value.replace(/\/$/, "");
var uri = document.getElementById("js_uri").value;
// try to read language preference from local storage and check if supported
userLangPref = localStorage.getItem('lang');
if (userLangPref && supportedLang.includes(userLangPref)) {
    // switch language if current language is not same as preference
    if (pageLang !== userLangPref) {
        // translate uri before redirecting - example: /de/contact -> /contact
        relocate_uri = uri_translate(uri, lang_now = pageLang, lang_new = userLangPref);
        window.location.href = base_url + relocate_uri;
    }
} else {
    // set language to english if browser language not supported
    if (!supportedLang.includes(browserLang)) {
        browserLang = "en";
    }
    // save language preference to local storage
    localStorage.setItem('lang', browserLang);
    if (localStorage.getItem('lang') === browserLang && pageLang !== browserLang) {
        // translate uri before redirecting - example: /contact -> /de/contact
        relocate_uri = uri_translate(uri, lang_now = pageLang, lang_new = browserLang);
        window.location.href = base_url + relocate_uri;
    }
}

// append open in new tab to links which are external
$(document.links).filter(function () {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');