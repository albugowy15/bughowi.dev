import React from "react";

const HomePostCard = ({ post }) => {
  return (
    <div className="bg-darkSecondary h-[400px]">
      <div className="w-full h-[200px] overflow-clip">
        <img className="object-cover" src={post.image} alt={post.title} />
      </div>
      <div className="p-3 h-[200px] flex flex-col items-stretch justify-between">
        <div>
          <p className="uppercase tracking-widest">{post.category}</p>
          <h2 className="font-bold text-xl py-2">{post.title}</h2>
        </div>
        <div className="flex items-center justify-between text-sm mb-4">
          <p className="text-white text-opacity-60">{`On ${post.date}`}</p>
          <p className="text-white text-opacity-60">{`${post.timeToRead} read`}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePostCard;
``;
