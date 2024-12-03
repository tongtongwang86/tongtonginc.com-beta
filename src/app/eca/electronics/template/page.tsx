import React from 'react';
import * as UI from '@/components';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Lesson2 = () => {

  // Example of a large chunk of code, represented as a string
  const codeString = `char board[3][3] = {
  {'1', '2', '3'},
  {'4', '5', '6'},
  {'7', '8', '9'}
};
char currentPlayer = 'X';

void setup() {
  Serial.begin(115200);
  printBoard();
  Serial.println("Welcome to Tic Tac Toe!");
  Serial.println("Player X goes first. Enter a number (1-9) to place your move.");
}

void loop() {
  if (Serial.available() > 0) {
    char input = Serial.read();
    if (isValidMove(input)) {
      makeMove(input);
      printBoard();
      if (checkWinner()) {
        Serial.print("Player ");
        Serial.print(currentPlayer);
        Serial.println(" wins!");
        resetGame();
      } else if (isBoardFull()) {
        Serial.println("It's a tie!");
        resetGame();
      } else {
        switchPlayer();
        Serial.print("Player ");
        Serial.print(currentPlayer);
        Serial.println(", it's your turn. Enter a number (1-9):");
      }
    } else {
      Serial.println("Invalid move. Try again:");
    }
  }
}

void printBoard() {
  Serial.println();
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      Serial.print(board[i][j]);
      if (j < 2) Serial.print(" | ");
    }
    Serial.println();
    if (i < 2) Serial.println("--+---+--");
  }
  Serial.println();
}

bool isValidMove(char input) {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == input) return true;
    }
  }
  return false;
}

void makeMove(char input) {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == input) {
        board[i][j] = currentPlayer;
        return;
      }
    }
  }
}

void switchPlayer() {
  currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
}

bool checkWinner() {
  // Check rows and columns
  for (int i = 0; i < 3; i++) {
    if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) return true;
    if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) return true;
  }
  // Check diagonals
  if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) return true;
  if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) return true;

  return false;
}

bool isBoardFull() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] != 'X' && board[i][j] != 'O') return false;
    }
  }
  return true;
}

void resetGame() {
  Serial.println("Game resetting...");
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      board[i][j] = '1' + (i * 3 + j);
    }
  }
  currentPlayer = 'X';
  printBoard();
  Serial.println("Player X goes first. Enter a number (1-9):");
}

  `;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Lesson 2 Resources</h1>
    <UI.TextContainer>
      <SyntaxHighlighter language="cpp" style={atomOneDark} showLineNumbers className ='rounded-2xl'>
        {codeString}
      </SyntaxHighlighter>
      </UI.TextContainer>

      <UI.PDFViewer file="/assets/eca/electronics/lesson2.pdf" />
    </div>
  );
};

export default Lesson2;
