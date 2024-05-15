import React,{useState} from 'react';
import '../components/Movies.css'

export default function Example(){
    const [directors,setDirectors] =useState([]); // State to store the list of directors 
    const[direc,setDirec]=useState(""); // State to store the list of directors 
    const[movie,setMovie]=useState("");

const add =() =>{
    if(direc.trim() && movie.trim()){
        setDirectors([...directors,{director:direc.trim(),movies:movie.trim()}]);
        setDirec('');
        setMovie('');
    }
};

const remove =(index) =>{
    const updatedDirectors =[...directors];
    updatedDirectors.splice(index,1);
    setDirectors(updatedDirectors);
};

return(
    <div className='container'>
      <h2> Directors and Movies</h2> 
      <div className='input'>
        <input type="text" placeholder=" Enter director name " value={direc} onChange={(e) => setDirec(e.target.value)}/>
        <input type="text" placeholder=" Enter Movie name " value={movie} onChange={(e) => setMovie(e.target.value)}/>
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {directors.map((item,index) => (
<li key={index}><span>{item.director}</span> 
<li><span>{item.movies}</span></li>
<button onClick={() => remove(index)}>Remove</button>
</li>
        ))}
      </ul>
    </div>
)
};


