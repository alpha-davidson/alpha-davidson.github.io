 const newsData = [
    {
        id: 1,
        title: "ALPhA presents at the Southeast Section of the APS Meeting",
        date: "2021-11-01",
        content: "Students were afforded their first opportunity to present in person in over two years at the Southeast Section of the American Physical Society meeting in Tallahassee, FL.",
        image: "images/Dirac.JPEG",
        tags: ["Conference", "Research"]
    },
    {
        id: 2,
        title: "ALPhA concludes a successful summer research program",
        date: "2021-08-01",
        content: "For the second year in a row, the ALPhA summer program was primarily virtual. Twelve students worked in collaboration with scientists at the Facility for Rare Isotope Beams, the Thomas Jefferson National Accelerator Facility, and CERN.",
        images: ["images/ALPhA_Lunch_2021.jpg", "images/ALPhA-Su2021.png"],
        tags: ["Research", "Summer Program"]
    },
    {
        id: 3,
        title: "ALPhA presents at the (virtual) 2020 American Physical Society Division of Nuclear Physics Conference",
        date: "2020-10-01",
        content: "Dr. Michelle Kuchera and five ALPhA members from three institutions presented their research at the APS DNP conference, which is held annually. This year's conference was virtual, and although we all wished we could be together in New Orleans, ALPhA's work drew a lot of interest in the community.",
        image: "images/DNP2020_Landis.jpg",
        tags: ["Conference", "Research"]
    },
    {
        id: 4,
        title: "ALPhA summer research concludes",
        date: "2020-08-01",
        content: "It wasn't a normal summer for anyone, including ALPhA. ALPhA's summer research went entirely virtual, with 9 students from 4 institutions working from locations around the world in collaboration with two national laboratories.",
        image: "images/Summer2020_ALPhA.png",
        caption: "The last ALPhA group meeting of the summer.",
        tags: ["Research", "Summer Program"]
    },
    {
        id: 5,
        title: "ALPhA presents at the 2019 American Physical Society Division of Nuclear Physics Conference",
        date: "2019-10-01",
        content: "Dr. Michelle Kuchera and five ALPhA members presented their research at the DNP conference, which is held annually. The 2019 conference was held in Washington, DC.",
        images: [
            {image: "images/DNP2019_ALPhA.jpg", caption: "ALPhA students were accepted to present and participate in the Conference Experience for Undergraduates."},
            {image: "images/DNP2019_Tabor.jpg", caption: "ALPhA students chatting with Dr. Sam L. Tabor, Dr. Michelle P. Kuchera's undergraduate advisor, who was awarded the 2019 DNP Mentoring Award at the conference."}
        ],
        tags: ["Conference", "Research"]
    },
    {
        id: 6,
        title: "ALPhA travels to the Thomas Jefferson National Accelerator Facility to work with collaborators",
        date: "2019-07-01",
        content: "Dr. Michelle Kuchera and four ALPhA members traveled to Newport News, VA to work with collaborators at the Thomas Jefferson National Accelerator Facility (Jefferson Lab) and Old Dominion University (ODU).",
        images: [
            {image: "images/JLab_down.jpg", caption: "ALPhA on a tour of the Jefferson Lab experimental facilities."},
            {image: "images/JLab_collab.jpg", caption: "ALPhA and our Jefferson Lab and ODU collaborators."}
        ],
        tags: ["Research", "Collaboration"]
    },
    {
        id: 7,
        title: "ALPhA travels to the Facility for Rare Isotope Beams for Summer School and Collaboration",
        date: "2019-05-01",
        content: "Dr. Raghu Ramanujan and Dr. Michelle Kuchera taught at the Facility for Rare Isotope Beams (FRIB) Theory Alliance Summer School in East Lansing, Michigan. ALPhA members attended as teaching assistants and participants. The group also spent time working with collaborators.",
        images: [
            {image: "images/ALPhA_S800.jpg", caption: "ALPhA on a tour of the FRIB experimental facilities."},
            {image: "images/ML_SS2019_group.jpg", caption: "Students listen attentively to the summer school lectures. Graduate students and postdocs came from all over the U.S. and other countries to attend this school."}
        ],
        tags: ["Summer School", "Collaboration", "Research"]
    },
      {
        id: 8,
        title: "ALPhA releases three new publications",
        date: "2025-01-20",
        content: "ALPhA had a productive winter break with the release of three new publications, which can be found in the Publications tab of this website.",
        images: [
            {image: "images/pub1.png", caption: "Implicit quantile networks for emulation in jet physics, published in Machine Learning: Science and Technology."},
            {image: "images/pub2.png", caption: "Point-cloud based machine learning for classifying rare events in the Active-Target Time Projection Chamber, published in Nuclear Instruments and Methods in Physics Research Section A."}
        ],
        tags: ["Publication", "Research"]
    },
    {
        id: 9,
        title: "ALPhA research highlighted in Davidson's new Carnegie Research Designation",
        date: "2025-02-13",
        content: "Davidson College received the Carnegie Research Designation of Research Colleges and Universities. As written in a Davidson article: \"The new designation applies to institutions that average at least $2.5 million per year on research and aren’t in a larger R1 or R2 classification. Some 218 institutions, less than 1% of the nation’s colleges and universities, fall into the new RCU category.\" <a href=\"https://www.davidson.edu/news/2025/02/13/seeking-answers-and-cures-davidson-college-receives-new-carnegie-research-designation\" target=\"_blank\" rel=\"noopener\">Read the Davidson article</a>, which features ALPhA.",
        images: [
            {image: "images/ALPhA_Summit.jpg", caption: "ALPhA summer 2024 ice cream outing"},
            {image: "images/ALPhA_Ben_Andrew.jpg", caption: "VMC Symposium"}
        ],
        tags: ["Summer Research", "Davidson"]
    },
    {
        id: 10,
        title: "ALPhA students win three of four Davidson Computer Science awards",
        date: "2026-04-14",
        content: "Three ALPhA researchers were honored with 2025–26 awards from Davidson's Department of Mathematics and Computer Science, taking three of the department's four Computer Science awards. Kerem Atas received the Senior Computer Science Award \"for outstanding research in diffusion models for nuclear physics.\" Julia Holt and Hakan Yavuzkara each received the Sophomore Computer Science Award, recognizing Julia's \"research developing machine learning models for nuclear physics\" and Hakan's \"excellent research in transformers and foundation models for nuclear physics.\" Congratulations, Kerem, Julia, and Hakan!",
        images: [
            {image: "images/2026_CS_awards.jpg", caption: "Dr. Michelle Kuchera celebrating with award winners Hakan Yavuzkara, Julia Holt, and Kerem Atas."}
        ],
        tags: ["Awards", "Students"]
    },
    {
        id: 11,
        title: "Teaching machine learning for physics around the world",
        date: "2026-07-31",
        content: "Dr. Michelle Kuchera has been sharing ALPhA's expertise in machine learning for physics with students and researchers around the world. She lectured at the HEP Software Foundation–India Scientific Computing Workshops at the Variable Energy Cyclotron Centre in Kolkata (December 2024), IIT Guwahati (November 2025), and IIT Madras (January 2026). She also taught at the Computational and Data Science School for High Energy Physics at Princeton University (July 2026), and has lectured every summer since 2022 at MIT's Computational Physics School for Fusion Research.",
        images: [
            {image: "images/2025_IIT_Guwahati.jpg", caption: "Dr. Michelle Kuchera at IIT Guwahati for the HSF-India Scientific Computing Workshop, November 2025."}
        ],
        tags: ["Teaching", "Summer School"]
    },
    {
        id: 12,
        title: "Plenary talk on TPC foundation models at the IBS Conference on Exotic Nuclei",
        date: "2026-07-24",
        content: "Dr. Michelle Kuchera gave a plenary talk, \"The Potential for Cross-Detector Foundation Models: A Case Study with TPCs,\" at the Institute for Basic Science Conference on Exotic Nuclei in Daejeon, South Korea, presenting results from ALPhA students Hakan Yavuzkara and Liam Sieland. It is the latest in a series of plenary invitations for ALPhA's work on machine learning for nuclear physics, following \"Foundation Models for Physics Data: Progress, Potential, and Possible Pitfalls\" at the 2025 IAIFI Summer Workshop and \"New Opportunities for Machine Learning in Nuclear Science\" at the 2024 Fall Meeting of the APS Division of Nuclear Physics.",
        images: [
            {image: "images/2026_Daejeon_plenary.jpg", caption: "The IBS Conference on Exotic Nuclei, July 22–24, 2026, at the Institute for Basic Science in Daejeon, Korea."},
            {image: "images/2025_INPC_talk.jpg", caption: "Presenting ALPhA's TPC foundation model at the International Nuclear Physics Conference (INPC 2025) in Daejeon, May 2025. Photo: INPC 2025."}
        ],
        tags: ["Conference", "Research"]
    }
];


export default newsData;
