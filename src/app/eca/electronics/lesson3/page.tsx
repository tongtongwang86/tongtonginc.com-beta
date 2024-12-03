"use client";
import React, { useState } from 'react';
import * as UI from '@/components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Lesson2 = () => {
  // Example of a large chunk of code, represented as a string
  const codeString = `// Initialize the Tic Tac Toe board with numbers representing the empty cells
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
}
  `;


  const codeString2 = `
// Include the Servo library to control servo motors:
#include "Servo.h"

// Create a servo object to control the servo motor:
Servo myservo;

// Define the pin connected to the servo signal wire:
#define servoPin 9

void setup() {
  // Initialize the servo on the specified pin:
  myservo.attach(servoPin);  // This attaches the servo motor to the Arduino pin (servoPin) so it can be controlled.
}

void loop() {
  // Move the servo to 90 degrees (middle position):
  myservo.write(90);        // Tells the servo to rotate to the 90 degree position.
  delay(1000);              // Wait for 1 second to allow the servo to reach 90 degrees.

  // Move the servo to 180 degrees (maximum position):
  myservo.write(180);       // Tells the servo to rotate to the 180 degree position.
  delay(1000);              // Wait for 1 second.

  // Move the servo to 0 degrees (minimum position):
  myservo.write(0);         // Tells the servo to rotate to the 0 degree position.
  delay(1000);              // Wait for 1 second.

  // Sweep the servo from 0 to 180 degrees:
  // This loop gradually increases the angle from 0 to 180 degrees.
  for (int angle = 0; angle <= 180; angle += 1) {
    myservo.write(angle);   // Tells the servo to move to the current angle.
    delay(15);              // Small delay to allow the servo to reach each position.
  }

  // Sweep the servo back from 180 to 0 degrees:
  // This loop gradually decreases the angle from 180 to 0 degrees.
  for (int angle = 180; angle >= 0; angle -= 1) {
    myservo.write(angle);   // Tells the servo to move to the current angle.
    delay(15);              // Small delay to allow the servo to reach each position.
  }

  // Wait for 1 second before repeating the sweep:
  delay(1000);              // Wait for 1 second before starting the next loop.
}
  `;

  const [copied, setCopied] = useState(false);

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      {/* Add the pulsating CSS animation directly into the component */}
      <style jsx>{`
        @keyframes pulsate {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }

        .pulsating {
          animation: pulsate 3s ease-in-out infinite;
        }
      `}</style>

      <h1 className="text-6xl font-bold mb-8 center"> --- Lesson 3 Resource --- </h1>

      <h1 className="text-5xl font-bold mb-8 center">1. Arduino cheat sheet:</h1>

      <UI.PDFViewer file="/assets/eca/electronics/ArduinoCheatSheet.pdf" />

      <h1 className="text-5xl font-bold mb-8 center pt-10">2. Tick tack toe game:</h1>

      <UI.HStack>
        <a
          className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl pulsating"
          href="https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-monitor/"
          target="_blank"
        >
          Serial Monitor Guide
        </a>

        <a
          className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl pulsating"
          href="https://www.arduino.cc/en/software"
          target="_blank"
        >
          Arduino IDE Download
        </a>
      </UI.HStack>

      <div className="w-4/6">
        <SyntaxHighlighter language="cpp" style={atomOneDark} showLineNumbers wrapLongLines className="rounded-2xl">
          {codeString}
        </SyntaxHighlighter>

        <CopyToClipboard text={codeString} onCopy={() => setCopied(true)}>
          <button className="px-4 py-2 bg-[#727272] text-white rounded-xl hover:bg-blue-600 transition z-10">
            {copied ? <span className="text-green-300">Copied!</span> : 'Copy Code'}
          </button>
        </CopyToClipboard>
      </div>

      <h1 className="text-5xl font-bold mb-8 center">2. Controlling Servo:</h1>

      <UI.HStack>
        <a
          className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl pulsating"
          href="https://www.makerguides.com/servo-arduino-tutorial/"
          target="_blank"
        >
          Servo wiring guide
        </a>
      </UI.HStack>

      <div className="w-4/6">
        <SyntaxHighlighter language="cpp" style={atomOneDark} showLineNumbers wrapLongLines className="rounded-2xl">
          {codeString2}
        </SyntaxHighlighter>

        <CopyToClipboard text={codeString} onCopy={() => setCopied(true)}>
          <button className="px-4 py-2 bg-[#727272] text-white rounded-xl hover:bg-blue-600 transition z-10">
            {copied ? <span className="text-green-300">Copied!</span> : 'Copy Code'}
          </button>
        </CopyToClipboard>
      </div>
    </UI.BodyContainer>
  );
};

export default Lesson2;
