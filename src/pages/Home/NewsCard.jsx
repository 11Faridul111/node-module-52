import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
      const {title,image_url,details, _id} = news;
      return (
            <div className="card bg-base-100 shadow-lg mb-12">
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
      details.length > 200 ? <p>{details.slice(0,200)} <Link  className="text-red-600" to={`/news/${_id}`}>Read more...</Link></p>
      :<p>{details}</p>
    }
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
      );
};

export default NewsCard;