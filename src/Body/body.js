import React from 'react';
import Offer from './Offers/Offer'
import './body.css';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem , Container } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.toggleStatus = this.toggleStatus.bind(this);
        this.state = {
          dropdownOpen: false,
          dropdownStatusOpen: false,
        };
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggleStatus() {
        this.setState({
          dropdownStatusOpen: !this.state.dropdownStatusOpen
    });
    }
         
 render() {
    return(
        <Container fluid className="section">
            <div className="row">
                <section className="col-lg-12">
                    <div className="col-lg-2 my-4">
                        <p className=" float-lg-right colorGeneric">meus pedidos</p>    
                    </div>
                </section>    
            </div>
            <div className="row">
                <section className="col-lg-12">
                    <div className="col-lg-12 my-2">
                        <h1 className="title">Meus pedidos</h1>  
                        <h4 className="colorGeneric">Peça orçamento grátis, e contrate o melhor.</h4>  
                    </div>
                </section>    
            </div>
            <section className="row">
                <div className="col-lg-1 my-4 ajustMargin"></div>
                <div className="col-lg-3 my-4">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle color="info" className="category text-left" outline caret>
                            Categoria
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Categorias</DropdownItem>
                        <DropdownItem>Categoria 1</DropdownItem>
                        <DropdownItem>Categoria 2</DropdownItem>
                        <DropdownItem>Categoria 3</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="col-lg-3 my-4">
                    <Dropdown isOpen={this.state.dropdownStatusOpen} toggle={this.toggleStatus}>
                        <DropdownToggle color="info" className="status text-left float-lg-left" outline caret>
                            Status
                        </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Categorias</DropdownItem>
                        <DropdownItem>Status 1</DropdownItem>
                        <DropdownItem>Status 2</DropdownItem>
                        <DropdownItem>Status 3</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                </div>   
                <div className="col-lg-3 my-4">
                    <div className="input-group ajust">
                        <Button disabled outline color="info" className="float-lg-left bg-light border-right-0"><a className="fa fa-search"></a></Button>
                        <input type="text" className="form-control border border-info bg-light border-left-0" placeholder="Pesquisar..." />
                    </div>
                </div> 
                <div className="col-lg-1 my-4"></div> 
            </section>
            <div className="row">
                <div className="col-lg-1"></div>
                    <div className="col-lg-10 backColorOffer">
                        <div className="iconOffer col-lg-1"><i className="fa fa-address-book fa-5x"></i></div>
                            <div className="float-lg-left col-lg-9">
                                <p className="textOffer1">Criação de logos</p>
                                <p className="textOffer2">Publicado há um mês</p>
                                <p className="textOffer3">Status Em análise</p>
                            </div>
                        <div className="float-lg-left col-lg-2">
                            <Button outline color="dark" className="border-0"><a className="fa fa-edit fa-2x"></a></Button>
                            <Button outline color="dark" className="border-0"><a className="fa fa-trash fa-2x"></a></Button>
                        </div>
                    </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                    <div className="col-lg-3">
                    </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row">
                <div className="col-lg-1"></div> 
                    <div className="col">
                        <Offer />
                    </div>    
                    <div className="col">    
                        <Offer />
                    </div>    
                    <div className="col">
                        <Offer />
                    </div>
                <div className="col-lg-1"></div> 
            </div>
        </Container>
    );
 }
}