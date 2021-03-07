import React, { Component } from 'react'


export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: '' ,
      email:'' ,
      message:''
    }
   
  }

  handleChange = (event) => {
    let changeName = event.target.name
    this.setState({ [changeName]: event.target.value});
    
  }

  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);

    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(
        this.state
      ),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function(data){
      console.log(data)
    })

    event.preventDefault();
  }

  render() {
    return (

      <section id="contact" data-scroll-index={5}>
        <form>
          {/*left-------------------------------------*/}
          <div className="contact-left">
            <h1 className="c-l-heading">
              <font style={{ borderBottom: '3px solid #1ED98B' }}>Contact</font>
            </h1>
            {/*name------*/}
            <div className="f-name">
              <font>Name</font>
              <input type="text" id="name" name="name" value={this.state.name} placeholder="Full Name"  onChange={this.handleChange}/>
            </div>
            {/*email------*/}
            <div className="f-email">
              <font>Email</font>
              <input type="email" id="email" name="email" value={this.state.email} placeholder="Example@gmail.com" onChange={this.handleChange}/>
            </div>
          </div>
          {/*right-----------------------------------------*/}
          <div className="contact-right">
            {/*message------*/}
            <div className="message">
              <font>Message</font>
              <textarea name="message" id="message" name="message" value={this.state.message} rows={5} cols={20} placeholder="Write Message..." onChange={this.handleChange} defaultValue={""} />
            </div>
            {/*submit-btn----------*/}
            <button onClick={this.handleSubmit}>submit</button>
          </div>
        </form>
      </section>
    )
  }
}

