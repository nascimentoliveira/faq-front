'use client'
import { SyntheticEvent, useState } from 'react';
import { Accordion } from '@mui/material';

import { QuestionProps } from '../types/QuestionProps';
import Answer from './Answer';
import AskingBar from './AskingBar';
import AddQuestionForm from './AddQuestionForm';

const Question = (
  {
    sequence,
    question,
    faqStates,
    setFaqStates,
    ordination
  }: QuestionProps) => {

  const [questionStates, setQuestionStates] = useState({
    openAddQuestionForm: false,
    isExpanded: false,
    editing: false,
    editedQuestion: '',
    editedAnswer: '',
  });

  const handleAccordionChange = (_: SyntheticEvent<Element, Event>, expanded: boolean) => {
    setQuestionStates({ ...questionStates, isExpanded: expanded });
  };

  return (
    <>
      <Accordion
        sx={{
          boxShadow: '2px 2px 10px 2px #000',
          color: 'white',
        }}
        expanded={questionStates.editing ? true : questionStates.isExpanded}
        onChange={handleAccordionChange}
      >
        <AskingBar
          sequence={sequence}
          question={question}
          ordination={ordination ? `${ordination}` : ''}
          faqStates={faqStates}
          setFaqStates={setFaqStates}
          questionStates={questionStates}
          setQuestionStates={setQuestionStates}
        />
        <Answer
          sequence={sequence}
          question={question}
          ordination={ordination ? `${ordination}` : ''}
          faqStates={faqStates}
          setFaqStates={setFaqStates}
          questionStates={questionStates}
          setQuestionStates={setQuestionStates}
        />
      </Accordion>
      <AddQuestionForm
        sequence={sequence}
        question={question}
        ordination={ordination ? `${ordination}` : ''}
        faqStates={faqStates}
        setFaqStates={setFaqStates}
        questionStates={questionStates}
        setQuestionStates={setQuestionStates}
      />
    </>
  );
}

export default Question;
