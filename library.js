let library = [];

function addBook(title, author, year, genre, pages) {
    library.push({title, author, year, genre, pages});
}

function removeBook(titleToRemove) {
    library = library.filter(book => book.title !== titleToRemove);
}

function findBooksByAuthor(author) {
    return library.filter(book => book.author === author);
}

function filterBooksByGenre(genre) {
    return library.filter(book => book.genre === genre);
}

function genreReport() {
    const report = {};
    library.forEach(book => {
        if(report[book.genre]) {
            report[book.genre]++;
        } else {
            report[book.genre] = 1;
        }
    });
    return report;
}

function averagePagesReport() {
    if(library.length === 0) return 0;
    const totalPages = library.reduce((sum, book) => sum + book.pages, 0);
    return totalPages / library.length;
}

function sortBooksByYear() {
    return library.sort((a, b) => b.year - a.year);
}

// Пример использования
addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

// Поиск книг по автору
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));

// Фильтрация книг по жанру
console.log(filterBooksByGenre("Фэнтези"));

// Генерация отчета по количеству книг каждого жанра
console.log(genreReport());

// Генерация отчета по среднему количеству страниц
console.log(`Среднее количество страниц: ${averagePagesReport()}`);

// Удаление книги и вывод обновленной библиотеки
removeBook("1984");
console.log(library);

// Вывод списка всех книг, отсортированный по году издания
console.log(sortBooksByYear());
