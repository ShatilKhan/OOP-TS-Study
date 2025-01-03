# OOP-TS-Study
Study on Object Oriented Programming with TypeScript


## What's Object-oriented-programming?
Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). There are 6 pillars of OOP, includes:

1. Class
2. Objects
3. Data Abstraction
4. Encapsulation
5. Inheritance
6. Polymorphism


We can use [TypeScript Playground](https://www.typescriptlang.org/play) to run the code. We can also use VS Code directly.

# Running TypeScript Code in Visual Studio Code

## Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your machine.

## Steps

1. **Install TypeScript**:
   Open the terminal in Visual Studio Code and run the following command to install TypeScript globally:
   ```sh
   npm install -g typescript 
   ```

2. **Check TypeScript Installation**:
   Verify that TypeScript is installed by running:

   ```sh
   tsc --version
   ```

3. **Create a `tsconfig.json` File**:
   In your project directory, create a `tsconfig.json` file to configure the TypeScript compiler. You can create it by running:

   ```sh
   tsc --init
   ```

4. **Compile the TypeScript File**:
   In the terminal, navigate to the directory containing your `.ts` file and run:

   ```sh
   tsc filename.ts
   ```
   This will compile your TypeScript file to JavaScript, creating a `filename.js` file.

5. **Run the Compiled JavaScript File**:
   In the terminal, run:

   ```sh
   node class.js
   ```
This will execute your code and you should see the output(console.log) in the terminal.