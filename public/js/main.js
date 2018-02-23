$(document).ready(function () {
    $('.close').on('click', deleteUser);
});
/**
 * delete user
 * @returns {boolean}
 */
function deleteUser() {
    var confirmation = confirm('Are you Sure?');

    if (confirmation) {
        $.ajax({
            type: 'DELETE',
            url: '/users/delete/' + $(this).data('id')
        }).done(function (response) {
            window.location.replace('/');
        });
        window.location.replace('/');
    } else {
        return false;
    }
}