class BasicCalculator {
    public constructor(protected value: number = 0) { }

    public currentValue(): number {
        return this.value;
    }
    public multiply(operand: number) {
        this.value *= operand;
        return this;
    }

    public divide(operand: number) {
        this.value /= operand;
        return this;
    }
}

let v = new BasicCalculator(2)
    .multiply(3)
    .divide(2)
    .currentValue();

console.log(v);