import { useEffect } from "react"
import axios from 'axios';

export default function Home() {

  useEffect(() => {
    (async function () {
      let res = await axios.get("/api/v1/apps")
      console.log(res)
    })()
  }, [])

  return (
    <>
      <h1>Welcome to hekaa app</h1>
    </>
  )
}
