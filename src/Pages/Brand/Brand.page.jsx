import { useEffect, useState } from "react";
import axios from "axios";
import { useStoreState,useStoreActions } from "../../store/hooks.ts";
import { useNavigate } from "react-router-dom";
export default function Brand() {
    // const [brandList, setBrandList] = useState([])
    const [responseStatus, setResponseStatus] = useState('')
    const navigate = useNavigate();

    const {brand,brandList}=useStoreState((state)=> state.brandModel);

    const {setBrand,setBrandList} =useStoreActions((actions)=> actions.brandModel)

    async function fetchBrandDetails() {
        await axios.get("http://srv688052.hstgr.cloud:8080/brand").then(
            res => {
                setBrandList(res.data);
                setResponseStatus("success");
            }
        )
            .catch(err => {
                setResponseStatus("failed");
            });
    }

    useEffect(() => {
        fetchBrandDetails();
    }, [setBrandList])

    return (
        <div className="container" style={{paddingTop:'10rem'}}>
            <div className="row mb-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2>Brand</h2>
                    <p className="w-lg-50">Here You can find the groups of products that meet a similar consumer need or that can substitute for each</p>
                </div>  <div className="col text-end align-self-center"><a className="btn btn-outline-info btn-lg" role="button" onClick={()=>navigate("/createBrand")}>Create New Brand</a></div>
            </div>
            {responseStatus === "failed" ? <h1> Not able to fetch brand details</h1> :
                <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-3">
                    {brandList.map((brand, index) => (
                        <div className="col" key={index}>
                            <div className="card border-0 shadow-none">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                        <p className="fs-3 fw-bold text-center text-primary mb-0">{brand.brandName}</p>
                                        <p className="fs-3 fw-bold text-center text-primary mb-0">{brand.brandNameTn}</p>
                                    </div>
                                    <p className="text-center"><span>{brand.brandDescription}</span></p>
                                    <p className="text-center"><span>{brand.brandDescriptionTn}</span></p>
                                    <div className="d-flex">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }


        </div>
    );
}
