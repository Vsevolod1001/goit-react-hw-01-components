import PropTypes from "prop-types";
import { SpanOnLine, FriendLi, FriendImg } from "./FriendListItem.styled"
export default function FriendListItem ({friend :{isOnline, avatar, name }}) {
    return(
        <FriendLi>
            <SpanOnLine isOnline={isOnline}>{isOnline}</SpanOnLine>
            <FriendImg src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendLi>
    )
};
FriendListItem.propTypes = {
       friend:PropTypes.shape({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
};