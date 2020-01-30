import axios from 'axios';

const location = "/public/products.json";

function productService() {
	return fetch("./products.json");
}

export default productService;