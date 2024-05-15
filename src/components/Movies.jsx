import React,{useState} from 'react';

export default function Example(){
    const [directors,setDirectors] =useState([]);
    const[direc,setDirec]=useState(""); 
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
    <div>
      <h2> Directors and Movies</h2> 
      <div>
        <input type="text" placeholder=" Enter director name " value={direc} onChange={(e) => setDirec(e.target.value)}/>
        <input type="text" placeholder=" Enter Movie name " value={movie} onChange={(e) => setMovie(e.target.value)}/>
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {directors.map((item,index) => (
<li key={index}><span style={{color:index%2===0?'green':'red'}}>{item.director}</span> <br></br>
<span>{item.movies}</span>
<button onClick={() => remove(index)}>Remove</button>
</li>
        ))}
      </ul>
    </div>
)
};


