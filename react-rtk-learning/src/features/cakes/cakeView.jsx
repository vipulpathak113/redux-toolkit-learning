import { useSelector,useDispatch } from "react-redux"
import {ordered,restocked} from '../cakes/cakeSlice'

export const CakeView = () => {
  const numOfCakes= useSelector(state=>state.cake.numOfCakes);

  const dispatch = useDispatch();
  return (
    <div>
        <h1>Cake View</h1>
        <div>No. of Cakes - {numOfCakes}</div>
        <button onClick={()=>dispatch(ordered())}>Buy Cake</button>
        <button onClick={()=>dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}
