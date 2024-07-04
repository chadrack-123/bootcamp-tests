function findItemsOver(itemList, threshold){

	var results=[]
	for (let i=0; i<itemList.length; i++){
    
    	var currentItem = itemList[i]
        if (currentItem.qty >threshold ){
        	results.push(currentItem)
        }
        
    }
  	return results
}