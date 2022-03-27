export class Department {
    private _department: string;
    private _description: string;
    private _datasets: number;

    constructor(department: string, description: string, datasets: number) {
        this._department = department;
        this._description = description;
        this._datasets = datasets;
    }

    get department(): string {
        return this._department;
    }

    set department(department: string) {
        this._department = department;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get datasets(): number {
        return this._datasets;
    }

    set datasets(datasets: number) {
        this._datasets = datasets;
    }
}
