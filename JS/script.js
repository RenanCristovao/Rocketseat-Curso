//ativiade 1
let nota =6
function notasEscolares(nota) {

    let notafinal
    if (nota >= 90) {
    notafinal = "Aluno tirou A"
    } else if (nota <= 89 && nota >= 80) {
        notafinal = "Aluno tirou B"
    } else if (nota >= 70 && nota <= 79) {
        notafinal = "Aluno tirou C"
    } else if (nota <= 69 && nota >= 60) {
        notafinal = "Aluno tirou D"
    } else if (nota <=59){
        notafinal = "Aluno tirou F"
    } else {
        notafinal = "Não fez as provas"
    }

    return notafinal
}

console.log(notasEscolares(45))

//atividade 2
 let family ={
    incomes: [55, 44, 755, 1518 ,111],
    expenses: [55, 22, 454, 1511, 77]
}

function sum (array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}

function calculeteBalace(){
    const calculeteIncomes = sum(family.incomes)
    const calculeteExpenses = sum(family.expenses)
    
    const total = calculeteIncomes - calculeteExpenses
    const itsOk = total >= 0
    
    let balanceText = "negativo"
    if(itsOk){
        balanceText = "Positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculeteBalace ()
/*let sum = 0
let expensesTotal = 0;
let incomesTotal = 0
for (let i = 0; i < family.incomes[i]; i++) { incomesTotal += family.incomes[i]; }
for (let i = 0; i < family.expenses[i]; i++) { expensesTotal += family.expenses[i]; }
sum = incomesTotal - expensesTotal
console.log("Seu saldo é de " + sum)*/

//atividade 3
function transforDegree(degree){
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    if(!celsiusExists && !fahrenheitExists){
        throw new Error("Grau não indentificado")
    }

    let updatedDesgree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = "C"

    if(celsiusExists){
        updatedDesgree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSing = "F"
    }

    return formula(updatedDesgree) + degreeSing
}
try{
   console.log(transforDegree("10C"));
  //  transforDegree("50Z");

} catch(error) {
    console.log(error.message);

}

//atividade 4

const booksByCategory =[
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O Homem maiis rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai probre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],

    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das Pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],

    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);

for(let category of booksByCategory) {
    console.log(`Total de livros da cateforia: `, category.category)
    console.log(category.books.length);
}

function countAuthor() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            }
        }
    }
    console.log(`Total de autores `,authors.length)
}
countAuthor();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do ${author}: `,books)
}

booksOfAuthor("Augusto Cury")