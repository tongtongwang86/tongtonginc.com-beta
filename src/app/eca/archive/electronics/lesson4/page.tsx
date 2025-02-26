"use client";
import React, { useState } from 'react';
import * as UI from '@/components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';

const Lesson2 = () => {
  // Example of a large chunk of code, represented as a string
  const codeString = `
#include <Arduino.h>

#define LED 2

void setup() {
  
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
}

void loop() {
  
  digitalWrite(LED, HIGH);
  Serial.println("LED is on");
  delay(1000);
  digitalWrite(LED, LOW);
  Serial.println("LED is off");
  delay(1000);
}
  `;
  const codestring2 = `#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// OLED display dimensions
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64

// Create display object
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);

// Game settings
#define PADDLE_HEIGHT 16
#define PADDLE_WIDTH 2
#define BALL_SIZE 3

// Player paddles and ball positions
int paddle1Y = 24;
int paddle2Y = 24;
int ballX = SCREEN_WIDTH / 2;
int ballY = SCREEN_HEIGHT / 2;
int ballVelX = 1;
int ballVelY = 1;

// Ultrasonic sensor pins for Player 1
#define TRIG1_PIN 2
#define ECHO1_PIN 0

// Ultrasonic sensor pins for Player 2
#define TRIG2_PIN 12
#define ECHO2_PIN 14

void setup() {
  // Initialize display
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    while (true); // Halt if display not found
  }
  display.clearDisplay();

  // Initialize ultrasonic sensors
  pinMode(TRIG1_PIN, OUTPUT);
  pinMode(ECHO1_PIN, INPUT);
  pinMode(TRIG2_PIN, OUTPUT);
  pinMode(ECHO2_PIN, INPUT);
}

long getDistance(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Measure time for echo to return
  long duration = pulseIn(echoPin, HIGH);

  // Calculate distance in centimeters
  return duration * 0.034 / 2;
}

void loop() {
  // Read distances from ultrasonic sensors
  long distance1 = getDistance(TRIG1_PIN, ECHO1_PIN);
  long distance2 = getDistance(TRIG2_PIN, ECHO2_PIN);

  // Map distances to paddle positions
  paddle1Y = map(constrain(distance1, 5, 30), 5, 30, 0, SCREEN_HEIGHT - PADDLE_HEIGHT);
  paddle2Y = map(constrain(distance2, 5, 30), 5, 30, 0, SCREEN_HEIGHT - PADDLE_HEIGHT);

  // Update ball position
  ballX += ballVelX;
  ballY += ballVelY;

  // Ball collision with top and bottom
  if (ballY <= 0 || ballY >= SCREEN_HEIGHT - BALL_SIZE) {
    ballVelY = -ballVelY;
  }

  // Ball collision with paddles
  if (ballX <= PADDLE_WIDTH && ballY + BALL_SIZE >= paddle1Y && ballY <= paddle1Y + PADDLE_HEIGHT) {
    ballVelX = -ballVelX;
  } else if (ballX >= SCREEN_WIDTH - PADDLE_WIDTH - BALL_SIZE &&
             ballY + BALL_SIZE >= paddle2Y && ballY <= paddle2Y + PADDLE_HEIGHT) {
    ballVelX = -ballVelX;
  }

  // Reset ball if it goes out of bounds
  if (ballX <= 0 || ballX >= SCREEN_WIDTH) {
    ballX = SCREEN_WIDTH / 2;
    ballY = SCREEN_HEIGHT / 2;
    ballVelX = -ballVelX; // Switch direction
  }

  // Draw game
  display.clearDisplay();
  display.drawRect(0, paddle1Y, PADDLE_WIDTH, PADDLE_HEIGHT, SSD1306_WHITE);          // Paddle 1
  display.drawRect(SCREEN_WIDTH - PADDLE_WIDTH, paddle2Y, PADDLE_WIDTH, PADDLE_HEIGHT, SSD1306_WHITE); // Paddle 2
  display.fillRect(ballX, ballY, BALL_SIZE, BALL_SIZE, SSD1306_WHITE);               // Ball
  display.display();

  // Small delay for smoother gameplay
  delay(10);
}
`;



 const codestring3 = `\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
\`\`\`

 `;



  const [copied, setCopied] = useState(false);

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >



<div className='max-w-6xl px-6 w-full '>
<h1 className="text-5xl font-bold my-2 ">Setting up ESP8266 NodeMCU in Arduino IDE 2.0:</h1>
<UI.PDFViewer file="/assets/eca/electronics/esp8266setup.pdf" /> 
  
</div>

<div className='max-w-4xl px-6 w-full '>




<h1 className="text-4xl font-bold my-2 ">Testing out the installation:</h1>


<p className=' text-xl'> copy and paste the following into Arduino IDE:</p>


</div>



      <UI.CodeBlock code={codeString} language="cpp" />

      <div className='max-w-6xl px-6 w-full '>

      <UI.PDFViewer file="/assets/eca/electronics/esp8266uploadtest.pdf" />

      </div>
      
      <div className='max-w-4xl px-6 w-full  '>

 
<h1 className="text-4xl font-bold py-5 ">Project links:</h1>

    <Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="https://randomnerdtutorials.com/esp8266-0-96-inch-oled-display-with-arduino-ide/">OLED Display</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/">Ultrasonic sensor</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="https://randomnerdtutorials.com/esp8266-nodemcu-mpu-6050-accelerometer-gyroscope-arduino/">Gyroscope</Link>


<h1 className="text-5xl font-bold pt-44 ">Sample project codes:</h1>

<h1 className="text-4xl font-bold py-5 ">1.Ultrasonic sensor pong game:</h1>


<UI.CodeBlock code={codestring2} language="cpp" />

<h1 className="text-4xl font-bold py-5 ">2.Gyroscope Wifi Web server pong game:</h1>


      </div>

      <UI.PDFViewer file="/assets/eca/electronics/Code.pdf" />


    </UI.BodyContainer>




  );
};

export default Lesson2;
