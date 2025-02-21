const fs = require('fs/promises');

async function countWords() {
  const data = await fs.readFile('./words.txt', 'utf-8');
  const words = data.split(/\s+/);
  console.log(`Word count: ${words.length}`);
}

async function sumNumbers() {
  const data = await fs.readFile('./numbers.txt', 'utf-8');
  const nums = data.split(/\s+/);
  const sum = nums.reduce((acc, num) => acc + Number(num), 0);
  console.log(`Sum of numbers: ${sum}`);
}

async function generateResultFile() {
  const content = 'content: ?';
  await fs.writeFile('./result.txt', content);
  console.log(`result.txt created with content: ${content}`);
}

countWords();
sumNumbers();
generateResultFile();