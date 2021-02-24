const age: number = 99;

const obj = {
    one: {
        two: {
            three: 'awoooo'
        }
    }
}

var obj2 = {
    ...obj,
    four: 'fourrr'
  }

function woof(noise: any) {
    console.log('noise: ', noise) 
}


woof(obj)
woof(obj2)