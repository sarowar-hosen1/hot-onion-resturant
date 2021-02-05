import React from 'react';
import "./ChooseUs.css"

const chooses = [
    {
        title: 'Fast Delivery',
        pic: 'https://i.ibb.co/3T4NV10/adult-blur-blurred-background-687824.png',
        icon: 'https://i.ibb.co/4MCLwLW/Group-204.png',
        description: 'Keep your system in sync in automated web hook base notification is time link is paid and how we dream about our future',
    },
    {
        title: 'A good auto responder',
        icon: 'https://i.ibb.co/v3rQdpn/Group-1133.png',
        pic: 'https://i.ibb.co/qxkSDj0/chef-cook-food-33614.png',
        description: 'Keep your system in sync in automated web hook base notification is time link is paid and how we dream about our future',
    },
    {
        title: 'Home Delivery',
        icon: 'https://i.ibb.co/CsfWmvQ/Group-245.png',
        pic: 'https://i.ibb.co/2hLMhYq/architecture-building-city-2047397.png',
        description: 'Keep your system in sync in automated web hook base notification is time link is paid and how we dream about our future',
    },
]

const ChooseUs = () => {
    return (
        <div className='container mb-5'>
            <div className='choose-us-content'>
                <h3 className='mb-3'>Why you Choose Us</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quis, beatae, nihil accusamus ipsum hic aperiam, distinctio amet commodi inventore molestiae velit cumque magnam.</p>
            </div>
            <div className="row">
                {
                    chooses.map(choose =>
                        <div className="col-md-4">
                            <div className="choose-us-card">
                                <img src={choose.pic} alt="" className="img-fluid"/>
                                <div className='d-flex justify-content-between mt-4'>
                                    <img style={{width:'40px', height:'40px'}} src={choose.icon} alt=""/>
                                    <div className='ml-4'>
                                        <h5>{choose.title}</h5>
                                        <p>{choose.description}</p>
                                        <button className="btn btn-link">See more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ChooseUs;