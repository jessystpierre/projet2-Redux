import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Recettes from './components/recettes/Recettes'
//import Recette from './components/recette/Recette'
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Recettes />}/>
       
      </Routes>
    </QueryClientProvider>
  )
}

export default App
