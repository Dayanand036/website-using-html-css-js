function searchRecipe() {
    const searchQuery = document.getElementById("Search").value.toLowerCase();

    // Here you can implement your logic to search for the recipe based on the searchQuery
    // If a match is found, navigate the user to the corresponding recipe page
    
    // Example navigation code
    if (searchQuery ="fried rice") {
      window.location.href="C:\Users\dayan\.vscode\Friedrice.html";
    } 
    else if (searchQuery="bumns") {
        window.location.href="C:\Users\dayan\.vscode\buns.html";
    }
    
    else if (searchQuery = "aloo paratha") {
        window.location.href="C:\Users\dayan\.vscode\alooparatha.html"
        ;
    }
 else {
       alert("Recipe not found");
     }
    return false;


   
  }