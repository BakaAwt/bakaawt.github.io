	function showDateTime(){
		var sWeek = new Array("日","一","二 ","三","四","五","六");
		var myDate = new Date();
		var sYear = myDate.getFullYear();
		var sMonth = myDate.getMonth()+1;
		var sDate = myDate.getDate();
		var sDay = sWeek[myDate.getDay()];
		var h=myDate.getHours();
		var m=myDate.getMinutes();
		var s=myDate.getSeconds();
		document.getElementById("date").innerHTML=(sYear + "年" + sMonth + "月" + sDate + "日" + " 星期" + sDay);
		h=formatTwoDigits(h)
		m=formatTwoDigits(m)
		s=formatTwoDigits(s)
		document.getElementById("time").innerHTML=(imageDigits(h) + ":" + 
					   imageDigits(m) + ":"  + 
					   imageDigits(s) +  "");
		setTimeout("showDateTime()",1000);
		}
		window.onload=showDateTime;
		function formatTwoDigits(s) {
		  if (s<10) return "0"+s;
		  else return s;
		}
		function imageDigits(s) {
		  var ret = "";
		  var s = new String(s);
		  for (var i=0; i<s.length; i++) {
			ret +=   s.charAt(i);
		  }
		  return ret;
	}