// Random P.Inputs

const inp = Player.createPlayerInput(1, 0, 0, 0, false, false, false); 
//Jump straight up
Player.addInput(inp)

const inv = Player.openInventory();
Player.getPlayer().lookAt(0,90)

//TO DIRECT LOOK OF CAMERA
// FACE  (0,90) DIRECT DOWN //(0,-90) DIRECT UP

// INPUT move
// move-forward, yaw, jump, sprint
// jump is true

const inp = Player.createPlayerInput(1, 1, 0, 0, true, false, false);
Player.addInput(inp)

Client.waitTick(20);

// Client.waitTick(time) // Delay in ticks
// (1 tick = 1/20 sec)  (20 tick = 1 sec)  (1200 tick = 1 min)

inv.setSelectedHotbarSlotIndex(5);  // Select hotbar slot 6 (0-8)
Player.getPlayer().interact();  // RIGHT CLICK


////////////////////////////////////////////////////

// CREATE NEW PLAYER INPUT OBJECT
// USE EXAMPLES / TEMPLATE?

// BOOLEAN = True / False
// DOUBLE / FLOAT = Numbers with decimals, not integers (like 0.20 etc)
// Doubles are 64 bit thus more precise, Floats are 32 bit

.createPlayerInput(movementForward, movementSideways, yaw)
movementForward    double    
movementSideways    double    
yaw    double


.createPlayerInput(movementForward, yaw, jumping, sprinting)
movementForward    double    
yaw    double    
jumping    boolean    
sprinting    boolean


.createPlayerInput(movementForward, movementSideways, yaw, pitch, jumping, sneaking, sprinting)
movementForward    double    
movementSideways    double    
yaw    double    
pitch    double    
jumping    boolean    
sneaking    boolean    
sprinting    boolean


.createPlayerInputsFromCsv(csv) 1.4.0
Parses each row of CSV string into a PlayerInput. The capitalization of the header matters.
About the columns:

movementForward and movementSideways as a number
yaw and pitch as an absolute number
jumping, sneaking and sprinting have to be boolean
The separation must be a "," it's a csv...(but spaces don't matter)
Quoted values don't work
