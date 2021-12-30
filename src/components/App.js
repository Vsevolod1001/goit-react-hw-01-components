import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory"

export default function App () {
    return (
    <>
        <Profile user={user}/>
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
    )
}