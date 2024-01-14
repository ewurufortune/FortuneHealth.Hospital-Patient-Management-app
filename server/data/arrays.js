const mainLogs = [];
const participants = [
  // SWF
  {
    id: "8/21/2052",
    name: "Tommy Long",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 747-958
  - Email: tommylonginius44@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "2/7/2037",
    name: "Rodney Benson",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 948-0393
  - Email: benny_92@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "10/15/2049",
    name: "Samuel Gomez",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 849-7284
  - Email: Samuel_Gomez@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "3/24/2044",
    name: "John Huff",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "4/24/2094",
    name: "Shawn Lawson",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "3/7/2109",
    name: "Anthony Nguyen",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "9/24/2093",
    name: "Landon French",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "2/5/2063",
    name: "Marc Tate",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 14 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "3/27/2035",
    name: "Sophie West",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Female
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "5/15/2034",
    name: "Nettie Curry",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Female
Contact Information:
  - Phone: +1 (555) 848-0384
  - Email: CurryRice@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "5/31/2061",
    name: "Kyle Waters",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Female
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "10/1/2111",
    name: "Alfred Hubbard",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "3/11/2097",
    name: "Clarence Lowe",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 14 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "10/14/2055",
    name: "Liu Wong",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "7/8/2024",
    name: "Rosa Schmidt",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "10/16/2029",
    name: "Masked One",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "7/30/2034",
    name: "Nancy Clayton",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "8/14/2088",
    name: "Jason Floyd",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 848-9192
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 300 },
      { age: 45 },
      { bmi: 81 },
      { height: 140 },
      { weight: 125 },
      
    ],
  },
  {
    id: "11/26/2091",
    name: "Tillie McDaniel",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender:   Female
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email:  Tillie@email.com
Address: 132 Chokee Street, Chinatown, LA, 28463
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 25 },
      { bmi: 27 },
      { height: 140 },
      { weight: 140 },
      
    ],
  },
  {
    id: "11/2/2102",
    name: "Eddie Burns",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 74 },
      { bmi: 15 },
      { height: 80 },
      { weight: 46 },
      
    ],
  },
  {
    id: "12/1/2113",
    name: "Lucile Daniels",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 39 },
      { height: 110 },
      { weight: 300 },
      
    ],
  },

  //TCW
  {
    id: "4/16/2024",
    name: "Edward Mitchell",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 737-92982
  - Email: Eddie_Mike@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 86 },
      { age: 15 },
      { bmi: 25 },
      { height: 100 },
      { weight: 66 },
      
    ],
  },
  {
    id: "12/22/2033",
    name: "Lizzie Rogers",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "4/23/2093",
    name: "Linnie Pena",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "4/20/2078",
    name: "Chester Chandler",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "1/28/2057",
    name: "Luis Pittman",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "3/31/2065",
    name: "Rosetta Hampton",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "11/21/2036",
    name: "Steven Nichols",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "2/9/2026",
    name: "Elva Barker",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "2/24/2040",
    name: "Adrian Obrien",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio: `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "8/11/2069",
    name: "Russell Owens",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "11/20/2089",
    name: "Mittie Guzman",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "6/5/2081",
    name: "Lulu Rogers",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "10/31/2049",
    name: "Fanny Steele",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "9/1/2104",
    name: "Santiago El` Zoro",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "8/13/2065",
    name: "Nathaniel Dixon",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "11/21/2104",
    name: "Nellie Hicks",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "3/18/2040",
    name: "Susan Martinez",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "10/17/2104",
    name: "Phoebe Ferguson",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
  {
    id: "12/25/2048",
    name: "Hallie Andrews",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },

  {
    id: "4/9/2047",
    name: "Catherine Newton",
    isActive: true,
    image: "https://i.redd.it/bwciyi6pd4rb1.png",
    bio:  `
Patient Bio:

Date of Birth: January 15, 1980
Gender: Male
Contact Information:
  - Phone: +1 (555) 123-4567
  - Email: john.doe@email.com
Address: 123 Main Street, Anytown, CA, 12345
`,
    stats: [
      { relevance: 1 },
      { bloodGlucoseLevels: 85 },
      { age: 35 },
      { bmi: 21 },
      { height: 170 },
      { weight: 66 },
      
    ],
  },
];
const factions = [
  {
    name: "The Shield",
    relevance: 0,
    isActive: true,
    participants: ["7/8/2024"],
  },
  { name: "nWo", relevance: 0, isActive: true, participants: ["7/8/2024"] },
  {
    name: "Judgement Day",
    relevance: 0,
    isActive: true,
    participants: ["7/8/2024"],
  },
];

const categories = [
  {
    id: 8273735,
    name: "General Ward",
    type: "Ward",
    exclusive: true,
    participants: [
      "11/26/2091",
      "11/2/2102",
      "12/1/2113",
      "4/16/2024",
      "12/22/2033",
      "4/23/2093",
      "4/20/2078",
      "1/28/2057",
      "3/31/2065",
      "11/21/2036",
      "2/9/2026",
      "2/24/2040",
      "8/11/2069",
      "11/20/2089",
      "6/5/2081",
      "10/31/2049",
      "9/1/2104",
      "8/13/2065",
      "11/21/2104",
      "3/18/2040",
    ],
    logs: [
      {
        description:
          ": This includes states like New York, New Jersey, Pennsylvania, Connecticut, and Massachusetts. It is known for its diverse culture, historic cities, and beautiful landscapes.",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 1,
    name: "Surgical",
    type: "Department",
    exclusive: true,
    participants: ["11/26/2091", "12/1/2113"],
    logs: [
      {
        description: "Savitar, decides to go to war",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 2,
    name: "Emergency",
    type: "Department",
    exclusive: true,
    participants: ["8/14/2088", "10/14/2055"],
    logs: [
      {
        description: "Savitar, decides to go to war",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 3,
    name: "Pediatrics",
    type: "Department",
    exclusive: true,
    participants: ["7/8/2024", "8/14/2088", "10/16/2029"],
    logs: [
      {
        description: "There is a virus on the lose",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 32131212,
    name: "Radiology",
    type: "Department",
    exclusive: true,
    participants: ["7/8/2024", "10/16/2029"],
    logs: [
      {
        description: "There is a virus on the lose",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 123123,
    name: "Intensive Care Unit (ICU)",
    type: "Ward",
    exclusive: true,
    participants: [
      "8/21/2052",
      "2/7/2037",
      "10/15/2049",
      "3/24/2044",
      "4/24/2094",
      "3/7/2109",
      "9/24/2093",
      "2/5/2063",
      "3/27/2035",
      "5/15/2034",
      "5/31/2061",
      "10/1/2111",
      "3/11/2097",
      "10/14/2055",
      "7/8/2024",
      "10/16/2029",
      "7/30/2034",
      "8/14/2088",
      "11/26/2091",
      "11/2/2102",
      "12/1/2113",
    ],
    logs: [
      {
        description:
          " States like Illinois, Ohio, Michigan, Wisconsin, and Minnesota are part of the Midwest. It is often referred to as the 'Heartland' of America and is known for its agricultural industry and friendly communities.",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 12342,
    name: "Maternity Ward",
    type: "Ward",
    exclusive: true,
    participants: [
      "8/21/2052",
      "2/7/2037",
      "10/15/2049",
      "3/24/2044",
      "4/24/2094",
      "3/7/2109",
      "9/24/2093",
      "2/5/2063",
      
    ],
    logs: [
      {
        description:
          " States like Illinois, Ohio, Michigan, Wisconsin, and Minnesota are part of the Midwest. It is often referred to as the 'Heartland' of America and is known for its agricultural industry and friendly communities.",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },
  {
    id: 2865432,
    name: "Psychiatric Unit",
    type: "Ward",
    exclusive: true,
    participants: [
      "11/26/2091",
      "11/2/2102",
      "12/1/2113",
      "4/16/2024",
      "12/22/2033",
      "4/23/2093",
      "4/20/2078",
      "1/28/2057",
      "3/31/2065",
      "11/21/2036",
      "2/9/2026",
      "2/24/2040",
      "8/11/2069",
      "11/20/2089",
      "6/5/2081",
      "10/31/2049",
      "9/1/2104",
      "8/13/2065",
      "11/21/2104",
      "3/18/2040",
    ],
    logs: [
      {
        description:
          "These ",
        rating: 50,
        date: new Date(2023, 6, 10, 15, 30),
      },
    ],
  },

  {
    id: 673,
    name: "Undergoing Treatment",
    type: "Treatment",
    exclusive: true,
    participants: [
      "8/21/2052",
      "2/7/2037",
      "10/15/2049",
      "3/24/2044",
      "4/24/2094",
      "3/7/2109",
      "9/24/2093",
      "2/5/2063",
      "3/27/2035",
      "5/15/2034",
      "5/31/2061",
      "10/1/2111",
      "3/11/2097",
      "10/14/2055",
      "7/8/2024",
      "10/16/2029",
      "7/30/2034",
      "8/14/2088",
      "11/26/2091",
      "11/2/2102",
      "12/1/2113",
    ],
    logs: [
      {
        description: "These patients are undergoing treatments",
        rating: 50,
        date: new Date(1978, 7, 10, 15, 30),
      },
    ],
  },

  {
    id: 67390,
    name: "Completed Treatment",
    type: "Treatment",
    exclusive: true,
    participants: [
      "8/21/2052",
      "2/7/2037",
      "10/15/2049",
      "3/24/2044",
      "4/24/2094",
      "3/7/2109",
      "9/24/2093",
      "2/5/2063",
      "3/27/2035",
      "5/15/2034",
      "5/31/2061",
    ],
    logs: [
      {
        description: "These patients have completed treatment",
        rating: 50,
        date: new Date(1978, 7, 10, 15, 30),
      },
    ],
  },{
    id: 78755,
    name: "Scheduled for Surgery",
    type: "Treatment",
    exclusive: true,
    participants: [
      "8/21/2052",
      "2/7/2037",
      "10/15/2049",
      "3/24/2044",
      "4/24/2094",
      "3/7/2109",
      "9/24/2093",
      "2/5/2063",
      "3/27/2035",
      "5/15/2034",
      "5/31/2061",
      "10/1/2111",
      "3/11/2097",
      "10/14/2055",
      "7/8/2024",
      "10/16/2029",
      "7/30/2034",
      "8/14/2088",
      "11/26/2091",
      "11/2/2102",
      "12/1/2113",
    ],
    logs: [
      {
        description: "These Patients are scheduled for surgery",
        rating: 50,
        date: new Date(1978, 7, 10, 15, 30),
      },
    ],
  },
];

const randomEvents = [];

const relationships = [
  {
    id: 1,
    name: "Mother - Daughter",
    participants: ["3/7/2109", "12/1/2113"],
    frequency: "week",
    relationshipStrength: 2,
    relationshipStrengthText: "Neutral",
  },
  {
    id: 1,
    name: "Father - Son",
    participants: ["10/15/2049", "3/24/2044"],
    frequency: "week",
    relationshipStrength: -3,
    relationshipStrengthText: "Neutral",
  },
  {
    id: 1,
    name: "Huband - Wife",
    participants: ["2/24/2040", "10/31/2049"],
    frequency: "week",
    relationshipStrength: -3,
    relationshipStrengthText: "Neutral",
  },
];
// {name, participants, frequency,relationshipStrength, relationshipStrengthText}
const recentEvents = [
  {
    id: "2bd6cb3d-c002-4717-b44f6-66c53ada8c74",
    eventTypeId: "1694197990275",
    title: "Welcome!",
    description:
      "Welcome To MediConnect\n\n This is where you will recieve notifications of events.",
  },

  {
    id: "2bd6cb3d-c002-4717-b44f6-66c53ada8c74",
    eventTypeId: "1694197990275",
    title: "A Note on Participant Images",
    description:
      "Participant images are set by using image links from anywhere on the internet, \n this means that there is no limit to to what you can choose!\n You can change a patient image by clicking  the 'Profile-Image' property (next to the 'Name' property) of the participant you want to change, delete the existing link and paste the image link of youre selection.\n\n ",
  },
];
const items = [
 
  {
    id: 3,
    name: "VIP Pass",
    style: "VIP Patient",
    holderId: ["4/16/2024"],
    holderStartDate: Date(2023, 6, 10, 15, 30),
    holderEndDate: "Present",
    pastHolders: [
      {
        holderId: 2,
        startDate: Date(2022, 6, 10, 15, 30),
        endDate: Date(2023, 6, 10, 15, 30),
      },
    ],
  },
];

const stats = [
  {
    id: 1,
    statName: "condition",
    label: "Critical",
    change: 5,
    bio: "",
  },
  {
    id: 2,
    statName: "condition",
    label: "Stable",
    change: -2,
    bio: "Patient shows signs of improvement.",
  },
  {
    id: 3,
    statName: "condition",
    label: "Serious",
    change: 3,
    bio: "Patient requires continuous monitoring.",
  },
  {
    id: 4,
    statName: "condition",
    label: "Recovering",
    change: -4,
    bio: "Patient is on the path to recovery.",
  },


];

const arcs = [ 
  {
  id: 1,
  title: "Blood Pressure Report",
  type: ["individual"],
  description: `
    Blood Pressure Report Template:

    Date of Report: [Insert Date]

  

    Blood Pressure Readings:
    - Systolic: [Insert Systolic Value] mmHg
    - Diastolic: [Insert Diastolic Value] mmHg

    Interpretation:
    [Insert interpretation and recommendations]

    Doctor's Comments:
    [Insert Doctor's Comments]
  `,
  numberOfParticipants: 1,
},
{
  id: 2,
  title: "Blood Test Report",
  type: ["individual"],
  description: `
    Blood Test Report Template:

    Date of Report: [Insert Date]


    Blood Test Results:
    - Hemoglobin: [Insert Hemoglobin Value] g/dL
    - White Blood Cell Count: [Insert WBC Count] /mcL
    - Platelet Count: [Insert Platelet Count] /mcL

    Interpretation:
    [Insert interpretation and recommendations]

    Doctor's Comments:
    [Insert Doctor's Comments]
  `,
  numberOfParticipants: 1,
},
{
  id: 3,
  title: "Cardiac Health Report",
  type: ["individual"],
  description: `
    Cardiac Health Report Template:

    Date of Report: [Insert Date]

    Cardiac Parameters:
    - Resting Heart Rate: [Insert Heart Rate] bpm
    - Cholesterol Level: [Insert Cholesterol Level] mg/dL
    - ECG Findings: [Insert ECG Results]

    Interpretation:
    [Insert interpretation and recommendations]

    Doctor's Comments:
    [Insert Doctor's Comments]
  `,
  numberOfParticipants: 1,
},
{
  id: 4,
  title: "Diabetes Management Report",
  type: ["individual"],
  description: `
    Diabetes Management Report Template:

    Date of Report: [Insert Date]

    Diabetes Parameters:
    - Blood Glucose Level (Fasting): [Insert Fasting Glucose Level] mg/dL
    - HbA1c Level: [Insert HbA1c Level] %
    - Medication Adherence: [Insert Adherence Status]

    Interpretation:
    [Insert interpretation and recommendations]

    Doctor's Comments:
    [Insert Doctor's Comments]
  `,
  numberOfParticipants: 1,
},
];
const statPerception = [  {
  statName: "bloodGlucoseLevels",
  top1: "Critical",
  top5Percentile: "High",
  top10Percentile: "Elevated",
  top20Percentile: "Normal",
  top40Percentile: "Normal",
  top80Percentile: "Normal",
  bottom20Percentile: "Low",
},
{
  statName: "age",
  top1: "Very Young",
  top5Percentile: "Young",
  top10Percentile: "Young",
  top20Percentile: "Average",
  top40Percentile: "Average",
  top80Percentile: "Average",
  bottom20Percentile: "Old",
},
{
  statName: "bmi",
  top1: "Obese",
  top5Percentile: "Overweight",
  top10Percentile: "Overweight",
  top20Percentile: "Normal",
  top40Percentile: "Normal",
  top80Percentile: "Normal",
  bottom20Percentile: "Underweight",
},
{
  statName: "height",
  top1: "Tall",
  top5Percentile: "Above Average",
  top10Percentile: "Above Average",
  top20Percentile: "Average",
  top40Percentile: "Average",
  top80Percentile: "Average",
  bottom20Percentile: "Short",
},
{
  statName: "weight",
  top1: "Obese",
  top5Percentile: "Very Overweight",
  top10Percentile: "Overweight",
  top20Percentile: "Slightly Overweight",
  top40Percentile: "Normal Weight",
  top80Percentile: "Underweight",
  bottom20Percentile: "Very Underweight",
},
];
// const date = new Date(2023, 6, 10, 15, 30);
const date = new Date();

export {
  mainLogs,
  participants,
  factions,
  date,
  categories,
  items,
  stats,
  randomEvents,
  relationships,
  recentEvents,
  arcs,
  statPerception,
};
