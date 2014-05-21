$("input[type=checkbox]").click(function () {
	var className = $(this).attr('id');
    if (this.checked) {
        $(".output").append("<code>" + strings[className] + "<br>" + "</code>");
    } else {
        $('.output code').remove(":contains(" + strings[className] + ")");
    }
});

// $("input[type=checkbox]").click(function () {
// 	var idName = $(this).attr('id');
// 	var className = $(this).attr('class');
// 	if (className == "valuebox") {
// 		$(".output").append("It's a valuebox");
// 	} else {
// 		if (this.checked) {
//         	$(".output").append("<code>" + strings[idName] + "<br>" + "</code>");
//     	} else {
//         	$('.output code').remove(":contains(" + strings[idName] + ")");
//     	}	
// 	}
// });

$("button").click(function() {
	var idName = $(this).attr('id');
	var className = $(this).attr('class');
	var forName = $(this).attr('for');
	var number = $("input[id=" + forName + "]").val();
  if (className == "bind") {
      $(".output").append("<code>" + strings[forName].substring(0,strings[forName].indexOf("$")) + number + strings[forName].substring(strings[forName].indexOf("$") + 1) + " </code>");  
   } else if (className != "remove") {
    	$(".output").append("<code>" + strings[forName].substring(0,strings[forName].indexOf("$")) + number + strings[forName].substring(strings[forName].indexOf("$") + 1) + "<br>" + "</code>");
   } else {
   		$('.output code').remove(":contains(" + strings[forName].substring(0,strings[forName].indexOf("$")) + ")");
  }
});

// $("button").click(function() {
// 	var idName = $(this).attr('id');
// 	var className = $(this).attr('class');
// 	var forName = $(this).attr('for');
// 	var number = $("input[id=" + forName + "]").val();
// 	if (className == "remove") {
//       $('.output code').remove(":contains(" + strings[forName].substring(0,strings[forName].indexOf("$")) + ")");
//    	} else if (className == "removeLast") {
//       $('.output code').remove((":contains(" + strings[forName].substring(0,strings[forName].indexOf("$")) + ")"));
//     } else {
//    		$(".output").append("<code>" + strings[forName].substring(0,strings[forName].indexOf("$")) + number + strings[forName].substring(strings[forName].indexOf("$") + 1) + "<br>" + "</code>");
//    	}
// });