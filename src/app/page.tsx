'use client'
import { useState } from 'react';
import { Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';
import styles from './page.module.css';

import FAQ from './components/FAQ';
import FAQdata from './utils/faqData';

export default function Home() {
  const [editMode, setEditeMode] = useState(false);
  const [data, setdata] = useState(FAQdata);
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.header}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 'light' }}
          >
            FAQ
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontWeight: 'bold' }}
          >
            perguntas frequentes
          </Typography>
        </div>
        <div className={styles.edit}>
          <Fab color={editMode ? 'secondary' : 'default'} aria-label="edit">
            <EditIcon onClick={() => setEditeMode(!editMode)} />
          </Fab>
        </div>
      </div>
      <div className={styles.body}>
        <Typography variant="h4">
          Como podemos te ajudar?
        </Typography>
        <FAQ questions={data} editMode={editMode} />
      </div>
    </main>
  )
}
