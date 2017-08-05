jQuery(function ($) {
	'use strict';

	var $window = $(window);
	var $body = $('body');

	/* -----------------------------------------
	 Responsive Menus Init with mmenu
	 ----------------------------------------- */
	var $mainNav = $('.navigation-main');
	var $mobileNav = $('#mobilemenu');

	$mainNav.each(function () {
		var $this = $(this);
		$this.clone()
			.removeAttr('id')
			.removeClass()
			.appendTo($mobileNav.find('ul'));
	});
	$mobileNav.find('li').removeAttr('id');

	$mobileNav.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		},
		autoHeight: true,
		navbars: [
			{
				position: 'top',
				content: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});

	/* -----------------------------------------
	 Sticky Header
	 ----------------------------------------- */
	$('.head-sticky').stick_in_parent({
		parent: 'body',
		sticky_class: 'is-stuck'
	});

	/* -----------------------------------------
	 Header Search Toggle
	 ----------------------------------------- */
	var $searchTrigger = $('.head-search-trigger');
	var $headSearchForm = $('.head-search-form');

	function dismissHeadSearch(e) {
		if (e) {
			e.preventDefault();
		}

		$headSearchForm.removeClass('head-search-expanded');
		$body.focus();
	}

	function displayHeadSearch(e) {
		if (e) {
			e.preventDefault();
		}

		$headSearchForm
			.addClass('head-search-expanded')
			.find('input')
			.focus();
	}

	function isHeadSearchVisible() {
		return $headSearchForm.hasClass('head-search-expanded')
	}

	$searchTrigger.on('click', displayHeadSearch);

	/* Event propagations */
	$(document).on('keydown', function (e) {
		e = e || window.e;
		if (e.keyCode === 27 && isHeadSearchVisible()) {
			dismissHeadSearch(e);
		}
	});

	$body
		.on('click', function (e) {
			if (isHeadSearchVisible()) {
				dismissHeadSearch();
			}
		})
		.find('.head-search-form, .head-search-trigger')
		.on('click', function (e) {
			e.stopPropagation();
		});


	/* -----------------------------------------
	 Responsive Videos with fitVids
	 ----------------------------------------- */
	$body.fitVids();

	/* -----------------------------------------
	 Image Lightbox
	 ----------------------------------------- */
	$('.ci-lightbox').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true
		}
	});

	/* -----------------------------------------
	 Grid Animations Init
	 ----------------------------------------- */
	var $itemEffectLists = $('.row-effect');

	if ($itemEffectLists.length) {
		$itemEffectLists.each(function () {
			var el = $(this).get(0);

			new AnimOnScroll(el, {
				minDuration: 0.4,
				maxDuration: 0.7,
				viewportFactor: 0.2
			});
		});
	}

	$window.on('load', function () {
		/* -----------------------------------------
		 Hero Slideshow
		 ----------------------------------------- */
		var $heroSlideshow = $('.page-hero-slideshow');
		var navigation = $heroSlideshow.data('navigation');
		var effect = $heroSlideshow.data('effect');
		var speed = $heroSlideshow.data('slide-speed');
		var auto = $heroSlideshow.data('autoslide');

		if ($heroSlideshow.length) {
			$heroSlideshow.slick({
				arrows: navigation === 'arrows',
				dots: navigation === 'dots',
				fade: effect === 'fade',
				autoplaySpeed: speed,
				autoplay: auto === true,
				prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
			});
		}

		/* -----------------------------------------
		 Isotope Filtering
		 ----------------------------------------- */
		var $grid = $('.row-isotope').isotope();
		var $filters = $('.item-filter');

		$filters.on('click', function (event) {
			var $this = $(this);
			var filterValue = $this.data('filter');
			$filters.removeClass('filter-active');
			$this.addClass('filter-active');

			// Remove all grid effects which might interfere
			// with isotope's animations
			$($grid).removeClass(function (index, className) {
				return (className.match(/(^|\s)row-effect*\S+/g) || []).join(' ');
			});

			$grid.isotope({ filter: filterValue });
			event.preventDefault();
		});

		/* -----------------------------------------
		 Video Backgrounds
		 ----------------------------------------- */
		var $videoBg = $('.ci-video-background');

		// YouTube videos
		function onYouTubeAPIReady($videoBg) {
			if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
				return setTimeout(onYouTubeAPIReady.bind(null, $videoBg), 333);
			}

			var $videoWrap = $videoBg.parents('.ci-video-wrap');
			var $video = $videoBg.find('div').get(0);
			var ytPlayer = new YT.Player($video, {
				videoId: $videoBg.data('video-id'),
				playerVars: {
					autoplay: 1,
					controls: 0,
					showinfo: 0,
					modestbranding: 1,
					loop: 1,
					playlist: $videoBg.data('video-id'),
					fs: 0,
					cc_load_policy: 0,
					iv_load_policy: 3,
					autohide: 0
				},
				events: {
					onReady: function (event) {
						event.target.mute();
					},
					onStateChange: function (event) {
						if (event.data === YT.PlayerState.PLAYING) {
							$videoWrap.addClass('visible');
						}
					}
				}
			});
		}

		function onVimeoAPIReady($videoBg) {
			if (typeof Vimeo === 'undefined' || typeof Vimeo.Player === 'undefined') {
				return setTimeout(onVimeoAPIReady.bind(null, $videoBg), 333);
			}

			var $videoWrap = $videoBg.parents('.ci-video-wrap');
			var player = new Vimeo.Player($videoBg, {
				id: $videoBg.data('video-id'),
				loop: true,
				autoplay: true,
				byline: false,
				title: false,
				autopause: false,
			});

			player.setVolume(0);

			// Cuepoints seem to be the best way to determine
			// if the video is actually playing or not
			player.addCuePoint(.1).catch(function () {
				$videoWrap.addClass('visible');
			});

			player.on('cuepoint', function () {
				$videoWrap.addClass('visible');
			});
		}

		if ($videoBg.length && window.innerWidth > 1080) {
			$videoBg.each(function () {
				var $this = $(this);
				var firstScript = $('script');
				var videoType = $this.data('video-type');

				if (videoType === 'youtube') {
					if (!$('#youtube-api-script').length) {
						var tag = $('<script />', { id: 'youtube-api-script' });
						tag.attr('src', 'https://www.youtube.com/player_api');
						firstScript.parent().prepend(tag);
					}
					onYouTubeAPIReady($this);
				} else if (videoType === 'vimeo') {
					if (!$('#vimeo-api-script').length) {
						var tag = $('<script />', { id: 'vimeo-api-script' });
						tag.attr('src', 'https://player.vimeo.com/api/player.js');
						firstScript.parent().prepend(tag);
					}
					onVimeoAPIReady($this);
				}
			});
		}
	});
});
