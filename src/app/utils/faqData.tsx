const FAQdata = [
  {
    id: 10,
    question: 'Pergunta 1',
    answer: null,
    order: 1,
    subquestions: [
      {
        id: 13,
        question: 'Subpergunta 1.1',
        answer: 'Resposta 1.1',
        order: 1,
        subquestions: [
          {
            id: 25,
            question: 'Subpergunta 1.1.1',
            answer: 'Resposta 1.1.1',
            order: 1,
            subquestions: null,
          },
          {
            id: 26,
            question: 'Subpergunta 1.1.2',
            answer: 'Resposta 1.1.2',
            order: 2,
            subquestions: null,
          },
        ]
      },
      {
        id: 14,
        question: 'Subpergunta 1.2',
        answer: 'Resposta 1.2',
        order: 2,
        subquestions: null,
      },
    ],
  },
  {
    id: 11,
    question: 'Pergunta 2',
    answer: 'Resposta 2',
    order: 2,
    subquestions: [
      {
        id: 15,
        question: 'Subpergunta 2.1',
        answer: 'Resposta 2.1',
        order: 1,
        subquestions: null,
      },
      {
        id: 16,
        question: 'Subpergunta 2.2',
        answer: 'Resposta 2.2',
        order: 2,
        subquestions: null,
      },
    ],
  },
];

export default FAQdata;
