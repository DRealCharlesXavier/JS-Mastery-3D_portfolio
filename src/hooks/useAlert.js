import { useState } from 'react'

const useAlert = () => {
 const [alert, setAlert] = useState({ show: false, text: "", type: 'danger' })

  return (
    <div>useAlert</div>
  )
}

export default useAlert