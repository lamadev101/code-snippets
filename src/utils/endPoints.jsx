import { useQuery } from "@tanstack/react-query"
import axios from 'axios'

const baseUrl = "https://api.tapinlounge.com/api/"

export const fetchData = (key, fn)=>{
  const url = baseUrl + fn;
  const res = useQuery({
    queryKey: [key],
    queryFn: async ()=>{
      try{
        const data = await axios.get(url)
        return data
      }catch(e){
        console.log(e)
        throw Error("Operation Faild. please try again!")
      }
    }
  });
  return res;
}