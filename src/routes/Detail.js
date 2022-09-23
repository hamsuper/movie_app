import React from "react";
import { useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  console.log('params', id);
  console.log('props', props);
  return (<h1>detail</h1>)
}
export default Detail;