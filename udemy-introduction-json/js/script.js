(function() {
  'use strict';

  const output = document.querySelector('#output');

  let data = {people: [
  {firstName: 'Marquinhus', lastname: 'Gonçalves', age: 33},
  {firstName: 'Vinicius', lastname: 'Lourençato', age: 18},
  {firstName: 'Souza', lastname: 'Ramos', age: 62}]};

  data.people[1].phone = 982009700;
  console.log('Data = ', data);

  // sessionStorage.setItem('friend', JSON.stringify(data));
  // var myList = sessionStorage.getItem('friend');
  // OR
  // sessionStorage.setItem('friend');
  var myList = JSON.parse(sessionStorage.getItem('friend'));

  console.log('mylist = ', myList);

  let dataString = JSON.stringify(data);
  console.log('dataString = ', dataString);

  let people = JSON.parse(dataString);
  console.log('people = ', people);

  output.innerHTML = data.people[0].firstName + ' ' + data.people[1].lastname+ ' ' + data.people[2].age;

  //Arrays and JSON
  var arr = [];
  arr[0] = 'one';
  arr[1] = 'two';
  arr[5] = 'five';

  var myjson = JSON.stringify(arr);

  console.log(arr);
  console.log(myjson);

  // Loopes Dynamic Objects

  var newArr = {
    'Friends': [{
      'first': 'Mike',
      'last': 'Jones'
    },
    {
      'first': 'Steve',
      'last': 'Glow'
    }]
  }
  console.log(newArr);

  for(var i = 0; i < newArr.Friends.length; i++) {
    console.log(i + ' = ' + newArr.Friends[i].first + ' ' + newArr.Friends[i].last);
  }
})();