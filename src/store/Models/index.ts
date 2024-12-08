import { createStore as createEasyPeasyStore } from "easy-peasy";
import { HttpService } from "../../services/http/http.service";
import { BrandModel, brandModel } from "./brand/brand.model";
import { SignUpModel, signUpModel } from "./signUp/SignUp.model";
import { CategoryModel, categoryModel } from "./category/category.model";
import { productModel, ProductModel } from "./product/product.model";



export interface AppStoreModel{
brandModel: BrandModel;
productModel: ProductModel;
categoryModel: CategoryModel;
signUpModel: SignUpModel;
}
export const appStoreModel: AppStoreModel ={
   brandModel : brandModel,
   productModel : productModel,
   categoryModel : categoryModel,
   signUpModel: signUpModel
}


