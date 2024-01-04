
export interface Product{
    descripcion: string;
    price: number;
}

const phone: Product ={
    descripcion: 'nokia a1',
    price:100.0
};
const tablet: Product={
    descripcion: 'ipad mini',
    price: 250.0
}

export interface TaxCalationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options:TaxCalationOptions): [number, number]{
   
    let total = 0;

    options.products.forEach( ({price}) =>{
        total += price;
    });

    return [total, total*options.tax];
}

const shoppingCArt = [phone, tablet];
const tax = 0.15;

const [total, totaltax] = taxCalculation({
    products: shoppingCArt,
    tax: tax,
});

// console.log('Total:', total);
// console.log('Tax:', totaltax);


//export{}