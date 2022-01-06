import PropTypes from 'prop-types';
import { Container, Status, Image, Card, CardName, CardSpan, CardLi} from "./Profile.styled"


export default function Profile (props) {
  const {avatar, tag, name, location, stats} = props
  const {followers, views, likes} = stats  
  return (
        <Container>
          <Card>
            <Image
              src={avatar}
              alt="User avatar"            
            />
            <CardName>{name}</CardName>
            <p>@{tag}</p>
            <p>{location}</p>
          </Card>

          <Status>
            <CardLi>
              <span>Followers</span>
              <CardSpan>{followers}</CardSpan>
            </CardLi>
            <CardLi>
              <span>Views</span>
              <CardSpan>{views}</CardSpan>
            </CardLi>
            <CardLi>
              <span>Likes</span>
              <CardSpan>{likes}</CardSpan>
            </CardLi>
          </Status>
        </Container>
    )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};