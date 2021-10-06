const getScores = async () => {
  const getData = async () => (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yEIG5Vp5OYTpXbZZPsD/scores/')).json();

  const data = await getData();
  const scores = data.result;

  if (typeof scores !== 'undefined' && scores !== null) {
    scores.sort((a, b) => a.score - b.score).reverse();
  }
  return scores;
};

const postScore = async (player, score) => {
  if (player || score) {
    const boardItem = {
      user: player,
      score,
    };

    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yEIG5Vp5OYTpXbZZPsD/scores/';
    const message = async () => (await fetch(url, {
      method: 'POST',
      body: JSON.stringify(boardItem),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).json();

    const updateStatus = await message();
    const status = updateStatus.result;
    return status;
  }
  return '';
};

export { getScores, postScore };