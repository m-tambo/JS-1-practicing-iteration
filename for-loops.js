// Increment by 10
for (var i = 5; i <= 120; i = i + 10) {
	console.log("i:" i);
}

// Decrement by division
for (var i = 4096; i >= 1; i = i / 2) {
	console.log(i);
}

// Array iteration
var presidents = ["George Washington", 
"John Adams", 
"Thomas Jefferson", 
"James Madison", 
"James Monroe", 
"John Quincy Adams", 
"Andrew Jackson", 
"Martin Van Buren", 
"William H. Harrison", 
"John Tyler", 
"James K. Polk",
"Zachary Taylor", 
"Millard Fillmore", 
"Franklin Pierce", 
"James Buchanan", 
"Abraham Lincoln", 
"Andrew Johnson", 
"Ulysses S. Grant", 
"Rutherford B. Hayes", 
"James A. Garfield", 
"Chester A. Arthur", 
"Grover Cleveland", 
"Benjamin Harrison", 
"Grover Cleveland", 
"William McKinley", 
"Theodore Roosevelt", 
"William H. Taft", 
"Woodrow Wilson", 
"Warren G. Harding", 
"Calvin Coolidge", 
"Herbert Hoover", 
"Franklin D. Roosevelt", 
"Harry S. Truman", 
"Dwight D. Eisenhower", 
"John F. Kennedy", 
"Lyndon B. Johnson", 
"Richard M. Nixon", 
"Gerald R. Ford", 
"Jimmy Carter", 
"Ronald Reagan", 
"George H. W. Bush", 
"Bill Clinton", 
"George W. Bush", 
"Barack Hussein Obama"]

for (i = 0; i < presidents.length; i++) {
	console.log("President #" + (i + 1) + " was " + presidents[i]);
}

// Object iteration
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(prop)
}
