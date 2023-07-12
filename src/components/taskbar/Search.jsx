import {LiaSearchSolid} from 'react-icons/lia'

function Search() {
  return (
    <div className='
    flex
    flex-row
    grow-[4]
    items-center
    bg-gray-50
    text-gray-600
    border-[1px]
    border-neutral-300
    ps-2
    pe-6
    '>
        <LiaSearchSolid size={20}/>

        <input type='text' placeholder='Type here to search' className='
        ps-3
        outline-none
        '/>
    </div>
  )
}

export default Search