import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import DataFetcher from "./DataFetcher"; // 导入 DataFetcher 组件
import "./components/Card.css";

function MainApp() {
  return (
    <div className="bg-dark">
      <Header />
      <Card />
      <DataFetcher /> {/* 使用 DataFetcher 组件 */}
      <Footer />
      <UpdateUserButton />
    </div>
  );
}

export default MainApp;
