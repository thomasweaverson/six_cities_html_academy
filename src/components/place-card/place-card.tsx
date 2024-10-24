type PlaceCardProps = {
  isPremium?: boolean;
  isFavorite?: boolean;
  image: string;
  price: number;
  rating: number;
  link: string;
  description: string;
  placeType: string;
}
function PlaceCard({isPremium, image, price, isFavorite, rating, link, description, placeType}: PlaceCardProps): JSX.Element {
  const premiumMark: JSX.Element = <div className="place-card__mark"><span>Premium</span></div>;
  return (
    <article className="cities__place-card place-card">
      {isPremium && premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={link}>
          <img className="place-card__image" src={image} width="260" height="200" alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating }%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={link}>{description}</a>
        </h2>
        <p className="place-card__type">{placeType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
