import { useState } from "react"

function CategoryFilter( { categories, className, handleCategory } ) {
const [isSelected, setIsSelected] = useState(false)

  function testFunction(e) {
    console.log(isSelected)
    console.log(e.target.name)
    // if (e.target.name === )
    setIsSelected(!isSelected)
    handleCategory(e)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} onClick={(e) => testFunction(e)} name={category} 
        className={isSelected ? "selected" : ""} >{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
