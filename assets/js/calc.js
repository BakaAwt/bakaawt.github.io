	function compute(op)
	{  
		var num1,num2;
		num1=parseFloat(document.myform.txtNum1.value);
		num2=parseFloat(document.myform.txtNum2.value);
		if (op=="+")
			document.myform.txtResult.value=num1+num2  ;
		if (op=="-")
			document.myform.txtResult.value=num1-num2  ;
		if (op=="*")
			document.myform.txtResult.value=num1*num2  ;
		if (op=="/"  &&  num2!=0)
			document.myform.txtResult.value=num1/num2   ;
	}