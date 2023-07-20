function SearchIcon({image,title,onClick}) {
    return (
      <div className="
      flex
      flex-row
      items-center
      relative
      cursor-pointer
      transition
      rounded-sm
      p-2
      text-center
      border-[1px]
      border-transparent
      hover:border-[1px]
      hover:border-blue-200
      hover:bg-blue-50
      hover:bg-opacity-50
      "
      onClick={onClick}>
          <img src={image} alt={title} className="h-[30px]"/>
          <p className="text-sm ms-2">{title}</p>
      </div>
    )
  }
  
  export default SearchIcon