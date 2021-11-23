import React from 'react'

export default class Page4 extends React.Component {
  constructor(...args) {
    super(...args)/*https://qastack.mx/programming/31048953/what-do-these-three-dots-in-react-do
    hace un desacoplamiento de cada uno de los elemenos del array 
    en parámetros:
    {...this.props} extiende las propiedades enumerables "propias" props
    como propiedades discretas en el Modalelemento que está creando. 
    Por ejemplo, si está this.props contenido a: 1 y b: 2, entonces

    <Modal {...this.props} title='Modal heading' animation={false}>
    sería lo mismo que

    <Modal a={this.props.a} b={this.props.b} title='Modal heading' 
    animation={false}>
    */
    console.log('Ejecuto constructor', ...args)
    //solo se puede utilizar en la inicialización
    this.state = {
      estado: 'Inicializado en el constructor'
    }
    
    //sí después queremos modificar el estado, lo debemos de realizar
    //con el método this.setState
    // Binding this keyword 
    this.updateState = this.updateState.bind(this) 
  }
/*
La inicialización de las propiedades se realiza una vez para todos 
los elementos de la clase. Si tenemos un componente que se usa 5 veces, 
los valores de las propiedades predeterminadas se definirán una única vez.

La inicialización del estado se realiza una vez para cada instancia 
del componente. Si tenemos un componente que se usa en 5 ocasiones, 
la inicialización de su estado se realizará 5 veces, una para cada
instancia del componente.

En el caso de la inicialización de propiedades, en componentes creados
con clases de ES6, se debe realizar definiendo una propiedad 
"defaultProps" en la clase que implementa el componente. En el
caso de la inicialización del estado, la operativa se realiza
en el constructor. Se verá claramente con un ejemplo enseguida.

props son readonly
state son modificables
*/


 updateState(){ 
    this.setState({
      estado: 'Estado Modificado'
    })
  }

  render() {
    return (
      <div>
        <p>Componente con propiedades y estado inicializado</p>
        <p>Estado: {this.state.estado}</p>
        <p>Propiedad: {this.props.propiedad}</p>

        <button onClick={this.updateState}> 
          Click me!
        </button> 
      </div>
    )
  }
}

Page4.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad'
}