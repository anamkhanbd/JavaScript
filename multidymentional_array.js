let Names = [
    ["John", "Doe", 30],
    ["Jane", "Smith", 25,[
        ["Alice", "Johnson", 29],
        ["Bob", "Williams", 32]
    ]],
    ["Emily", "Jones", 22],
    ["Michael", "Brown", 35,
        ["Chris", "Garcia", 31],
        ["Patricia", "Martinez", 27]
    ],
    ["Sarah", "Davis", 28]
]

console.log(Names[3][1][1][1]);// Output: "Martinez"
