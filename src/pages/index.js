import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState("")

  useEffect(() => {
    ;(async () => {
      const response = await fetch(`/.netlify/functions/hello`)
      const tempData = await response.json()
      setData(tempData)
    })()
  }, [])

  return (
  <div>
    <h1>hi we are learning Serverless</h1>
    {data.message}
    
    </div>
  )}
