import { useState, useEffect } from 'react';
import { Container, Row, ListGroup } from 'react-bootstrap';
import Produto from '../Components/Produto';
// import Categorias from '../Components/Categorias/Categorias';
import './produtos.css'; 

function Produtos() {

    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        async function dadosProdutos(){
            const answer  = await fetch("http://localhost/remoda/ReModa/projeto-react/src/php/api/produtos.php")
            const data = await answer.json()
            setProdutos(data);
    }
       dadosProdutos();
       
    }, []);

    const [filtro, setFiltro] = useState([]);
        console.log(filtro);

    function filtrarCategoria(e) {
        setFiltro(e.target.id)

    }

    return (
        
        <Container className="pgProdutos">
           <div className="categorias">
                <h3>Categorias</h3>
                <ListGroup horizontal className="categorias">
                    <ListGroup.Item action onClick={filtrarCategoria} id="">Todas</ListGroup.Item>
                    <ListGroup.Item action onClick={filtrarCategoria} id="blusas">Blusas</ListGroup.Item>
                    <ListGroup.Item action onClick={filtrarCategoria} id="vestidos">Vestidos</ListGroup.Item>
                    <ListGroup.Item action onClick={filtrarCategoria} id="shorts">Shorts</ListGroup.Item>
                    <ListGroup.Item action onClick={filtrarCategoria} id="calcas">Calças</ListGroup.Item>
                </ListGroup>
            </div>
            <Row className="produtos">
                {/* { produtos && produtos.map(item => <Produto key={item.idproduto} imagem={item.imagem} 
                descricao_produto={ item.descricao_produto  } preco_final={item.preco_final} categoria={item.categoria} /> )} */}
            {produtos.map( produto => {
        if (filtro == produto.categoria) {
            return <Produto key={produto.idproduto} imagem={produto.imagem} descricao_produto={ produto.descricao_produto } preco_final={produto.preco_final} categoria={produto.categoria} />
        
        } else if ( filtro == "") {
            return <Produto key={produto.idproduto} imagem={produto.imagem} descricao_produto={ produto.descricao_produto } preco_final={produto.preco_final} categoria={produto.categoria} />
        }
    })  }
            
            </Row>
        </Container>
    );
};

export default Produtos;