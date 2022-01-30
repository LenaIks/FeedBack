import React from "react";
import UpvoteBtn from "../upvoteBtn";
import CategoryTag from "../categoryTag";
import CommentBtn from "../commentBtn";
import StatusTag from "./statusTag";

const statusColor = [
  "d--planned",
  "d--live",
  "d--progress",
]

const stylePoint = [
"p--planned",
"p--live",
"p--progress",
]

const FeedbackCard = ({status,stylePoint,statusColor,title, description, category, upvotes, comments}) => {
  return (
    <>
    <div className={statusColor} ></div>
    <div className="flex flex-col mb-[1.25rem] px-[2rem] py-[1.75rem] rounded-[0.625rem] bg-white-normal">
      <div className="flex  items-start justify-start">
        <StatusTag status={status.charAt(0).toUpperCase() + status.slice(1)}/>
      </div>
      <div className="flex  flex-col justify-between items-start">
          <p className="text-b-18 pb-2">{title}</p>
          <p className="text-n-16 pb-2">{description}</p>
          <CategoryTag classname="pb-2" category={category.charAt(0).toUpperCase() + category.slice(1)}/>
      </div>
      <div className="flex justify-between items-start my-2">
        <UpvoteBtn upvotes={upvotes}/>
        <CommentBtn  comments={comments}/>
      </div>
    </div>
    </>
  );
};

export default FeedbackCard;