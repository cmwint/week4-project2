$(document).ready(function(){
	// Question #1
	$('#submitBtn').click(function(){
		var value = $('.textInput').val();
		$(this).after('<h3>'+value+'</h3>');
	});
	// Question #2
	$('.chex input').click(function(){
		$('#message').toggleClass('hidden');
	});
	// Question #3
	$('table tr:last').after('<tr><td>Lola</td><td>8</td><td>Sleepy</td></tr>');
	// Question #4
	$('td:contains("Hangry")').css('color','red');
	$('td:contains("Content")').css('color','green');
	// Question #5
	$('.btn-warning').click(function(){
		$('tbody tr').each(function(){
			var children = $(this).find('td:nth-child(2)').text();
			if(children < 10){
				$(this).remove();
			}
		});
	});
	// Question #6
	$('.btn-success').click(function(){
		$('tbody tr').each(function(){
			var children = $(this).find('td:nth-child(1)');
			children.text(children.text().toUpperCase());
		});
	});
	// Question #7
	$('.btn-primary').click(function(){
		$('.table-striped').toggle();
	});
	// Question #8
	$('#disableUs input[type=text]').prop('disabled', true);
	$('#disableUs input[type=checkbox]').prop('disabled', true);
	$('#disableUs a').click(function(e){
		e.preventDefault(); // prevents default behavior of an anchor tag
	});
	// Question #9
	$(".dropdown").change(function(){
		var value = $(this).find("option:selected").text();
		$("<h3>" + value + "</h3>").insertAfter(".dropdown");
	});
	//Question #10:
	var count = 0;
	$("#alertList li").each(function(){
		count += 1;
	});
	alert(count);
	//Question #11:
	$("<input type='button' class='btn btn-secondary' value='add'/>").insertBefore("#alertList");
	$("<input type='button' class='btn btn-danger' value='remove'/>").insertBefore("#alertList");

	$(".btn-secondary").click(function(){
		$("#alertList").append("<li>New Item</li>");
		counter += 1;
		update();
	});

	$(".btn-danger").click(function(){
		$("#alertList").children('li:last-child').remove();
		counter -= 1;
		update();
	});

	//Question #12:
	$("p").last().hide();
	var update = function(){
		$("p:last").text("The count is: " + counter)
	}
});
