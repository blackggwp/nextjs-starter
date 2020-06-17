import axios from "axios";

export async function getUserData() {
  const url = 'http://dummy.restapiexample.com/api/v1/employees';
  const response = await axios.get(url)
  return response?.data?.data
}
