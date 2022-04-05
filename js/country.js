
function populateCountry(){
    const country=document.querySelector("select[name=country]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/paises").then((res)=>{
        return res.json()
    }).then(countrys=>{
        for(const countryList of countrys){
            country.innerHTML+=`<option value="${countryList.id}">${countryList.nome}</option>`
        }
    })
}

populateCountry();



document.querySelector("select[name=country]").addEventListener("change",)