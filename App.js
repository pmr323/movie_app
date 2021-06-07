import React from 'react';
import Macaron from './Macaron';

//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];
const cakes = [
  {
    id: 1,
    name: 'Cookie Dough Cake',
    image: 'https://i.pinimg.com/236x/48/6a/9a/486a9aaab8571b0a9e512c23bab36a68.jpg',
  },
  {
    id: 2,
    name: 'Rainbow Cake',
    image: 'https://i.pinimg.com/236x/dc/e3/2e/dce32e513ce557a951cbbe7fe15f10cb.jpg',
  },
  {
    id: 3,
    name: 'Soft & Moist Funfetti Cake',
    image: 'https://i.pinimg.com/236x/69/9f/6c/699f6cb625a4a749c6320d22c075bd6f.jpg',
  },
];

//자식 컴포넌트
// function Food({propsId,propsName,propsImage}){//구조분해할당
//   return (
//     <>
//       <h1>cake No.{propsId}</h1>
//       <h2>cake Name: {propsName}</h2>
//       <img src={propsImage} alt="" />
//     </>
//   );
// }

// function Food(props){//구조분해할당
//  const {propsId,propsName,propsImage} = props;
//   return (
//     <>
//       <h1>cake No.{propsId}</h1>
//       <h2>cake Name: {propsName}</h2>
//       <img src={propsImage} alt="" />
//     </>
//   );
// }

function Food(props){
   return (
     <>
       <h1>cake No.{props.propsId}</h1>
       <h2>cake Name: {props.propsName}</h2>
       <img src={props.propsImage} alt="" />
     </>
   );
 }

//부모 컴포넌트
function App() {
  return (
    <>
      <div>리액트 시작!!</div>
      <Macaron />
     {cakes.map(cake => (
        <Food 
            propsId = {cake.id}
            propsName = {cake.name}
            propsImage = {cake.image}
        />
      ))}
    </>
  )
  
}

export default App;
