import { useSelector,useDispatch } from "react-redux"
import {ordered,restocked} from '../icecreams/icecreamSlice'

export const IceCreamView = () => {

  const dispatch = useDispatch();

  const numOfIcecream = useSelector(state=>state.icecream.numOfIcecreams)
    return (
      <div>
          <h1>Ice Cream View</h1>
          <div>No. of Ice Creams - {numOfIcecream} </div>
          <button onClick={()=> dispatch(ordered())}>Buy Ice Cream</button>
          <button onClick={()=> dispatch(restocked(3))}>Restock Ice Cream</button>
      </div>
    )
  }
  