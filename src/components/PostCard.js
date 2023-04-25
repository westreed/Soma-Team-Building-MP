import moment from "moment/moment";
import "../css/postcard.css";

export default function PostCard({data}) {
  return (
    <div className='postcard__container'>
        <h4 className="postcard__title">{data.title}</h4>
        <p className="postcard__content">{data.content}</p>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap: "wrap", marginTop:"auto", alignItems:"center"}}>
            <div className="postcard__footer">
                <p className="postcard__text--team">{data.teamname}</p>
                <p className="postcard__text--user">{data.username}</p>
            </div>
            <p className="postcard__text--time">{moment(data.createDate.seconds * 1000).format('YYYY.MM.DD. HH:mm')}</p>
        </div>
    </div>
);
}