'use client'
import { ChangeEvent, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import { AddQuestionFormProps } from '../types/AddQuestionFormProps';
import api from '../utils/api';
import Swal from 'sweetalert2';

const AddQuestionForm = (
  {
    sequence,
    question,
    ordination,
    faqStates,
    setFaqStates,
    questionStates,
    setQuestionStates,
  }: AddQuestionFormProps) => {

  const [form, setForm] = useState({
    question: '',
    answer: '',
  });

  const handleCancel = () => {
    setQuestionStates({
      ...questionStates,
      openAddQuestionForm: false,
    });
    setFaqStates({
      ...faqStates,
      parentFlag: false,
      openAddQuestionForm: false,
    });
    setForm({
      question: '',
      answer: '',
    });
  };

  const handleConfirm = async () => {
    setQuestionStates({
      ...questionStates,
      openAddQuestionForm: false,
    });
    setFaqStates({
      ...faqStates,
      openAddQuestionForm: false,
    });
    if (form.question.trim() === '') {
      Swal.fire({
        icon: 'info',
        title: 'Faltou ali...',
        text: `Pelo menos a pergunta ou título da 
        ${faqStates.parentFlag ? ' seção ' : ' subseção '} deve estar preenchido!`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          setFaqStates({
            ...faqStates,
            openAddQuestionForm: true,
          });
        }
      });
      return;
    }
    try {
      setFaqStates({
        ...faqStates,
        loading: true,
      });
      await api.post(faqStates.parentFlag ? '/faq' : `/faq/${question.id}`, form);
      setFaqStates({
        ...faqStates,
        parentFlag: false,
        openAddQuestionForm: false,
        refresh: !faqStates.refresh,
      });
      setForm({
        question: '',
        answer: '',
      });
    } catch (error) {
      setFaqStates({
        ...faqStates,
        loading: false,
      });
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Erro ao criar nova ${faqStates.parentFlag ? ' seção à FAQ' :
          ` subseção à ${ordination ? ' subseção ' : ' seção '}
          ${ordination ? ` ${ordination}.${sequence}.` : ` ${sequence}.`}
        `}!`,
      });
      console.error('Erro ao atualizar pergunta:', error);
    }
  };

  return (
    <Dialog
      open={faqStates.openAddQuestionForm || questionStates.openAddQuestionForm}
      onClose={handleCancel}
    >
      <DialogTitle>
        {
          `Adicionar nova ${faqStates.parentFlag ? ' seção à FAQ' :
            ` subseção à ${ordination ? ' subseção ' : ' seção '}
              ${ordination ? ` ${ordination}.${sequence}.` : ` ${sequence}.`}
            `
          }`
        }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`Insira abaixo os dados da nova ${faqStates.parentFlag ? ' seção ' : ' subseção '}`}
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='question'
          label={`Pergunta ou titulo da ${faqStates.parentFlag ? ' seção ' : ' subseção '}`}
          type='text'
          fullWidth
          multiline
          required
          variant='standard'
          defaultValue={form.question}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, question: e.target.value });
            e.preventDefault();
          }}
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
          defaultValue={form.answer}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setForm({ ...form, answer: e.target.value });
            e.preventDefault();
          }}
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
