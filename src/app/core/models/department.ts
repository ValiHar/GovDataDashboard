export class Department {
    public department: string;
    public description: string;
    public datasets: number;

    constructor(department: string, description: string, datasets: number) {
        this.department = department;
        this.description = description;
        this.datasets = datasets;
    }
}
