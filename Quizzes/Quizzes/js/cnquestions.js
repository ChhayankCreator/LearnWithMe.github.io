// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Which type of topology is best suited for large businesses which must carefully control and coordinate the operation of distributed branch outlets?",
        answer: "Star",
        options: [
            "Ring",
            "Local area",
            "Hierarchical",
            "Star"
        ]
    },
    {
        numb: 2,
        question: "Which of the following transmission directions listed is not a legitimate channel?",
        answer: "Double Duplex",
        options: [
            "Simplex",
            "Half Duplex",
            "Full Duplex",
            "Double Duplex"
        ]
    },
    {
        numb: 3,
        question: "Parity bits are used for which of the following purposes?",
        answer: "To detect errors",
        options: [
            "Encryption of data",
            "To transmit faster",
            "To detect errors",
            "To identify the user"
        ]
    }, {
        numb: 4,
        question: "What kind of transmission medium is most appropriate to carry data in a computer network that is exposed to electrical interferences?",
        answer: "Optical fiber",
        options: [
            "Unshielded twisted pair",
            "Optical fiber",
            "Coaxial cable",
            "Microwave"
        ]
    }, {
        numb: 5,
        question: "A collection of hyperlinked documents on the internet forms the ?",
        answer: "World Wide Web (WWW)",
        options: [
            "World Wide Web (WWW)",
            "E-mail system",
            "Mailing list",
            "Hypertext markup language"
        ]
    }, {
        numb: 6,
        question: " The IP network 192.168.50.0 is to be divided into 10 equal sized subnets. Which of the following subnet masks can be used for the above requirement?",
        answer: "255.255.0",
        options: [
            "255.243.240",
            "255.255.0.0",
            "255.255.0",
            "255.255.255"
        ]
    }, {
        numb: 7,
        question: "When the mail server sends mail to other mail servers it becomes ___ ?",
        answer: "SMTP client",
        options: [
            "SMTP client",
            "SMTP server",
            "Peer",
            "Master"
        ]
    }, {
        numb: 8,
        question: "TCP/IP model does not have ______ layer but OSI model have this layer.",
        answer: "session layer",
        options: [
            "session layer",
            "transport layer",
            "application layer",
            "network layer"
        ]
    }, {
        numb: 9,
        question: "Which layer is used to link the network support layers and user support layers?",
        answer: "transport layer",
        options: [
            "session layer",
            "data link layer",
            "transport layer",
            "network layer"
        ]
    }, {
        numb: 10,
        question: "Which of the following protocol is used for remote terminal connection service?",
        answer: "TELNET",
        options: [
            "RARP",
            "UDP",
            "FTP",
            "TELNET"
        ]
    }, {
        numb: 11,
        question: "Which of the following terms is just the collection of networks that can be joined together?",
        answer: " Intranet",
        options: [
            " Intranet",
            "Extranet",
            "Internet",
            "LAN"
        ]
    }, {
        numb: 12,
        question: "The application layer of the OSI model is",
        answer: "Seven layer",
        options: [
            "Four layer",
            "Five layer",
            "Six layer",
            "Seven layer"
        ]
    }, {
        numb: 13,
        question: "The cheapest modems can transmit",
        answer: "300 bits per second",
        options: [
            "300 bits per second",
            "1,200 bits per second",
            "2,400 bits per second",
            "None of these"
        ]
    }, {
        numb: 14,
        question: "The data rate of the ISDN basic access B channel is",
        answer: "64 Kbps",
        options: [
            "32 Kbps",
            "64 Kbps",
            "144 Kbps",
            "192 Kbps"
        ]
    }, {
        numb: 15,
        question: "Null modems are type of",
        answer: "Modem eliminator",
        options: [
            " Modem",
            "Modem eliminator",
            "Protocol converter",
            "Multiplexer"
        ]
    },


    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];