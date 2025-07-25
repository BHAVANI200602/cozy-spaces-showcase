import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit3, Trash2, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { products, categories, addProduct, updateProduct, deleteProduct, type Product } from '@/data/products';

const Admin = () => {
  const [allProducts, setAllProducts] = useState(products);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    images: [''],
    category: '',
    subcategory: '',
    inStock: true,
    description: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      images: [''],
      category: '',
      subcategory: '',
      inStock: true,
      description: ''
    });
    setIsEditing(false);
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData: Product = {
      id: isEditing ? editingProduct!.id : Date.now().toString(),
      name: formData.name,
      images: formData.images.filter(img => img.trim() !== ''),
      category: formData.category,
      subcategory: formData.subcategory,
      inStock: formData.inStock,
      description: formData.description
    };

    if (isEditing) {
      updateProduct(productData);
      setAllProducts(products);
    } else {
      addProduct(productData);
      setAllProducts([...products]);
    }

    resetForm();
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      images: product.images,
      category: product.category,
      subcategory: product.subcategory,
      inStock: product.inStock,
      description: product.description || ''
    });
    setEditingProduct(product);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
      setAllProducts(products);
    }
  };

  const toggleStock = (product: Product) => {
    const updatedProduct = { ...product, inStock: !product.inStock };
    updateProduct(updatedProduct);
    setAllProducts(products);
  };

  const getSubcategoriesForCategory = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.subcategories : [];
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky-nav">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-primary hover:text-primary-glow"
            >
              <ArrowLeft size={24} />
              <span className="font-medium">Back to Website</span>
            </motion.a>
            
            <h1 className="text-3xl font-bold text-primary">Admin Panel</h1>
            
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add Product</span>
            </motion.button>
          </div>
        </div>
      </nav>

      <div className="container-max section-padding">
        {/* Product Form Modal */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-card p-8 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                {isEditing ? 'Edit Product' : 'Add New Product'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Product Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                    required
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value, subcategory: ''})}
                    className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {formData.category && (
                  <div>
                    <label className="block text-foreground font-medium mb-2">Subcategory</label>
                    <select
                      value={formData.subcategory}
                      onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
                      className="w-full p-3 bg-input border border-border rounded-lg text-foreground"
                      required
                    >
                      <option value="">Select Subcategory</option>
                      {getSubcategoriesForCategory(formData.category).map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-foreground font-medium mb-2">Images (one per line)</label>
                  <textarea
                    value={formData.images.join('\n')}
                    onChange={(e) => setFormData({...formData, images: e.target.value.split('\n')})}
                    className="w-full p-3 bg-input border border-border rounded-lg text-foreground h-24"
                    placeholder="/src/assets/image1.jpg&#10;/src/assets/image2.jpg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-foreground font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 bg-input border border-border rounded-lg text-foreground h-24"
                    placeholder="Product description..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.inStock}
                    onChange={(e) => setFormData({...formData, inStock: e.target.checked})}
                    className="w-4 h-4"
                  />
                  <label className="text-foreground font-medium">In Stock</label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="btn-hero flex-1"
                  >
                    {isEditing ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-know-more flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Products List */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">All Products</h2>
          
          <div className="grid gap-6">
            {allProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-furniture flex items-center space-x-6"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground">
                    {categories.find(cat => cat.id === product.category)?.name} - {product.subcategory}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                </div>

                <div className="flex items-center space-x-3">
                  <motion.button
                    onClick={() => toggleStock(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      p-2 rounded-lg transition-colors
                      ${product.inStock 
                        ? 'bg-accent text-accent-foreground' 
                        : 'bg-muted text-muted-foreground'
                      }
                    `}
                  >
                    {product.inStock ? <Eye size={20} /> : <EyeOff size={20} />}
                  </motion.button>

                  <motion.button
                    onClick={() => handleEdit(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-primary text-primary-foreground rounded-lg"
                  >
                    <Edit3 size={20} />
                  </motion.button>

                  <motion.button
                    onClick={() => handleDelete(product.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-destructive text-destructive-foreground rounded-lg"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;