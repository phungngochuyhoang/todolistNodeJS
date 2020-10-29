$(document).ready(function() {

    $('form').on('submit', function() {
        var task = $('form input');
        var todo = {task: task.val()};

        $.ajax({
            type: 'POST',
            url: '/todolist',
            data: todo,
            success: function (data) {
                location.reload();
            }
        })
    })

    $('li').on('click', function() {
        var task = $(this).text().trim();
        $.ajax({
            type: 'DELETE',
            url: '/todolist/' + task,
            success: function (data) {
                location.reload();
            }
        })      
    })
})