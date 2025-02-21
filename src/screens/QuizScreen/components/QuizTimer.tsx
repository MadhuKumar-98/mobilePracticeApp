import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface QuizTimerProps {
  totalTimeInMinutes: number;
  isPaused: boolean;
  onTimeUp: () => void;
}

export default function QuizTimer({ totalTimeInMinutes, isPaused, onTimeUp }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(totalTimeInMinutes * 60);

  useEffect(() => {
    const initializeTimer = async () => {
      try {
        const storedEndTime = await AsyncStorage.getItem('quizEndTime');
        const storedTimeLeft = await AsyncStorage.getItem('quizTimeLeft');
        
        if (storedEndTime && storedTimeLeft) {
          const endTime = parseInt(storedEndTime);
          const now = Date.now();
          
          if (now < endTime) {
            setTimeLeft(parseInt(storedTimeLeft));
          } else {
            // Timer has expired
            setTimeLeft(0);
            onTimeUp();
          }
        } else {
          // First time starting the quiz
          const endTime = Date.now() + (totalTimeInMinutes * 60 * 1000);
          await AsyncStorage.setItem('quizEndTime', endTime.toString());
          await AsyncStorage.setItem('quizTimeLeft', (totalTimeInMinutes * 60).toString());
        }
      } catch (error) {
        console.error('Error initializing timer:', error);
      }
    };

    initializeTimer();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused && timeLeft > 0) {
      interval = setInterval(async () => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            onTimeUp();
            clearInterval(interval);
            return 0;
          }
          
          // Store the current time left
          AsyncStorage.setItem('quizTimeLeft', newTime.toString());
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, timeLeft]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      <Text style={styles.status}>{isPaused ? 'Paused' : 'Running'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});