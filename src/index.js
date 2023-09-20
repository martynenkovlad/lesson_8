function capitalizeStrings(strings) {
    const result = [];
  
    for (const string of strings) {
      
      const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      result.push(capitalizedString);
    }
  
    return result;
  }
  
  const words = ["apple", "banaNA", "kiWi", "ORANGE"];
  console.log(capitalizeStrings(words));