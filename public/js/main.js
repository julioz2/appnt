$(document).ready(function() {
    // Power JS close for info messages
    $('.message-list').on('click', 'i', function(e) {
        $(this).parent().fadeOut();
    });

    $('.updateName').on('submit', function(e){
    	e.preventDefault();

    	var actionInPost = $(this).attr('action'),
    		data = $( this ).serialize(),
    		$fieldToUpdate = $('h2.change');

    	$.ajax({
	        type: "POST",
	        url: actionInPost,
	        data: data,

	        success: function(response){
		        $fieldToUpdate.html(response);
	        }
		});					
    });
});