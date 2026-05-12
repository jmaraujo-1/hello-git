/**
 * Day 1 - Git Fundamentals
 * A simple program to demonstrate version control workflow.
 */

function greet(name: string): string {
  return `Hello, ${name}! Welcome to professional software engineering.`;
}

function calculateDaysRemaining(currentDay: number, totalDays: number = 30): number {
  if (currentDay < 1 || currentDay > totalDays) {
    throw new Error(`Day must be between 1 and ${totalDays}`);
  }
  return totalDays - currentDay;
}

// Main
const studentName = "Josu";
const currentDay = 1;

console.log(greet(studentName));
console.log(`Day ${currentDay} of 30`);
console.log(`${calculateDaysRemaining(currentDay)} days remaining`);
console.log("Let's build something great.");
console.log("--- Skills unlocked today: Git, Terminal, Professional Commits ---");
