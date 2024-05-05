import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomDecimal100 = () => {
  const possibleResults = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const randomIndex = Math.floor(Math.random() * possibleResults.length);
  return possibleResults[randomIndex];
};

const validDiceSides = [4, 6, 8, 10, 12, 20, 100];

app.get('/roll/:sides', (req, res) => {
  const sides = parseInt(req.params.sides, 10);

  if (!validDiceSides.includes(sides)) {
    return res.status(400).json({ error: 'Данного дайса нет' });
  }

  let result;

  if (sides === 100) {
    result = getRandomDecimal100();
  } else {
    result = randomInt(1, sides);
  }

  res.json({ sides, result });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API запущен на порту ${PORT}`);
});
