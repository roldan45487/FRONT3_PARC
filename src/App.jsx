import Card from "./Card";
import eventos_error from"./components/eventos-error";
import eventos from"./Components/eventos";
import formulario from"./components/formulario";

function App() {
  return (
    <div className="App">
      <Card />
      <Eventos/>
      <Formulario/>
      <eventos_error/>
    </div>
  );
}


export default App;
