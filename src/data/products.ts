// Product data structure with hierarchical categories and stock management
export interface Product {
  id: string;
  name: string;
  images: string[];
  category: string;
  subcategory: string;
  inStock: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: 'beds',
    name: 'Beds',
    subcategories: ['4×6', '5×6', '6×6']
  },
  {
    id: 'chairs',
    name: 'Chairs',
    subcategories: ['Office chair', 'Dining chair', 'Armchair']
  },
  {
    id: 'tables',
    name: 'Tables',
    subcategories: ['Dining Table', 'Tea Table', 'Study Tables', 'Desks']
  },
  {
    id: 'storage',
    name: 'Storage',
    subcategories: ['Cupboards', 'Bookcases', 'Shoe Rack', 'Counter']
  },
  {
    id: 'others',
    name: 'Others',
    subcategories: ['Windows', 'Doors', 'Dressing Tables', 'Bench']
  }
];

// Initial product data - will be managed via admin panel
export let products: Product[] = [
  {
    id: '1',
    name: 'Modern Dining Chair',
    images: ['/src/assets/chair-1.jpg'],
    category: 'chairs',
    subcategory: 'Dining chair',
    inStock: true,
    description: 'Elegant dining chair with premium upholstery'
  },
  {
    id: '2',
    name: 'Coffee Table',
    images: ['/src/assets/table-1.jpg'],
    category: 'tables',
    subcategory: 'Tea Table',
    inStock: true,
    description: 'Beautiful coffee table perfect for modern living rooms'
  },
  {
    id: '3',
    name: 'Contemporary Bed Frame',
    images: ['/src/assets/bed-1.jpg'],
    category: 'beds',
    subcategory: '6×6',
    inStock: true,
    description: 'Luxurious king-size bed frame with elegant design'
  },
  {
    id: '4',
    name: 'Minimalist Bookshelf',
    images: ['/src/assets/bookshelf-1.jpg'],
    category: 'storage',
    subcategory: 'Bookcases',
    inStock: true,
    description: 'Space-saving bookshelf with modern aesthetics'
  },
  {
    id: '5',
    name: 'Olive Green Sofa',
    images: ['/src/assets/sofa-1.jpg'],
    category: 'chairs',
    subcategory: 'Armchair',
    inStock: false,
    description: 'Comfortable sofa in trendy olive green'
  },
  {
    id: '6',
    name: 'Work Desk',
    images: ['/src/assets/desk-1.jpg'],
    category: 'tables',
    subcategory: 'Desks',
    inStock: true,
    description: 'Spacious work desk for home office'
  },
  {
    id: '7',
    name: 'Sliding Wardrobe',
    images: ['/src/assets/wardrobe-1.jpg'],
    category: 'storage',
    subcategory: 'Cupboards',
    inStock: true,
    description: 'Large sliding wardrobe with multiple compartments'
  },
  {
    id: '8',
    name: 'Accent Chair',
    images: ['/src/assets/chair-1.jpg'],
    category: 'chairs',
    subcategory: 'Office chair',
    inStock: true,
    description: 'Stylish accent chair for any room'
  }
];

// Product management functions
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId && product.inStock);
};

export const getAllAvailableProducts = () => {
  return products.filter(product => product.inStock);
};

export const updateProduct = (updatedProduct: Product) => {
  const index = products.findIndex(p => p.id === updatedProduct.id);
  if (index !== -1) {
    products[index] = updatedProduct;
  }
};

export const addProduct = (newProduct: Product) => {
  products.push(newProduct);
};

export const deleteProduct = (productId: string) => {
  products = products.filter(p => p.id !== productId);
};