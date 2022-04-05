//consulta de api IBGE

function populateCities(){
    let citiesList=document.querySelector("select[name=city]");
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/RN/municipios").then((res)=>{
        return res.json()
    }).then(cities=>{
           
        
           for(const cite of cities){
            
                 
               citiesList.innerHTML+=`<option value="${cite.id}"> ${cite.nome}</option>`}
    })
}
populateCities()


function populateCitieGold(){
    let citieGold=document.querySelector("select[name=city-gold]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/RN/municipios").then((res)=>{
        return res.json()
    }).then(cities=>{
        for(const city of cities){
            citieGold.innerHTML+=`<option value="${city.id}">${city.nome}</option>`
        }
    })
}
populateCitieGold()
document.querySelector("select[name=city]").addEventListener("change",()=>{
    console.log("mudei");
})

