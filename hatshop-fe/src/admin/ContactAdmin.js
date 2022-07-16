import React, { Component, useEffect, useState } from 'react';
import { contactAdminApi } from '../api/contactAdminApi';
import ContactTr from './ComponentAdmin/ContactTr';

function ContactAdmin(){
    
        const [contact,setContact] = useState();

        useEffect(()=>{
            contactAdminApi.getListContact()
                .then(res => {
                    console.log("data",res)
                    setContact(res);
                 
                }).catch(e => {
                    console.log(e)
                });
        },[])
    console.log("contact", contact);
        return (
           

                <div className="white-box">
                    <h3 className="box-title">Phản hồi</h3>
                    
                    <div className="table-responsive">
                        <table className="table text-nowrap">
                            <thead>
                                <tr>
                                    <th className="border-top-0">Stt</th>
                                    <th className="border-top-0">Email</th>
                                    <th className="border-top-0">Ngày gửi</th>
                                    <th className="border-top-0">Tiêu đề</th>
                                    <th className="border-top-0">Nội dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                { contact && contact.map((item,index)=>{
                                    return(
                                   
                                    <ContactTr key={index} number={index+1} email={item.email} date={new Date(item.dateSend).toLocaleDateString()} title={item.title} content={item.content}></ContactTr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
          



        );
    }

export default ContactAdmin;