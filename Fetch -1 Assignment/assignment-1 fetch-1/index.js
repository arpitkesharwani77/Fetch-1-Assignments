document.getElementById("get-cotegory-data").addEventListener("click",cotegoryData)
document.getElementById("get-ingredient-data").addEventListener("click",getIngredientData)

async function cotegoryData(){
    const url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    try{
      const res=await fetch(url);
      const data= await res.json();
      console.log(data);
              
    }
    catch(error)
    {
        console.log("something went wrong!",error)
    }
}

async function getIngredientData(){
    const url1="https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    try{
      const res=await fetch(url1);
      const data= await res.json();
      console.log(data);


    }
    catch(error)
    {
        console.log("something went wrong!",error)
    }
}