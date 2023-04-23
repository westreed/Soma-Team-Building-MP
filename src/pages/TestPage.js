import React, { useState } from 'react';
import { dbService } from '../firebase';

function TestPage (){
    const [data, setData] = useState([]);
    // 파이어베이스는 NoSQL DB로 구조가 크게
    // 콜렉션(collection), 문서(docs), 문서내용 으로 이루어진다.

    // 가장 큰 보관함인 collection을 선언.
    const testCollection = dbService.collection('test');

    // 데이터 추가하기
    const addData = async(e) => {
        e.preventDefault();
        // 이건 문서를 따로 지정하지 않고, 특정 콜렉션에 데이터를 추가하는 방법.
        // 문서이름을 지정하지 않았기 때문에 문서이름이 유니크한 랜덤값으로 지정됨.
        await testCollection.add({
            key:"id",
            value:Math.floor(Math.random() * 100) + 1
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        }).catch((error) => {
            console.error("Error adding document: ", error);
        })
    }

    const addDataDoc = async(e) => {
        e.preventDefault();
        // 특정 문서에 대입
        await testCollection.doc('문서이름이지정됨').set({
            key:"id",
            value:Math.floor(Math.random() * 100) + 1
        }).catch((error) => {
            console.error("Error adding document: ", error);
        })
    }

    // 데이터 가져오기
    const getData = async(e) => {
        e.preventDefault();
        await dbService.collection('test').get().then((docs) => {
            const tempArray = docs.docs.map((doc) => {
                console.log(doc.id); // 문서이름은 이렇게 조회할 수 있음.
                return "id:" + doc.id + " / data:" + doc.data().value.toString();
            })
            setData(tempArray);
            console.log(tempArray);
        })
    }

    return (
        <div>
            <button onClick={addData}>
                데이터 추가
            </button>
            <button onClick={addDataDoc}>
                문서이름이 정해진 데이터 추가
            </button>
            <button onClick={getData}>
                데이터 가져오기
            </button>
            <div>
                {data.map((val, idx) => {
                    return (
                        <div key={idx}>
                            {idx} : {val}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TestPage;