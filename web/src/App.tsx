import { useState,useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css'
import logoImg from './assets/nlw-sports.svg'

import GameBanner from './components/GameBanner'
import CreateAddBanner from './components/CreateAddBanner'
import { GameController } from 'phosphor-react'
import Input from './components/FormsInput'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads: number;
  }
}

function App() {

  const [games, setGames] = useState<Game[]>([])

  const apiDevGames = 'http://localhost:3333/games'
  const apiProdGames = ''
  
  useEffect(()=>{
    fetch(apiDevGames)
      .then(res => res.json())
      .then(data =>{
        setGames(data)
      })
  },[])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
       <img src={logoImg} alt="logo eSports nlw"/>

       <h1 className='text-6xl text-white font-black mt-20 mb-20'>
        Seu <em className='bg-nlw-gradient text-transparent bg-clip-text'> duo </em >está aqui
      </h1>

        <div><ul className='grid grid-cols-6 gap-6'>
          {games.map(game => {
            return (
              <li key={game.id}>
                <GameBanner
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  adsCount={game._count.ads}
                />
              </li>
            )
          })}
        </ul></div>  
    

       <Dialog.Root>
        <CreateAddBanner/>
        
        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 fixed bg-black/90"/>
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[50%] shadow-lg shadow-orange-400/70">
            <Dialog.Title className='text-3xl font-black'>Publique um Anúncio</Dialog.Title>
              <form action="" className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='font-semibold'>Qual o Game</label>
                  <Input placeholder='Selecione o game que deseja jogar'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="">Seu nome (ou Nickname)</label>
                  <Input id="name" placeholder='Como te chamam dentro do game?'/>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'> 
                    <label htmlFor="yearsPlayng">Joga há quantos anos?</label>
                    <Input id="yearsPlayng" type="number" placeholder='Tudo bem ser ZERO' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual seu Discord?</label>
                    <Input id="discord" type="text"  placeholder='Usuario#000'/>
                  </div>
                </div>

                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDay">Quando costuma jogar?</label>
                   
                   <div className='grid grid-cols-4 gap-2'>
                   <button 
                      className='w-8 h-8 rounde text-xs bg-zinc-900 gap-2' 
                      title='Domingo'>DOM</button>
                    <button 
                      className='w-8 h-8 rounded text-xs bg-zinc-900 gap-2' 
                      title='Segunda'>SEG</button>
                    <button 
                      className='w-8 h-8 rounded text-xs bg-zinc-900 gap-2' 
                      title='Terça'>TER</button>
                    <button 
                      className='w-8 h-8 rounded text-xs bg-zinc-900 gap-2' 
                      title='Quarta'>QUA</button>
                    <button 
                      className='w-8 h-8 rounded text-xs bg-zinc-900 gap-2' 
                      title='Quinta'>QUI</button>
                    <button 
                      className='w-8 h-8 rounded text-xs bg-zinc-900 gap-2' 
                      title='Sexta'>SEX</button>
                    <button 
                      className='w-8 h-8 rounded text-xs bg-zinc-900 gap-2' 
                      title='Sábado'>SÁB</button>
                   </div>

                  </div>
                  
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input type="time" placeholder='De'/>
                      <Input type="time" placeholder='Até'/>
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex justify-end gap-4'>
                  <Dialog.Close
                    type='button'
                    className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                      Cancelar
                  </Dialog.Close>
                  <button 
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type="submit">
                    <GameController className='w-6 h-6'/>
                    Encontrar duo</button>
                </footer>

              </form>
          </Dialog.Content>
        </Dialog.Portal>

       </Dialog.Root>   

    </div>
  )
}

export default App
