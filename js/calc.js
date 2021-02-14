$(document).ready(function(){
	$('.field-type>div>div').click(function(){
		$('.field-type .active').removeClass('active');
		$(this).parent().addClass('active');
		$('#calc-f-type').val($(this).attr('rel'));

	});
	$(':radio[name=srok]').change(function(){
    	if($(":radio[name=srok]").filter(":checked").val()==1||$(":radio[name=srok]").filter(":checked").val()==2)
    	{
    		$("#calc-f-tar").removeAttr("checked");
    	}
    	else
    	{
    		if($('#calc-f-sum').val()<=500000)
    		{
				$("#calc-f-tar").attr("checked","checked" );
			}

    	}
    });
    $(':radio[name=type]').change(function(){
    	if($(":radio[name=type]").filter(":checked").val()==3||$(":radio[name=type]").filter(":checked").val()==2)
    	{
    		$("#calc-f-tar").removeAttr("checked");
    	}
    	else
    	{
    		if($('#calc-f-sum').val()<=500000)
    		{
				$("#calc-f-tar").attr("checked","checked" );
			}

    	}
    });
    $('#calc-f-s1').change(function(){
		if($('#calc-f-s1').attr("checked"))
		{
			if($('#calc-f-sum').val()<=500000)
    		{
				$("#calc-f-tar").attr("checked","checked" );
			}
		}
		else
		{
			$("#calc-f-tar").removeAttr("checked");

		}
	});
    $('#calc-f-sum').change(function()
    {
    	if($('#calc-f-sum').val()<=500000)
    	{
    		$('#calc-f-tar').removeAttr("disabled");

    	}
    	else if($('#calc-f-sum').val()>500000)
    	{
    		$('#calc-f-tar').attr("disabled","disabled");
    		$("#calc-f-tar").removeAttr("checked");

    	}

    });

	$('input').change(function(e){
		e.preventDefault();
		$('#calc-result').html('');
		$.ajax({
			type: 'POST',
			url: "/post/calc/",
			data: {
				sum: $('#calc-f-sum').val(),
				type: $(":radio[name=type]").filter(":checked").val(),
				srok: $("input[name=srok]").val(),
				tar: $('#calc-f-tar').is(':checked'),
				client: $('#calc-f-client').is(':checked'),
				c1: $('#calc-f-s1').is(':checked'),
				c2: $('#calc-f-s2').is(':checked')
			},
			success: function(data) {
				$('#calc-result').html(data);
			},
			error: function(data) {

			},
			dataType: "html"
		});
	});
});