import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Circles } from 'react-loader-spinner';

const Store = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'products',
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
  if (isError) return <
    div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        fontFamily: "sans-serif",
        fontSize: 'large',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }
    }>
    Error fetching products</div>;


  console.log('Checking for data:', data);


  // Loader styles
  const loaderStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh', // cover entire viewport
  };

  return (
 
    <div>
      {isLoading ? (
        <div style={loaderStyles}>
          <Circles color="teal" height={60} width={60} />
        </div>
      ) : (
        <div >
          <h2> ONLINE PRODUCT STORE</h2>
          <ul style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, auto)",
            gap: "15px",

          }}>
            {data.map((product) => (
              <li key={product.id}
                style={{
                  borderRadius: "6px",
                  boxShadow: "7px 8px 8px rgba(0, 0, 0, 0.1)",
                  height: '350px',
                  backgroundColor: '#ffdab9',
                }}>
                {product.image && (
                  <img src={product.image}
                    alt={product.title}
                    style={{
                      width: 150,
                      height: 200,
                      borderRadius: 10,
                      paddingLeft: '1.25rem',
                      paddingTop: '1.25rem',
                      position: "relative",
                      left: '3.125rem',
                      mixBlendMode: "darken",
                    }}
                  />

                )}
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center',
                  }}>
                  <p
                    style={{
                      position: 'relative',
                      color: '#252525',
                      padding: '.6rem',
                      display: 'grid',
                      placeItems: 'center',

                    }}
                  >{product.title}</p>
                  <h4
                    style={{
                      position: 'relative',
                      bottom: '40px',
                      color: '#3a6ea5',
                      padding: '.5rem',
                      backgroundColor: '#a3cef1',
                      borderRadius: '0.625rem',
                    }} >N{product.price}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Store;
