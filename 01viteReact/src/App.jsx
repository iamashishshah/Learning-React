import Welcome from "./Welcome"
const isLogin = "false"
function App() {
  const username = 'Ashish'
  return (
    <>
      <Welcome/>
      <h1>This is Heading {username}</h1>
      <p>This is paragraph {isLogin}</p>
    </>
  )
}

export default App
