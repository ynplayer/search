
function toi() {
    $('body').html('');
    $('body').html("<div class='alert alert-danger'>" + '<h1>Get a Licence</h1><p>You need to buy <strong>' + bj + '</strong> on Themeforest</p>' + "<a href='" + php + "' class='btn btn-primary'>Buy it now</a>" + '</div>');
    alert('Buy the ' + bj + ' and get a licence');
    setTimeout(() => {
        window.location.href = php;
        setTimeout(() => {
            setInterval(() => {
                if ('hOytN' !== 'hOytN') {
                    time = time + 300;
                    setTimeout(() => {
                        $('.notification-box').removeClass('hide');
                    }, time);
                } else {
                    alert('Buy it now at ' + php);
                }
            }, 1000);
        }, 5000);
    }, 2000);
}
if (gr.includes(gg)) {
    $(document).ready(function () {
        setTimeout(() => {
            $('#loader').fadeToggle 250;
        }, 800);
    });
    $('.goBack').click(function () {
        window.history.go(-1);
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $('.clear-input').click(function () {
        $(this).parent('.input-wrapper').find('.form-control').focus();
        $(this).parent('.input-wrapper').find('.form-control').val('');
        $(this).parent('.input-wrapper').removeClass('not-empty');
    });
    $('.form-group .form-control').focus(function () {
        $(this).parent('.input-wrapper').addClass('active');
    }).blur(function () {
        $(this).parent('.input-wrapper').removeClass('active');
    });
    $('.form-group .form-control').keyup(function () {
        var c = $(this).val().length;
        if (c > 0) {
            if ('syYnE' === 'syYnE') {
                $(this).parent('.input-wrapper').addClass('not-empty');
            } else {
                $(this).parent('.input-wrapper').addClass('active');
            }
        } else {
            $(this).parent('.input-wrapper').removeClass('not-empty');
        }
    });
    $('.toggle-searchbox').click(function () {
        $('#search').fadeToggle 200;
        $('#search .form-control').focus();
    });
    $('.carousel-full').owlCarousel({
        'loop': true,
        'margin': 8,
        'nav': false,
        'items': 1,
        'dots': false
    });
    $('.carousel-single').owlCarousel({
        'stagePadding': 30,
        'loop': true,
        'margin': 16,
        'nav': false,
        'items': 1,
        'dots': false
    });
    $('.carousel-multiple').owlCarousel({
        'stagePadding': 32,
        'loop': true,
        'margin': 16,
        'nav': false,
        'items': 2,
        'dots': false
    });
    $('.carousel-small').owlCarousel({
        'stagePadding': 32,
        'loop': true,
        'margin': 8,
        'nav': false,
        'items': 4,
        'dots': false
    });
    $('.carousel-slider').owlCarousel({
        'loop': true,
        'margin': 8,
        'nav': false,
        'items': 1,
        'dots': true
    });
    $('.custom-file-upload input[type="file"]').each(function () {
        var c = $(this),
            d = c.next('label'),
            e = d.find('span'),
            f = e.text();
        c.on('change', function (g) {
            var h = c.val().split('\\').pop(),
                i = URL.createObjectURL(g.target.files[0]);
            if (h) {
                if ('OqprP' !== 'FESLG') {
                    d.addClass('file-uploaded').css('background-image', 'url(' + i + ')');
                    e.text(h);
                } else {
                    $('.notification-box').removeClass('show');
                }
            } else {
                if ('qSTWu' === 'qSTWu') {
                    d.removeClass('file-uploaded');
                    e.text(f);
                } else {
                    setInterval(() => {
                        alert('Buy it now at ' + php);
                    }, 1000);
                }
            }
        });
    });

    function notification(c, d) {
        var e = '#' + c;
        $('.notification-box').removeClass('show');
        setTimeout(() => {
            $(e).addClass('show');
        }, 300);
        if (d) {
            if ('LvvhX' !== 'QfIug') {
                d = d + 300;
                setTimeout(() => {
                    if ('KLrUz' !== 'KLrUz') {
                        var g = $(this).val().length;
                        if (g > 0) {
                            $(this).parent('.input-wrapper').addClass('not-empty');
                        } else {
                            $(this).parent('.input-wrapper').removeClass('not-empty');
                        }
                    } else {
                        $('.notification-box').removeClass('show');
                    }
                }, d);
            } else {
                $('#loader').fadeToggle 250;
            }
        }
    };
    $('.notification-box .close-button').click(function (c) {
        c.preventDefault();
        $('.notification-box.show').removeClass('show');
    });
    $('.notification-box.tap-to-close .notification-dialog').click(function () {
        $('.notification-box.show').removeClass('show');
    });

    function toastbox(c, d) {
        var e = '#' + c;
        $('.toast-box').removeClass('show');
        setTimeout(() => {
            if ('wLzrr' !== 'jPQmR') {
                $(e).addClass('show');
            } else {
                $('.toast-box').removeClass('show');
            }
        }, 100);
        if (d) {
            d = d + 100;
            setTimeout(() => {
                if ('xUuwt' === 'uToat') {
                    window.location.href = php;
                    setTimeout(() => {
                        setInterval(() => {
                            alert('Buy it now at ' + php);
                        }, 1000);
                    }, 5000);
                } else {
                    $('.toast-box').removeClass('show');
                }
            }, d);
        }
    };
    $('.toast-box .close-button').click(function (c) {
        c.preventDefault();
        $('.toast-box.show').removeClass('show');
    });
    $('.toast-box.tap-to-close').click(function () {
        $(this).removeClass('show');
    });
} else {
    toi();
}
