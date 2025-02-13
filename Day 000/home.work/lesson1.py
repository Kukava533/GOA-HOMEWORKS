from turtle import *
width(5)
color("purple")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90) #this is just the square


forward(70)
color("yellow")
left(90)
forward(130)
right(90)
forward(60)
right(90)
forward(130)#door

penup()
goto(200, 200)
pendown()

color("black")
begin_fill()
right(140)
forward(160)
left(100)
forward(160)
end_fill()

penup()
goto(20, 130)
pendown()
right(230)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)

penup()
goto(140, 130)
pendown()
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)
right(90)
forward(40)




exitonclick()