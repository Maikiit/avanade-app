import React, { Component } from 'react';
import "./Page3.css";
import { PrimaryButton } from '@fluentui/react'; 
import { CompoundButton } from '@fluentui/react/lib/Button';

class Page3 extends Component {
  
  render() {
    const friends = [
      { name: "John Doe", age: 34}, 
      { name: "Gandalf", age: 1432},
      { name: "Aragorn", age: 442}
    ];

    const friendElements = friends.map(function (e) {
        return (
          <li key={e.name} ><b>{e.name}</b>: {e.age} years</li>
        )
    });

    let showTitle = false;

    return (
      <div >
        <h1>My Friends {/* Comments inside elements with braces! */}</h1>
        <ul 
          /* This
            is
            a multiline
          */
        >
          {friendElements}
        </ul>
        
        {showTitle?
         (
            <h2>We show title</h2>
         ):(
            <p id="supertitle">No title</p>
         )
        }
        <p onClick={() => alert("It works")} className="regular">
          Click on this paragraph
        </p>
        <div>  
        <PrimaryButton onClick={() => alert("Microsoft Button")}>Button</PrimaryButton>  
        </div>
        <br/>
        <div>
        <CompoundButton onClick={() => alert("Coumpound Button")} primary 
        secondaryText="This is the secondary text." 
        disabled={false} checked={false}>
        Compound Button
        </CompoundButton>  
        </div> 
      </div>
    );
  }
}
export default Page3;