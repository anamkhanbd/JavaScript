// let Hello = {
//     name : 'ANAM',
//     show : function(){
//         console.log('Hello'+' '+this.name);
//     },

// }
// Hello.show();



// let Persons = {
//     people: [
//         {
//             name : 'A H ANAM',
//             age  : 25,
//             interest : ['Gaming','Movie','Tour'],
//         },
//         {
//             name : 'Jiahd Sarker',
//             age  : 24,
//             interest : ['Football','Gaming','Eating']
//         },
//         {
//             name : 'Mithu Mia',
//             age  : 26,
//             interest : ['photography','videography','content Creator']
//         }
//     ],
//     show: function () {
//         this.people.forEach(el => {
//             console.log(el);
//         });
//     }
// };

// Persons.show(); // ✅ এখন ঠিকভাবে কাজ করবে


// make a object....
let Interest = {
    anam : ['Gaming','Tour','Eating'],
    mithu : ['photography','video graphy','content making'],
    jihad : ['Tour','farming','gardening'],

    showName : function(){
        this.anam.forEach(el => {
            console.log(el);
        });
    }
}

Interest.showName();
