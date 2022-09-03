import React, { useEffect, useState } from 'react'


export default function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000)
  })

  return (
    <div>
      <h3>현재 시간: {time.toLocaleTimeString()}</h3>
    </div>
  )
}
