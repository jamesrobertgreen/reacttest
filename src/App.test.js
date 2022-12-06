import { render, screen } from '@testing-library/react';
import App from './App';


test('it should return false as 5 is EQUAL ', () => {

  expect(greaterThanFive(5)).toEqual(false);
});


test('it should return true as 6 is greater ', () => {

  expect(greaterThanFive(6)).toEqual(true);
});


test('it should return false as 4 is lower ', () => {

  expect(greaterThanFive(4)).toEqual(false);
});


test('it should return false as 4 is lower ', () => {

  expect(greaterThanFive('a')).toEqual(false);
});




const greaterThanFive = (num) =>{

  return num > 5 ? true : false;


}