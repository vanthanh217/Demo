$(document).ready(function () {
    const $slides = $('.slide-item');
    const $slideContainer = $('#slide-container');
    const $slideWrapper = $('#slide-wrapper');
    const $dotsContainer = $('#dots');
    const totalSlides = $slides.length;
    let currentIndex = 0;
    let autoplayInterval;

    function renderDots() {
        $dotsContainer.empty();

        for (let i = 0; i < totalSlides; i++) {
            const dot = $('<li>', {
                class: 'bg-gray-300 cursor-pointer select-none rounded-full size-3 data-[dot=active]:bg-secondary dot-item',
                'data-dot': i === currentIndex ? 'active' : 'inactive',
            });

            dot.on('click', function () {
                stopAutoplay();
                currentIndex = i;
                updateSlider();
                updateDots();
                startAutoplay();
            });

            $dotsContainer.append(dot);
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
        updateDots();
    }

    function updateSlider() {
        const slideWidth = $slides.first().outerWidth();
        $slideContainer.css(
            'transform',
            `translateX(-${currentIndex * slideWidth}px)`,
        );
    }

    function updateDots() {
        $('.dot-item').attr('data-dot', 'inactive');
        $('.dot-item').eq(currentIndex).attr('data-dot', 'active');
    }

    function startAutoplay() {
        const autoplayDuration = parseInt($slideWrapper.attr('data-autoplay'));

        if (autoplayDuration && !isNaN(autoplayDuration)) {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
            autoplayInterval = setInterval(nextSlide, autoplayDuration);
        }
    }

    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    renderDots();

    startAutoplay();

    $slideWrapper.hover(
        function () {
            stopAutoplay();
        },
        function () {
            startAutoplay();
        },
    );

    $('#next-btn').on('click', function () {
        stopAutoplay();
        nextSlide();
        startAutoplay();
    });

    $('#prev-btn').on('click', function () {
        stopAutoplay();
        prevSlide();
        startAutoplay();
    });

    $(window).on('resize', updateSlider);
});
