// import React, { Component } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import CommentFB from "./CommentFB"
import CommentFacebook from './CommentFaceBook';
 function DetailProduct() {

        let params = useParams();
        const id = params.id;
        let curentURL = window.location.href;

        console.log(curentURL)


        window.scrollTo(0, 0);

        useEffect(()=>{
            // gọi api chỗ này
        },[])
        
        return (
            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                    <img className="img-fluid w-100" src="./img/about.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="display-5 mb-4">id: {id} </h1>
                                <p className="mb-4">
                                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                    lorem sit clita duo justo magna dolore erat amet
                                </p>
                            
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">
                                    Read More
                                </a>
                            </div>
                            {/* <CommentFB dataURL={curentURL}></CommentFB> */}
                            <CommentFacebook dataHref={curentURL}></CommentFacebook>
                        </div>
                    </div>
                </div>
              
  

            </div>
        );
    }

export default(DetailProduct);