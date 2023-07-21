'use client'
import { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
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
  const [editMode, setEditeMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await api.get('/faq');
        setFaqData(response.data);
        setLoading(false);
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
        setLoading(false);
      }
    };
    fetchFaqData();
  }, []);

  return (
    <main className={styles.main}>
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
            color={editMode ? 'secondary' : 'default'}
            aria-label='edit'
          >
            <EditIcon onClick={() => setEditeMode(!editMode)} />
          </Fab>
        </div>
      </div>
      <div className={styles.container}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {faqData.length === 0 ? (
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
                  editMode={editMode}
                />
              </>
            )}
          </>
        )}
      </div>
    </main>
  )
}
