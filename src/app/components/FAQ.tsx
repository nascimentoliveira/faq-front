import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { FAQProps } from '../types/FAQProps';
import styles from '../page.module.css';
import Question from './Question';

const FAQ = ({ questions, faqStates, setFaqStates, ordination }: FAQProps) => {

  const handleAddClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setFaqStates({
      ...faqStates,
      parentFlag: true,
      openAddQuestionForm: true,
    });
  };

  return (
    <div className={styles.faqContainer}>
      {questions.map((question, index) => (
        <Question
          key={question.id}
          sequence={index+1}
          question={question}
          faqStates={faqStates}
          setFaqStates={setFaqStates}
          ordination={ordination ? `${ordination}` : ''}
        />
      ))}
      <div className={styles.addButton}>
        {!ordination && faqStates.editMode &&
          <Fab 
            aria-label='edit'
            onClick={(event) => handleAddClick(event)}
          >
            <AddIcon />
          </Fab>
        }
      </div>
    </div>
  );
};

export default FAQ;
