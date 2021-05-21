const gamePlayer = require('../models/player')

exports.createNewPlayer = function  (req, res) {
  
    gamePlayer.create({
          title: req.body.title,
          name: req.body.name,
          age: req.body.age,
          ability: req.body.ability,
          level: req.body.level
      }, (err, gameplayer) => {
          if(err) {
              return res.status(500).json({message: err})
          } else {
              return res.status(200).json({message: "new player added successfully" ,gameplayer})
          }
      })
    }

    exports.fetchPlayers = (req, res) => {
        gamePlayer.find({}, (err, gameplayers) => {
            if(err) {
                return res.status(500).json({message: err})
            } else {
                return res.status(200).json({ gameplayers })
            }
        })
    }


    exports.fetchSinglePlayer = (req, res) => {
        gamePlayer.findById(req.params.id, (err, gamePlayer) => {
            if(err) {
                return res.status(500).json({message: err})
            } else if(!gamePlayer) {
                return res.status(404).json({message: "player not found"})
            } else {
                return res.status(200).json({ gamePlayer })
            }
        })
    }

    exports.updateSinglePlayer = (req, res) => {
        gamePlayer.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            name: req.body.name,
            level: req.body.level
        }, (err, updatedPlayer) => {
            if(err) {
                return res.status(500).json({message: err})
            } else if(!updatedPlayer) {
                return res.status(404).json({message: "player not found"})
            } else {
                updatedPlayer.save((err, newPlayer) => {
                    if(err) {
                        return res.status(500).json({message: err})
                    } else {
                        return res.status(200).json({message: "player updated", newPlayer})
                    }
                })
            }
        })
    }

    exports.deleteSinglePlayer =  (req, res) => {
        gamePlayer.findByIdAndDelete(req.params.id, (err, deletedPlayer) => {
            if(err) {
                return res.status(500).json({message: err})
            } else {
                return res.status(200).json({message: "Player deleted successfully", deletedPlayer})
            }
        })
    }