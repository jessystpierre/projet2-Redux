import {Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Categories from './components/categories/Categories'
//import Recette from './components/recette/Recette'
//<Route path='/recette/:name' element={<Recette />} />
const queryClient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={< Categories />}/>
       
      </Routes>
    </QueryClientProvider>
  )
}

export default App
