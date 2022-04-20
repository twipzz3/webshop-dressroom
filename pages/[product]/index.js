import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { db } from '@/config/firebase';
import { useAuth } from '@/firebase/context';
import { useCart } from 'hooks/cart.hook';
import { addToCart } from '@/firebase/product';

import styles from './product.module.scss';

import Layout from 'components/Layout';
import Button from '@/components/Button';
import ButtonGr from '@/components/ButtonGr';
import ErrorPage from 'pages/404';
import { useRouter } from 'next/router';

export default function Product({ data, query }) {
  if (!data.product_name) {
    return <ErrorPage />;
  }

  const [selectedSize, setSelectedSize] = useState();
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const { user, loading } = useAuth();

  const router = useRouter();

  const { cover_photo, description, photos, price, product_name, sizes } = data;

  const id = query?.product;

  const cart = useCart().data;

  console.log(cart);

  const addCartEvent = () => {
    if (!user && !loading && typeof window !== 'undefined')
      router.push('/login');
    else {
      if (selectedSize) {
        const newCart = {
          ...cart,
          [id]: cart.hasOwnProperty(id)
            ? [...cart[id], selectedSize]
            : [selectedSize],
        };
        addToCart(newCart);
      }
      if (sizes?.length === 0) {
        const newCart = {
          ...cart,
          [id]: cart.hasOwnProperty(id) ? [...cart[id], '-'] : ['-'],
        };
        addToCart(newCart);
      }
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>eclipse</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.photosContainer}>
            <div className={styles.carouselContainer}>
              <img src={photos[selectedPhoto]} loading="lazy" />
            </div>
            <div className={styles.smallPhotos}>
              {photos.slice(0, 5).map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    className={styles.smallPhoto}
                    style={{
                      borderColor: selectedPhoto === index && '#C045F0',
                    }}
                    onClick={() => setSelectedPhoto(index)}
                    loading="lazy"
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.productInfos}>
            <div className={styles.header}>
              <h1 className={styles.productTitle}>{product_name || ''}</h1>
            </div>
            <div className={styles.prices}>
              <h4 className={styles.pricesText}>Price</h4>
              <span className={styles.priceText}>{price || 0}$</span>
            </div>
            <hr />
            <div className={styles.sizes}>
              <h4 className={styles.sizesText}>Size</h4>
              {sizes.map((size) => {
                return (
                  <button
                    key={size}
                    className={styles.sizeButton}
                    style={{
                      borderColor: selectedSize === size && '#C045F0',
                      color: selectedSize === size && '#C045F0',
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
            <hr />
            <div className={styles.buttons}>
              <Link href="/virtual-room">
                <ButtonGr style={{ margin: 0 }}>Virtual Room</ButtonGr>
              </Link>
              <Button style={{ margin: 0 }} onClick={addCartEvent}>
                Add to Cart
              </Button>
            </div>
            <hr />
            <div className={styles.infoContainer}>
              <h4 className={styles.sizesText}>Product Information</h4>
              <p className={styles.infoText}>{description}</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

Product.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};
  await db
    .collection('Products')
    .doc(query.product)
    .get()
    .then(function (doc) {
      data = { id: doc.id, ...doc.data() };
    })
    .catch((e) => (error = e));

  return {
    data,
    error,
    query,
  };
};
