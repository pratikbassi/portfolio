// import React, { Component } from "react";
// import { render } from "react-dom";
//
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false,
//       placeholder: "Loading"
//     };
//   }
//
//   componentDidMount() {
//     fetch("api/visitor")
//       .then(response => {
//         if (response.status > 400) {
//           return this.setState(() => {
//             return { placeholder: "Something went wrong!" };
//           });
//         }
//         return response.json();
//       })
//       .then(data => {
//         this.setState(() => {
//           return {
//             data,
//             loaded: true
//           };
//         });
//       });
//   }
//
//   render() {
//     return (
//       <ul>
//         {this.state.data.map(visitor => {
//           return (
//             <li key={visitor.publicIp}>
//               {visitor.locationX} - {visitor.locationY}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
//
// export default App;
//
// const container = document.getElementById("app");
// render(<App />, container);



import React from 'react';
import Header from './homepage/header'
import Footer from './homepage/footer'
import Index from './homepage/body/index'


export default function App () {


    return (
        <div className='frontpage'>
            <Header />
            <Index />
            <Footer />
        </div>
    )
}



