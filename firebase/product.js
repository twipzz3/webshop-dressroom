import { auth, db } from '../config/firebase';

function addToCart(newCart) {
  const currentUser = auth.currentUser.uid;

  return db.collection('Users').doc(currentUser).update({
    cart: newCart,
  });
}

export { addToCart };
