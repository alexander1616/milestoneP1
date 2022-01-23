# NJIT-SD-03 Milestone Project: Planning

## Project Description

Duck Hunt Game:

The objective of the game is to stay alive and prevent the enemies from reaching the end point for as long as possible. Each round, the number of enemies will increase and stronger enemies will be added every 10 rounds. After 20 enemies reach the end point, the game will end. You are able to click and remove the "ducks" before they reach the end. Good luck!

## Game Logic

```
Enemies start from the left side of the screen and walk themselves to the right side of the screen.
Once an enemy reaches the edge of the screen, you are deducted 1 health.
The game ends when your health reaches 0.
Players are able to remove a duck by clicking on them.
The number of ducks increase every round, and there are an infinite number of rounds.
Any ducks that don't get removed will stay and be added onto the next round.
Ducks will be generated randomly from the top of the screen all the way to the bottom, but will always be generated from the left side of the screen and will always move towards the right side of the screen.
The game will track how many ducks you removed, and how many rounds you survive.
```

## Deliverables

### MVP Criteria

- Lose condition (Health reaches 0)
- Tracking ducks removed
- Tracking rounds played
- Ducks automatically walking from left to right
- Ducks will screen wrap when walking off screen to the right

### Post-MVP Plans

- I'd like to add in some blocks / obstacles to impede duck movement / obsctruct the walking path
- I'd like to create a maze the ducks have to walk through so I have more time to click all the ducks

## Project Planning

| Date | Goals |
| ---- | ----- |
| Sun. 01/23 | Create GitHub repository. Complete README.md. |
| Tue. 01/25 | Create index.html, javascript, gameboard, code an enemy     |
| Thu. 01/27 |      |
| Sun. 01/30 |      |
| Tue. 02/01 |      |
| Thu. 02/03 | Deploy to GitHub Pages. Submit completed project. Project presentations. |
