import "../styles/Infobox.css"
import eu from "../assets/eu.png"
import df from "../assets/df.svg"
import unb from "../assets/unb.svg"


export default function Infobox() {
  return (


  <div className="infobox">
    <div className="infobox-header">
      <h2>Guilherme Souza</h2>
    </div>
    
    <div className="infobox-image">
    
      <img src={eu}  />
      <div className="infobox-image-caption">Guilherme em 2025</div>
    </div>
    


 <div className="infobox-row">
      <div className="infobox-label">Nome</div>
      <div className="infobox-value">Guilherme Souza Santos</div>
    </div>




     <div className="infobox-row">
      <div className="infobox-label">Nascimento</div>
      <div className="infobox-value">9 de Fevereiro de 2006</div>
    </div>


  <div className="infobox-row">
      <div className="infobox-label">Local de Nascimento</div>
      <div className="infobox-value">Brasília <img src={df} width={30} /> , Brasil</div>
    </div>

<div className="infobox-row">
      <div className="infobox-label">Nacionalidade</div>
      <div className="infobox-value">Brasileiro <img src="https://flagcdn.com/br.svg" width="30" ></img></div>
    </div>

 <div className="infobox-row">
      <div className="infobox-label">Etnia</div>
      <div className="infobox-value">Pardo</div>
    </div>

    <div className="infobox-row">
      <div className="infobox-label">Sexo</div>
      <div className="infobox-value">Masculino</div>
    </div>


 <div className="infobox-row">
      <div className="infobox-label">Idomas</div>
      <div className="infobox-value">Português <br /> Inglês</div>
    </div>

  
   
    
 <div className="infobox-row">
      <div className="infobox-label">Formação</div>
      <div className="infobox-value"> <img src={unb} width={30}  />UnB(Graduando) <br /> CEM JK  <br />CIL NB </div>
    </div>

    
    
    
    
    <div className="infobox-row">
      <div className="infobox-label">Função</div>
      <div className="infobox-value">Engenheiro de Software <br /> Web Desenvolvedor</div>
    </div>
    
    
  </div>

 
  )



}