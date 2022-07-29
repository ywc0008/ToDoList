const quotes = [
  {
    quote:
      "한 사람이 맺는 인간관계는 그 사람이 갖고 있는 꿈의 크기를 결정짓는다.",
    author: "알베르트 슈바이처",
  },
  {
    quote: "열등감과 자기비난에 시달리는 사람은 주변을 어둡게 만든다.",
    author: "존 F. 케네디",
  },
  {
    quote:
      "큰 그림을 보고가는 사람은 작은 그림이 조금씩 틀리는 것에 연연하지 않는다.",
    author: "강태공",
  },
  {
    quote: "세상에는 악한 사람이 존재하는 것이 아니라, 약한 사람이 존재한다.",
    author: "베이컨",
  },
  {
    quote:
      "단호한 생각과 모호한 생각의 경계를 구분짓기 위해서는 단호한 결단이 필요하다.",
    author: "헤르만 헤세",
  },
  {
    quote:
      "준비된 성공과 우연한 성공은 처음에는 비슷해 보이나, 결말은 확실히 달라진다.",
    author: "맥스웰 몰츠",
  },
  {
    quote:
      "사람이 발전하는 속도가 크게 차이가 나게 되면 신뢰있는 관계를 구축하기 어렵다.",
    author: "피카소",
  },
  {
    quote:
      "애초에 얻고 싶은 바가 명확하지 않았던 사람들에게는 잃을 것도 명확하지않다.",
    author: "니체",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomeQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
}

randomeQuote();
