import React from "react";
import HomeProjectCard from "./HomeProjectCard";

const DUMMY_PORJECTS = [
  {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Next.js Blog",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjY5NzU5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Netflix Clone",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Viral.in App",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDY4MTc2Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Endorsin Dashboard",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523289333742-be1143f6b766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "freeCodeCampProject",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIyNzcyODk2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    title: "Flutter tuduku",
  },
];

const PersonalProjects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mt-8">Personal Projects</h1>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {DUMMY_PORJECTS.map((project, key) => (
          <HomeProjectCard key={key} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
