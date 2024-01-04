import{ Product, taxCalculation} from './06-function-destructing'

const shoppingcart: Product[] =[
    {
        descripcion: 'nokia',
        price: 100
    },
    {
        descripcion: 'ipad',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingcart,
    tax: 0.15
});
console.log('total', total);
console.log('Tax', tax);