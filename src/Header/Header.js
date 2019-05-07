import React from 'react';
import './header.css';
import { Button, Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

export default class Header extends React.Component {
 render() {
    return(
        <Container fluid>
            <div className="col-lg-12 lowSize">
                <div className="row no-gutters">
                    <header className="col-lg-3 my-4">
                        <h3 className="title">WORKANDO</h3>
                    </header>
                    <div className="col-lg-4 my-4">
                        <span className="fa fa-search search-icon" aria-hidden="true"></span>
                        <input className="form-control firstSearcher border-0" placeholder="Pesquisar..."></input>
                    </div>
                    <div className="col-lg-2 my-4">
                        <h5 className="float-lg-right nameTitle">Olá, Carla</h5>
                    </div>    
                    <div className="col-lg-1 my-2">
                        <span className="fa fa-circle fa-4x circle-icon"></span>
                    </div>
                    <div className="col-lg-1 my-4">
                        <Button outline color="info" className="float-lg-left border-0"><a className="fa fa-bell fa-2x"></a></Button>
                    </div>
                    <div className="col-lg-1 my-4 iconAjust">
                        <Button outline color="info" className="float-lg-left border-0 rounded"><a className="fa fa-bars fa-2x"></a></Button>
                    </div>
                </div>    
            </div>
        </Container>
    );
 }
}