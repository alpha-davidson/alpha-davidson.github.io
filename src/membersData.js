const membersData = {
    currentMembers: {
      faculty: [
        "Michelle Kuchera",
        "Raghu Ramanujan"
      ],
      students: [
        "Ann Zhu",
        "Ben Wagner",
        "Carter Kniple",
        "Connor Cross"
      ]
    },
    alumni: {
    "Summer 2024": [
        "Alec Finch",
        "Ann Zhu",
        "Ben Votaw",
        "Ben Wagner",
        "Carter Kniple",
        "Derek Stephens",
        "Dixon Hudson",
        "Ella Zhu",
        "Enzo Guardado",
        "Gophes Baheti",
        "Jerry Ii",
        "Jessica Ajongbah",
        "Kyle Taft",
        "Murtaza Nikzad",
        "Pranjal",
        "Riana Doctor",
        "Silas Garrett",
        "William Zhu"
        ],
    "Fall 2021": [
        "Paul Choi",
        "Cade Dembski (Michigan State University)",
        "Sidney Knowles",
        "Kate Phillips (Mississippi State University)",
        "Brad Shook",
        "Luca Voichick"
        ],
      "Summer 2021": [
        "Anela Davis",
        "Cade Dembski (Michigan State University)",
        "Andrew Hoyle",
        "Sidney Knowles",
        "Braden Kronheim",
        "Tim Ladoceur (Michigan State University)",
        "Niya Ma",
        "Erika Navarro",
        "Mike Remezo",
        "Andrew Rice",
        "Brad Shook",
        "Aislinn Whalen"
      ],
      "Spring 2021": [
        "Khalil Adams",
        "John Blue",
        "Sebastian Charmot",
        "William Clark",
        "Chase Coley",
        "Oğuzhan Çölkesen",
        "Cade Dembski (Michigan State University)",
        "Andrew Hoyle",
        "Sidney Knowles",
        "Braden Kronheim",
        "Eleni Tsitinidi",
        "Annabel Winters-McCabe"
      ],
      "Fall 2020": [
        "John Blue",
        "Cade Dembski (Michigan State University)",
        "Andrew Hoyle",
        "Braden Kronheim",
        "Daniel Lammens",
        "Eleni Tsitinidi",
        "Annabel Winters-McCabe"
      ],
      "Summer 2020": [
        "Nade Bai",
        "Cade Dembski (Michigan State University)",
        "Andrew Hoyle",
        "Daniel Lammens",
        "Kate Roberts (Kalamazoo College)",
        "Rida Shahid",
        "Eleni Tsitinidi",
        "Annabel Winters-McCabe",
        "Lexie Weghorn (Univ. of Wisconsin LaCrosse)"
      ],
      "Spring 2020": [
        "John Blue",
        "Cade Dembski (Michigan State University)",
        "Meg Houck",
        "Andrew Hoyle",
        "Braden Kronheim",
        "Zach Nussbaum",
        "Eleni Tsitinidi",
        "Ted Yoo"
      ],
      "Fall 2019": [
        "John Blue",
        "Meg Houck",
        "Andrew Hoyle",
        "Braden Kronheim",
        "Zach Nussbaum"
      ],
      "Summer 2019": [
        "John Blue",
        "Jose Cruz (Central Piedmont Community College)",
        "Meg Houck",
        "Braden Kronheim",
        "Dulce Pacheco (Johnson C. Smith Univ.)",
        "Evan Pritchard",
        "Michael Robertson",
        "Eleni Tsitinidi"
      ],
      "Spring 2019": [
        "Christina Chen",
        "Braden Kronheim",
        "Gray Selby",
        "Ryan Strauss"
      ],
      "Fall 2018": [
        "Christina Chen",
        "Ryan Strauss"
      ],
      "Summer 2018": [
        "Christina Chen"
      ],
      "Spring 2018": [
        "Jack Taylor"
      ],
      "Fall 2017": [
        "Alex Karbo",
        "Jack Taylor"
      ],
      "Summer 2017": [
        "Alex Karbo",
        "Jack Taylor"
      ]
    },
    researchTopics: {
        // Current Members
        "Alec Finch": ["Track Counting", "Point Cloud Classification"],
        "Ann Zhu": ["Track Counting", "Point Cloud Classification"],
        "Ben Votaw": ["Track Counting", "Downstream Tasks"],
        "Ben Wagner": ["Track Counting", "Point Cloud Classification"],
        "Carter Kniple": ["Track Counting", "Point Cloud Geneartion"],
        "Derek Stephens": ["Point Cloud Generation", "Donwstream Tasks"],
        "Dixon Hudson": ["Downstream Tasks"],
        "Ella Zhu": ["Track Counting", "Downstream Tasks"],
        "Enzo Guardado": ["Point Cloud Generation", "Downstream Tasks"],
        "Gophes Baheti": ["Track Counting", "Point Cloud Generation"],
        "Jerry Ii": ["Track Counting"],
        "Jessica Ajongbah": ["Track Counting"],
        "Kyle Taft": ["Track Counting"],
        "Murtaza Nikzad": ["Track Counting", "Point Cloud Classificaiton", "Downstream Tasks"],
        "Pranjal": ["Track Counting"],
        "Riana Doctor": ["Track Counting", "Point Cloud Classificaiton", "Downstream Tasks"],
        "Silas Garrett": ["Point Cloud Generation", "Donwstream Tasks"],
        "William Zhu": ["Downstream Tasks"],
        
        // Alumni
        "Paul Choi": ["Point Cloud Generation", "Point Cloud Classification"],
        "Cade Dembski": ["Pix2Pix"],
        "Sidney Knowles": ["Point Cloud Generation", "Downstream Tasks"],
        "Kate Phillips": ["Point Cloud Classification", "Point Cloud Generation"],
        "Brad Shook": ["Downstream Tasks", "Point Cloud Classification"],
        "Luca Voichick": ["Downstream Tasks", "Point Cloud Classification"],
        "Anela Davis": ["Point Cloud Generation", "Downstream Tasks"],
        "Andrew Hoyle": ["Pix2Pix"],
        "Braden Kronheim": ["SUSY BNN", "HEP IQN"],
        "Tim Ladoceur": ["Point Cloud Generation"],
        "Niya Ma": ["Point Cloud Classification", "Point Cloud Generation"],
        "Erika Navarro": ["Point Cloud Occlusion", "Point Cloud Generation"],
        "Mike Remezo": ["Point Cloud Classification"],
        "Andrew Rice": ["Point Cloud Classification", "Point Cloud Occlusion"],
        "Aislinn Whalen": ["Downstream Tasks", "Point Cloud Generation"],
        "Khalil Adams": ["Point Cloud Occlusion", "Downstream Tasks"],
        "John Blue": ["Point Cloud Classification", "Downstream Tasks"],
        "Sebastian Charmot": ["Point Cloud Generation", "Downstream Tasks"],
        "William Clark": ["Point Cloud Classification", "Downstream Tasks"],
        "Chase Coley": ["Point Cloud Occlusion", "Point Cloud Classification"],
        "Oğuzhan Çölkesen": ["Downstream Tasks", "Point Cloud Occlusion"],
        "Eleni Tsitinidi": ["Point Cloud Generation", "Downstream Tasks"],
        "Annabel Winters-McCabe": ["Point Cloud Classification", "Downstream Tasks"],
        "Daniel Lammens": ["Point Cloud Occlusion", "Downstream Tasks"],
        "Nade Bai": ["Point Cloud Classification", "Downstream Tasks"],
        "Kate Roberts": ["Point Cloud Generation", "Downstream Tasks"],
        "Rida Shahid": ["Point Cloud Classification", "Downstream Tasks"],
        "Lexie Weghorn": ["Point Cloud Occlusion", "Point Cloud Classification"],
        "Meg Houck": ["Downstream Tasks", "Point Cloud Occlusion"],
        "Zach Nussbaum": ["Point Cloud Generation", "Downstream Tasks"],
        "Ted Yoo": ["Point Cloud Classification", "Downstream Tasks"],
        "Jose Cruz": ["Point Cloud Occlusion", "Downstream Tasks"],
        "Dulce Pacheco": ["Point Cloud Classification", "Downstream Tasks"],
        "Evan Pritchard": ["Point Cloud Generation", "Downstream Tasks"],
        "Michael Robertson": ["Point Cloud Classification", "Point Cloud Generation"],
        "Christina Chen": ["Point Cloud Occlusion", "Point Cloud Classification"],
        "Gray Selby": ["Downstream Tasks", "Point Cloud Occlusion"],
        "Ryan Strauss": ["Point Cloud Generation", "Downstream Tasks"],
        "Jack Taylor": ["Point Cloud Classification", "Downstream Tasks"],
        "Alex Karbo": ["SUSY BNN"]
    }    
  };
  
  export default membersData;
