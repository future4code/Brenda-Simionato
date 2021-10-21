export class Trip {
    name: string;
    description: string;
    price: number;
    origin: string;
    destination: string;
    id: string

    constructor(name: string, description: string, price: number, origin: string, destination: string, id: string) {
        this.name = name;
        this.description = description,
        this.price = price;
        this.origin = origin;
        this.destination = destination;
        this.id = id
    }
}