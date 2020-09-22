import React from "react";
import firebase from 'firebase';

import Footer from '../components/footer.js'
import './styles/homeStyles.css'

import NavBar from '../components/NavBar'
import HeroHome from '../components/heroHome'
import Comenzar from '../components/FormularioRegistro/comenzemos'

import PageLoading from './pageLoading'

import loader from '../images/loader.gif'

import '../components/styles/popRegistro.css'


class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            user: null,
        }
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ 
                user,
                isLoading: false,
             })
        })

    }

    login = ()=> {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))   
    }

    render() { 
        return <React.Fragment>
            

        <section className={this.state.blur}>

            {this.state.isLoading ? <PageLoading /> :
                    <div className="home-page">
                        <div className="wrapper-border">
                            <div>
                                <NavBar />
                            </div>
                            <div className="wrapper-home">
                                <div>
                                    { !this.state.user &&
                                        <HeroHome />
                                    }
                                    { this.state.isLoading ? <div><img alt="loader de carga" src={loader}/></div> : 
                                    this.state.user &&
                                        < Comenzar user={this.state.user}/>
                                    }
                                </div>
                            </div>
                            <div>
                                { !this.state.user &&
                                    <Footer />
                                } 
                            </div>
                        </div>
                    </div>
            }
        
        </section>
    
        </React.Fragment>
    }
}

export default Home;