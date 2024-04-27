import { useState } from "react"
const ProfileFunctionalComponent = () =>{
    const [name, setName] = useState('Biraj Regmi')
    return (
        <h1>{name}</h1>
    )
}
export default ProfileFunctionalComponent