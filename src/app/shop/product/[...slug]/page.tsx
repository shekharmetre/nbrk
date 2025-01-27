import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
import { data, findProductById } from "@/lib/utils";
import { Product, ProductData } from "@/types/product.types";
import { notFound } from "next/navigation";


export default function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const productData:Product | null = findProductById(parseInt(params.slug[0]));

  if (!productData?.title) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData?.title ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={data.products.topSelling} />
      </div>
    </main>
  );
}
