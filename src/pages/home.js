import React from "react";
import firebase from 'firebase';

import Footer from '../components/footer.js'
import './styles/homeStyles.css'

import { NavBar } from '../components/NavBar'
import HeroHome from '../components/heroHome'

import PageLoading from './pageLoading'


import '../components/styles/popRegistro.css'


class Home extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            user: null,
            registryEmail:"",
            registryPassword:"",
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

    createUser = (e)=> {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.registryEmail, this.state.registryPassword)

        .then(() => {
        
        // window.location.reload(true)
        window.location.href = '/works'

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
            {this.state.isLoading ? <PageLoading /> :
                <div className="home-page">
                    {
                        !this.state.user ? 
                            <div>
                                <div className="wrapper-border">
                                    <div>
                                        <NavBar />
                                    </div>
                                    <div className="wrapper-home">
                                        <HeroHome />
                                        <Footer />
                                    </div>
                                </div>
                            </div> :
                            <div>
                                <PageLoading />
                            </div>
                    }
                </div>
            }
        
        </React.Fragment>
    }
}

export default Home;