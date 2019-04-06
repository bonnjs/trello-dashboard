var axios = require('axios');

module.exports = {
  fetchAllBoards: function(userId) {
    return axios
      .get('https://api.trello.com/1/search', {
        params: {
          key: process.env.REACT_APP_TRELLO_API,
          token: process.env.REACT_APP_TRELLO_TOKEN,
          query: 'due:day'
        }
      })
      .then(function(response) {
        console.log(response.data);
        return response.data;
      });
  },

  fetchMembersOfBoard: function(boardId) {
    return axios
      .get(
        `https://api.trello.com/1/boards/id/members?key=${
          process.env.REACT_APP_TRELLO_API
        }&token=${process.env.REACT_APP_TRELLO_TOKEN}`
      )
      .then(function(response) {
        return response.data;
      });
  }
};
