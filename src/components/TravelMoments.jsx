import Profile from '../assets/profile.png'

function TravelMoments(props) {
  console.log(props)
  return (
    <div className="TravelCard">
      <div
        className="travel-img"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="travelCard-right-container">
        <p className="travel-location">
          <span>{props.location}</span>
          <a href={props.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>{' '}
        </p>
        <h1 className="travel-title">{props.title}</h1>
        <p className="travel-details">{props.description}</p>
      </div>
    </div>
  )
}

export default TravelMoments
