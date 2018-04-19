import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Button } from 'react-bootstrap';

function App(){

  return (
    <div className="container">
      // <style jsx global>{`
      //   .container {
      //     padding: 20px;
      //   }
      //   body {
      //     font-family: Helvetica;
      //   }
      //   .box {
      //     border: none;
      //     display: block;
      //     border-bottom: 2px solid #fff;
      //     margin-bottom: 10px;
      //   }
      //   .box:hover {
      //     border-bottom: 2px solid #ccc;
      //     outline: 0;
      //   }
      //   a {
      //     color: #888;
      //     text-decoration: none;
      //   }
      //   #primary{
      //     font-size: 14px;
      //     font-weight: 400;
      //     background-color: #428bca;
      //     border-radius: 5px;
      //     width: 110px;
      //     padding: 6px 12px;
      //     border-color: #529fdc;
      //     color: white;
      //   }
      //   #primary:hover{
      //     background-color: #357ebd;
      //     cursor: pointer;
      //   }
      // `}</style>

      <div style={{margin: '19px auto 0'}}>
        <a href="https://medium.com/" target="_blank">
          <div className="box">
            <h1>this content will change on hover because we're using styled-jsx! It would even change if our div with className 'box' was in a nested component! So cool!</h1>
          </div>
        </a>
      </div>
      <Header/>
      <TicketList/>
      <Button bsStyle="warning">Facebook</Button>
    </div>
  );
}

export default App;
