var express = require('express');
const path = require('path');
const Board = require('./models/board');
const morgan = require('morgan');
const cors = require('cors');


const { sequelize } = require('./models');
//여기에 라우터? 추가
const indexRouter = require('./routes');
const boardRouter = require('./routes/board');
const eachPostRouter = require('./routes/eachPost');


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

app.use(morgan('dev')); //logging을 도와줌
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/hshomepage/build')) //build폴더에 있는 index.html 실행
app.use(cors()); //도메인 또는 포트가 다른 서버의 데이터를 요청할 수 있습니다.
app.use(express.json());

//라우터 설정?
app.use('/', indexRouter);
app.use('/board',boardRouter);
app.use('/eachPost',eachPostRouter);

app.use((req, res, next) => { //에러처리
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => { //데이터 처리
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.send('error');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/hshomepage/build'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'hshomepage/build/index.html'));
})


app.listen(3001, '0.0.0.0', () => {
    console.log('Server is running : port 3001')
})