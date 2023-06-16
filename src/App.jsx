import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';


function App() {

  const [personagem, setPersonagem] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [texto, setTexto] = useState([]);
  const getPersonagem = async () => {
    const { data } = await axios.get("https://648a7b1c17f1536d65e92948.mockapi.io/simpsons")
    setPersonagem(data)
  }

  /* EXCLUIR PERSONAGEM*/

  const excluir = async (id) => {
    await axios.delete(`https://648a7b1c17f1536d65e92948.mockapi.io/simpsons/${id}`)
    setPersonagem((personagem) => personagem.filter((item) => item.id !== id))

  }

  useEffect(() => {
    getPersonagem()
  }, [])

  // const filtro = (event) => {
  //   setPesquisa(event.target.value);
  // };

  /*FAVORITAR PERSONAGEM*/

  async function curtir(id, favoritos) {

    const simp = personagem.filter((item) =>
      item.id !== id)
    const response = await axios.put(`https://648a7b1c17f1536d65e92948.mockapi.io/simpsons/${id}`, { favoritos: !favoritos })
    console.log(response)
    getPersonagem()
  }

  /*FILTRAR PERSONAGEM*/

  const filtro = (event) => {
    setPesquisa(event.target.value);
  };

  useEffect(() => {
    const busca = personagem.filter((item) =>
      item.personagem.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setTexto(busca);
  }, [pesquisa, personagem])
  

  return (
    
      <div className='fundo'>
        <input type="text" value={pesquisa} onChange={filtro} className='pesquisa'  placeholder="Pesquise seu Simpsom favorito aqui!"/>
        <div className='caixa'>
          {texto.map((item) => (
            <div key={item.id} className='card'>
              <img src={item.imagem} alt="foto personagem" className='foto' />
              <h2 className='personagem'>{item.personagem}</h2>
              <h3 className='familia'>{item.familia}</h3>
              <button className='curtir' onClick={() => curtir(item.id, item.favoritos)}>
                Curtir {item.favoritos ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
              <button className='excluir' onClick={() => excluir(item.id)}>Excluir</button>
            </div>
          ))}
        </div>
      </div>
    
  )
}

export default App
