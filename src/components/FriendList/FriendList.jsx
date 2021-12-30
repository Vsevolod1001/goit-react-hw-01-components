import PropTypes from 'prop-types';
import FriendListItem from "components/FriendListItem/FriendListItem"

export default function FriendList ({friends}) {
    return (
        <ul>
           {friends.map(friend => (
               <FriendListItem key={friend.id} friend={friend}/>
           ))}
        </ul>
  )
};

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};