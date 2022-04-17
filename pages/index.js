import Head from 'next/head';
import styles from './index.module.scss';

//import Products from 'components/HomeProducts';
import { db } from '@/config/firebase';
import Layout from 'components/Layout';
import Cards from '@/components/ProductCard/product-card';
//import { useProduct } from 'hooks/product.hook';
import { useAuth } from '../firebase/context';

export default function Home({ data, query }) {
  //console.log(data);
  db.collection('Users')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
      });
    });

  const auth = useAuth();
  console.log(auth);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>eclipse</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            <span className={styles.emoji}>🌙</span>New In
          </h1>
          <div className={styles.products}>
            {data.map((product) => {
              return (
                <Cards
                  key={product.id}
                  id={product.id}
                  data={data}
                  name={product.product_name}
                  image={product.cover_photo}
                  price={product.price}
                  //border
                />
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
}

Home.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};

  await db
    .collection('Products')
    .get()
    .then(function (querySnapshot) {
      const products = querySnapshot.docs.map(function (doc) {
        return { id: doc.id, ...doc.data() };
      });
      data = products;
    })
    .catch((e) => (error = e));

  return {
    data,
    error,
    query,
  };
};
