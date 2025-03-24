import React from "react";
import Carousel from '../Components/Carousel';
import News from "./News";
export default function Home() {
  return (
  <>
    <div className="container">
      <h1>Top News:</h1>
      <Carousel/>
      <News/>
    </div>
  </>
  );
}
