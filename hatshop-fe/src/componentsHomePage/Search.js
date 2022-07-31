import { Link, useNavigate } from 'react-router-dom';

import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import { searchApi } from '../api/searchApi';
import "../css/fillter.css";

function Search (){

     const [product, setProduct] = useState();
     const navigate = useNavigate();
     const name = sessionStorage.getItem("nameSearch")

     const [input, setInputs] = useState({
        name : name,
        biginDate : new Date("2020/01/01"),
        endate : new Date("2024/01/01"),
        beginPrice : 250000.0,
        endPrice : 750000.0,
        kind : ""
     })
     useEffect(() => {
         // gọi api chỗ này
         searchApi.checkSearchInput(name)
             .then(res=> {
                setProduct(res);
                 console.log("res : ", res)
                 const s = document.getElementById("message");
                 const s2 = document.getElementById("titleProduct");
                 const length = res.length;
                 console.log( "product length", length)
                 if(length < 1) {
                     s.style.display = "block";
                     s2.style.display = "none";
                 }
                     else{
                     s.style.display = "none";
                     s2.style.display = "block";
                 }
             }).catch(e => {
                //  console.log(e);
             });
     }, [name])

     const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameInput = sessionStorage.getItem("nameSearch")
        // setInputs({...input,name1:nameInput+""})
       
        console.log(input, "Dk")
        searchApi.createSearch(input).then(res => {
            console.log(res)
            setProduct(res)
            const s = document.getElementById("message");
            const s2 = document.getElementById("titleProduct");
            const length = res.length;
            console.log( "product length", length)
            if(length < 1) {
                s.style.display = "block";
                s2.style.display = "none";
            }
                else{
                s.style.display = "none";
                s2.style.display = "block";
            }
                }).catch(e => {
                    console.log(e)
                });
    }
    const nameSearch = sessionStorage.getItem("nameSearch");

    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 1000;
    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });
    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });
    
     
   if(product){
       return (

           <div>
               <div className="container-xxl py-5">
                   <div className="container">
                       <div className="row g-0 gx-5 align-items-end">
                           <div className="col-lg-12" style={{marginTop:"50px"}}>
                               <div
                                   className="section-header text-start mb-5 wow fadeInUp col-lg-12"
                                   data-wow-delay="0.1s"
                                   style={{ float:"left", width:"100%"}} 
                               >
                                   <h1 className="display-5 mb-3" id="titleProduct" style={{display:"block"}}>Sản phẩm tìm kiếm</h1>
                                   <h1 className="display-5 mb-3" id="message" style={{display:"none"}}>Không có sản phẩn tìm kiếm</h1>
                                   <form onSubmit={handleSubmit} style={{ width:"100%", display:"flex"}}>
                                        <input name="name" style={{display:"none"}} value={nameSearch} onChange={handleChange}></input>
                                        <div style={{float:"left"}} className="col-lg-12">
                                            <div style={{float:"left"}} className="col-lg-2">
                                                <div className='col-lg-12'>
                                                    <div class="input-group" className='col-lg-12' style={{float:"left"}}>
                                                        <input type="date" id="birthday" className='col-lg-10' name="biginDate" value={input.biginDate || ""} onChange={handleChange}></input>
                                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar" className='col-lg-2'></i>
                                                    </div>
                                                </div>
                                                <div className='col-lg-10' style={{textAlign:"center"}}>To</div>
                                                <div className='col-lg-12'>
                                                    <div class="input-group" className='col-lg-12' style={{float:"left"}}>
                                                        <input type="date" className='col-lg-10' id="birthday" name="endate" value={input.endate || ""} onChange={handleChange}></input>
                                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar" className='col-lg-2'></i>
                                                    </div>
                                                </div>
                                            </div>
                                           <div className="col-lg-7" style={{float:"left"}}>
                                                <div className="col-lg-4" style={{float:"left"}}>
                                                    <div className="field col-lg-12">
                                                        <span className='col-lg-3'>Min</span>
                                                        <input  type="number" className="input-min col-lg-9" defaultValue={250000} />
                                                    </div>
                                                    <div className="separator">-</div>
                                                        <div className="field col-lg-12" style={{float:"left"}}>
                                                            <span className='col-lg-3'>Max</span>
                                                            <input type="number" className="input-max col-lg-9" defaultValue={750000} />
                                                        </div>
                                                </div>
                                                <div className="slider" style={{display:"none", float:"left"}}>
                                                    <div className="progress" />
                                                </div>  
                                                <div className="range-input col-lg-8" style={{float:"left"}}>
                                                    <input type="range" style={{width:"100%", marginTop:"8px"}} name="beginPrice" className="range-min" min={0} max={2000000} defaultValue={250000} step={10000} onChange={handleChange}/>
                                                    <input type="range" style={{width:"100%", marginTop:"26px"}} name="endPrice" className="range-max" min={0} max={2000000} defaultValue={500000} step={10000} onChange={handleChange}/>
                                                </div>
                                            </div>
                                            <div className='col-lg-3' style={{float:"left", marginTop:"25px"}}>
                                                <select name="kind" class="form-select" className='col-lg-6' aria-label="Default select example" style={{float:"left"}} value={input.kind || ""} onChange={handleChange}>
                                                    <option selected="selected">Loại</option>
                                                    <option>Nón bảo hiểm</option>
                                                    <option>Nón thời trang</option>
                                                    <option>Mũ panama</option>
                                                </select>
                                                <div class="select-dropdown" style={{display:"none"}}></div>
                                                <button class="btn btn-primary" className='col-lg-4 btn-primary' type="submit" style={{float:"left"}}>Submit</button>
                                            </div>
                                        </div>
                                    </form>

                               </div>
                           </div>
                       </div>
                       <div className="tab-content">
                           <div id="tab-1" className="tab-pane fade show p-0 active">
                               <div className="row g-4">
                                   {/* <ProductItem name="Táo" price="200000" img="img/product-5.jpg" id="1"></ProductItem> */}
                                   {
                                       product && product.map((item, index) => {
                                           return (
                                               <ProductItem key={index} name={item.name} price={item.price} img={item.linkImage1} id={item.id}></ProductItem>
                                               
                                               )
                                       })
                                   }


                                   <div
                                       className="col-12 text-center wow fadeInUp"
                                       data-wow-delay="0.1s"
                                   >

                                   </div>
                               </div>

                               <div className="col-12 text-center">
                                   <Link to="/product" className="btn btn-primary rounded-pill py-3 px-5" href="">
                                       Xem thêm
                                   </Link>
                               </div>


                           </div>
                       </div>
                   </div>
               </div>
           </div>
       );
   }
}


export default Search;