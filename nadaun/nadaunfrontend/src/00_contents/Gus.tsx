import { useState } from "react";

const lorem = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Nemo natus, quis atque quia reiciendis perspiciatis optio aut eligendi,
culpa dignissimos sed quidem, facilis error laborum facere cumque aspernatur ex veniam.
`;

const items = [
  { title: "01.내 사랑, 오래 지속될 인연일까?", content: lorem },
  { title: "02.이 감정, 스쳐가는 바람일까 진짜일까?", content: lorem },
  { title: "03.우리 관계, 지금이 전환점 일까?", content: lorem },
  { title: "04.그 사람의 마음, 진심일까 순간일까?", content: lorem },
  { title: "05.잠시 스치는 인연일까, 평생의 동반자 일까?", content: lorem },
  { title: "06.사랑이 흔들리는 순간, 끝일까 새로운 시작일까?", content: lorem },
  { title: "07.내가 붙잡아야 할 사랑일까, 놓여야할 인연 일까?", content: lorem },
  { title: "08.이 감정, 스쳐가는 바람일까 진짜일까?", content: lorem },
  { title: "09.그와 나, 운명처럼 이어질까?", content: lorem },
  { title: "10.우리의 사랑, 위기일까 기회일까?", content: lorem },
];

const Gus = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="gus-title">아래는 일부 예시 해석입니다</div>

      {items.map((item, index) => (
        <div key={index}>
          <div
            className="gus-wrap"
            onClick={() => toggle(index)}
            style={{ cursor: "pointer" }}
          >
            <h1>{item.title}</h1>
          </div>

          {openIndex === index && (
            <div className="gus-bg">
              <h2>[맛보기]</h2>
              {item.content}
              <div className="bottom">여기까지만 공개돼요</div>
            </div>
          )}
        </div>
      ))}

      <div className="border-height-12"></div>

      <div className="gus-btn-wrap">
        <div className="gus-border">더 깊은 풀이는 구매 후 확인할수 있습니다</div>
        <button className="basicMint mt-5">구매하기</button>
      </div>
    </>
  );
};

export default Gus;
