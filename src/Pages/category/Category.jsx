import {useState, useEffect} from 'react'
import axios from "axios";
import { useStoreState,useStoreActions } from "../../store/hooks.ts";
import { useNavigate } from 'react-router-dom';
const Category = () => {
    const {brand,brandList}=useStoreState((state)=> state.brandModel);
    
    const navigate = useNavigate();
    const {setBrand,setBrandList} =useStoreActions((actions)=> actions.brandModel)
    const {setCategory} =useStoreActions((actions)=> actions.categoryModel)
 const [categories,setCategories] = useState([])
const [responseStatus,setResponseStatus]= useState('')

async function fetchCategoryDetails(){
    await axios.get("http://srv688052.hstgr.cloud:8008/product/get-products-list").then(
        res=>{ 
            setCategories(res.data);
             setResponseStatus("success");
       }
     )
     .catch(err=>{
       setResponseStatus("failed");    
     });

     console.log("brand list in category page")
     console.log(brandList)
}

useEffect(()=>{
    fetchCategoryDetails();
},[setCategories])


  return (
    <section className="photo-gallery">
        
    <div className="container">
    <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Category</h2>
                    <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
                </div>  <div className="col text-end align-self-center"><a className="btn btn-outline-info btn-lg" role="button" onClick={()=>navigate("createproduct")}>Create New Category</a></div>
            </div>
        
        <div className="row gx-2 gy-2 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
        {categories.map((category)=>(
        
            <div className="col item"><a href="">
                    <div className="card border-0 shadow-none" onClick={()=>{ setCategory({
   categoryName:category}); navigate("/Product",{ replace: true }); }}>
                        <div className="card-body text-center d-flex flex-column align-items-center p-0"><img className="rounded-circle mb-3 fit-cover" width="130" height="130" src="assets\img\category\cooking_essentials.jpeg" />
                            <h5 className="fw-bold text-primary card-title mb-0">{category} </h5>
                        </div>
                    </div>
                </a></div>
                
                ))}
                </div>
                </div>
    </section>
  )
}

export default Category