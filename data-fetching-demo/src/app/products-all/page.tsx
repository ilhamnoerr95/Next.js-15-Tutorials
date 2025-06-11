import { getProducts } from "@/prisma-db";

type Products = {
	id: number;
	title: string;
	description: string;
	price: number;
};

export default async function Page() {
	const products: Products[] = await getProducts();

	return (
		<ul className="space-y-4 p-4">
			{products.map((product) => (
				<li
					key={product.id}
					className="p-4 bg-white show-md rounded-lg text-gray-700"
				>
					<h2 className="text-xl font-semibold">{product.title}</h2>
					<p>{product.description}</p>
					<p className="text-lg font-medium">{product.price}</p>
				</li>
			))}
		</ul>
	);
}
