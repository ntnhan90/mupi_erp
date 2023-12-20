import { IProduct } from "./products";

export interface IProductList{
	productList: IProduct[] | []
}

export interface IProductListRootState{
	sortedProductList: IProductList;
}