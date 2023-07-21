import Swal from 'sweetalert2';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { AdminOptionsProps } from '../types/AdminOptionsProps';
import api from '../utils/api';

const AdminOptions = (
  {
    sequence,
    question,
    ordination,
    faqStates,
    setFaqStates,
    questionStates,
    setQuestionStates,
  }: AdminOptionsProps) => {

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setQuestionStates({
      ...questionStates,
      isExpanded: true,
      editing: true,
      editedQuestion: question.question,
      editedAnswer: question.answer || '',
    });
  };

  const handleConfirmClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    try {
      setFaqStates({
        ...faqStates,
        loading: true,
      });
      const body = {
        question: questionStates.editedQuestion,
        answer: questionStates.editedAnswer,
      }
      await api.put(`/faq/${question.id}`, body);
      setFaqStates({
        ...faqStates,
        refresh: !faqStates.refresh,
      });
      setQuestionStates({
        ...questionStates,
        isExpanded: true,
        editing: false,
      });
    } catch (error) {
      setFaqStates({
        ...faqStates,
        loading: false,
      });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao atualizar pergunta!',
      });
      console.error('Erro ao atualizar pergunta:', error);
    }
  };

  const handleCancelClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setQuestionStates({
      ...questionStates,
      editing: false,
    });
  };

  const handleDeleteClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    Swal.fire({
      icon: 'warning',
      title: 'Está certo disso?',
      text: `Você tem certeza de que deseja remover a 
      ${ordination ? ' subseção ' : ' seção '}
      ${ordination ? ` ${ordination}.${sequence}` : ` ${sequence}`}? 
      Caso haja subseções, elas também serão removidas de forma permanente!`,
      confirmButtonText: 'APAGAR',
      showCancelButton: true,
      cancelButtonText: 'VOLTAR',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setFaqStates({
            ...faqStates,
            loading: true,
          });
          await api.delete(`/faq/${question.id}`);
          setFaqStates({
            ...faqStates,
            refresh: !faqStates.refresh,
          });
        } catch (error) {
          setFaqStates({
            ...faqStates,
            loading: false,
          });
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Erro ao remover a ${ordination ? ' subseção ' : ' seção '}
            ${ordination ? ` ${ordination}.${sequence}` : ` ${sequence}`}!`,
          });
          console.error(`Erro ao remover a ${ordination ? ' subseção ' : ' seção '}
            ${ordination ? ` ${ordination}.${sequence}` : ` ${sequence}`}:`, error);
        }
      }
    });
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
