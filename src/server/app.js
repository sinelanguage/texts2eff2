import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

import doWork from './utils/do-work';
import testAsyncAwait from './utils/test-async-await';

const app = new Koa()
// x-response-time
.use(cors())

.use(async function (ctx, next) {
  const start = new Date(); // step 1
  await next(); // step 2
  const ms = new Date() - start; // step 12
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log('X-Response-Time', `${ms}ms`);
})

// logger

.use(async function (ctx, next) {
  const start = new Date(); // step 3
  await next(); // step 4
  const ms = new Date() - start; // step 11
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
})

.use(async function (ctx, next) {
  const test = (first) => (second) => first === second;
  const numbers = [1,2,1,2,1,1,2];
  // doWork();
  ctx.body = `${test(1)(1).toString().toUpperCase()}`; // step 5
  await next(); // step 6
  
})

.use(async function (ctx, next) {
 // step 7
  console.log("BEFORE DONE")
  await testAsyncAwait(next); // step 8
  console.log("AFTER DONE")
  await next(); // step 9
})

// response

.use(ctx => {
  ctx.body += ' and Hello World';
  console.log("-- ctx.state --", ctx.state); // step 10
});

app.listen(4000);