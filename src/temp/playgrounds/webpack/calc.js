import multiply from './multiply';
import sum from './sum';
import '../../../client/assets/images/favicon-16x16.png';
import '../../../client/assets/images/favicon-32x32.png';

import request from 'superagent';

import _ from 'lodash';

const sayHello = (name = 'Mark') => `Hello ${ _.trim(name) }`;

sayHello();

function twoPlusThree() {
    return sum(2, 3);
};

function twoTimesThree() {
    return multiply(2,3);
};

function doIt() {

    console.log('WEBPACK WORKS: ', twoPlusThree(), twoTimesThree());

    (() => {
        const hello = "hello world in my eyes"
        console.log("HELLO WORLD", hello);
    })();

    /*request
        .post('//localhost:3000/')
        .send({ name: 'Manny', species: 'cat' })
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(err, res){
    });*/

}

doIt();