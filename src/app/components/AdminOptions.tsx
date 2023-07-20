import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { AdminOptionsProps } from '../types/AdminOptionsProps';

const AdminOptions = (
  {
    question,
    questionStates,
    setQuestionStates,
  }: AdminOptionsProps) => {

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setQuestionStates({
      ...questionStates,
      isExpanded: true,
      editing: true,
      editedQuery: question.question,
      editedAnswer: question.answer || '',
    });
  };

  const handleConfirmClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // TODO: Send editedQuery and editedAnswer
  };

  const handleCancelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setQuestionStates({
      ...questionStates,
      editing: false,
    });
  };

  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    // TODO: Alert
    // TODO: Send id 
  };

  const handleAddClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setQuestionStates({
      ...questionStates,
      openAddQuestionForm: true,
      isExpanded: true,
      editing: false,
    });
  };

  return (
    <>
      {questionStates.editing ? (
        <Box>
          <IconButton
            size='small'
            aria-label='confirm'
            onClick={(event) => handleConfirmClick(event)}
          >
            <CheckIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            size='small'
            aria-label='cancel'
            onClick={(event) => handleCancelClick(event)}
          >
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box >
      ) : (
        <Box>
          <IconButton
            size='small'
            aria-label='delete'
            onClick={(event) => handleDeleteClick(event)}
          >
            <DeleteIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            size='small'
            aria-label='edit'
            onClick={(event) => handleEditClick(event)}
          >
            <EditIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton
            size='small'
            aria-label='add'
            onClick={(event) => handleAddClick(event)}
          >
            <AddIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
      )}
    </>
  );
}

export default AdminOptions;
