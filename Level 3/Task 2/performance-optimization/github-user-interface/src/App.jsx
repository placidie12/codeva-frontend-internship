import {useState} from "react";
import axios from "axios";


import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import About from "./components/About";



function App(){


const [username,setUsername]=useState("");

const [user,setUser]=useState(null);

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);



const searchUser=async()=>{


if(!username){

setError("Please enter username");

return;

}


try{


setLoading(true);

setError("");



const response =
await axios.get(
`https://api.github.com/users/${username}`
);



setUser(response.data);



}

catch(error){

setUser(null);

setError("User not found");

}


finally{

setLoading(false);

}


};



return(

<>


<Navbar/>


<SearchBox

username={username}

setUsername={setUsername}

searchUser={searchUser}

/>



<div className="container text-center">


{
loading &&

<div className="spinner-border text-success mt-4">

</div>

}



{
error &&

<div className="alert alert-danger mt-4">

{error}

</div>

}


</div>



{
user &&

<UserCard user={user}/>

}

<About/>

<Footer/>


</>


)


}


export default App;