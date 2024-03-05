export interface UserData {
  name?: string
  email?: string
  password?: string
  rePassword?: string
  phone?: string
  resetCode?:string
  newPassword?:string

}
export interface product {
  sold: number,
  images: string[],
  subcategory: Subcategory[],
  ratingsQuantity: number,
  _id: string,
  title: string,
  slug: string,
  description: string,
  quantity: number,
  price: number,
  priceAfterDiscount: number,
  imageCover: string,
  category: Category,
  brand: Brand,
  ratingsAverage: number,
  createdAt: string,
  updatedAt: string,
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
