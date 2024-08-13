document.getElementById("fetch-user").addEventListener("click",fetchUser)
const box=document.getElementById("box")
async function fetchUser(){
    const url="https://reqres.in/api/users";
    try{
      const res=await fetch(url);
      const data= await res.json();
      
      
      data.data.forEach(element => {
            console.log(element)
            const name=document.createElement("p")
            const email=document.createElement("p")
            const avatar=document.createElement("p")
            name.textContent="name : "+element.first_name+" "+element.last_name
            email.textContent="email : "+ element.email
            avatar.textContent="avatar: "+element.avatar
            box.append(name,email,avatar)
      });        
    }
    catch(error)
    {
        console.log("something went wrong!",error)
    }
}
