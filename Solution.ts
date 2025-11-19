function formatValue(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `${value.toUpperCase()};`;
    } else if (typeof value === "number") {
        return `${value * 10};`;
    } else {
        return `${!value};`;
    }
}

function getLength(value: string | any[]): string {
    return `${value.length};`;
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}';`;
    }
}

type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): string {
    const filtered: Item[] = items.filter((item) => item.rating >= 4);

    let formatted = "[\n";

    for (let i = 0; i < filtered.length; i++) {
        const b = filtered[i];
        formatted += `  { title: '${b.title}', rating: ${b.rating} }`;

        if (i !== filtered.length - 1) {
            formatted += ",\n";
        } else {
            formatted += "\n";
        }
    }

    formatted += "];";

    return formatted;
}

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): string {
    const activeUsers: User[] = users.filter((user) => user.isActive === true);

    let formatted = "[\n";

    for (let i = 0; i < activeUsers.length; i++) {
        const u = activeUsers[i];
        formatted += `  { id: ${u.id}, name: '${u.name}', email: '${u.email}', isActive: ${u.isActive} }`;

        if (i !== activeUsers.length - 1) {
            formatted += ",\n";
        } else {
            formatted += "\n";
        }
    }

    formatted += "];";

    return formatted;
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability};`
    );
}

function getUniqueValues(
    array1: (string | number)[],
    array2: (string | number)[]
): string {
    const result: (string | number)[] = [];

    for (let i = 0; i < array1.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === array1[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = array1[i];
        }
    }

    for (let i = 0; i < array2.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j] === array2[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = array2[i];
        }
    }

    return `[${result.join(", ")}];`;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): string {
    if (products.length === 0) {
        return "0;";
    }

    const total = products
        .map((product) => {
            const basePrice = product.price * product.quantity;
            if (product.discount !== undefined) {
                const discountAmount = (basePrice * product.discount) / 100;
                return basePrice - discountAmount;
            }
            return basePrice;
        })
        .reduce((sum, value) => sum + value, 0);

    return `${total};`;
}
