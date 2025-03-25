import { ExampleNavbarFour } from "../Components/NavBarPostLogin"
import { ProductThree } from "../Components/ProductCards"
import Filters from "../Components/Filters"
import {FooterThree} from "../Components/Footer"

function HomePage() {
    // const [filteredProducts, setFilteredProducts] = useState([]);
  
    // const handleFilterChange = (filters) => {
    //   // Implement logic to filter products based on selected filters
    //   // This may involve a backend request or just filtering the already available product data
    // };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow">
        <ExampleNavbarFour />
        <ProductThree />
      </div>

      {/* Footer at the Bottom */}
      <FooterThree />
      {/* <Filters onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} /> */}
    </div>
      
    
  )
}

export default HomePage
