import React from 'react';
import { Container, Button } from 'reactstrap';
import './footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Footer extends React.Component {
     
 render() {
    return(
        <Container fluid>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-8 add">
                    <h4 className="float-lg-left">Baixe o aplicativo para dispositivos móveis</h4>
                </div>
                <div className="col-lg-2 add2">
                    <Button outline color="light" className="border-0"><a className="fa fa-android rounded-circle fa-3x editAndroid"></a></Button>
                    <Button outline color="light" className="border-0"><a className="fa fa-apple fa-3x rounded-circle editAndroid"></a></Button>
                </div>
                <div className="col-lg-1"></div>
            </div>
            <div className="row">
                <div className="col-lg-1 footer"></div>
                <div className="col-lg-2 title_"><h4 className="font_bold">WORKANDO</h4></div>
                <div className="col-lg-2 footer_">
                    <p className="font_bold">EMPRESA</p>       
                    <p>Sobre</p>       
                    <p>Como Funciona</p>       
                    <p>Categorias</p>       
                </div>
                <div className="col-lg-2 footer_">
                    <p className="font_bold">Contato</p>       
                    <p>Ajuda</p>       
                    <p>Contatos</p>       
                    <p>Aplicativo móvel</p>       
                </div>
                <div className="col-lg-1 footer"></div>
                <div className="col-lg-4 footer">
                    <Button outline color="light" className="border-0"><a className="fa fa-facebook fa-2x"></a></Button>
                    <Button outline color="light" className="border-0"><a className="fa fa-instagram fa-2x"></a></Button>
                    <Button outline color="light" className="border-0"><a className="fa fa-google-plus fa-2x"></a></Button>
                </div>
                
            </div>
        </Container>
    );
 }
}