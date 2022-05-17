import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data,isLoading,refetch} = useQuery('users',() => fetch('https://intense-wildwood-88392.herokuapp.com/user',{
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json()))
    if(isLoading) {
        return <Loading/>
    }

    return (
        <div>
            <h2>All users: {data.length}</h2>
            <div class="overflow-x-auto">
            <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {
          data.map(user => <UserRow key={user._id} user={user} refetch={refetch}/>)
      }
    </tbody>
  </table>
</div>
</div>
    );
};

export default Users;