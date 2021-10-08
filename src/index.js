import './style.css';
import { getScores, postScore } from './scores';

class LeaderBoard {
  constructor() {
    this.boardArray = [];
  }

  displayScores = async () => {
    this.boardArray = await getScores();
    if (typeof this.boardArray !== 'undefined' && this.boardArray !== null) {
      const table = document.getElementById('scoreTable');
      table.innerHTML = '';

      this.boardArray.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.className = 'table-row';
        const td = document.createElement('td');
        td.className = 'table-entry';
        const div = document.createElement('div');
        div.innerHTML = `${item.user}: ${item.score} &nbsp`;

        if (index === 0) {
          tr.style.background = '#00ff37';
          const icon = document.createElement('i');
          icon.className = 'fas fa-trophy-alt';
          div.appendChild(icon);
        }

        td.appendChild(div);
        tr.appendChild(td);
        table.appendChild(tr);
      });
    }
  }

  refresh() {
    const button = document.getElementById('refreshButton');
    button.addEventListener('click', async () => {
      document.querySelector('.fa-sync').classList.toggle('rotate');
      this.displayScores();
    });
  }

  addNewScore = () => {
    const nameInput = document.getElementById('player_name');
    const scoreInput = document.getElementById('player_score');
    postScore(nameInput.value, scoreInput.value);
    nameInput.value = ' ';
    scoreInput.value = ' ';
  }

  addsubmitEvent() {
    const button = document.getElementById('addButton');
    button.addEventListener('click', async () => {
      this.addNewScore();
      await this.displayScores();
    });
  }
}

const app = new LeaderBoard();
app.refresh();
app.addsubmitEvent();
app.displayScores();