import { ChangeEvent } from 'react';
import { AccordionDetails, Typography, TextField } from '@mui/material';

import { AnswerProps } from '../types/AnswerProps';
import FAQ from './FAQ';

const Answer = (
  {
    question,
    ordination,
    editMode,
    questionStates,
    setQuestionStates,
  }: AnswerProps) => {

  return (
    <AccordionDetails
      sx={{
        background: '#000000dd',
        color: 'white',
      }}
    >
      {questionStates.editing ? (
        <div>
          <TextField
            label='Resposta'
            multiline
            fullWidth
            variant='standard'
            InputProps={{ style: { color: 'white', fontSize: '18px' } }}
            InputLabelProps={{ style: { color: 'white' } }}
            value={questionStates.editedAnswer}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuestionStates({ ...questionStates, editedAnswer: e.target.value })}
          />
        </div>
      ) : (
        question.answer &&
        <Typography variant='h6'>{question.answer}</Typography>
      )}
      {question.subquestions && (
        <div style={{ marginLeft: '15px', width: '100%' }}>
          <FAQ
            questions={question.subquestions}
            editMode={editMode}
            ordination={ordination ? `${ordination}.${question.order}` : `${question.order}`}
          />
        </div>
      )}
    </AccordionDetails>
  );
}

export default Answer;
