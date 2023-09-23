import { HiOutlineTrash } from "react-icons/hi"
export default function DeleteBtn(props){
    const handleClick=(id)=>{
        props.click(id)
    }
    return(
       <button onClick={handleClick} className="text-red-400">
        <HiOutlineTrash size={30} />
       </button>
    )
}