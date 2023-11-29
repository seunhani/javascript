// 객체 자료형
let number1 = new Number(273);
let string1 = new String('안녕하세요');
let boolean = new Boolean(true);


// 자료형을 출력합니다.
console.log(typeof number1);
console.log(typeof string1);
console.log (typeof boolean);

//변수를 선언합니다.
let number2 = 273.5210332;

//출력합니다.
console.log(number2.toFixed(1));
console.log(number2.toFixed(4));

//변수를 선언합ㄴ다.
let string2 = 'abcdefg';

//출력합니다.
string2 = string2.toUpperCase();
console.log(string2);

//변수를 선언합니다.
let String3 = '안녕하세요. 좋은 아침입니다.';

//문자열 내부에 "아침" 이라는 문자열이 있는지 확인합니다.
if (String3.indexOf('아침') >= 0) {
    console.log('좋은 아침이에요...!');
}