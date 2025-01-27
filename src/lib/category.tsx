
import Image from "next/image";
import Link from "next/link";

type CategoryItem = {
    name: string;
    image: string;
};

export function Category() {
    const cat: CategoryItem[] = [
        { name: "Vegetables", image: "/products/category/vegetables-category.jpg" },
        { name: "Fruits", image: "/products/category/fruits-category.jpg" },
        { name: "Masalas", image: "/products/category/masalas-category.jpg" },
        { name: "Spices", image: "/products/category/spices-category.jpg" },
    ];

    return (
        <div className="px-2 max-w-screen-sm  flex space-x-4 items-end">
            {cat.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center space-y-2 text-center"
                >
                    <Link href={`/shop#${item.name}`} className="">
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="w-20 h-32 rounded-md object-contain"
                        />
                    </Link>
                    <span className="text-sm font-semibold">
                        {item.name}
                    </span>
                </div>
            ))}
        </div>
    );
}
