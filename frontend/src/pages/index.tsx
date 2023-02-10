import { useEffect } from "react"
import axios from 'axios';

export default function Home() {

  useEffect(() => {
    (async function () {
      let { data: apps } = await axios.get("http://localhost:8000/api/v1/apps")
      console.log(apps)
    })()
  }, [])

  return (
    <>
      <h1>Welcome to hekaa app</h1>
    </>
  )
}
