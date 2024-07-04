function countAllPaarl(regNumbers){
	
    const regNumbersList = regNumbers.split(",");
    let countPaarl = 0;
    for(let i=0; i<regNumbersList.length; i++){
        var reg = regNumbersList[i].trim()
      if (reg.startsWith('CJ')){
          
             countPaarl++;
      }
    }
    
    return countPaarl;
}