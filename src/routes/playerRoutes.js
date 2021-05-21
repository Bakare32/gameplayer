const express = require ("express");
const router = express.Router();
const playerCtrl = require('../controllers/playerControllers')




router.post("/gameplayer", playerCtrl.createNewPlayer )
  
  router.get("/gameplayer",  playerCtrl.fetchPlayers)
  
  router.get("/gameplayer/:id", playerCtrl.fetchSinglePlayer)
  
  
  router.put("/gameplayer/:id", playerCtrl.updateSinglePlayer )
  
  router.delete("/gameplayer/:id", playerCtrl.deleteSinglePlayer)


  module.exports = router;