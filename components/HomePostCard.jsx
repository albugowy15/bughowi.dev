import React from "react";

const HomePostCard = ({ post }) => {
  return (
    <div className="bg-darkSecondary h-[400px] w-[400px]">
      <div className="w-full h-[200px] overflow-clip">
        <img className="object-cover" src={post.image} alt={post.title} />
      </div>
      <div className="p-3">
        <p className="uppercase tracking-widest">{post.category}</p>
        <h2 className="font-bold text-xl py-2">{post.title}</h2>
        <div className="flex items-center justify-between text-sm opacity-60 mb-4">
          <p>{`By ${post.author}`}</p>
          <p>{`On ${post.date}`}</p>
          <p>{`${post.timeToRead} read`}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePostCard;
