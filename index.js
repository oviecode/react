import React from "react"
import  "./Header"
import  "./MainContent"
import  "./Footer"

function App(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root")
)





// ReactDOM.render(<h1>Hello, Dickson</h1>, document.getElementById("root"))
// const page =(
//     <div>
//         <h1>List Items</h1>
//         <ul>
//             <li>Port Harcourt</li>
//             <li>Lagos</li>
//             <li>Abuja</li>
//         </ul>
//     </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

// const navbar = (
//     <nav>
//         <h1>React</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(
//     navbar,
//     document.getElementById("root")
// )
// const list = (
//     <div>
//         <h1>List of Cars</h1>
//         <ul>
//             <li>Toyota</li>
//             <li>Benz</li>
//             <li>Audi</li>
//             <li>Lexus</li>
//         </ul>
//         <h3>Thank You</h3>
//     </div>
// )
// ReactDOM.render(list, document.getElementById("root"))
// const react = (
    
// )
// ReactDOM.render(react, document.getElementById("root"))
// function ReactFnc() {
//     return(
//         <div>
//         <img src="logo.jpeg" width="40px" />
//         <h1>React Dom Testing</h1>
//         <ul>
//             <li>Htmk</li>
//             <li>Css</li>
//             <li>Js</li>
//         </ul>
//     </div>
//     )
// }

// ReactDOM.render(<ReactFnc />, document.getElementById("root"))
