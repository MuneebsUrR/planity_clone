import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Typography, Box, Grid } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const dummyCollaborators = [
  "Alice Johnson",
  "Bob Smith",
  "Carol Williams",
  "David Brown",
  "Eva Davis"
];

function Scheduler (){
  const [currentWeek, setCurrentWeek] = useState(0);
  const [direction, setDirection] = useState(0);

  const days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const times = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'];

  const getWeekDates = () => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1 + (currentWeek * 7)));
    return days.map((day, index) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);
      return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
    });
  };

  const handlePrevWeek = () => {
    setDirection(-1);
    setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    setDirection(1);
    setCurrentWeek(currentWeek + 1);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        2. Choix de la date & heure
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Button onClick={handlePrevWeek} sx={{ minWidth: 'auto' }}>
          <ChevronLeft />
        </Button>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentWeek}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around' }}
          >
            {days.map((day, index) => (
              <Box key={day} textAlign="center">
                <Typography fontWeight="bold">{day}</Typography>
                <Typography variant="body2">{getWeekDates()[index]}</Typography>
              </Box>
            ))}
          </motion.div>
        </AnimatePresence>
        <Button onClick={handleNextWeek} sx={{ minWidth: 'auto' }}>
          <ChevronRight />
        </Button>
      </Box>
      <Grid container spacing={2}>
        {days.map((day) => (
          <Grid item xs key={day}>
            <Box display="flex" flexDirection="column" gap={1}>
              {times.map((time) => (
                <Button
                  key={`${day}-${time}`}
                  variant="outlined"
                  fullWidth
                  size="small"
                  sx={{ justifyContent: 'flex-start', py: 1 }}
                >
                  {time}
                </Button>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Scheduler;