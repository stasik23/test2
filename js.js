let wrapper = document.querySelector('.grid')
newResponse(`https://my-json-server.typicode.com/stasik23/test2/products`)

function newResponse(URL,){
    let xhr = new XMLHttpRequest();
    const url = URL
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.send();
    xhr.onload = function(){
        state = xhr.response
        console.log(xhr.response);
    }
}

function getProductName(name){
    let xhr = new XMLHttpRequest();
    const url = `https://my-json-server.typicode.com/stasik23/test2/products/${name}`
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.send();
    if(xhr.status != 200){
        console.log('Чепуха галимая');
    }else{
        console.log(xhr.response)
    }
    xhr.onload = function(){
        console.log(xhr.response.name);
        console.log(xhr.response.price);
        console.log(xhr.response.id);
        getPokemonIp(xhr.response);
      
    }
}
