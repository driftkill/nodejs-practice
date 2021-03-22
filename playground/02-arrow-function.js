// const sqaure = function (x) {
//     return x * x
// }

// const cube = (x) => {
//     return x * x * x
// }

// const sqaure = (x) => x * x

// console.log ('Sqaure of 3: ' + sqaure(3))

const someEvent = {
    name: 'Birthday Party',
    guestList: ['Ross', 'Joey', 'Mike'],
    
    /*
    printGuestList: function () {
        console.log(this.name)
    }
    ** this is going to work

    printGuestList: () => {
        console.log(this.name)
    }
    ** this is not going to work because arrow functions do not bind their own this value.
    */

    printGuestList() { // ES6 method definition syntax
       console.log(this.name)

       /*
       this.guestList.forEach(function (guest) {
           console.log(guest + ' ' + this.name)
       })
       ** guest will print the guestName but this.name will not print the someEvent name property.
       As standard functions have their own this binding.
       */

        this.guestList.forEach((guest) => {
          console.log(guest + ' ' + this.name)
        })
        // Arrow functions do not bind there own this value but access the this value in the context they are created. 
    }
}

someEvent.printGuestList()