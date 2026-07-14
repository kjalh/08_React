import { useState } from "react"
import CreateUser from "./components/CreateUser"


function App() {
  const [inputs, setInputs] = useState({
    userid: "",
    name: "",
    email: ""
  })

  const { userid, name, email } = inputs

  const [users, setUsers] = useState([
    {
      id: 1,
      userid: "apple",
      name: "김사과",
      email: "apple@apple.com",
      select: true
    },
    {
      id: 2,
      userid: "banana",
      name: "반하나",
      email: "banana@banana.com",
      select: false
    },
    {
      id: 3,
      userid: "orange",
      name: "오렌지",
      email: "orange@orange.com",
      select: false
    },
    {
      id: 4,
      userid: "melon",
      name: "이메론",
      email: "melon@melon.com",
      select: false
    }
  ])

  const onChange = (e) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onCreate = () => {
    const user = {
      id: 1,
      userid,
      name,
      email
    }

    setUsers([...users, user])

    setInputs({
      userid: "",
      name: "",
      email: ""
    })
  }

  return (
    <>
    <CreateUser userid={userid} name={name} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
    </>
  )
}


export default App