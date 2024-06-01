import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/** we can't use arrow funtion here */
function MyApp() {
  return(
    <div>
      <h1>Welcome to MyApp</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a', 
//   props: {
//       target: '_blank',
//       href: 'https://google.com'k
//   },
//   styles: {
//       color: 'black',
//       fontSize: '24px'
//   },
//   children: "Google"
// }

const anotherElement = (  
  <>
  <a target='_blank' href='https://google.com'>Google</a>
  <br />
  <a target='_blank' href='https://google.com'>Google</a> <br />
  you can do whatever you want here, this is normal your html file's body.
  </>
)
  
const reactElement = React.createElement(
  'a',
  {target:'_blank', href:'https://google.com', style: {color: 'blue', fontFamily: 'helvetica', textDecoration: 'none'} },
  'Google me'
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)
