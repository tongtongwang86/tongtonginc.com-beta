"use client";
import React, { useState } from 'react';
import * as UI from '@/components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Lesson2 = () => {
 
  const codeString1 = `// Initialize the Tic Tac Toe board with numbers representing the empty cells
char board[3][3] = {
  {'1', '2', '3'},  // Row 1: cells 1, 2, 3
  {'4', '5', '6'},  // Row 2: cells 4, 5, 6
  {'7', '8', '9'}   // Row 3: cells 7, 8, 9
};

char currentPlayer = 'X';  // Player X starts the game

// Setup function runs once when the board is initialized
void setup() {
  // Begin serial communication with a baud rate of 115200
  Serial.begin(115200);
  
  // Print the current state of the board
  printBoard();
  
  // Inform the user that the game has started and which player goes first
  Serial.println("Welcome to Tic Tac Toe!");
  Serial.println("Player X goes first. Enter a number (1-9) to place your move.");
}

// Main game loop
void loop() {
  // Check if data is available in the serial buffer
  if (Serial.available() > 0) {
    // Read the player input from the serial input (a number from 1-9)
    char input = Serial.read();
    
    // Validate if the move is valid (cell is not already occupied)
    if (isValidMove(input)) {
      // Make the move on the board for the current player
      makeMove(input);
      
      // Print the updated board after the move
      printBoard();
      
      // Check if the current player has won the game
      if (checkWinner()) {
        Serial.print("Player ");
        Serial.print(currentPlayer);
        Serial.println(" wins!");  // Announce the winner
        resetGame();  // Reset the game after a winner is found
      } 
      // Check if the board is full and it's a tie
      else if (isBoardFull()) {
        Serial.println("It's a tie!");  // Announce a tie
        resetGame();  // Reset the game after a tie
      } 
      else {
        // Switch to the other player and prompt them to make a move
        switchPlayer();
        Serial.print("Player ");
        Serial.print(currentPlayer);
        Serial.println(", it's your turn. Enter a number (1-9):");
      }
    } else {
      // If the move is invalid, ask the player to try again
      Serial.println("Invalid move. Try again:");
    }
  }
}

// Function to print the current state of the board to the serial monitor
void printBoard() {
  Serial.println();  // Print a blank line for better readability
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      Serial.print(board[i][j]);  // Print the current board cell
      if (j < 2) Serial.print(" | ");  // Print separator between cells
    }
    Serial.println();  // Move to the next line after each row
    if (i < 2) Serial.println("--+---+--");  // Print separator between rows
  }
  Serial.println();  // Blank line after printing the board
}

// Function to check if the player's move is valid (the chosen cell is not already taken)
bool isValidMove(char input) {
  // Iterate through the board to find if the input corresponds to an empty cell
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == input) return true;  // Valid if the input matches the current cell
    }
  }
  return false;  // Return false if the input is invalid (cell already taken)
}

// Function to make a move for the current player
void makeMove(char input) {
  // Loop through the board to find the cell that corresponds to the input
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == input) {
        board[i][j] = currentPlayer;  // Replace the number with the current player's symbol
        return;
      }
    }
  }
}

// Function to switch players after each move
void switchPlayer() {
  // If current player is 'X', switch to 'O', otherwise switch to 'X'
  currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
}

// Function to check if the current player has won
bool checkWinner() {
  // Check rows and columns for a win
  for (int i = 0; i < 3; i++) {
    // Check if all cells in a row are the current player's symbol
    if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) return true;
    // Check if all cells in a column are the current player's symbol
    if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) return true;
  }
  
  // Check the two diagonals for a win
  if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) return true;
  if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) return true;

  return false;  // No winner found
}

// Function to check if the board is full (i.e., no more valid moves left)
bool isBoardFull() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] != 'X' && board[i][j] != 'O') return false;  // A cell still has a number
    }
  }
  return true;  // The board is full, no more valid moves
}

// Function to reset the game board and start a new game
void resetGame() {
  Serial.println("Game resetting...");

  // Reset the board to its initial state with numbers 1-9
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      board[i][j] = '1' + (i * 3 + j);  // Reinitialize board cells with numbers 1-9
    }
  }

  currentPlayer = 'X';  // Reset the current player to 'X' for the new game
  printBoard();  // Print the new, empty board
  Serial.println("Player X goes first. Enter a number (1-9):");  // Prompt Player X to start
}`;  // Your first code string

const codeString2 = `// Initialize the Tic Tac Toe board with numbers representing the empty cells
char board[3][3] = {
  {'1', '2', '3'},  // Row 1: cells 1, 2, 3
  {'4', '5', '6'},  // Row 2: cells 4, 5, 6
  {'7', '8', '9'}   // Row 3: cells 7, 8, 9
};

char currentPlayer = 'X';  // Player X starts the game

// Setup function runs once when the board is initialized
void setup() {
  // Begin serial communication with a baud rate of 115200
  Serial.begin(115200);
  
  // Print the current state of the board
  printBoard();
  
  // Inform the user that the game has started and which player goes first
  Serial.println("Welcome to Tic Tac Toe!");
  Serial.println("Player X goes first. Enter a number (1-9) to place your move.");
}

// Main game loop
void loop() {
  // Check if data is available in the serial buffer
  if (Serial.available() > 0) {
    // Read the player input from the serial input (a number from 1-9)
    char input = Serial.read();
    
    // Validate if the move is valid (cell is not already occupied)
    if (isValidMove(input)) {
      // Make the move on the board for the current player
      makeMove(input);
      
      // Print the updated board after the move
      printBoard();
      
      // Check if the current player has won the game
      if (checkWinner()) {
        Serial.print("Player ");
        Serial.print(currentPlayer);
        Serial.println(" wins!");  // Announce the winner
        resetGame();  // Reset the game after a winner is found
      } 
      // Check if the board is full and it's a tie
      else if (isBoardFull()) {
        Serial.println("It's a tie!");  // Announce a tie
        resetGame();  // Reset the game after a tie
      } 
      else {
        // Switch to the other player and prompt them to make a move
        switchPlayer();
        Serial.print("Player ");
        Serial.print(currentPlayer);
        Serial.println(", it's your turn. Enter a number (1-9):");
      }
    } else {
      // If the move is invalid, ask the player to try again
      Serial.println("Invalid move. Try again:");
    }
  }
}

// Function to print the current state of the board to the serial monitor
void printBoard() {
  Serial.println();  // Print a blank line for better readability
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      Serial.print(board[i][j]);  // Print the current board cell
      if (j < 2) Serial.print(" | ");  // Print separator between cells
    }
    Serial.println();  // Move to the next line after each row
    if (i < 2) Serial.println("--+---+--");  // Print separator between rows
  }
  Serial.println();  // Blank line after printing the board
}

// Function to check if the player's move is valid (the chosen cell is not already taken)
bool isValidMove(char input) {
  // Iterate through the board to find if the input corresponds to an empty cell
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == input) return true;  // Valid if the input matches the current cell
    }
  }
  return false;  // Return false if the input is invalid (cell already taken)
}

// Function to make a move for the current player
void makeMove(char input) {
  // Loop through the board to find the cell that corresponds to the input
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == input) {
        board[i][j] = currentPlayer;  // Replace the number with the current player's symbol
        return;
      }
    }
  }
}

// Function to switch players after each move
void switchPlayer() {
  // If current player is 'X', switch to 'O', otherwise switch to 'X'
  currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
}

// Function to check if the current player has won
bool checkWinner() {
  // Check rows and columns for a win
  for (int i = 0; i < 3; i++) {
    // Check if all cells in a row are the current player's symbol
    if (board[i][0] == currentPlayer && board[i][1] == currentPlayer && board[i][2] == currentPlayer) return true;
    // Check if all cells in a column are the current player's symbol
    if (board[0][i] == currentPlayer && board[1][i] == currentPlayer && board[2][i] == currentPlayer) return true;
  }
  
  // Check the two diagonals for a win
  if (board[0][0] == currentPlayer && board[1][1] == currentPlayer && board[2][2] == currentPlayer) return true;
  if (board[0][2] == currentPlayer && board[1][1] == currentPlayer && board[2][0] == currentPlayer) return true;

  return false;  // No winner found
}

// Function to check if the board is full (i.e., no more valid moves left)
bool isBoardFull() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] != 'X' && board[i][j] != 'O') return false;  // A cell still has a number
    }
  }
  return true;  // The board is full, no more valid moves
}

// Function to reset the game board and start a new game
void resetGame() {
  Serial.println("Game resetting...");

  // Reset the board to its initial state with numbers 1-9
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      board[i][j] = '1' + (i * 3 + j);  // Reinitialize board cells with numbers 1-9
    }
  }

  currentPlayer = 'X';  // Reset the current player to 'X' for the new game
  printBoard();  // Print the new, empty board
  Serial.println("Player X goes first. Enter a number (1-9):");  // Prompt Player X to start
}`;  // Your first code string


  const [copied, setCopied] = useState(false);

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      <UI.CodeBlock code={codeString1} language="cpp" />
      <UI.CodeBlock code={codeString2} language="cpp" />

      
      <UI.PDFViewer file="/assets/eca/electronics/ArduinoCheatSheet.pdf" />


    </UI.BodyContainer>
  );
};

export default Lesson2;
