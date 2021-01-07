import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);




  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);


  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
    </div> 
  )
}

export default Orders;

/*const handleSelectProduct = (product: Product) => {
  const isAlreadySelected = selectedProducts.some(item => item.id === product.id);

  if (isAlreadySelected) {
    const selected = selectedProducts.filter(item => item.id !== product.id);
    setSelectedProducts(selected);
  } else {
    setSelectedProducts(previous => [...previous, product]);
  }
}

const handleSubmit = () => {
  const productsIds = selectedProducts.map(({ id }) => ({ id }));
  const payload = {
    ...orderLocation!,
    products: productsIds
  }

  saveOrder(payload).then(() => {
    toast.error('Pedido enviado com sucesso!');
    setSelectedProducts([]);
  })
    .catch(() => {
      toast.warning('Erro ao enviar pedido');
    })
}

*/