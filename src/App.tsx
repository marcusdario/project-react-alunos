import { Header} from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer'
export default function App(){
  return(
    <div>
      <Header title="Aprendendo do zero ao avançado"/> 

      <Aluno nome="Ana Caroline" idade={25} />

      <Aluno nome="Marcus Santos" idade={35} />

      <Aluno nome="Luciane" idade= {23} />

      <Footer/>
    </div>
  )
}
