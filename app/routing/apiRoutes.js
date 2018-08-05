var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });

    app.post("/api/friends", (req, res) => {
        let vals = req.body.answerValues;
        let bestFriend = friends[0];
        let min = 4 * vals.length;
        friends.forEach((friend) => {
            let difference = 0;
            for (let i = 0; i < vals.length; i++) {
                let getDiff = [parseInt(vals[i]), parseInt(friend.scores[i])];
                getDiff = getDiff.sort((a, b) => b - a);
                difference += getDiff[0] - getDiff[1];
            }
            if (difference < min) {
                bestFriend = friend;
                min = difference;
            }
        });

        res.json(bestFriend);
    });

};