import React, {useState, useEffect, Suspense, lazy} from 'react';
import './App.css';
import * as STYLE from './styles/appStyles';
import TopBar from './components/topBar';
import LoaderComponent from './components/loader';
import { getAllProducts, filterProductsByRange } from './services/apiService';
import FilterSearch from './components/filterSearch';

const ProductComponent = lazy(() => import('./components/products'));

function App() {

  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [filterProducts, setFilterProducts] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const getProducts = async() => {
    const data = await getAllProducts();
    if(data){
      setProducts(data);
    }
  }

  const SearchProducts = e => {
    const searchValue = e?.target?.value;
    setSearchVal(searchValue);
    if(searchValue !== ""){
      const filterItems = products?.filter(item => {
        return Object.values(item).join('').toLowerCase().includes(searchVal.toLowerCase());
      });
      setFilterProducts(filterItems);
    } else{
      setFilterProducts(products);
    }
  }

  const OpenFilterSearch = () => {
    setOpenFilter(true);
  }

  const filterProductsRange = async(min, max) => {
    const data = await filterProductsByRange(min, max);
    if(data){
      setProducts(data);
      setOpenFilter(false);
    }
  }

 

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <STYLE.AppMainBg>
      <TopBar 
        onSearchProducts={(e) => SearchProducts(e)}
        onOpenFilterSearch={OpenFilterSearch}
        />
      <Suspense fallback={<LoaderComponent />}>
          <ProductComponent 
            productsList={products} 
            searchItem={searchVal} 
            filterProductsList={filterProducts}
             />
      </Suspense>
      {openFilter && 
        <FilterSearch 
          onFilterProductsRange={(min, max) => filterProductsRange(min, max)}
          getProducts={getProducts}
          setOpenFilter={setOpenFilter} 
      />
      }
     
    </STYLE.AppMainBg>
  );
}

export default App;
