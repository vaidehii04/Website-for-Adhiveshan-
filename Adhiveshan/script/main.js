// scripts/main.js
window.onload = () => document.body.classList.add('loaded');

const quotes = [
  "Pramukh Swami Maharaj: 'In the joy of others lies our own.'",
  "Mahant Swami Maharaj: 'Live with unity, serve with humility, and worship with divinity.'",
  "Swaminarayan Bhagwan: 'Pray with faith, act with dharma.'",
  "Yogiji Maharaj: 'Serve selflessly, love boundlessly.'",
  "Aksharbrahma Gunatitanand Swami: 'Be steady in Satsang, ever joyful in seva.'"
];
document.getElementById('quoteBtn').onclick = () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('dailyQuote').innerText = q;
};
