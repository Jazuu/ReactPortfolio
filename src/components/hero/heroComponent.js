import React, { Component } from 'react';
import '../../styles/my-theme.css';

class HeroComponent extends Component {
constructor(props){
  super(props);
  this.state = {
    name : 'Julio Zúniga',
    job : 'System Administrator',
    title : '¡Hello World!'
  }
}

myFunction(){
  alert('Hello World!');
}

  render() {
    return (
      <div>
        
        <section className="main-section hero-header section--with-backdrop section--with-parallax">
          <h2 className="hero-header__subtitle">{this.state.title}</h2>
          <h1 className="hero-header__title">{this.state.name}</h1>
          <h2 className="hero-header__subtitle">{this.state.job}</h2>
        </section>
        
            <div>
              <button type='button' onClick={() => this.myFunction()}>My Button</button>
            </div>

      </div>


    );
  }
}

export default HeroComponent;
