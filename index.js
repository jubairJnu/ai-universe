const loadData = () =>{

  const url = ('https://openapi.programming-hero.com/api/ai/tools')
  fetch(url)
  .then(res => res.json())
  .then(data => displayData(data.data.tools))
}

const displayData = tools =>{
  console.log(tools);

  // show all button\
  const showall = document.getElementById('show-all');
if(tools.length > 6){
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
<button class="ms-5"> <i class="fa-solid fa-arrow-right"></i></button>

    </div>
  </div>`
  dataContainer.appendChild(dataDiv);
  })

}
loadData();