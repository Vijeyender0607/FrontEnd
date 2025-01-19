import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStoreState,useStoreActions } from "../../store/hooks.ts";
export function Product()
{
    const [productList,setProductList] = useState([])
    const [responseStatus,setResponseStatus]= useState('')
    const {category,categoryList}=useStoreState((state)=> state.categoryModel);
    const navigate = useNavigate();
    async function fetchProductDetails(){
        await axios.get("http://srv688052.hstgr.cloud:8008/product/get-products-by-type/"+category.categoryName).then(
            res=>{ 
                 setProductList(res.data);
                 setResponseStatus("success");
           }
         )
         .catch(err=>{
           setResponseStatus("failed");    
         });
    }
    
    useEffect(()=>{
        fetchProductDetails();
    },[setProductList])
      return(
        <>
       <section id="products" className="photo-gallery py-4 py-xl-5">
        <div className="container" style={{paddingTop: '12rem'}}>
          
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Products</h2>
                    <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
                </div>  <div className="col text-end align-self-center"><a className="btn btn-outline-info btn-lg" role="button" onClick={()=>navigate("createproduct")}>Create New Product</a></div>
            </div>
            <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
            {productList.map((item)=>(
                <div className="col item">
                    <div className="card border-0 shadow-none">
                        <div className="card-body text-center d-flex flex-column align-items-center p-0">{item.productImg}
                            <div className="row" style={{ margin:"0px", marginRight:"0px", marginBottom:"10px", marginTop:"0px", }}>
                                <div className="col">
                                    <h5 className="fw-bold text-primary mb-0">{item.productName}</h5>
                                    <h5 className="fw-bold text-primary mb-0">{item.price}</h5>

                                </div>
                              
                            </div>
                            <div className="row" style={{ marginRight:"-20px", marginBottom:"10px", }}>
                                <div className="col" style={{ background:"#e43c3c", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" fill="currentColor"></path>
                                    </svg></div>
                                <div className="col"><input type="number" style={{ width:"100px", }} /></div>
                                <div className="col" style={{ background:"#50d966", }}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icon-tabler-plus">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg></div>
                            </div><button className="btn btn-primary" type="button" style={{ width:"57%", }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
))}
               </div>
               </div>
    </section>
        </>
    )
}