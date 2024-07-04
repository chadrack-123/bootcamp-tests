function mostProfitableDepartment(salesData){

	const salesMap ={}
  	for(let i=0; i<salesData.length; i++){
    	const sale = salesData[i]
        //console.log(sale.sales)
        salesMap[sale.department] = 0
    }
  
  for (let i =0; i<salesData.length; i++){
  	const sale = salesData[i]
    var currentDepTotal = salesMap[sale.department]
    currentDepTotal += sale.sales;
    salesMap[sale.department] = currentDepTotal
  }
  
  //console.log(salesMap)
  
  var bestSale = 0;
  var bestDep = '';
  for (const dep in salesMap){
  
  	//console.log(dep)
    //console.log(salesMap[dep])
    const currentSale = salesMap[dep];
    if(currentSale > bestSale){
    	bestSale = currentSale;
      	bestDep = dep
    }
    
  }
  
  return bestDep
}
