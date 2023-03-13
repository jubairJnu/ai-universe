const loadData = (dataLimit) =>{

  const url = ('https://openapi.programming-hero.com/api/ai/tools')
  fetch(url)
  .then(res => res.json())
  .then(data => displayData(data.data.tools,dataLimit ))
}

const displayData = (tools, dataLimit) =>{
  console.log(tools);

  // show all button\
  const showall = document.getElementById('show-all');
if(dataLimit && tools.length > 6){
  tools= tools.slice(0,6);
  showall.classList.remove('d-none');
}
else{showall.classList.add('d-none')}

  const dataContainer = document.getElementById('data-container');
  tools.forEach(tool =>{
    
    const dataDiv = document.createElement('div');
    dataDiv.classList.add('col');
    dataDiv.innerHTML = `
    <div class="card h-100">
    <img src="${tool.image}" class="card-img-top rounded-1" alt="...">
    <div class="card-body">
      
      <h3 class="card-text">Featues:</h3>
      <ol>

      <li>${tool.features[0]}</li>
      <li>${tool.features[1]}</li>
      <li>${tool.features[2]}</li>
      <ol>
    </div>
    <div class="card-footer ">
    <h5 class="card-title">${tool.name}</h5>
    
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg></i> <span> ${tool.published_in
}</span>  

<button onclick="loaddataDetails(${tool.id})" type="button" class="btn btn-primary ms-5" data-bs-toggle="modal" data-bs-target="#dataDetails">
<i class="fa-solid fa-arrow-right"></i>
</button>

    </div>
  </div>`
  dataContainer.appendChild(dataDiv);
  toggleSpiner(false);
  })
 
}





const processData =(dataLimit) =>{
  toggleSpiner(true)
  
  loadData(dataLimit);
}
// spiner
const toggleSpiner = isloading =>{
  const loadSpiner = document.getElementById('loader');
  if(isloading){
    loadSpiner.classList.remove('d-none');
}
else{
  loadSpiner.classList.add('d-none')
}

}



// button handler
const showAllBtn =document.getElementById('btn-show-all').addEventListener('click',function(){
  // toggleSpiner(true)
  loadData();
})

const loaddataDetails = id =>{
  const url = (`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  console.log(url)
  fetch(url)
  .then(res=> res.json())
  .then(data => displayDetails(data.data))
}
const displayDetails = datas =>{
console.log(datas)
  document.getElementById('dataDetailsLabel').innerText = datas.tool_name;
  
}

loadData('6');