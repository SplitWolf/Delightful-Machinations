local farmX = 0
local farmY = 0
local farmXMax = 5
local farmYMax = 8 

local function modTurn(number, reverseBool) 
	if number % 2 == 0 then 
		if reverseBool then
		turtle.turnRight()
		else
		 turtle.turnLeft()
		end
	else
		if reverseBool then
		turtle.turnLeft()
		else
		 turtle.turnRight()
		end
	end
end

local function forward(x) {
	for i=0,x do
		turtle.forward()
	end
}
 
 
for i=1,farmXMax do
	for j=1,farmYMax do
		turtle.placeDown()
		forward(1) 
	 end 
	 modTurn(i)
	 forward(1)
	 modTurn(i)
	 forward(1)
end

forward(farmYMax-2)
modTurn(farmXMax)
forward(farmXMax-1)
modTurn(farmXMax)
