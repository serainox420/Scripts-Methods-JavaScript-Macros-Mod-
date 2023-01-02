// Death Event & example reactions

Chat.say("oof")
Client.waitTick(15) // Wait

// XYZ Module from Positions.js to log death coords

var X = Player.getPlayer().getX().toFixed(2)
var Y = Player.getPlayer().getY().toFixed(2)
var Z = Player.getPlayer().getZ().toFixed(2)
Chat.log("X: "+X)
Chat.log("Y: "+Y)
Chat.log("Z: "+Z)

// Chat.say(".b stop") - If used alongside Baritone
// World.playSoundFile("sound.wav", 1) - To play custom loud alert noise 
