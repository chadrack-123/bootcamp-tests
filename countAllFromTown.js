function countAllFromTown(regNumbers, regEnd){
	
    const regNumbersList = regNumbers.split(",");
    let countAll = 0;
    for(let i=0; i<regNumbersList.length; i++){
        var reg = regNumbersList[i].trim()
      if (reg.startsWith(regEnd)){
          
             countAll++;
      }
    }
    
       return countAll
    
  }