import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import background from '../../assets/page-bg.png';
import logo from "../../assets/logo.png";
import './LeadForm.css';
import { addLeadform } from 'actions/leadform/leadform';

const LeadForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [purpose, setPurpose] = useState('');


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const user = {
                name: name,
                email:email,
                phoneNumber:mobileNumber,
                source:"newlead"
            };
            console.log(user);
            dispatch(addLeadform(user));
            setName('');
            setEmail('');
            setMobileNumber('');
           
              alert("Information added successfully!")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="loginwrapper">
            <div className="lg-inner-column">
                <div className="right-column relative">
                    <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
                        <div className="auth-box h-full flex flex-col justify-center">
                            <div className="mobile-logo text-center mb-6 lg:hidden block">
                                <a
                                //  href="index.html"
                                >
                                 
                                    <img src="assets/images/logo/logo-white.svg" alt="" className="mb-10 white_logo" />
                                </a>
                            </div>
                            <div className="text-center 2xl:mb-10 mb-4">
                            <img src={logo} alt="" className="mb-10 dark_logo" height={100} />
                                <h4 className="font-medium">Welcome Back!</h4>
                                {/* <div className="text-slate-500 dark:text-slate-400 text-base text-center">
                                    Tell us little more about yourself and your ad spent so we can personalize the follow up
                                </div> */}
                            </div>
                            {/* <!-- BEGIN: Login Form --> */}
                            <form className="space-y-4">
                                <div className="fromGroup">
                                    <div className="relative ">
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mr: 1 }}
                                            type="text"
                                            name="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="fromGroup">
                                    <div className="relative ">
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mr: 1 }}
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="fromGroup">
                                    <div className="relative ">
                                        <TextField
                                            label="Mobile Number"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mr: 1 }}
                                            type="number"
                                            name="mobileNumber"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="fromGroup">
                                    <div className="relative ">
                                        <TextField
                                            label="Address"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mr: 1 }}
                                            type="text"
                                            name="address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* <div className="fromGroup">
                                    <div className="relative "> */}
                                        <TextField
                                            label="Purpose"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={3} 
                                            sx={{ mr: 1 }}
                                            type="text"
                                            name="purpose"
                                            value={purpose}
                                            onChange={(e) => setPurpose(e.target.value)}
                                        />
                                    {/* </div>
                                </div> */}

                                <button className="btn btn-dark block w-full text-center" onClick={(e)=>handleSubmit(e)}>Submit</button>
                            </form>
                            {/* <!-- END: Login Form --> */}
                        </div>
                    </div>
                </div>
                <div
                    className="left-column bg-cover bg-no-repeat bg-center "
                    // style="background-image: url(assets/images/all-img/login-bg.png);"
                >
                    <div className="flex flex-col h-full justify-center">
                        <div className="flex-1 flex flex-col justify-center items-center h-full">
                            <img src={background} alt="" className="h-full" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;
