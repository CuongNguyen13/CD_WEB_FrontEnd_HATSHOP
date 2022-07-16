import React, { Component, useEffect, useState } from 'react';
import { contactAdminApi } from '../api/contactAdminApi';
import ContactTr from './ComponentAdmin/ContactTr';

function ContactAdmin() {

    const [contact, setContact] = useState();
    useEffect(() => {
        contactAdminApi.getListContact()
            .then(res => {
                console.log("data", res)
                setContact(res);

            }).catch(e => {
                console.log(e)
            });
    }, [])
    console.log("contact", contact);

    const handleGetId = (id) => {
        console.log(id)
        // chỗ này xóa thằng nào có id = id đã truyền vào
        // sử dụng hàm filter cho lẹ, xóa thằng đó có nghĩa là lọc
        // ra những thằng có id khác với id của thằng đó là được


        setContact(contact.filter(item => item.id !== id))
    }
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
                        {contact && contact.map((item, index) => {
                            return (

                                <ContactTr onGetId={handleGetId} number={index} contact={item} key={index} />
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