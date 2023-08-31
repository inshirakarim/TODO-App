const deleteDatacallback = (todoId) => {
    console.log("Delete done");
    //   Delete the right todo from the list
    // You will need to give each todo an id, and that should be enough to remove it
    // Find the parent element that contains the todo
    let parentElement = document.getElementById("mainArea");
    // Find the todo element by its id
    let todoElement = document.getElementById(todoId);
    // Remove the todo element from the parent element
    parentElement.removeChild(todoElement);
  };

  const deleteTodo = (id) => {
    console.log(id);
    fetch(`https://todo-app-oyyk.onrender.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => deleteDatacallback(id.toString()));
  };
  
      function todosCallback(data) 
      {
          console.log(data);
          var parentElement=document.getElementById("mainArea");
         // parentElement.innerHTML = JSON.stringify(data);
      
      for(var i=0; i<data.length; i++)  {
          var childElement = document.createElement("div");
        childElement.setAttribute("id", data[i].id);

          var grandChildElement1 = document.createElement("span");
          grandChildElement1.innerHTML = data[i].title;
  
          var grandChildElement2 = document.createElement("span");
          grandChildElement2.innerHTML = data[i].description;
  
          var grandChildElement3 = document.createElement("button");
          grandChildElement3.innerHTML ='<i class="fa-solid fa-trash" style="color: #07090e;"></i>';
          grandChildElement3.setAttribute("onclick","deleteTodo("+ data[i].id +")");
  
          childElement.appendChild(grandChildElement1);
          childElement.appendChild(grandChildElement2);
          childElement.appendChild(grandChildElement3);
  
      parentElement.appendChild(childElement);
      } 
      };
  
      function getDataCallback(resp)
      {
          resp.json().then(todosCallback);
      };

     function getData() {
      fetch("https://todo-app-oyyk.onrender.com/todos", { 
      method:"GET",
      }).then(getDataCallback)
     };
     getData();

     function parsedResponse(data)
    {
      console.log(data);
      var parentElement=document.getElementById("mainArea");
      var childElement = document.createElement("div");
       childElement.setAttribute("id", data.id);
       
          var grandChildElement1 = document.createElement("span");
          grandChildElement1.innerHTML = data.title;
  
          var grandChildElement2 = document.createElement("span");
          grandChildElement2.innerHTML = data.description;
  
          var grandChildElement3 = document.createElement("button");
          grandChildElement3.innerHTML = '<i class="fa-solid fa-trash" style="color: #07090e;"></i>';
          grandChildElement3.setAttribute("onClick","deleteTodo("+ data.id +")");
          childElement.appendChild(grandChildElement1);
          childElement.appendChild(grandChildElement2);
          childElement.appendChild(grandChildElement3);
  
      parentElement.appendChild(childElement);
      title.value = "";
      description.value = "";
    }

    function callback(resp)
{
resp.json().then(parsedResponse);
}
         

      function onPress()
      {
          var title=document.getElementById("title").value;
      var description=document.getElementById("description").value;
      if (title === "" || description === "") {
        alert("Please enter a title and description");
      } else {
  fetch("https://todo-app-oyyk.onrender.com/todos", { 
  method:"POST",
  body: JSON.stringify({
      title: title,
      description: description
  }),
  headers: {
      "Content-Type": "application/json"
  }
  }).then(callback)
}
};


 
         
         
