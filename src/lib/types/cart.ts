import { IProductDetails, TSlug } from "./products";

export interface ICartProduct{
	image: any;
	name: string;
	slug: TSlug;
	price:number;
	discount?:number;
	brand:string;
	category:string[];
	starRating: number;
	isOffer?:boolean;
	quantity:number;
	totalPrice: number;
}

export interface ICartUI{
	cartBoxIsVisible: boolean;
}

export interface ICart {
	items: ICartProduct[];
	totalQuantity: number;
	totalAmount: number;
}

export interface ICartUIRootState {
	cartUI: ICartUI;
}

export interface ICartRootState{
	cart:ICart;
}