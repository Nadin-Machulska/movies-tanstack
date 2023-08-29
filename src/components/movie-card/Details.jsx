import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
const Details = ({ data, keywordsData }) => {
    console.log(keywordsData);
    return (
        <div className="details">
            <div className="social-links">
                <button className="fa-play-icon"><FontAwesomeIcon icon={faPlay} /></button>
                <button className="fa-share-icon"><FontAwesomeIcon icon={faLink} /></button>
            </div>
            
            <div className="d-m">
                <strong>Status</strong>
                {data?.status
                }</div>
            <div className="d-m">
                <strong>Original Language</strong>
                {data?.original_language}
            </div>
            <div className="d-m">
                <strong>Budget</strong>
                {data?.budget}$
            </div>
            <div className="d-m">
                <strong>Revenue</strong>
                {data?.revenue}
            </div>
            <div className="keywords">
                <h4>Keywords</h4>
                <ul>
                    {
                        keywordsData?.keywords?.map(key => {
                            return <li><a href="">{key.name}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
};

export default Details;