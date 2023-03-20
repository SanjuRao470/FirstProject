import React from 'react'
// import { DownOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useState } from 'react';



function Model({ user }) {

    const [open, setOpen] = useState(false);
    // console.log(">>>>>>>>>>>", user)
    return (
        <div>

            <Button style={{ float: "right", marginBottom: "55px", background: '#00ffff', color: 'white' }} onClick={() => setOpen(true)}>
                Excel Sheet
            </Button>

            <Modal
                title="ALL DATA"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={2000}
            >

                {
                    user && user.map((res) => {
                        return (
                            <>
                                <div style={{ float: "right", marginTop: "15px", margin: '10px', color: '#ff99ff' }}>{res.name.name}</div>
                                <div style={{ float: "right", marginTop: "15px", margin: '10px', color: '#669999' }}>{res.name.ID}</div>
                            </>
                        )
                    })
                }

            </Modal>

        </div>

    )
}
export default Model;
