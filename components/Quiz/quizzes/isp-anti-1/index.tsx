import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'isp-anti-1',
  question: 'В чём суть проблемы грязного интерфейса?',
  variants: [
    {
      text:
        'Он содержит в себе слишком много методов и полей, не все из которых могут быть нужны сущностям, реализующим его'
    },
    {
      text:
        'Он содержит в себе слишком много методов и полей, что может привести к плохой читаемости и дорогой поддержки'
    },
    {
      text: 'Он не может быть разбит на несколько более мелких, из-за чего его трудно и дорого поддерживать',
      description: 'Один из способов борьбы с грязным интерфейсом — как разбиение его на более мелкие'
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}

export default quiz
