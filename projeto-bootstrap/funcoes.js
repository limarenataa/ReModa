
//Filtrar os produtos por categoria 
function exibir_categoria(categoria) {

    let elementos = document.getElementsByClassName('box-produtos');
    console.log(elementos);
  

    for (var i = 0; i < elementos.length; i++) {
        console.log(elementos[i].id);
        if (categoria == elementos[i].id) {
            
            elementos[i].style = "display:block";
          
        } else {
            elementos[i].style = "display:none";
        }
    }
};

//Exibir todos os produtos
let exibir_todas = () => {
    let elementos = document.getElementsByClassName('box-produtos');

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style = "display:block";
    }
};

//Expandir o tamanho da imagem onclick; 
// let destaqueImg = (imagem) => {
//     console.log(imagem);
//     if (imagem.width == 180 && imagem.height == 180) {
//         imagem.width = 280
//         imagem.height = 280
        
        
//     }else {
//         imagem.width = 180
//         imagem.height = 180
        
//     }
//

//Expandir o tamanho da imagem onmousemove e onmouseout:


function imgNormal (imagem) {
    imagem.style.width = "180px";
}

function destaqueImg(imagem) {
    imagem.style.width = "210px";
}

//Favoritar um produto

let favoritar = () => {
    alert("Produto adicionado aos favoritos!")
}


    