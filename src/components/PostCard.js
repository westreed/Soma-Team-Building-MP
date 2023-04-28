import { useNavigate } from "react-router-dom";

import moment from "moment/moment";
import Trash from "../images/ic_trash.png";
import Write from "../images/ic_write.png";
import { dbService } from "../firebase";

import "../css/postcard.css";

export default function PostCard({ data, deletePostHandler }) {
  const postsCollection = dbService.collection("Posts");
  const navigate = useNavigate();

  const verifyPassword = () => {
    let inputPassword = prompt("비밀번호를 입력해주세요.");
    return data.password === inputPassword;
  };

  const onClickEdit = () => {
    const isVerified = verifyPassword();

    if (isVerified) {
      navigate("/write", { state: data });
    } else {
      alert("비밀번호를 잘못 입력하셨어요.");
    }
  };

    const onClickDelete = async() => {
      const isVerified = verifyPassword();

      if (isVerified) {
        await postsCollection
          .doc(data.id)
          .delete();
        alert("게시글을 삭제했어요!");
        deletePostHandler(data.id);
      } else {
        alert("비밀번호를 잘못 입력하셨어요.");
      }
    };

  return (
    <div className="postcard__container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 className="postcard__title">{data.title}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "50px",
          }}
        >
          <img
            src={Write}
            alt="SW마에스트로 로고"
            style={{ objectFit: "contain" }}
            onClick={onClickEdit}
            width="20px"
          />
          <img
              src={Trash}
              alt="SW마에스트로 로고"
              style={{ objectFit: "contain" }}
              onClick={onClickDelete}
              width="20px"
            />
        </div>
      </div>
      <p className="postcard__content">{data.content}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "auto",
          alignItems: "center",
        }}
      >
        <div className="postcard__footer">
          <p className="postcard__text--team">{data.teamname}</p>
          <p className="postcard__text--user">{data.username}</p>
        </div>
        <p className="postcard__text--time">
          {moment(data.createDate.seconds * 1000).format("YYYY.MM.DD. HH:mm")}
        </p>
      </div>
    </div>
  );
}
