function clearText() {
  document.getElementById("jobDescription").value = '';
  document.getElementById("output").innerText = '';
}

function submitText() {
  const jobDescription = document.getElementById("jobDescription").value;
  const outputElement = document.getElementById("output");

  const template = `Please help me craft a three-paragraph cover letter for a financial analyst position. In the first paragraph, I want to introduce myself, state what I'm seeking, and briefly touch on my core beliefs and values. In the second paragraph, I'd like to transition into discussing my qualifications and skills, aligning them with the job description. In the third paragraph, I want to explain why I am specifically interested in working for this company and conclude the letter effectively. Let's make this cover letter polished and reflective of Harvard-level professionalism. I want you to base it on the following job description and resume:\n\n
  Resume:\n
  Kellan Campbell\n
  432 West Gorham St. | Madison, WI 53703 | kdcampbell2@wisc.edu | (608) 515-3570\n\n
  Education\n
  UNIVERSITY OF WISCONSIN-MADISON\n
  Madison, WI\n
  Bachelor of Science, Economics, Neurobiology\n
  September 2019 – May 2023\n
  Cumulative GPA: 3.633\n
  Honors: Dean’s List\n\n
  Skills\n
  Technical: R, Python, SQL, Stata, Excel, PowerPoint, Word, Outlook, Bash, LibreOffice, Financial Analysis, Budgeting, Data Visualization, Reporting, Data Analysis, Forecasting, Risk Analysis, Valuation, Financial Modeling\n
  Soft Skills: Effective Communication, Team Collaboration, Problem-solving, Analytical Thinking, Adaptability, Time Management, Project Planning, Attention to Detail, Leadership, Critical Thinking, Decision Making, Strategic Planning\n\n
  Experience\n\n
  UNIVERSITY OF WISCONSIN DEPARTMENT OF NEUROLOGY\n
  Madison, WI\n
  Research Assistant, Gallagher Lab\n
  January 2021 – July 2023\n
  · Utilized specialized analytical tools and techniques to map intricate correlations between cognitive metrics, motor evaluations, and various neuroimaging parameters, ensuring rigorous data interpretation and synthesis\n
  · Led an in-depth evaluation of neuroimaging biomarkers associated with Parkinson's disease, Alzheimer's disease, and other related conditions, emphasizing precision in managing and interpreting complex datasets.\n
  · Engaged in close collaboration with an interdisciplinary team of neurologists, radiologists, and data scientists, playing a pivotal role in advancing the lab's research initiatives\n
  · Developed and fine-tuned data visualization techniques to present complex brain imaging results in a comprehensible format, aiding in the communication of intricate findings to varied stakeholders\n
  · Participated in regular research review sessions, critiquing and refining methodologies to ensure optimal accuracy and reliability in data collection and interpretation\n\n
  EXACT SCIENCES\n
  Madison, WI\n
  Operations Analyst Intern\n
  May 2021 – August 2021\n
  · Successfully contributed to streamlining business operations by collaborating with cross-functional teams and conducting thorough analysis of key operational measures\n
  · Spearheaded the integration of advanced financial modeling techniques with operational analytics, achieving optimized resource allocation and strategic business enhancements.\n
  · Demonstrated proficiency in Excel-based financial modeling, amalgamating Lean Six Sigma methodologies with financial insights to assess the ROI of prospective initiatives, ensuring robust budget adherence and project viability.\n
  · Conducted an in-depth quantitative analysis of over 15,000 inbound calls, leveraging complex datasets to pinpoint cost-saving avenues and elevate the patient-provider interaction paradigm.\n
  · Translated intricate operational and financial data into clear, actionable insights, ensuring transparent communication with non-technical stakeholders, thereby reinforcing trust and partnership at executive levels.\n
  · Synthesized vast datasets using Excel, not only to categorize patient-provider interactions but also to identify, through financial modeling, the economic implications of operational discrepancies on pivotal performance indicators\n\n
  WISCONSIN UNION\n
  Madison, WI\n
  Customer Service\n
  June 2019 – August 2019\n
  · Responded to customer inquiries and resolved customer complaints in a professional and prompt manner, utilizing strong communication and interpersonal skills\n
  · Assisted customers with services such as event bookings, memberships, and Union event information\n\n
  Job Description:\n
  ${jobDescription}`;

  outputElement.innerText = template;
}

function copyToClipboard() {
  const outputText = document.getElementById("output").innerText;
  const textareaElement = document.createElement('textarea');
  textareaElement.value = outputText;
  document.body.appendChild(textareaElement);
  textareaElement.select();
  document.execCommand('copy');
  document.body.removeChild(textareaElement);
  alert("Text copied to clipboard!");
}
