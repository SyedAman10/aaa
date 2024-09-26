import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 5, y: 5 }];
const INITIAL_FOOD = { x: 10, y: 10 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0); // Track current score
  const [highScore, setHighScore] = useState(0); // Track high score
  const [speed, setSpeed] = useState(200); // Speed of the snake

  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [snake, direction, speed]);

  const moveSnake = () => {
    if (!gameOver) {
      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'RIGHT':
          head.x += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
      }

      // Wrap the snake around the screen
      if (head.x >= WIDTH / CELL_SIZE) {
        head.x = 0; // Move to the left edge
      } else if (head.x < 0) {
        head.x = Math.floor(WIDTH / CELL_SIZE) - 1; // Move to the right edge
      }

      if (head.y >= HEIGHT / CELL_SIZE) {
        head.y = 0; // Move to the top edge
      } else if (head.y < 0) {
        head.y = Math.floor(HEIGHT / CELL_SIZE) - 1; // Move to the bottom edge
      }

      newSnake.unshift(head);

      // Check if the snake has eaten the food
      if (head.x === food.x && head.y === food.y) {
        // Snake eats the food, do not pop the tail
        setFood(generateFood()); // Generate new food
        setScore(score + 1); // Increment score
        setSpeed(prev => Math.max(50, prev - 10)); // Increase speed, ensure it doesn't go too fast
      } else {
        newSnake.pop(); // Remove the tail if food is not eaten
      }

      // Check for collisions with itself
      if (checkCollision(head, newSnake)) {
        setGameOver(true);
        // Check if high score needs to be updated
        if (score > highScore) {
          setHighScore(score);
        }
      }

      setSnake(newSnake);
    }
  };

  const checkCollision = (head, snake) => {
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
  };

  const generateFood = () => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * (WIDTH / CELL_SIZE)),
        y: Math.floor(Math.random() * (HEIGHT / CELL_SIZE)),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)); // Ensure food does not spawn on the snake
    return newFood;
  };

  const changeDirection = (newDirection) => {
    // Prevent the snake from going in the opposite direction
    if ((direction === 'LEFT' && newDirection === 'RIGHT') ||
        (direction === 'RIGHT' && newDirection === 'LEFT') ||
        (direction === 'UP' && newDirection === 'DOWN') ||
        (direction === 'DOWN' && newDirection === 'UP')) {
      return;
    }
    setDirection(newDirection);
  };

  const renderGameOver = () => (
    <View style={styles.gameOverContainer}>
      <Text style={styles.gameOverText}>Game Over!</Text>
      <Text style={styles.scoreText}>Your Score: {score}</Text>
      <Text style={styles.scoreText}>High Score: {highScore}</Text>
      <TouchableOpacity onPress={() => {
        setSnake(INITIAL_SNAKE);
        setFood(INITIAL_FOOD);
        setDirection('RIGHT');
        setGameOver(false);
        setScore(0); // Reset score
        setSpeed(200); // Reset speed
      }}>
        <Text style={styles.restartText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score} | High Score: {highScore}</Text>
      <View style={styles.gameArea}>
        {snake.map((segment, index) => (
          <View
            key={index}
            style={[
              styles.snakeSegment,
              { left: segment.x * CELL_SIZE, top: segment.y * CELL_SIZE },
            ]}
          />
        ))}
        <View
          style={[
            styles.food,
            { left: food.x * CELL_SIZE, top: food.y * CELL_SIZE },
          ]}
        />
      </View>
      {gameOver && renderGameOver()}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={() => changeDirection('UP')}>
          <Text style={styles.buttonText}>↑</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => changeDirection('LEFT')}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => changeDirection('RIGHT')}>
            <Text style={styles.buttonText}>→</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => changeDirection('DOWN')}>
          <Text style={styles.buttonText}>↓</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Aligns items to the top
    alignItems: 'center',
  },
  gameArea: {
    width: WIDTH,
    height: HEIGHT - 350, // Adjust height to give space for controls and score
    backgroundColor: '#eee',
    position: 'relative',
  },
  snakeSegment: {
    position: 'absolute',
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: 'green',
  },
  food: {
    position: 'absolute',
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: 'red',
  },
  gameOverContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  gameOverText: {
    fontSize: 32,
    color: 'white',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 10,
  },
  restartText: {
    fontSize: 20,
    color: 'yellow',
  },
  controls: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Space between game area and controls
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // Add vertical margin to space out buttons
    marginHorizontal: 10, // Optional: horizontal margin for side spacing
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
});

export default SnakeGame;
