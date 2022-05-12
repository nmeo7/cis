import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { app, auth1, firestore1 } from './firebaseConfig'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from "firebase/firestore"
import { AppLayout, CardItem, CisCalculator, Context, DashboardLayout, ProductCard, PseudoCard, redirect, route, RoutesWrapper, WebsiteLayout } from 'neza-ui-library';


console.log (firestore1)



const Something = () => {
  const productsRef = collection(firestore1, "products")
  const q = query(productsRef)// , where("name", "==", 'some product'))

  useEffect(() => {
    setDoc(doc(firestore1, "products", "NY"), {
      name: "New York",
      state: "NY",
      country: "USA"
    })
  }, [])




  
    const [products] = useCollectionData (q, {idField: 'id'})
    console.log (products)
    return <div>
      { products && products.map ( product => <div> { product?.name } </div> ) }
    </div>
}

const product_img = null

const Card = () => {
  return <div style={{ position: 'relative', boxShadow: '1px 2px 8px #ccc', borderRadius: '32px', padding: '8px', textAlign: 'center' }} >
    <div style={{ position: 'absolute' }} >discount</div>
    <div style={{ position: 'absolute', right: '0', top: '0', background: '#e43', width: '64px', height: '64px', borderRadius: '0 32px 0 8px' }} ></div>
    <img width='100%' style={{ aspectRatio: '1/1', display: 'inline-block' }} alt='product image' />
    <p>product name</p>
    <h1>price</h1>
  </div>
}

const Sale = () => {
  const [sales, setSales] = useState({})

  const products = {
    'Product 1': { price: 2500 },
    'Product 2': { price: 3500 },
    'Product 3': { price: 500 },
    'Product 4': { price: 2000 },
    'Product 5': { price: 100 },
    'Product 6': { price: 5500 },
    'Product 7': { price: 2000 },
    'Product 8': { price: 1000 },
    'Product 9': { price: 2000 },
    'Product 10': { price: 1000 },
  }

  useEffect( () => console.log (Object.keys(sales)) )

  return <div style={{ display: 'flex', width: 'calc(100% - 32px)', height: 'calc(100% - 32px)', padding: '16px' }} >
  <div style={{ width: '400px', display: 'flex', flexDirection: 'column', height: '100%' }} >
    <div style={{ flex: '1', borderRight: '1px solid black' }} >
      {
        Object.keys(sales).map( s => <p>{s}: {sales[s]}</p> )
      }
      <h2>total: { Object.keys(sales).reduce( (acc, s) => acc + products[s].price * sales[s], 0 ) }</h2>
    </div>
    <CisCalculator/>
  </div>
    <div style={{ flex: '1', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', overflowY: 'scroll', height: 'calc(100vh - 132px)', paddingLeft: '16px', gap: '16px' }} >
      {
        Object.keys(products).map(
          (name) => <ProductCard name={name} price={products[name].price} img={product_img} onClick={ () => { const s = {...sales}; s[name] = (s[name] || 0) + 1; setSales(s) } } />
        )
      }
    </div>
  </div>
}

const menu = [
  { label: 'website', link: '/'},
  { label: 'hi', link: '/something'},
  { label: 'again', link: '/something-else'}
]
const routes =
    [
      { path: "/", element: <WebsiteLayout  /> },
      { path: "/something", element: <Something /> },
      { path: "/something-else", element: <Sale/> },
      { path: "*", element: redirect("/login") }
    ]

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <AppLayout header={ <h1 style={{ padding: '16px', fontSize: '1.4em' }} >Next Gen - T24</h1> } >
          <RoutesWrapper>
          { routes.map( route ) }
          </RoutesWrapper>
      </AppLayout>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
