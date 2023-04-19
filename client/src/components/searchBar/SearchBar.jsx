import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleKeyDown = (event) => {
      if (event.key === "Enter") {
         onSearch(id);
         setId('');
         event.preventDefault();
      }
   }
   let randomNum = Math.floor(Math.random() * 826) + 1;
   return (
      <div>
         <button onClick={() => onSearch(randomNum)}>Random</button>
         <input type='search' onChange={handleChange} onKeyDown={handleKeyDown} value={id} />
         <button onClick={() =>{onSearch(id); setId('')}}>Intro</button>
      </div>
   );
}
