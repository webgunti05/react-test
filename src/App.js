import React, {useState, useEffect, Suspense, lazy} from 'react';
import './App.css';
import * as STYLE from './styles/appStyles';
import HeaderComponent from './components/header';
import LoaderComponent from './components/loader';
import { getAllProducts } from './services/apiService';

const ProductComponent = lazy(() => import('./components/products'));

function App() {

  const [products, setProducts] = useState([]);
  //const [loader, setLoader] = useState(false);

  const getProducts = async() => {
    //setLoader(true);
    const data = await getAllProducts();
    if(data){
      setProducts(data);
      //setLoader(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <STYLE.AppMainBg>
      <HeaderComponent />
      <Suspense fallback={<LoaderComponent />}>
          <ProductComponent productsList={products} />
      </Suspense>
     
    </STYLE.AppMainBg>
  );
}

export default App;
