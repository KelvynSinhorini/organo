import Banner from './components/Banner/index.js';
import InputText from './components/InputText/index.js';

function App() {
  return (
    <div className="App">
      <Banner />
      <InputText label="Nome" placeholder="Digite o seu nome" />
      <InputText label="Cargo" placeholder="Digite o seu cargo" />
      <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
