import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { FAQProps } from '../types/FAQProps';
import styles from '../page.module.css';
import Question from './Question';

const FAQ = ({ questions, editMode, ordination }: FAQProps) => {
  return (
    <div className={styles.faqContainer}>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          editMode={editMode}
          ordination={ordination ? `${ordination}` : ''}
        />
      ))}
      <div className={styles.addButton}>
        {!ordination && editMode &&
          <Fab aria-label='edit'>
            <AddIcon />
          </Fab>
        }
      </div>
    </div>
  );
};

export default FAQ;
