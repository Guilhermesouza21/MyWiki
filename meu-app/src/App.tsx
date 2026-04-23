import Header from "./components/Header";
import Background from "./components/Background";
import Infobox from "./components/Infobox";
import Text from "./components/Text";

export default function App() {
  return (
    <>
      <Header />
          <Background />
          <div className="wiki-layout">
            <Text />
            <Infobox /> 
          </div>
      
      


      <main style={{ marginLeft: "300px", padding: "20px" }}>
       
      </main>
    </>
  );
}