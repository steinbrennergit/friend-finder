function Person(name) {
    this.name = name;
    this.photo = "http://via.placeholder.com/150x150";
    this.scores = [];
}

function generateAnswers(person) {
    for (let i = 0; i < 10; i++) {
        let answer = Math.floor(Math.random() * 5) + 1;
        person.scores.push(answer);
    }
}

var people = [];
var names = ['Tucker', 'Jeff', 'Avonlea', 'Chris', 'Gehrig', 'Noah', 'Blane', 'Steven', 'Andrew', 'Kevin', 'Carol', 'Lizzy', 'Leah', 'Dominic', 'Matt'];
names.forEach((name) => {
    let add = new Person(name);
    generateAnswers(add);
    people.push(add);
});

module.exports = people;