$(document).ready(function () {
    $('#remplacer').change(function () {
        $('body').toggleClass('dark', this.checked);
    });
});