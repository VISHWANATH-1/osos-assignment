import React from 'react'
const Movies = () => {
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
  return (
    <div>
        <h1>Movies</h1>
        <div className='logout'>
        <button onClick={handleClick}>Logout</button>
     </div>
    </div>
  )
}

export default Movies