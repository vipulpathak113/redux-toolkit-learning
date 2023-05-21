/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from '../users/userSlice'

export const UserView = () => {
   
  const dispatch = useDispatch()
  const users = useSelector(state => state.user)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  return (
    <div>
        <h1>UserView</h1>
        <div>List of Users</div>
        {users.loading && <div>Loading...</div>}
        {!users.loading && users.error ? <div>Error: {users.error}</div> : null}
        {!users.loading && users.users.length ? (
          <ul>
             {users.users.map(user=>(
              <li key={user.id}>{user.name}</li>
             ))}
          </ul>
        ): null}
    </div>
  )
}
