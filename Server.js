var express = require('express');
const path = require('path');
const Board = require('./models/board');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const cors = require('cors');
const ejs = require("ejs");

const { sequelize } = require('./models');
//여기에 라우터? 추가


var app = express();
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error(err);
});

app.use(express.static(__dirname + '/hshomepage/build')) //build폴더에 있는 index.html 실행
app.use(cors()); //도메인 또는 포트가 다른 서버의 데이터를 요청할 수 있습니다.
app.use(express.json());

//라우터 설정?


app.use((req, res, next) => { //에러처리
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => { //데이터 처리
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/hshomepage/build'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'hshomepage/build/index.html'));
})

//GET board page
app.get('/board', async (req, res, next) => { // /board 진입했을 때
  try {
    console.log("board list 요청함");
      const board = await Board.findAll(); //board 데이터를 가져오고
      res.json(board);
      res.send(board);
      //res.render('board', { board }); //해당 데이터를 board.html를 렌더링할 때 넘김
  } catch (err) {
      console.error(err);
      next(err);
  }
});




app.listen(3001, '0.0.0.0', () => {
    console.log('Server is running : port 3001')
})