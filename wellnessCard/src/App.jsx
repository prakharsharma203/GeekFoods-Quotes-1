import { data } from "./data.js";
import { Navbar } from "./components/navbar/nav"
import { Card } from "./components/card/card.jsx";
import { Footer } from "./components/footer/footer.jsx";

function App() {
 
  return (
    <>
     <Navbar/>
     {data.map((detail) => (
        <Card  detail={detail} />
      ))}
      <Footer/>
    </>
  )
}

export default App
