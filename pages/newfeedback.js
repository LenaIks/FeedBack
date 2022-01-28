import React from "react";
import IconNewFeedback from "../components/global/iconNewFeedback";
import IconArrowLeft from "../components/global/iconArrowLeft";

const newFeedback = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-[33.75rem] mb-[4.25rem]">
                <button className="h-[1.25rem ] text-b-14-g flex items-center">
                <IconArrowLeft className="mb-0.375 mr-[0.979rem]"/>
                Go back
                </button>
            </div>
            <div className="w-[33.75rem] h-[41.063rem] rounded-[0.625rem] flex flex-col bg-white-normal items-center">
                <div className="absolute w-[28.5rem] mt-[-1.75rem]">
                    <IconNewFeedback/>
                </div>
                <div className="w-[28.5rem] mb-10 mt-[3.25rem]">
                    <span className="text-b-24">Create New Feedback</span>
                </div>   
                <div className="flex flex-col items-start mb-6">
                    <label className="text-b-14" htmlFor="feedbackTitle">Feedback Title</label>
                    <span className="text-n-14 mb-4">Add a short, descriptive headline</span>
                    <input id="feedbackTitle" type="text" maxLength={46}
                        className=" 
                        m-0 
                        w-[28.5rem]
                        min-h-[3rem] 
                        px-6 
                        border-white-light 
                        rounded-[0.313rem] 
                        focus:border-blue-normal 
                        invalid:border-red-normal 
                        bg-white-light 
                        text-blue-deep" 
                    />
                </div>
                <div className="flex flex-col items-start mb-6">
                    <label className="text-b-14" htmlFor="feedbackCategory">Category</label>
                    <span className="text-n-14 mb-4">Choose a category for your feedback</span>
                    <input id="feedbackCategory" type="text" maxLength={46}
                        className=" 
                        m-0 
                        w-[28.5rem]
                        min-h-[3rem] 
                        px-6 
                        border-white-light 
                        rounded-[0.313rem] 
                        focus:border-blue-normal 
                        invalid:border-red-normal 
                        bg-white-light 
                        text-blue-deep" 
                    />
                </div>
                <div className="flex flex-col items-start">
                    <label className="text-b-14" htmlFor="feedbackCategory">Feedback Detail</label>
                    <span className="text-n-14 mb-4">Include any specific comments on what should be improved, added, etc.</span>
                    <input id="feedbackDetail" type="text" maxLength={46}
                        className=" 
                        m-0 
                        w-[28.5rem]
                        min-h-[6rem] 
                        px-6 
                        border-white-light 
                        rounded-[0.313rem] 
                        focus:border-blue-normal 
                        invalid:border-red-normal 
                        bg-white-light 
                        text-blue-deep" 
                    />
                </div>
                <div className="w-[28.5rem] h-full flex justify-end items-center">
                    <div className="">
                        <button className="mr-4 rounded-[0.625rem] px-6 pb-[0.719rem] pt-[0.781rem] bg-blue-deep hover:bg-blue-deep-hover text-b-14-w">Cancel</button>
                        <button className="rounded-[0.625rem] px-6 pb-[0.719rem] pt-[0.781rem] bg-purple-normal hover:bg-purple-normal-hover text-b-14-w">Add Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default newFeedback;