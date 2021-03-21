function gameObject() {
    return {
      home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black', 'White'],
        players: {
          'Alan Anderson': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          'Reggie Evans': {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          'Jason Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise', 'Purple'],
        players: {
          'Jeff Adrien': {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          }, 
          'Bismak Biyombo': {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          'DeSagna Diop': {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          'Ben Gordon': {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          'Brendan Haywood': {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    }
  }

const homePlayers = () => {
  return gameObject().home.players
}

const awayPlayers = () => {
  return gameObject().away.players
}

const allPlayers = () => {
  return Object.assign({}, homePlayers(), awayPlayers())
}

// * Build a function, `numPointsScored` that takes in an argument of a player's name and returns the number 
// of points scored for that player.

const numPointsScored = (playerName) => {
  return allPlayers()[playerName].points
}

// Build a function, `shoeSize`, that takes in an argument of a player's 
// name and returns the shoe size for that player.
const shoeSize = (playerName) => {
  return allPlayers()[playerName].shoe
}

// * Build a function, `teamColors`, that takes in an argument of the team name
//   and returns an array of that teams colors.
// const teamColors = (teamName) => {
//   return gameObject()[teamName].colors
// }

const teamColors = (teamName) => {
  if (gameObject().home.teamName === teamName) {
      return gameObject().home.colors
  } else {
      return gameObject().away.colors
  }
 }
 
// COME BACK TO THIS ONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  * Build a function, `teamNames`, that operates on the game object to return an
//   array of the team names.
const teamNames = () => {
  return [gameObject().home.teamName, gameObject().away.teamName]
 } 

// * Build a function, `playerNumbers`, that takes in an argument of a team name
//   and returns an array of the jersey number's for that team.
function playerNumbers(teamInput) {
  let game = gameObject()
  for (let gameKey in game) { // iterate through game keys (home, away)
      let teamObj = game[gameKey]
      let teamJerseyNumbersArray = [] // create an empty array for the jersey numbers
      if (teamObj.teamName === teamInput) { // check to see if the team name matches the function argument
          let playerObj = teamObj.players
          for (let playerKey in playerObj) { // iterate through the players in the matching team
              teamJerseyNumbersArray.push(playerObj[playerKey].number) // add each player's number to the new array
          }
      }
      return teamJerseyNumbersArray // return the new array
  } 
}

// * Build a function, `playerStats`, that takes in an argument of a player's name
//   and returns a object of that player's stats.

const playerStats = (player) => {
  return allPlayers()[player]
 }

 /// * Build a function, `bigShoeRebounds`, that will return the number of rebounds
//   associated with the player that has the largest shoe size. Break this one
//   down into steps:
//   * First, find the player with the largest shoe size
//   * Then, return that player's number of rebounds
//   * Remember to think about return values here. Use `debugger` to drop into
//     your function and understand what it is returning and why.
function bigShoeRebounds() {
  let game = gameObject()
  for (let gameKey in game) { // iterate through game keys (home, away)
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
          let playerObj = teamObj.players
          let largestShoe = 0
          let numberReboundsLargestShoe = 0
          for (let playerKey in playerObj) { // iterate through player names
              if (playerObj[playerKey].shoe > largestShoe) { // check to see if player's shoe size is the largest so far
                  largestShoe = playerObj[playerKey].shoe // if it is, update the largest shoe size
                  numberReboundsLargestShoe = playerObj[playerKey].rebounds // and updeat the number of rebounds
              }
          }
          return numberReboundsLargestShoe // return the number of rebounds for the player with the largest shoe size
      }
  }
}

// 1. Which player has the most points? Call the function `mostPointsScored`.
 
const mostPointsScored = () => {
  const players = allPlayers()
  let mostPoints = 0
  let highestScoringPlayer = ''
  for (let player in players) {
      if (playerStats(player).points > mostPoints || mostPoints === 0) {
          highestScoringPlayer = player
          mostPoints = playerStats(player).points
      }
  }
  return highestScoringPlayer;
 }

 