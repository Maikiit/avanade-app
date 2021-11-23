import React, { Component } from 'react';

//https://mauriciogc.medium.com/3-react-ciclo-de-vida-de-un-componente-propiedades-y-estado-a1b1d9965af1
/*Ciclo de vida de un componente
Todo componente React tiene un ciclo de vida desde que se instancia,
se inicializa, se muestra etc. A través de unos métodos concretos, se puede
introducir código para que se ejecute en el momento más conveniente.
El único que es obligatorio para todo componente React es el método render.
El resto son opcionales:

1.Prefijos
La lista de métodos tienen unos prefijos que nos dan unas pistas sobre el
momento en el que se ejecuta:
 - Empiezan por will: Se ejecutan antes de que pase algo.
 - Empiezan por did: Se ejecutan después de que pase algo.

2.Momentos clave
Hay tres momentos clave en el ciclo de vida de un componente React:
1-Montaje del componente
Es cuando el componente se crea y se inserta en en el DOM del documento.
Aquí se llama a los métodos:
1.1.constructor
1.2.componentWillMount
1.3.render
1.4.componentDidMount

2-Actualización del componente
Ocurre cuando se producen cambios en el estado o en las propiedades, 
que también pueden pasarse entre componentes padres con  hijos.
Aquí también se llamaría a los métodos:
2.1.componentWillReceiveProps ("renamed")
2.2.shouldComponentUpdate
2.3.componentWillUpdate ("renamed")
2.4.render
2.5.componentDidUpdate

3.Desmontaje del componente
3.1.componentWillUmount

Además, en las clases también se dispone de otros dos métodos que permiten
llevar a cabo cambios directos en el componente:

setState
forceUpdate


*/
class Page2 extends Component {
    constructor(props) {
        super(props);
        console.log("App>constructor", props);
      }
    
      componentDidMount(){
        console.log("App> componentDidMount", this.state, this.props);
      }
    
      componentWillReceiveProps(nextProps){
        console.log("App> componentWillReceiveProps",this.state, this.props);
        console.log("App> componentWillReceiveProps", nextProps);
      }
    
      shouldComponentUpdate(nextProps, nextState){
        console.log("App> shouldComponentUpdate", this.state, this.props);
        console.log("App> shouldComponentUpdate", nextState, nextProps);
        return true;
      }
    
      componentWillUpdate(nextProps, nextState){
        console.log("App> componentWillUpdate", this.state, this.props);
        console.log("App> componentWillUpdate", nextState, nextProps);
      }
    
      componentDidUpdate(nextProps, nextState){
        console.log("App> componentDidUpdate", this.state, this.props);
        console.log("App> componentDidUpdate", nextState, nextProps);
      }
      
      render() {
        console.log("App> render> ", this.state, this.props);
        return (
          <div className="App">
              <button onClick={() => this.setState({name:Math.random()})}>
                Update
              </button>
          </div>
        );
      }
    
      componentWillUmount(){
        console.log("App> componentWillUmount", this.state, this.props);
      }
    
}

export default Page2;