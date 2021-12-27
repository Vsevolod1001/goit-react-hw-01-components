import Profile from "./Profile/Profile"
import user from '../user.json'
import { Container } from "./Profile/Profile.styled"

export default function App () {
    return (
    <>
        <Profile user={user}/>
    </>
    )
}