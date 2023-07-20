import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';

import { AddQuestionFormProps } from '../types/AddQuestionFormProps';

const AddQuestionForm = (
  {
    question,
    ordination,
    questionStates,
    setQuestionStates,
  }: AddQuestionFormProps) => {

  const handleCancel = () => {
    setQuestionStates({
      ...questionStates,
      openAddQuestionForm: false,
    });
  };

  const handleConfirm = () => {
    setQuestionStates({
      ...questionStates,
      openAddQuestionForm: false,
    });
  };

  return (
    <Dialog
      open={questionStates.openAddQuestionForm}
      onClose={handleCancel}
    >
      <DialogTitle>Adicionar Pergunta</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Adicionar nova subseção à subseção
          {ordination ? ` ${ordination}.${question.order}.` : ` ${question.order}.`}
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='question'
          label='Pergunta'
          type='text'
          fullWidth
          variant='standard'
        />
        <TextField
          autoFocus
          margin='dense'
          id='answer'
          label='Resposta'
          type='text'
          fullWidth
          multiline
          variant='standard'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleConfirm}>Adicionar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuestionForm;