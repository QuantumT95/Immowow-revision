$(document).ready(function() {

	if ($("ccSearchInput").val() === '') {
		$("#clearBtn").hide();
	}

	$("#ccSearchInput").on('keyup', function() {
		if ($(this).val() !== '') {
			$("#clearBtn").show();
		} else {
			$("#clearBtn").hide();
		}
	});

	$("#clearBtn").click(function() {
		$("#ccSearchInput").val('').focus();
		$(this).hide();
	});
});
