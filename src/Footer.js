import React, {Component} from 'react';
import { Navbar, Container,NavbarBrand } from 'react-bootstrap'

export default class Footer extends Component {
        render() {
            return(
                <div className="fixed-bottom">  
                    <Navbar color="dark" dark style={{backgroundColor: "black"}}>
                        <Container>
                            <NavbarBrand style={{color: "white", textAlign:"center"}}><a href="http://thequint.com/" target="_blank">The Quint</a></NavbarBrand>
                        </Container>
                    </Navbar>
                </div>
            )
        }
}