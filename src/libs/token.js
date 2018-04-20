class Token {
	private address: string
	private symbol: string
	private balance: number

	constructor() {
		this.address: ' ',
		this.symbol: ' ',
		this.balance: 0
	}
	//Getters:
	getAddress(): string {
		return this.address
	}
	getSymbol(): string {
		return this.symbol
	}
	getBalance() number {
		return this.number
	}

	//Setters:
	setAddress(newAddress: string) void{
		this.address: newAddress
	}
	setSymbol(newSymbol: string) void{
		this.symbol: newSymbol
	}
	setBalance(newBalance: number) void{
		this.balance: newBalance
	}

}