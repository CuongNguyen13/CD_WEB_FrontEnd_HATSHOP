
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { productApi} from '../api/productApi';
import { useEffect, useState } from 'react';

function NewProduct(){
    
        const [product, setProduct] = useState();
        useEffect(() => {
            // gọi api chỗ này
            productApi.getListProductNew()
                .then(res=> {
                  
                    setProduct(res);
                  
                    
                }).catch(e => {
                    console.log(e);
                });
        }, [])
         console.log("listProdut",product);
       if(product){
           return (

               <div>

                   <div className="container-xxl py-5">
                       <div className="container">
                           <div className="row g-0 gx-5 align-items-end">
                               <div className="col-lg-6">
                                   <div
                                       className="section-header text-start mb-5 wow fadeInUp"
                                       data-wow-delay="0.1s"
                                       style={{ maxWidth: 500 }}
                                   >
                                       <h1 className="display-5 mb-3">Sản phẩm mới</h1>

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
                                                   <ProductItem key={index} name={item.name} price={item.price} img={item.img} id={item.id}></ProductItem>
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


export default NewProduct;