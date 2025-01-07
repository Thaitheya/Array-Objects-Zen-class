const resume = {
    personal_information: {
      name: "Thaitheyasudan P K",
      contact: {
        phone: "+91-9952462594",
        email: "sudan25092007@gmail.com",
        linkedin: "https://www.linkedin.com/in/thaitheya-sudan-p-k-8b8176229/overlay/about-this-profile/"
      }
    },
    summary: {
      experience_with_bi_tool: {
        data_integration: "Integrated various data sources, including relational databases, flat files, and APIs, ensuring real-time data access for accurate reporting.",
        dashboard_development: "Designed and developed interactive dashboards for stakeholders to view KPIs, trends, and metrics.",
        data_modeling: "Created data models to transform raw data into meaningful insights.",
        user_training_support: "Conducted training sessions and provided ongoing support for effective BI tool utilization.",
        collaboration: "Worked with sales, marketing, and finance teams to tailor BI solutions."
      }
    },
    skills: {
      front_end_development: ["React JS", "Redux", "JavaScript", "TypeScript", "Bootstrap", "Materialize", "HTML", "CSS"],
      database: ["MongoDB", "MySQL", "Oracle", "Postgres", "MSSQL", "DataBricks"],
      soft_skills: ["Team Player", "Continuous Learning and Curiosity"],
      other_technical_skills: ["SQL", "Automation", "Machine Learning"]
    },
    professional_experience: [
      {
        company: "Chainsys Pvt Ltd",
        role: "Programmer",
        duration: "Mar 2022 - Sep 2022",
        details: [
          "Worked on diverse projects using JavaScript, HTML, and CSS.",
          "Assisted in coding, debugging, and testing applications.",
          "Participated in code reviews and collaborated with senior developers.",
          "Contributed to designing and implementing web application features to improve user experience."
        ]
      },
      {
        role: "QA Engineer",
        duration: "Mar 2022 - Present",
        details: [
          "Gained hands-on experience in software development.",
          "Worked with programming languages like JavaScript and Python.",
          "Enhanced problem-solving skills and version control system familiarity."
        ]
      }
    ],
    education: {
      college: "KLN College of Engineering, Madurai",
      degree: "B.E. Electronics and Communication",
      gpa: "7.2/10",
      coursework: ["Data Structures and Algorithms", "Machine Learning", "Excel Dashboards"]
    },
    certifications: [
      "SQL Advance Certification (Udemy)",
      "AWS Cloud Practitioner Essentials (Amazon)"
    ]
  };
   
  
  // Example: Using "for"
  console.log("Using 'for':");
  for (let i = 0; i < resume.certifications.length; i++) {
    console.log(`Certification ${i + 1}: ${resume.certifications[i]}`);
  }
  
  // Example: Using "for...in"
  console.log("\nUsing 'for...in':");
  for (const key in resume.skills) {
    console.log(`${key}: ${resume.skills[key].join(", ")}`);
  }
  
  // Example: Using "for...of"
  console.log("\nUsing 'for...of':");
  for (const experience of resume.professional_experience) {
    console.log(`Role: ${experience.role}`);
    console.log(`Duration: ${experience.duration}`);
    experience.details.forEach((detail, index) => {
      console.log(`  Detail ${index + 1}: ${detail}`);
    });
  }
  
  // Example: Using "forEach"
  console.log("\nUsing 'forEach':");
  resume.skills.front_end_development.forEach((skill, index) => {
    console.log(`Front-End Skill ${index + 1}: ${skill}`);
  });