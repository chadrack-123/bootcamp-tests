function totalPhoneBill(phone){

	const phoneList = phone.split(",");
  	
  	var countSms = 0.0;
  	var countCall = 0.0;
  
 	for (let i=0; i<phoneList.length; i++){
    	var item = phoneList[i].trim()
      	if (item === 'sms'){countSms++;}
      	if (item === 'call'){countCall++;}
    }
  
  var billSms = 0.65 * countSms;
  var billCall = 2.75 * countCall;
  var billTotal = billSms + billCall
  
  return `R${billTotal.toFixed(2)}`
  
 
}