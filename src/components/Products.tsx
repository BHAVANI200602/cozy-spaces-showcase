import chairImage from '@/assets/chair-1.jpg';
import tableImage from '@/assets/table-1.jpg';
import bedImage from '@/assets/bed-1.jpg';
import bookshelfImage from '@/assets/bookshelf-1.jpg';
import sofaImage from '@/assets/sofa-1.jpg';
import deskImage from '@/assets/desk-1.jpg';
import wardrobeImage from '@/assets/wardrobe-1.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Modern Dining Chair",
      image: chairImage,
      category: "Seating"
    },
    {
      id: 2,
      name: "Coffee Table",
      image: tableImage,
      category: "Tables"
    },
    {
      id: 3,
      name: "Contemporary Bed Frame",
      image: bedImage,
      category: "Bedroom"
    },
    {
      id: 4,
      name: "Minimalist Bookshelf",
      image: bookshelfImage,
      category: "Storage"
    },
    {
      id: 5,
      name: "Olive Green Sofa",
      image: sofaImage,
      category: "Seating"
    },
    {
      id: 6,
      name: "Work Desk",
      image: deskImage,
      category: "Office"
    },
    {
      id: 7,
      name: "Sliding Wardrobe",
      image: wardrobeImage,
      category: "Storage"
    },
    {
      id: 8,
      name: "Accent Chair",
      image: chairImage,
      category: "Seating"
    }
  ];

  return (
    <section id="products" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Product Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of premium furniture pieces, 
            each designed to enhance your living space with style and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="card-furniture group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                <button className="btn-know-more w-full">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;