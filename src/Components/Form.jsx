import React, { useRef } from 'react';

export default function Form() {


      const inputRef = useRef();

      const handleClick = () =>{
        event.preventDefault(); 
        inputRef.current.focus();
        // let p = inputRef.current.value 
       
        alert(`Form submitted.. `)

      }

  return (
    <div>
      <div className="container">
        <h2>Get in touch</h2>
        <form>
          <div>
            <i className="fas fa-user icon"></i>
            <input ref={inputRef} type="text" placeholder="Name" required />
          </div>
          <div>
            <i className="fas fa-envelope icon"></i>
            <input ref={inputRef} type="email" placeholder="Email" required />
          </div>
          <div>
            <textarea placeholder="Message" required></textarea>
          </div>
          <button onClick={handleClick}>Send</button>
        </form>
      </div>
    </div>
  );
}
