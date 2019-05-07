import React from 'react';
import './offer.css';
import 'font-awesome/css/font-awesome.min.css';
import { Button, Container} from 'reactstrap';

const list = [
    {
      id: 'a',
      nome: 'Vagner Mens',
      publication: 'Designer gráfico',
      numero: '54 99988 0755',
      email: 'vagner.mens@gmail.com',
      endereco: 'Rua Fernando Sossa, 35',
      cidade: 'Caxias do Sul | RS',
    }
  ];

  const nestedLists = [list];

  const NestedList = () => (
    <ul>
        {nestedLists.map((nestedList, index) => (
            <div key={'index'}>
            {nestedList.map(item => (
            <div key={item.id} >    
              <div className="offerBody col-lg-12 my-4">
               <i className="fa fa-circle fa-5x circle-icon"></i>
               <h4 className="titleName">{item.nome}</h4>
               <h6 className="functionP">{item.publication}</h6>
               <p className="textGeneric">{item.numero}</p>
               <p className="textGeneric">{item.email}</p>
               <p className="textGeneric">{item.endereco}</p>
               <p className="textGeneric">{item.cidade}</p>
               <Button color="danger" className="btnSimple" outline>VER MAIS</Button>
               <Button color="danger">Contratar</Button>
              </div>  
            </div>
          ))}
        </div>
      ))}
    </ul>
  );
  
  export default NestedList;