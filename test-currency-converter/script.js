import { convertCurrency } from "kl-currency-converter";

convertCurrency("USD", "INR", 5).then(res => console.log(res));
