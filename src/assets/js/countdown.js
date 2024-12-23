$(document).ready(() => {
    const dateEnd = $('#countdown').data('date-end');
    const [date, time] = dateEnd.split(' ');
    const [day, month, year] = date.split('-');
    const targetDate = new Date(`${year}-${month}-${day}T${time}`).getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            $('#days').text('00');
            $('#hours').text('00');
            $('#mins').text('00');
            $('#secs').text('00');
            return;
        }

        const days = Math.floor(difference / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
            (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
        );
        const mins = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
        const secs = Math.floor((difference % (60 * 1000)) / 1000);

        $('#days').text(String(days).padStart(2, '0'));
        $('#hours').text(String(hours).padStart(2, '0'));
        $('#mins').text(String(mins).padStart(2, '0'));
        $('#secs').text(String(secs).padStart(2, '0'));
    };

    setInterval(updateCountdown, 1000);

    updateCountdown();
});
