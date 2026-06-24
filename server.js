const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/plans', (req, res) => {
  res.json([
    { name: 'Le Eblan', price: '$67', gain: '+0.01% ума', note: 'ничё не изменится' },
    { name: 'Le Dodik', price: '$228', gain: '+0.02% ума', note: 'добавлен 2-часовой лимит' },
    { name: 'Le Pidor 2x', price: '$148.8/сек', gain: '+0.04% ума', note: '+1 символ и зептосекундный счётчик' },
    { name: 'Le Pidor 67x', price: '$148.8/сек', gain: '+67% к почти ничему', note: 'всё то же, но громче на 67%' },
  ]);
});

app.listen(port, () => {
  console.log(`Le Dumb AI listening on http://localhost:${port}`);
});
