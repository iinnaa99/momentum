const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: '길을 아는 것과 그 길을 걷는 것은 다르다.',
    author: '모피어스 (영화 매트릭스)',
  },
  {
    quote: '인생은 자전거를 타는 것과 같다. 균형을 유지하려면 움직여야 한다.',
    author: '알베르트 아인슈타인',
  },
  {
    quote: '성공은 최선을 다한 후에 자연스럽게 따라오는 것이다.',
    author: '앤드류 카네기',
  },
  {
    quote: '위대한 업적을 이루려면 행동할 뿐만 아니라 꿈도 꾸어야 한다.',
    author: '아나톨 프랑스',
  },
  {
    quote: '당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.',
    author: '헨리 포드',
  },
  {
    quote: '실패는 성공을 위한 과정일 뿐이다.',
    author: '마이클 조던',
  },
  {
    quote: '오늘 할 수 있는 일을 내일로 미루지 말라.',
    author: '벤자민 프랭클린',
  },
  {
    quote: '성공하는 사람과 실패하는 사람의 차이는 끈기다.',
    author: '존 D. 록펠러',
  },
  {
    quote:
      '우리의 가장 큰 약점은 포기하는 데 있다. 성공하려면 한 번 더 시도하라.',
    author: '토마스 에디슨',
  },
  {
    quote: '행복은 방향이지 목적지가 아니다.',
    author: '시드니 J. 해리스',
  },
  {
    quote: '어둠 속에서 빛을 찾으려면 먼저 스스로 빛이 되어야 한다.',
    author: '플라톤',
  },
  {
    quote: '작은 일에 충실한 사람이 큰일에도 충실하다.',
    author: '예수 그리스도',
  },
  {
    quote: '기회는 우연히 오는 것이 아니라, 만들어가는 것이다.',
    author: '크리스 그로서',
  },
  {
    quote: '모든 위대한 변화는 작은 결심에서 시작된다.',
    author: '달라이 라마',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
