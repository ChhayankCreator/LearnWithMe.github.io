// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Which of the following option leads to the portability and security of Java?",
        answer: "Bytecode is executed by JVM",
        options: [
            "Bytecode is executed by JVM",
            "The applet makes the Java code secure and portable",
            "Use of exception handling",
            "Dynamic binding between objects"
        ]
    },
    {
        numb: 2,
        question: "hich of the following is not a Java features?",
        answer: "Use of pointers",
        options: [
            "Dynamic",
            "Architecture Neutral",
            "Use of pointers",
            "Object-oriented"
        ]
    },
    {
        numb: 3,
        question: "____ is used to find and fix bugs in the Java programs.",
        answer: "JDB",
        options: [
            "JVM",
            "JRE",
            "JDK",
            "JDB"
        ]
    },
    {
        numb: 4,
        question: "What is the return type of the hashCode() method in the Object class?",
        answer: "int",
        options: [
            "Object",
            "int",
            "long",
            "void"
        ]
    },
    {
        numb: 5,
        question: "Which of the following is a valid long literal?",
        answer: "0xnf029L",
        options: [
            "ABH8097",
            "L990023",
            "904423",
            "0xnf029L"
        ]
    },
    {
        numb: 6,
        question: "Evaluate the following Java expression, if x=3, y=5, and z=10: ++z + y - y + z + x++ ",
        answer: "25",
        options: [
            "24",
            "23",
            "20",
            "25"
        ]
    },
    {
        numb: 7,
        question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
        answer: "Javadoc tool",
        options: [
            "javap tool",
            "javaw command",
            "Javadoc tool",
            "javah command"
        ]
    },
    {
        numb: 8,
        question: "Which of the following creates a List of 3 visible items and multiple selections abled?",
        answer: "new List(3, true)",
        options: [
            "new List(false, 3)",
            "new List(3, true)",
            "new List(true, 3)",
            "new List(3, false)"
        ]
    },
    {
        numb: 9,
        question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        answer: "getName()",
        options: [
            "getClass()",
            "intern()",
            "getName()",
            "toString()"
        ]
    },
    {
        numb: 10,
        question: "In which process, a local variable has the same name as one of the instance variables?",
        answer: "Variable Shadowing",
        options: [
            "Serialization",
            "Variable Shadowing",
            "Abstraction",
            "Multi-threading"
        ]
    },
    {
        numb: 11,
        question: "Which of the following is true about the anonymous inner class?",
        answer: "It has no class name",
        options: [
            "It has only methods",
            "Objects can't be created",
            "It has a fixed class name",
            "It has no class name"
        ]
    },
    {
        numb: 12,
        question: "Which package contains the Random class?",
        answer: "java.util package",
        options: [
            "java.util package",
            "java.lang package",
            "java.awt package",
            "java.io package"
        ]
    },
    {
        numb: 13,
        question: " Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?",
        answer: "volatile",
        options: [
            "global",
            "transient",
            "volatile",
            "default"
        ]
    },
    {
        numb: 14,
        question: "If three threads trying to share a single object at the same time, which condition will arise in this scenario?",
        answer: "Race condition",
        options: [
            "Time-Lapse",
            "Critical situation",
            "Race condition",
            "Recursion"
        ]
    },
    {
        numb: 15,
        question: "If a thread goes to sleep",
        answer: "It does not release any locks.",
        options: [
            "It releases all the locks it has.",
            "It does not release any locks.",
            "It releases half of its locks.",
            ""
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