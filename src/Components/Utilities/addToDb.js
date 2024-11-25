import { toast } from 'react-toastify';
// add to cart

const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('add-to-cart');

    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else {
        return [];
    }
}

const addToStoreCart = (id) => {
    const storedCart = getStoredCart();

    if (storedCart.includes(id)) {
        toast.error('Already Added to the Cart');
    }
    else {
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('add-to-cart', storedCartStr);
        toast.success("Product Added to the Cart");
    }
}

const removeStoreCart = (id) => {
    const storedCart = getStoredCart();

    if (storedCart.includes(id)) {
        const newCart = storedCart.filter(cart => cart !== id)
        const storedCartStr = JSON.stringify(newCart);
        localStorage.setItem('add-to-cart', storedCartStr);
        toast.warning('Product Remove from the Cart');
    }
}

const removeAllStoreCart = () => {
    localStorage.removeItem('add-to-cart');
}
// add to wishlist

const getStoredWish = () => {
    const storedWishStr = localStorage.getItem('add-to-wish');

    if (storedWishStr) {
        const storedWish = JSON.parse(storedWishStr);
        return storedWish;
    }
    else {
        return [];
    }
}

const addToStoreWish = (id) => {
    const storedWish = getStoredWish();

    if (storedWish.includes(id)) {
        toast.error('Already Added to the Wishlists');
    }
    else {
        storedWish.push(id);
        const storedWishStr = JSON.stringify(storedWish);
        localStorage.setItem('add-to-wish', storedWishStr);
        toast.success("Product Added to the Wishlist");
    }
}

const removeStoreWish = (id) => {
    const storedWish = getStoredWish();

    if (storedWish.includes(id)) {
        const newWish = storedWish.filter(wish => wish !== id)
        const storedWishStr = JSON.stringify(newWish);
        localStorage.setItem('add-to-wish', storedWishStr);
        toast.warning('Product Remove from the Wishlist');
    }
}


export { addToStoreCart, addToStoreWish, getStoredWish, getStoredCart, removeStoreCart, removeStoreWish, removeAllStoreCart }