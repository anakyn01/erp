import { useState } from "react";
import Content from "../00_contents/Content";

const Tab = () => {

  const [activeTab, setActiveTab] = useState("종합");

  const tabs = [
    { id: "종합", label: "종합" },
    { id: "심화 해석판", label: "심화 해석판" },
    { id: "무료 해석판", label: "무료 해석판" },
  ];

   const renderContent = () => {
    switch (activeTab) {
      case "종합":
        return(
        <>
        <div className="tab-content">
          <Content/>
        </div>
        </>); 

      case "심화 해석판":
        return <div className="tab-content">🔍 심화 해석판 내용입니다.</div>;
      case "무료 해석판":
        return <div className="tab-content">💡 무료 해석판 내용입니다.</div>;
      default:
        return null;
    }
  };

    return(
        <>
         <nav className="tab">
        <div className="tab-wrap">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href="#"
              className={
                activeTab === tab.id
                  ? "tab-wrap-a-active"
                  : "tab-wrap-a"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id);
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </nav>
      {renderContent()}
        </>
    );
}
export default Tab;