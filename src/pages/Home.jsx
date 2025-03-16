import axios from "axios";
import { useEffect, useState } from "react";



export const Home = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function getProfile() {
      const profile = await axios.get(
        `https://nt-devconnector.onrender.com/api/profile`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setProfile(profile.data);
    }
    getProfile();
  }, []);

  console.log(profile);


  return <div>

    {profile.map((profile) => {
      return (
        <div className="w-[450px] mx-auto border-4 mt-[30px] text-center pt-[15px] pb-[15px] ">
          <h1>Bio: {profile.bio}</h1>
          <h2>Companny: {profile.company}</h2>
          <h2>Date: {profile.date}</h2>
          <h3>Githubusername: {profile.githubusername}</h3>
          <h4>location: {profile.location}</h4>
          <h5>Skills: {profile.skills}</h5>
          <h6>Status: {profile.status}</h6>
          <h6>Website: {profile.website}</h6>
          <p>Id: {profile._id}</p>
        </div>
      )
    })}
  </div>
};
