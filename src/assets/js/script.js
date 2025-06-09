(function () {
    "use strict";
	
    // DOM Elements
    const $wrapper = $('.main-wrapper');
    const $slimScrolls = $('.slimscroll');
    const $pageWrapper = $('.page-wrapper');
    feather.replace();

    // Page Content Height Resize
    $(window).resize(() => {
        if ($pageWrapper.length) {
            $pageWrapper.css("min-height", $(window).height());
        }
    }).resize();

    // Mobile Menu Sidebar Overlay
    $('body').append('<div class="sidebar-overlay"></div>');
	
    $(document).on('click', '#mobile_btn', (e) => {
		e.preventDefault();
		var $wrapper = $('.main-wrapper'); 
        $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').toggleClass('menu-opened');
		
        $('#task_window').removeClass('opened');
        return false;
    });

    $('.sidebar-overlay').on('click', () => {
		var $wrapper = $('.main-wrapper'); 
        $('html').removeClass('menu-opened');
		
        $('.sidebar-overlay').removeClass('opened');
        $wrapper.removeClass('slide-nav');
        $('#task_window').removeClass('opened');
    });
	
    // Hide/Delete Elements
    $(document).on('click', '.hideset, .delete-set', function () {
        $(this).closest('.hideset-parent, .delete-set-parent').hide();
		
    });

    // Sticky Sidebar
    if ($(window).width() > 767 && $('.theiaStickySidebar').length) {
        $('.theiaStickySidebar').theiaStickySidebar({ additionalMarginTop: 30 });
    }

    // DataTable
    if ($('.datatable').length) {
        $('.datatable').DataTable({
            bFilter: true,
            ordering: true,
            info: true,
            language: {
                search: ' ',
                sLengthMenu: 'Row Per Page _MENU_ Entries',
                searchPlaceholder: "Search",
                info: "Showing _START_ - _END_ of _TOTAL_ entries",
                paginate: {
                    next: '<i class="ti ti-chevron-right"></i>',
                    previous: '<i class="ti ti-chevron-left"></i>'
                }
            }
        });
    }

    // Loader
    setTimeout(() => $("#global-loader").fadeOut("slow"), 200);

    // Datetimepicker
    if ($('.datetimepicker').length) {
        $('.datetimepicker').datetimepicker({
            format: 'DD-MM-YYYY',
            icons: { up: "fas fa-angle-up", down: "fas fa-angle-down", next: 'fas fa-angle-right', previous: 'fas fa-angle-left' }
        });
    }

    // Password Toggle
    const togglePassword = (selector, inputClass) => {
        $(document).on('click', selector, function () {
            $(this).toggleClass("ti-eye ti-eye-off");
            const $input = $(inputClass);
            $input.attr("type", $input.attr("type") === "password" ? "text" : "password");
        });
    };
    togglePassword('.toggle-password', '.pass-input');
    togglePassword('.toggle-passwords', '.pass-inputs');
    togglePassword('.toggle-passworda', '.pass-inputa');

    // Select2
    if ($('.select2, .select').length) {
        $('.select2, .select').select2({ minimumResultsForSearch: -1, width: '100%' });
    }

    // Select Image
    if ($('.select-img').length) {
        $('.select-img').select2({
            minimumResultsForSearch: Infinity,
            templateResult: state => !state.id ? state.text : $('<span><img src="' + $(state.element).attr('data-image') + '" class="img-flag" width="16px"> ' + state.text + '</span>'),
            templateSelection: state => !state.id ? state.text : $('<span><img src="' + $(state.element).attr('data-image') + '" class="img-flag" width="16px"> ' + state.text + '</span>')
        });
    }

    // Summernote
    if ($('.summernote').length) {
        $('.summernote').summernote({
            height: 100,
            focus: true,
            toolbar: [['fontsize', ['fontsize']], ['font', ['bold', 'italic', 'underline', 'clear', 'strikethrough']], ['insert', ['picture']]]
        });
    }

    // SlimScroll
    if ($slimScrolls.length) {
        $slimScrolls.slimScroll({
            height: 'auto',
            width: '100%',
            position: 'right',
            size: '7px',
            color: '#ccc',
            wheelStep: 10,
            touchScrollStep: 100
        });
        const updateSlimScrollHeight = () => {
            const height = $(window).height() - 60;
            $slimScrolls.height(height);
            $('.sidebar .slimScrollDiv').height(height);
        };
        updateSlimScrollHeight();
        $(window).resize(updateSlimScrollHeight);
    }

    // Sidebar Menu
    class Sidemenu {
        constructor() {
            this.$menuItem = $('.sidebar-menu a');
        }
		
        init() {
            this.$menuItem.on('click', function (e) {
                if ($(this).parent().hasClass('submenu')) {
                    e.preventDefault();
                }
                if (!$(this).hasClass('subdrop')) {
                    $('ul', $(this).parents('ul:first')).slideUp(250);
                    $('a', $(this).parents('ul:first')).removeClass('subdrop');
                    $(this).next('ul').slideDown(350);
                    $(this).addClass('subdrop');
                } else {
                    $(this).removeClass('subdrop');
                    $(this).next('ul').slideUp(350);
                }
            });
            $('.sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
        }
		
    }
    new Sidemenu().init();

    // Sidebar Hover
    $(document).on('mouseover', e => {
        if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
            const targ = $(e.target).closest('.sidebar, .header-left').length;
            $('body').toggleClass('expand-menu', targ);
            $('.subdrop + ul').toggle(targ);
        }
    });

    // Right Sidebar Menu
    class Colsidemenu {
        constructor() {
            this.$menuItems = $('.sidebar-right a');
        }
        init() {
            this.$menuItems.on('click', function (e) {
                if ($(this).parent().hasClass('submenu')) {
                    e.preventDefault();
                }
                if (!$(this).hasClass('subdrop')) {
                    $('ul', $(this).parents('ul:first')).slideUp(250);
                    $('a', $(this).parents('ul:first')).removeClass('subdrop');
                    $(this).next('ul').slideDown(350);
                    $(this).addClass('subdrop');
                } else {
                    $(this).removeClass('subdrop');
                    $(this).next('ul').slideUp(350);
                }
            });
            $('.sidebar-right ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
        }
    }
    new Colsidemenu().init();

    // Table Responsive
    setTimeout(() => $('.table').parent().addClass('table-responsive'), 1000);

    // Date Range Picker
    if ($('.bookingrange, .daterange').length) {
        const initDateRangePicker = (selector, options) => {
            $(selector).daterangepicker(options);
            if (selector === '.bookingrange') {
                const start = moment().subtract(6, 'days');
                const end = moment();
                $(selector).find('span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
            } else {
                $(selector).on('apply.daterangepicker', (ev, picker) => {
                    $(selector).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
                }).on('cancel.daterangepicker', () => $(selector).val(''));
            }
        };
        initDateRangePicker('.bookingrange, .daterange', {
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Year': [moment().startOf('year'), moment().endOf('year')],
                'Next Year': [moment().add(1, 'year').startOf('year'), moment().add(1, 'year').endOf('year')]
            },
            locale: { cancelLabel: 'Clear' }
        });
    }

    // Toggle Sidebar
    // $(document).on('click', '#toggle_btn', () => {
        
    //     const $body = $('body');
    //     console.log("toggle clcik")
    //     $body.toggleClass('mini-sidebar');
    //     $('#toggle_btn').toggleClass('active');
    //     $('.header-left').toggleClass('active');
    //     localStorage.setItem('screenModeNightTokenState', $body.hasClass('mini-sidebar') ? '' : 'night');
    // });

    // Theme and Layout
    $('.themecolorset, .theme-layout').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Fullscreen
    $('.win-maximize, .btnFullscreen').on('click', () => {
        !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
    });

    // Check All
    $('#check_all, #select-all, #select-all2').on('click', function () {
        const checkboxes = $(this.dataset.target || ':checkbox');
        checkboxes.prop('checked', this.checked);
    });

    // Tooltip
    if ($('[data-bs-toggle="tooltip"]').length) {
        $('[data-bs-toggle="tooltip"]').each((_, el) => new bootstrap.Tooltip(el));
    }

    // Theme Mode
    if (window.location.hash === "#LightMode") {
        localStorage.setItem('theme', 'dark');
    } else if (window.location.hash === "#DarkMode") {
        localStorage.setItem('theme', 'light');
    }

    // Tabs
    $('ul.tabs li').on('click', function () {
        const tabId = $(this).attr('id');
        if (!$(this).hasClass('active')) {
            $(this).closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
            $(`.tabs_container .tab_content[data-tab="${tabId}"], ul.tabs li[id="${tabId}"]`).addClass('active');
        }
    });

    // Datetimepicker with Time
    if ($('.timepicker').length) {
        $('.timepicker').datetimepicker({
            format: 'HH:mm A',
            icons: { up: "fas fa-angle-up", down: "fas fa-angle-down", next: 'fas fa-angle-right', previous: 'fas fa-angle-left' }
        });
    }

    // Collapse Header
    $('#collapse-header').on('click', function () {
        this.classList.toggle('active');
        document.body.classList.toggle('header-collapse');
    });

    // Increment/Decrement
    $('.inc, .dec').on('click', function () {
        const $input = $(this).parent().find('input');
        const delta = $(this).hasClass('inc') ? 1 : -1;
        $input.val(Math.max(parseInt($input.val(), 10) + delta, 0));
    });

    // Card Fullscreen and Remove
    $('[data-bs-toggle="card-fullscreen"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-collapsed');
    });
    $('[data-bs-toggle="card-remove"]').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.card').remove();
    });

    // Rating Select
    setTimeout(() => $('.rating-select').on('click', function () {
        $(this).find('i').toggleClass('ti-star ti-star-filled filled');
    }), 100);

    // Yearpicker
    if ($('.yearpicker').length) {
        $('.yearpicker').datetimepicker({
            viewMode: 'years',
            format: 'YYYY',
            icons: { up: "fas fa-angle-up", down: "fas fa-angle-down", next: 'fas fa-angle-right', previous: 'fas fa-angle-left' }
        });
    }

    // Image Upload
    $('.image-sign').on('change', function () {
        const $frames = $(this).closest('.upload-pic').find('.frames').empty();
        Array.from(this.files).forEach(file => {
            $frames.append(`<img src="${window.URL.createObjectURL(file)}" width="100px" height="100px">`);
        });
    });

    // Inline Datepicker
    if ($('.datepic').length) {
        $('.datepic').datetimepicker({
            format: 'DD-MM-YYYY',
            keepOpen: true,
            inline: true,
            icons: { up: "fas fa-angle-up", down: "fas fa-angle-down", next: 'fas fa-angle-right', previous: 'fas fa-angle-left' }
        });
    }

    // Stack Menu
    if ($('.stack-menu').length) {
        let activeTab = null;
        $('.stack-menu .nav a').on('click', function (e) {
            e.preventDefault();
            const currentTab = $(this).attr('href');
            if (activeTab === currentTab) {
                $(currentTab).toggle();
                activeTab = $(currentTab).is(':visible') ? currentTab : null;
            } else {
                $('#myTabContent .tab-pane').hide();
                $(currentTab).show();
                activeTab = currentTab;
            }
        });
    }

    // Contact Wizard
    $('.add-info-fieldset .wizard-next-btn').on('click', function () {
        const $fieldset = $(this).closest('fieldset');
        $fieldset.hide().next().fadeIn('slow');
        $('.progress-bar-wizard .active').removeClass('active').addClass('activated').next().addClass('active');
    });

    // Multiselect
    if ($('#customleave_select, #edit_customleave_select').length) {
        $('#customleave_select, #edit_customleave_select').multiselect();
    }
	
})();





