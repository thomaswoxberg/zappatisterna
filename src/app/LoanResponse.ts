export class LoanResponse {
    public amount: number; 
    public interest: number; 
    public lenderName: string; 
    public approved: boolean; 
    public image:string; 

    constructor(amount:number, interest:number, lenderName:string, approved:boolean, image: string ) {
        this.amount = amount; 
        this.interest = interest; 
        this.lenderName = lenderName; 
        this.approved = approved; 
        this.image = image; 
    }
}