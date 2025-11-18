import { useState } from "react";
import Detail_Content from "../00_contents/Detail_Content";
import Exp from "../00_contents/Exp";
import Gus from "../00_contents/Gus";


const Tab_Detail = () => {

  const [activeTab, setActiveTab] = useState("상품 설명");

  const tabs = [
    { id: "상품 설명", label: "상품 설명" },
    { id: "풀이 원리", label: "풀이 원리" },
    { id: "맛보기", label: "맛보기" },
  ];

   const renderContent = () => {
    switch (activeTab) {
      case "상품 설명":
        return(
        <>
        <div className="tab-content">
        <Detail_Content/>
        </div>
        </>); 

      case "풀이 원리":
        return(
        <>
        <div className="tab-content">
        <Exp/>
        </div>
        </>
        ); 
      case "맛보기":
        return (
          <>
          <div className="tab-content">
          <Gus/>
          </div>
          </>
        );
      default:
        return null;
    }
  };

    return(
        <>
        <nav className="tab mt-80">
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
export default Tab_Detail;