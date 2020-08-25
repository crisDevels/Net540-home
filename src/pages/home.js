import React from "react";
import firebase from 'firebase';

import Footer from '../components/footer.js'
import './styles/homeStyles.css'

import NavBar from '../components/NavBar'
import HeroHome from '../components/heroHome'
import Comenzar from '../components/FormularioRegistro/comenzemos'

import loader from '../images/loader.gif'

import '../components/styles/popRegistro.css'


class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            overlay: "overlay",
            modalProfesional: "modal",
            modalEmpresa: "modal",
            modalInicio: "modal",
            blur: "desactiveBlur",
            user: null,
            email:"",
            password:"",
            name:"",
            apellido:"",
            registryEmail:"",
            registryPassword:"",
        }
        this.createUser = this.createUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ 
                user,
                isLoading: false,
             })
        })

    }


    abrirModalProfesional= ()=> {
        this.setState({
            overlay: "overlayActive",
            modalProfesional: "modalProfesionalActive",
            blur: "activeBlur"
        }) 
    }

    abrirModalEmpresa = ()=> {
        this.setState({
            overlay: "overlayActive",
            modalEmpresa: "modalEmpresaActive",
            blur: "activeBlur"
        })
    }

    cerrarModal= ()=> {
        this.setState({
            overlay: "overlay",
            modalProfesional: "modal",
            modalEmpresa: "modal",
            blur: "desactiveBlur"
        }) 
    }

    login = ()=> {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(result => console.log('${result.user.email} ha iniciado sesión'))
        .catch(error => console.log('Error ${error.code}: ${error.message}'))   
    }

    createUser = (e)=> {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)
        .then(() => {
  
        alert('Your account has been created');
            const nameUser = this.state.name;
            console.log(nameUser);
        
            
        var user = firebase.auth().currentUser;
        //Actualizando nombre de usuario 
        user.updateProfile({
              displayName: this.state.name
            })
    
          })

        .catch((error)=> {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
        } else {
        alert(errorMessage);
        }
        console.log(error);
        });    
    }

    handleChange = (e)=> {
        const { value, name } = e.target;
        this.setState({
        [name]: value 
        })
    }

    render() { 
        return <React.Fragment>
            

        <section className={this.state.blur}>

            {this.state.isLoading ? <div><img src={loader}/></div> :
            
            <div className="opacity">
                <div className="home-page">
                    <div>
                        <NavBar />
                    </div>
                    
                    <div>
                    { !this.state.user &&
                        <HeroHome />
                    }
                    { this.state.isLoading ? <div><img src={loader}/></div> : 
                         this.state.user &&
                            < Comenzar user={this.state.user} />
                        
                    }
                    </div>
        
                    <div>
                    { !this.state.user &&
                        <Footer />
                    } 
                        
                    </div>
                </div>
            </div>}
        
        </section>
    
        </React.Fragment>
    }
}

export default Home;