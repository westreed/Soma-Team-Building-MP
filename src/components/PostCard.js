import moment from "moment/moment";
import "../css/postcard.css";

export default function PostCard({data}) {
  return (
    <div className='postcard-container'>
        <h4 className="postcard-title">{data.title}</h4>
        <p className="postcard-content">{data.content}</p>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap: "wrap", marginTop:"auto", alignItems:"center"}}>
            <div className="postcard-footer">
                <p className="postcard-team">{data.teamname}</p>
                <p className="postcard-user">{data.username}</p>
            </div>
            <p className="postcard-time">{moment(data.createDate.seconds * 1000).format('YYYY.MM.DD. HH:mm')}</p>
        </div>
    </div>
);
}