import './App.css'
import Navbar from './components/Navbar'
import CustomRoutes from './routes'


function App() {
  
  return (
    <section className='flex w-screen h-screen overflow-hidden'>
      <Navbar/>
      <main className='m-[30px]'>
        <CustomRoutes/>
      </main>
    </section>
  )
}

export default App