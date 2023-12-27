
let questions = [
    {
        id: 1,
        question: "What does the term phishing refer to in the context of cybersecurity?hat is the Full Form Of RAM?",
        answer:"Attempt to trick individuals into revealing sensitive information",
        options: [
            "A type of malware",
            "Unauthorized access to a system",
            "Attempt to trick individuals into revealing sensitive information",
            "Network vulnerability"
        ]   
    },
    {
        id: 2,
        question: "Which of the following authentication factors is considered the most secure? ",
        answer: " Biometrics",
        options: [
          " Passwords",
          " Biometrics",
          "Security questions",
          "One-time passcodes"
        ]
      },
      {
        id: 3,
        question: "What is the purpose of a VPN (Virtual Private Network) in cybersecurity?",
        answer: "Secure data transmission over the internet",
        options: [
          "Malware detection",
          "Secure data transmission over the internet ",
          "Email filtering",
          "Firewall configuration"
        ]
      },
      {
        id: 4,
        question: "What is the role of an IDS (Intrusion Detection System) in a cybersecurity infrastructure?",
        answer: "Monitoring and detecting suspicious activities ",
        options: [
          "Encrypting data",
          "Controlling access to resources",
          "Filtering spam emails",
          "Monitoring and detecting suspicious activities "
        ]
      },
      {
        id: 5,
        question: "Which type of malware is designed to block access to a system until a sum of money is paid?",
        answer: "Ransomware",
        options: [
          "Trojan horse",
          "Ransomware",
          "Spyware",
          "Adware"
        ]
      },
      {
        id: 6,
        question: "Which of the following is an example of a strong password?",
        answer: "P@ssw0rd!",
        options: [
          "password123",
          "abc123",
          "P@ssw0rd!",
          "userpass"
        ]
      },
      {
        id: 7,
        question: "  What is the purpose of encryption in cybersecurity?",
        answer: "To convert data into a code to prevent unauthorized access",
        options: [
          " To hide the physical location of a computer",
          "To convert data into a code to prevent unauthorized accessc",
          "To block phishing emails",
          "To increase network speed"
        ]
      },
      {
        id: 8,
        question: "What does the acronym VPN stand for in the context of cybersecurity?",
        answer: "Virtual Private Network",
        options: [
          " Virtual Personal Network",
          "Virtual Private Network",
          "Very Private Network",
          "Virtual Public Network"
        ]
      },
      {
        id: 9,
        question: "Which authentication factor is considered 'something you are'?",
        answer: " Biometric data (e.g., fingerprint, retina scan)",
        options: [
          "Password",
          "PIN",
          " Biometric data (e.g., fingerprint, retina scan)",
          "Security token"
        ]
      },
      {
        id: 10,
        question: "What does the acronym IDS stand for in the context of cybersecurity?",
        answer: "Intrusion Detection System",
        options: [
          " Internet Data Storage",
          "Intrusion Detection Systemr",
          "Internal Database Server",
          "Information Distribution Service"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}