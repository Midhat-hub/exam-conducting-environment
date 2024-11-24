// ABI and contract address (replace with your actual ABI and contract address)
const ABI = [
    [
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "examName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examDate",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examDuration",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "startTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "endTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examPassword",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "studentName",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "studentRollNo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "examStartTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "examEndTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "finalScore",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "percentage",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ExamSubmission.ExamDetails",
                    "name": "_details",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "question",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "yourInput",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "correctOrWrong",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct ExamSubmission.Answer[]",
                    "name": "_answers",
                    "type": "tuple[]"
                }
            ],
            "name": "submitExam",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "exams",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "examName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examDate",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examDuration",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "startTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "endTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examPassword",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "studentName",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "studentRollNo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "examStartTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "examEndTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "finalScore",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "percentage",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ExamSubmission.ExamDetails",
                    "name": "details",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_examId",
                    "type": "string"
                }
            ],
            "name": "getExam",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "examName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examDate",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examDuration",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "startTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "endTime",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examId",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "examPassword",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "studentName",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "studentRollNo",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "examStartTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "examEndTimestamp",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "finalScore",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "percentage",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct ExamSubmission.ExamDetails",
                    "name": "",
                    "type": "tuple"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "question",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "yourInput",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "correctOrWrong",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct ExamSubmission.Answer[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
];

const contractAddress = "0xf310f08621c200e72597751fdb87eba331905aac"; // Replace with your contract's address

let web3;
let contract;
let userAccount;

// Function to initialize Web3 and check for MetaMask
async function initWeb3() {
    if (window.ethereum) {
        try {
            // Request account access (MetaMask)
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Initialize Web3 instance
            web3 = new Web3(window.ethereum);
            console.log("Web3 initialized:", web3);

            // Set up the user's account
            userAccount = (await web3.eth.getAccounts())[0];
            console.log("Connected account:", userAccount);

            // Initialize the contract after setting up Web3
            initContract();
        } catch (error) {
            console.error("Error with MetaMask account access:", error);
            alert("User denied account access or an error occurred.");
        }
    } else {
        alert("MetaMask is not installed.");
        console.error("MetaMask not found!");
    }
}

// Function to initialize the contract
function initContract() {
    try {
        // Create a contract instance
        contract = new web3.eth.Contract(ABI, contractAddress);
        console.log("Contract initialized:", contract);

        // Call the contract's getGreeting function
        getGreeting();
    } catch (error) {
        console.error("Error initializing contract:", error);
        alert("Contract initialization failed.");
    }
}

// Function to interact with the contract (example: calling a method)
async function getGreeting() {
    try {
        const greeting = await contract.methods.getGreeting().call();
        console.log("Greeting from contract:", greeting);

        // Display the greeting on the page
        document.body.innerHTML += `<h2>Greeting from Contract: ${greeting}</h2>`;
    } catch (error) {
        console.error("Error calling contract method:", error);
        alert("Error calling contract method.");
    }
}

// Call initWeb3 when the page loads
window.onload = function() {
    initWeb3();
};
