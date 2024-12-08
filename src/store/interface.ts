

export interface Brand {
    id?:number;
    brandName?:string;
    brandNameTamil?:string;
}

export interface Category
{
    id?:number,
   categoryName?:string,
   categoryNameTamil?:string
}
export interface Product
{
    id?:number,
    productCode?:string,
    productName?:string,
    productContent?:string,
    price?:string,
    discount?:string,
    finalPrice?:string,
    productType?:string
}

export interface SignUp{
    mobileNumber?: number,
    otp?:number,
    address?:string,
    name?:string,
}