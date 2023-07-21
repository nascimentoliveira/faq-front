import { ChangeEvent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionSummary,
  Box,
  Typography,
  TextField
} from '@mui/material';

import AdminOptions from './AdminOptions';
import { AskingBarProps } from '../types/AskingBarProps';

const AskingBar = (
  {
    sequence,
    question,
    ordination,
    faqStates,
    setFaqStates,
    questionStates,
    setQuestionStates,
  }: AskingBarProps) => {

  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{
        backgroundImage: 'linear-gradient(110deg, #495d6d 60%, #313752 96%)',
        flexDirection: 'row-reverse',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ width: '75%' }}>
          {questionStates.editing ? (
            <div style={{ display: 'flex' }}>
              <Typography variant='h6'>
                {ordination && `${ordination}.`}
                {sequence}.
              </Typography>
              <TextField
                id='standard-helperText'
                defaultValue={questionStates.editedQuestion}
                helperText='Pergunta'
                variant='standard'
                multiline
                fullWidth
                required
                InputProps={{ style: { color: 'white', fontSize: '20px' } }}
                FormHelperTextProps={{ style: { color: 'white' } }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setQuestionStates({ ...questionStates, editedQuestion: e.target.value });
                  e.preventDefault();
                }}
              />
            </div>
          ) : (
            <Typography variant='h6'>
              {ordination && `${ordination}.`}
              {sequence}. {question.question}
            </Typography>
          )}
        </Box>
        {faqStates.editMode &&
          <AdminOptions
            sequence={sequence}
            question={question}
            ordination={ordination}
            faqStates={faqStates}
            setFaqStates={setFaqStates}
            questionStates={questionStates}
            setQuestionStates={setQuestionStates}
          />
        }
      </Box>
    </AccordionSummary>
  );
}

export default AskingBar;
