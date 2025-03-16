import axios from "axios";
import React, { useState } from "react";

const AddPosts = ({ getPosts }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://nt-devconnector.onrender.com/api/posts`,
        { text },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => getPosts());
    setText("");
  }
  return (
    <div>
      <h2 className="text-[60px] text-[lightseagreen] font-bold">Posts</h2>
      <p className=" w-[500px] text-[35px] text-[black] mt-[10px]">Welcome to the community</p>
      <p className="text-[25px] font-bold w-[1200px] bg-[lightseagreen] pt-[5px] pb-[7px] pl-[10px] text-[#ffffff] mt-[20px] mb-[15px]">Say Something...</p>

      <form action="" onSubmit={handleSubmit}>
        <input className="w-[1200px] border-4 h-[200px] pb-[150px] pl-[10px] text-[23px]"
          type="text"
          value={text}
          placeholder="Create a post"
          onChange={(e) => setText(e.target.value)}
        />

        <button className="w-[110px] h-[45px] bg-[black] text-[#ffffff] font-bold mt-[20px] mb-[35px]">Submit</button>
      </form>
    </div>
  );
};

export default AddPosts;
