/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name: 'won',
    friends: 4,
    messages: [
        'nice work',
        'excellent job',
        'beautiful places'
    ],
    postMessage: function (message) {
        this.messages.push(message);
    },
    deleteMessage: function (index) {
        this.messages.splice(index, 1);
    },
    addFriend: function () {
        this.friends++;

    },
    removeFriend: function () {
        this.friends--;
    },
};

