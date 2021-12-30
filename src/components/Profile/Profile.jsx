import PropTypes from 'prop-types';
import { Container, Status, Image, Card, CardName, CardSpan, CardLi} from "./Profile.styled"


export default function Profile ({user: {username, avatar, tag, location, stats}}) {
    return (
        <Container>
          <Card>
            <Image
              src={avatar}
              alt="User avatar"            
            />
            <CardName>{username}</CardName>
            <p>@{tag}</p>
            <p>{location}</p>
          </Card>

          <Status>
            <CardLi>
              <span>Followers</span>
              <CardSpan>{stats.followers}</CardSpan>
            </CardLi>
            <CardLi>
              <span>Views</span>
              <CardSpan>{stats.views}</CardSpan>
            </CardLi>
            <CardLi>
              <span>Likes</span>
              <CardSpan>{stats.likes}</CardSpan>
            </CardLi>
          </Status>
        </Container>
    )
}

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.number,
};