import React from 'react'


class Consulta extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            departamentos: []
        }
    }

    componentDidMount() {
        fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
            .then(response => response.json())
                .then(departamentosJson => this.setState({
                    departamentos: departamentosJson,
                }))
    }

    render() {
        return <React.Fragment>
            <form>
                <input type="text" placeholder="busca un departamento"/>
                <button>Buscar</button>
            </form>
        </React.Fragment>
    }
}

export default Consulta;