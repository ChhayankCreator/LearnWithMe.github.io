// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Who is the father of C language?",
        answer: "Dennis Ritchie",
        options: [
            "Steve Jobs",
            "Dennis Ritchie",
            "James Gosling",
            "Rasmus Lerdorf"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is not a valid C variable name?",
        answer: "int $main; ",
        options: [
            "int number; ",
            "float rate; ",
            "int variable_count; ",
            "int $main; "
        ]
    },
    {
        numb: 3,
        question: "All keywords in C are in ____________",
        answer: "LowerCase letters",
        options: [
            "LowerCase letters",
            "UpperCase letters",
            "CamelCase letters",
            "None of the mentioned"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is true for variable names in C?",
        answer: "Variable names cannot start with a digit",
        options: [
            "They can contain alphanumeric characters as well as special characters",
            " It is not an error to declare a variable to be one of the keywords(like goto, static)",
            "Variable names cannot start with a digit",
            "Variable can be of any length"
        ]
    },
    {
        numb: 5,
        question: "Which is valid C expression?",
        answer: "int my_num = 100000;",
        options: [
            "int my_num = 100000;",
            " int my num = 1000;",
            "int $my_num = 10000",
            "int my_num = 100,000;"
        ]
    },
    {
        numb: 6,
        question: "Which of the following cannot be a variable name in C?",
        answer: "volatile",
        options: [
            "volatile",
            "true",
            "friend",
            "export"
        ]
    },
    {
        numb: 7,
        question: "Which of the following declaration is not supported by C language?",
        answer: "String str;",
        options: [
            "String str;",
            "char *str;",
            "float str = 3e2;",
            "Both String str; & float str = 3e2;"
        ]
    },
    {
        numb: 8,
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        answer: "const",
        options: [
            "immutable",
            "mutable",
            "const",
            "volatile"
        ]
    },
    {
        numb: 9,
        question: "What is the result of logical or relational expression in C?",
        answer: "0 or 1",
        options: [
            "True or False",
            "0 or 1",
            "Yes or No",
            "None Of Above"
        ]
    },
    {
        numb: 10,
        question: "Which of the following typecasting is accepted by C language?",
        answer: "Widening & Narrowing conversions",
        options: [
            "Widening conversions",
            "Narrowing conversions",
            "Widening & Narrowing conversions",
            "None of the mentioned"
        ]
    },
    {
        numb: 11,
        question: "What is an example of iteration in C?",
        answer: "all of the mentioned",
        options: [
            "for",
            "while",
            "do-while",
            "all of the mentioned"
        ]
    },
    {
        numb: 12,
        question: "Functions can return enumeration constants in C?",
        answer: "true",
        options: [
            "true",
            "false",
            "depends on the compiler",
            "depends on the standard"
        ]
    },
    {
        numb: 13,
        question: "Functions in C Language are always _________",
        answer: "EXternal",
        options: [
            "Internal",
            "Both",
            "External",
            "None Of These"
        ]
    },
    {
        numb: 14,
        question: "Which of the following is not possible statically in C language?",
        answer: "Jagged Array",
        options: [
            "Jagged Array",
            "Rectangular Array",
            "Cuboidal Array",
            "Multidimensional Array"
        ]
    },
    {
        numb: 15,
        question: "Which of the following return-type cannot be used for a function in C?",
        answer: "none of the mentioned",
        options: [
            "char * ",
            " struct",
            "void",
            "none of the mentioned"
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