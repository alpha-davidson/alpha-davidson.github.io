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
        "Ellis Sriram",
        "Nate Reed"
      ]
    },
    alumni: {
    "Spring 2025": [
        "Ann Zhu",
        "Ben Wagner",
        "Carter Kniple",
        "Ellis Sriram",
        "Nate Reed"
        ], 
    "Fall 2024": [
        "Ann Zhu",
        "Ben Wagner",
        "Carter Kniple",
        "Connor Cross"
        ],
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
        "Cade Dembski",
        "Sidney Knowles",
        "Kate Phillips",
        "Brad Shook",
        "Luca Voichick"
        ],
      "Summer 2021": [
        "Anela Davis",
        "Cade Dembski",
        "Andrew Hoyle",
        "Sidney Knowles",
        "Braden Kronheim",
        "Tim Ladoceur",
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
        "Cade Dembski",
        "Andrew Hoyle",
        "Sidney Knowles",
        "Braden Kronheim",
        "Eleni Tsitinidi",
        "Annabel Winters-McCabe",
        "Robert Solli"
      ],
      "Fall 2020": [
        "John Blue",
        "Cade Dembski",
        "Andrew Hoyle",
        "Braden Kronheim",
        "Daniel Lammens",
        "Eleni Tsitinidi",
        "Annabel Winters-McCabe",
        "Robert Solli"
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
        "Cade Dembski",
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
        "Jose Cruz",
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
        /*
            Tags:
            
            Labs: FRIB, CERN, MissS, JLab
            Experiments: ATTPC, SuN, OPPAC, SPiRIT, HallB, Beam
            ML: CNN, PointNet, Foundation, Diffusion, Sparse, Transformer, Pix2Pix, IQN, BNN
                GAN, MCMC
        */
        "Alec Finch": ["FRIB", "ATTPC", "PointNet"],
        "Ann Zhu": ["FRIB", "ATTPC", "Foundation"],
        "Ben Votaw": ["FRIB", "ATTPC", "Sparse"],
        "Ben Wagner": ["FRIB", "ATTPC", "Transformer"],
        "Carter Kniple": ["FRIB", "ATTPC", "PointNet"],
        "Derek Stephens": ["FRIB", "ATTPC"],
        "Dixon Hudson": ["FRIB", "ATTPC", "PointNet"],
        "Ella Zhu": ["FRIB", "ATTPC"],
        "Enzo Guardado": ["FRIB", "ATTPC"],
        "Gophes Baheti": ["FRIB", "ATTPC"],
        "Jerry Ii": ["FRIB", "ATTPC", "Diffusion"],
        "Jessica Ajongbah": ["FRIB", "ATTPC"],
        "Kyle Taft": ["FRIB", "SuN"],
        "Murtaza Nikzad": ["FRIB", "ATTPC"],
        "Pranjal": ["FRIB", "ATTPC", "PointNet"],
        "Riana Doctor": ["FRIB", "ATTPC"],
        "Silas Garrett": ["FRIB", "ATTPC"],
        "William Zhu": ["FRIB", "ATTPC"],
        
        // Alumni
        "Paul Choi": ["FRIB", "ATTPC"],
        "Cade Dembski": ["FRIB", "SuN"],
        "Sidney Knowles": ["FRIB", "ATTPC"],
        "Kate Phillips": ["MissS"],
        "Brad Shook": ["FRIB", "ATTPC"],
        "Luca Voichick":  ["FRIB", "ATTPC"],
        "Anela Davis":  ["FRIB", "ATTPC"],
        "Andrew Hoyle": ["JLab", "Pix2Pix"],
        "Braden Kronheim": ["CERN", "BNN", "IQN"],
        "Tim Ladoceur": ["FRIB", "SPiRIT"],
        "Niya Ma": ["FRIB", "ATTPC"],
        "Erika Navarro": ["JLab"],
        "Mike Remezo": ["FRIB", "ATTPC"],
        "Andrew Rice": ["FRIB", "ATTPC", "PointNet"],
        "Aislinn Whalen": ["JLab"],
        "Khalil Adams": ["FRIB", "OPPAC"],
        "John Blue": ["CERN","FRIB","GAN"],
        "Sebastian Charmot": ["FRIB","Beam"],
        "William Clark": ["SPIRIT"],
        "Chase Coley": ["FRIB", "OPPAC"],
        "Oğuzhan Çölkesen": ["FRIB"],
        "Eleni Tsitinidi": ["JLab", "MDN"],
        "Annabel Winters-McCabe": ["FRIB", "OPPAC"],
        "Daniel Lammens": ["FRIB"],
        "Nade Bai": ["JLab"],
        "Kate Roberts": ["FRIB", "OPPAC"],
        "Rida Shahid": ["JLab"],
        "Lexie Weghorn": ["FRIB", "OPPAC"],
        "Meg Houck": ["JLab", "MDN"],
        "Zach Nussbaum": ["FRIB", "ATTPC"],
        "Ted Yoo": ["FRIB","ATTPC"],
        "Jose Cruz": ["JLab", "HallB"],
        "Dulce Pacheco": ["FRIB"],
        "Evan Pritchard": ["JLab"],
        "Michael Robertson": ["JLab"],
        "Christina Chen": ["FRIB","MCMC"],
        "Gray Selby": ["ATTPC"],
        "Ryan Strauss": ["FRIB", "ATTPC", "GAN"],
        "Jack Taylor": ["FRIB", "ATTPC", "CNN"],
        "Alex Karbo": ["CERN", "BNN"]
    },    

memberLinks: {
  "Michelle Kuchera": "https://www.linkedin.com/in/michellekuchera/",
  "Raghu Ramanujan": "https://www.linkedin.com/in/raghuramanujan/",
  "Ann Zhu": "https://www.linkedin.com/in/ann-zhuqianhui/",
  "Ben Votaw": "https://www.linkedin.com/in/ben-votaw-7241b4237/",
    "Ryan Strauss": "https://www.linkedin.com/in/rystrauss/",
    "Dylan Sparks": "https://www.linkedin.com/in/dylan-sparks-804462201/",
    "Murtaza Nikzad": "https://www.linkedin.com/in/murtaza-nikzad-877722158/",
    "Gray Selby": "https://www.linkedin.com/in/grayselby/",
    "Meg Houck": "https://www.linkedin.com/in/meg-houck-0a4b05170/",
    "Ethan Cramer": "https://www.linkedin.com/in/ethan-cramer-3204991a2/",
    "Robert Solli": "https://www.linkedin.com/in/robert-solli/",
    "Jose Cruz": "https://www.linkedin.com/in/jose-cruz-5a2ab2154/",
    "Evan Pritchard": "https://www.linkedin.com/in/evanmpritchard/",
    "Eleni Tsitinidi": "https://www.linkedin.com/in/eleni-tsit/",
    "Michael Robertson": "https://www.linkedin.com/in/michael-robertson121/",
    "Andrew Jones": "https://www.linkedin.com/in/andrew-jones-499360227/",
    "Yumna Ahmed": "https://www.linkedin.com/in/yumna-fatima-ahmed/"
  // Add more as available
}
  };  
export default membersData;
