import React, { useRef, useEffect } from "react";

interface Card {
  id: number;
  img: string;
  text: string;
  btn: string;
  type: string;
}

const cards: Card[] = [
  {
    id: 1,
    img: "/svg/main/card1.png",
    text: "내 곁의 사람, 다른 이에게 끌리고 있을까?",
    btn: "심화 해석판",
    type: "basicBtn",
  },
  {
    id: 2,
    img: "/svg/main/card2.png",
    text: "혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내",
    btn: "무료 체험판",
    type: "basicGray",
  },
  {
    id: 3,
    img: "/svg/main/card3.png",
    text: "바람의 징조, 이미 시작 됐을까?",
    btn: "무료 체험판",
    type: "basicBtn",
  },
];

const Content: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      // 맨 아래 도달 시, 맨 위에서 이어지도록
      if (scrollTop + clientHeight >= scrollHeight) {
        container.scrollTop = 1;
      }
      // 맨 위 도달 시, 맨 아래에서 이어지도록
      else if (scrollTop <= 0) {
        container.scrollTop = scrollHeight - clientHeight - 1;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="content-wrap">
      {/* 상단 한 번만 출력 */}
      <div className="infinite-content">
      <div className="img-wrap">
        <img src="/svg/main/mainimg.png" alt="" />
      </div>

      <div className="text-wrap">
        <p>내연인은 어디 있을까?</p>
        <button className="basicBtn">심화해석판</button>
      </div>

      {/* 카드 리스트 무한 스크롤 */}
      <div className="infinite-wrap">
      <div
        ref={scrollRef}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {/* 카드 단위 반복 */}
        {[...cards, ...cards].map((card, i) => (
          <div
            key={`${card.id}-${i}`}
            className="infinite-content"
          >
            <div className="infinite-img-wrap">
              <img
                src={card.img}
                alt=""
              />
            </div>
            <div className="infinite-text-wrap">
              <p>{card.text}</p>
              <button className={card.type}>{card.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Content;
