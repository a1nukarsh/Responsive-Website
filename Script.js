var test = function () {
    let sidebar = document.getElementById('sidebar');
    let openButton = document.getElementById('burger');
    let closeButton = document.getElementById('close');

    navtoggle = function () {
        openButton.addEventListener('click', _ => {
            sidebar.classList.add('open');
        });

        closeButton.addEventListener('click', _ => {
            sidebar.classList.remove('open');
        });
    };

    window.onload = function () {
        console.log('loaded');
        navtoggle();
    };
}();