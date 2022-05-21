import React from "react";
import Layout from "./index";


const ContactUsComponent = (props) => {
    return (
        <div className="flex flex-col items-center justify-center my-32">
            <div className="text-2xl" style={{ minWidth: "40vw" }}>
                <div className="shadow-lg border">
                    <div className="py-4 px-4 text-lg font-semibold border-t-2 border-yellow-700">
                        Contact
                    </div>
                    <hr />
                    <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Name</label>
                            <span className="text-xs text-gray-500">
                                Avi Chaudhary
                            </span>
                        </div>


                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">Email</label>
                            <span className="text-xs text-gray-500">
                                avichoudhary541@gmail.com
                            </span>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">University Roll No.</label>
                            <span className="text-xs text-gray-500">
                                2013614
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

const ContactUs = (props) => {
    return <Layout children={<ContactUsComponent />} />;
};

export default ContactUs;
