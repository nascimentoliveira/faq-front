import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Fab,
  IconButton,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../page.module.css';
import { FAQProps } from '../types/FAQProps';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const FAQ = ({ questions, editMode, ordination }: FAQProps) => {
  return (
    <div className={styles.faqContainer}>
      {questions.map((faq, index) => (
        <Accordion key={index}
          sx={{
            boxShadow: '2px 2px 10px 2px #000',
            color: 'white',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundImage: 'linear-gradient( 110.3deg,  #495d6d 60%, #313752 96.7% )',
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
              <Box>
                <Typography variant="h6">
                  {ordination &&
                    `${ordination}.`}{faq.order}. {faq.question}
                </Typography>
              </Box>
              {editMode &&
                <Box>
                  <IconButton size="small" aria-label="delete">
                    <DeleteIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <IconButton size="small" aria-label="edit" >
                    <EditIcon sx={{ color: 'white' }} />
                  </IconButton>
                  <IconButton size="small" aria-label="add" >
                    <AddIcon sx={{ color: 'white' }} />
                  </IconButton>
                </Box>
              }
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: '#000000dd',
              color: 'white',
            }}
          >
            <div>
              {faq.answer &&
                <Typography variant="h6">{faq.answer}</Typography>
              }
              {faq.subquestions && (
                <div style={{ marginLeft: '15px', width: '100%' }}>
                  {faq.subquestions &&
                    <FAQ
                      questions={faq.subquestions}
                      editMode={editMode}
                      ordination={ordination ? `${ordination}.${faq.order}` : `${faq.order}`}
                    />
                  }
                </div>
              )}

            </div>
          </AccordionDetails>
        </Accordion>
      ))}
      <div className={styles.addButton}>
        {!ordination && editMode &&
          <Fab aria-label="edit">
            <AddIcon />
          </Fab>
        }
      </div>
    </div >
  );
};

export default FAQ;
