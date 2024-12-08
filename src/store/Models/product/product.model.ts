import { Action,  action } from "easy-peasy";
import { Product } from "../../interface";

interface ProductState{
    product: Product;
    productList: Array<Product>;
}

interface ProductActions{
    setProduct: Action<this, Product>;
    setProductList:Action<this, Array<Product>>;
}


export interface ProductModel extends ProductState, ProductActions{

}

export const productModel: ProductModel={
    product: {},
    productList: [],

    setProduct: action((state, product) => {
        state.product = product;
    }),
    setProductList: action((state, productList) => {
        state.productList = productList;
    }),
}