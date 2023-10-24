function clearText() {
    document.getElementById("jobDescription").value = '';
    document.getElementById("output").innerText = '';
}

function submitText() {
    const template = `Please help me craft a three-paragraph cover letter for a financial analyst position. In the first paragraph, I want to introduce myself, state what I'm seeking, and briefly touch on my core beliefs and values. In the second paragraph, I'd like to transition into discussing my qualifications and skills, aligning them with the job description. In the third paragraph, I want to explain why I am specifically interested in working for this company and conclude the letter effectively. Let's make this cover letter polished and reflective of Harvard-level professionalism.

I Want you to base it on the following job description and resume:

${document.getElementById("jobDescription").value}`;
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
