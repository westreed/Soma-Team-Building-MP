import React, { useState } from 'react';
import '../css/write.css';
import { dbService } from '../firebase';
import { Timestamp } from '@firebase/firestore';
import { useNavigate } from 'react-router';

function WritingPage() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [input, setInput] = useState({});
  const collection = dbService.collection('Posts');
  const navigate = useNavigate();

  // 데이터 추가하기
  const addData = async (data) => {
    await collection
      .add({
        ...data,
        createDate: Timestamp.fromDate(new Date()) // 현재 시간 생성
      })
      .catch((err) => console.log(err));
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      //숫자만 받도록
      const onlyNumber = value.replace(/[^0-9]/g, '');
      setPassword(onlyNumber);
      return;
    }
    setInput({ ...input, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = { ...input, password };
    setLoading(true);
    await addData(data)
      .then(() => {
        setInput({});
        setPassword('');
        alert('성공적으로 업로드되었어요!');
      })
      .catch(() => alert('업로드에 실패했어요!'))
      .finally(() => {
        setLoading(false);
        navigate('/');
      });
  };

  return (
    <div className='writing__container'>
      <h1 className='writing__heading'>게시물 작성</h1>
      <form className='writing__form' onSubmit={submitHandler}>
        <label className='writing__label'>비밀번호</label>
        <input
          className='writing__input'
          required
          type='password'
          name='password'
          placeholder='비밀번호가 필요해요. (4~8자리 숫자)'
          value={password ?? ''}
          minLength={4}
          maxLength={8}
          onChange={inputHandler}
        />
        <label className='writing__label'>팀명</label>
        <input
          className='writing__input'
          required
          placeholder='팀명을 알려주세요!'
          type='text'
          name='teamname'
          value={input.teamname ?? ''}
          onChange={inputHandler}
        />
        <label className='writing__label'>작성자</label>
        <input
          className='writing__input'
          required
          placeholder='작성자님의 이름을 알려주세요!'
          type='text'
          name='username'
          value={input.username ?? ''}
          onChange={inputHandler}
        />
        <label className='writing__label'>제목</label>
        <input
          className='writing__input'
          required
          placeholder='연수생들의 이목을 끌어보세요!'
          type='text'
          name='title'
          value={input.title ?? ''}
          onChange={inputHandler}
        />
        <label className='writing__label'>내용</label>
        <textarea
          className='writing__text-area'
          required
          placeholder='어떤 팀원을 구하는지 자세히 적어보세요!'
          name='content'
          value={input.content ?? ''}
          onChange={inputHandler}
        ></textarea>
        <button className='writing__btn' disabled={loading}>
          작성완료
        </button>
      </form>
    </div>
  );
}

export default WritingPage;
