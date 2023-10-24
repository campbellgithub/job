function clearText() {
    document.getElementById("jobDescription").value = '';
    document.getElementById("output").innerText = '';
}

function submitText() {
    const template = `Please help me craft a three-paragraph cover letter for a financial analyst position. In the first paragraph, I want to introduce myself, state what I'm seeking, and briefly touch on my core beliefs and values. In the second paragraph, I'd like to transition into discussing my qualifications and skills, aligning them with the job description. In the third paragraph, I want to explain why I am specifically interested in working for this company and conclude the letter effectively. Let's make this cover letter polished and reflective of Harvard-level professionalism. I Want you to base it on the following job description and resume: Resume: 
                                                  Kellan Campbell
432 West Gorham St. | Madison, WI 53703 | kdcampbell2@wisc.edu | (608) 515-3570


Education
 
UNIVERSITY OF WISCONSIN-MADISON                                                                                          Madison, WI
Bachelor of Science, Economics, Neurobiology                                                                          September 2019 – May 2023
Cumulative GPA: 3.633                                                                                                                        
Honors: Dean’s List
Skills
 
Technical: R, Python, SQL, Stata, Excel, PowerPoint, Word, Outlook, Bash, LibreOffice, Financial Analysis, Budgeting, Data Visualization, Reporting, Data Analysis, Forecasting, Risk Analysis, Valuation, Financial Modeling
 
Soft Skills: Effective Communication, Team Collaboration, Problem-solving, Analytical Thinking, Adaptability, Time Management, Project Planning, Attention to Detail, Leadership, Critical Thinking, Decision Making, Strategic Planning
 
Experience

            

UNIVERSITY OF WISCONSIN DEPARTMENT OF NEUROLOGY                                                   Madison, WI
Research Assistant, Gallagher Lab                                                                                                       January 2021 – July 2023
·       Utilized specialized analytical tools and techniques to map intricate correlations between cognitive metrics, motor evaluations, and various neuroimaging parameters, ensuring rigorous data interpretation and synthesis
·       Led an in-depth evaluation of neuroimaging biomarkers associated with Parkinson's disease, Alzheimer's disease, and other related conditions, emphasizing precision in managing and interpreting complex datasets.
·       Engaged in close collaboration with an interdisciplinary team of neurologists, radiologists, and data scientists, playing a pivotal role in advancing the lab's research initiatives
·       Developed and fine-tuned data visualization techniques to present complex brain imaging results in a comprehensible format, aiding in the communication of intricate findings to varied stakeholders
·       Participated in regular research review sessions, critiquing and refining methodologies to ensure optimal accuracy and reliability in data collection and interpretation
 
EXACT SCIENCES                                                                                                                               Madison, WI
Operations Analyst Intern                                                                                                       May 2021 – August 2021
·       Successfully contributed to streamlining business operations by collaborating with cross-functional teams and conducting thorough analysis of key operational measures
·       Spearheaded the integration of advanced financial modeling techniques with operational analytics, achieving optimized resource allocation and strategic business enhancements.
·       Demonstrated proficiency in Excel-based financial modeling, amalgamating Lean Six Sigma methodologies with financial insights to assess the ROI of prospective initiatives, ensuring robust budget adherence and project viability.
·       Conducted an in-depth quantitative analysis of over 15,000 inbound calls, leveraging complex datasets to pinpoint cost-saving avenues and elevate the patient-provider interaction paradigm.
·       Translated intricate operational and financial data into clear, actionable insights, ensuring transparent communication with non-technical stakeholders, thereby reinforcing trust and partnership at executive levels.
·       Synthesized vast datasets using Excel, not only to categorize patient-provider interactions but also to identify, through financial modeling, the economic implications of operational discrepancies on pivotal performance indicators
 
WISCONSIN UNION                                                                                                                             Madison, WI
Customer Service                                                                                                                                    June 2019 – August 2019
·       Responded to customer inquiries and resolved customer complaints in a professional and prompt manner, utilizing strong communication and interpersonal skills
·       Assisted customers with services such as event bookings, memberships, and Union event information

Job Description: ${document.getElementById("jobDescription").value}`;
    document.getElementById("output").innerText = template;
}

function copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = document.getElementById("output").innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Text copied to clipboard!");
}
