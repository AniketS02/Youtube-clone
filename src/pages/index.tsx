import {Inter} from 'next/font/google'
import { VideoCard } from '@/components/VideoCard'
const inter = Inter({subsets : ['latin']})

export default function Home(){
  return (
    <div>
      <VideoCard title={"How to do stuffs"}
      thumbnail ={"/photo-1.jpg"}
      logo = {"/logo-1.jpg"}
      author = {"Aniket"}
      views = {"22M"}
      timeStamp = {"3 mins ago"}
      ></VideoCard>
    </div>
  )
}