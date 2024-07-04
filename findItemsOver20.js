function findItemsOver20(itemList){
	
    var results=[]
  for (let i=0; i<itemList.length; i++){
  
      var currentItem = itemList[i]
      if (currentItem.qty > 20){
          results.push(currentItem)
      }
      
  }
    return results
}