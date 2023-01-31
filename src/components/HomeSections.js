import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import useWindowResize from "../hooks/useWindowResize";
import Product from "./Product";

const HomeSections = (props) => {
  const { category, categoryProducts, id, title } = props;

  const size = useWindowResize();
  let cardsToShow = 1;

  if (size.width >= 576) {
    cardsToShow = 1;
  }
  if (size.width >= 768) {
    cardsToShow = 2;
  }
  if (size.width >= 992) {
    cardsToShow = 3;
  }
  if (size.width >= 1200) {
    cardsToShow = 5;
  }
  return (
    <div>
      <section id={id} className="py-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-[#008ECC] mb-4 pb-2  uppercase text-2xl font-bold border-b border-black">
              {title}
            </h1>
            <Link to={`/category/${category}`}>
              <IoMdArrowForward className="text-2xl text-[#008ECC]" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]  ">
            {categoryProducts.slice(0, cardsToShow).map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
