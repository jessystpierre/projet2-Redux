import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Categories from './components/categories/Categories'
import Recettes from './components/recettes/Recettes'
import Recette from './components/recette/Recette'
import Favorites from './components/favorites/Favorites';
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={< Categories />}/>
        <Route path='/categorie/:name' element={< Recettes />} />
        <Route path='/recettes/:recette/:id' element={< Recette />} />
        <Route path='/recettes/favorites/' element={< Favorites />} />
      </Routes>
    </QueryClientProvider>
    
  )
}

export default App
