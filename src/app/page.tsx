'use client'
import { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';

import styles from './page.module.css';
import FAQ from './components/FAQ';
import api from './utils/api';

export default function Home() {
  const [faqData, setFaqData] = useState([]);
  const [faqStates, setFaqStates] = useState({
    parentFlag: false,
    openAddQuestionForm: false,
    loading: true,
    editMode: false,
    refresh: false,
  });

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await api.get('/faq');
        setFaqData(response.data);
        setFaqStates({
          ...faqStates,
          loading: false,
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao buscar dados!',
          confirmButtonText: 'Tentar novamente',
        }).then((result) => {
          if (result.isConfirmed) {
            fetchFaqData();
          }
        });
        console.error('Erro ao buscar dados:', error);
        setFaqStates({
          ...faqStates,
          loading: false,
        });
      }
    };
    fetchFaqData();
  }, [faqStates.refresh]);

  return (
    <main className={styles.main}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={faqStates.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={styles.banner}>
        <div className={styles.header}>
          <Typography
            variant='h3'
            sx={{ fontWeight: 'light' }}
          >
            FAQ
          </Typography>
          <Typography
            variant='h1'
            sx={{ fontWeight: 'bold' }}
          >
            perguntas frequentes
          </Typography>
        </div>
        <div className={styles.edit}>
          <Fab
            color={faqStates.editMode ? 'secondary' : 'default'}
            aria-label='edit'
          >
            <EditIcon
              onClick={() => {
                setFaqStates({
                  ...faqStates,
                  editMode: !faqStates.editMode,
                });
              }}
            />
          </Fab>
        </div>
      </div>
      <div className={styles.container}>
        <>
          {!faqStates.loading && faqData.length === 0 ? (
            <Typography variant='h6'>
              Ainda não há dados para mostrar!
            </Typography>
          ) : (
            <>
              <Typography variant='h4'>
                Como podemos te ajudar?
              </Typography>
              <FAQ
                questions={faqData}
                faqStates={faqStates}
                setFaqStates={setFaqStates}
              />
            </>
          )}
        </>
      </div>
    </main>
  );
}
