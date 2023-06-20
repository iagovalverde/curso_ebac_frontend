$(document).ready(function() {
    $('form').on('submit',function(e) {
        e.preventDefault();
        const task = $('#new-task').val();
        const newListItem = $('<li></li>');
        $(`<li>${task}</li>`).appendTo(newListItem);
        $(newListItem).appendTo('ul');
        
        $('#new-task').val('')
        $('li').click(function() {
            $(this).css("text-decoration", "line-through")
        })
    })
})