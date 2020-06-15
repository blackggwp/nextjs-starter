import axios from "axios";

export async function getUserData() {
  const url = 'http://dummy.restapiexample.com/api/v1/employees';
  const response = await axios.get(url)
  return response?.data?.data
}

import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}