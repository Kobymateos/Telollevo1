import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn.icon-icons.com/icons2/1864/PNG/512/iconfinder-food-and-restaurantorganicveganhealthy-fooddietvegetarianvegetablesvegetablefood-4394757_119510.png',
        name: 'Verduras'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/1398/PNG/128/fruits_96835.png',
        name: 'Frutas'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/3682/PNG/512/shop_supermarket_detergent_store_grocery_icon_229153.png',
        name: 'Detergente'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/1574/PNG/512/3558100-flovouring-ketchup-liquid-sauce-seasoning_107841.png',
        name: 'Jugos'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/1459/PNG/512/2799202-problem-solving_99785.png',
        name: 'Herramientas'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/1864/PNG/512/iconfinder-waterglassdrinkglass-of-waterfood-and-restauranthealthy-foodliquidfood-4394765_119490.png',
        name: 'Gasiosas'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/1286/PNG/512/55_85290.png',
        name: 'Dulces'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/709/PNG/512/Drinks-33_icon-icons.com_61965.png',
        name: 'Bebidas'
    }
]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;