# AlienWeb Affiliate Store - Manual Product Management

## File Structure
```
alienWebStore/
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
├── images/             # Upload your product images here
└── README.md           # This file
```

## How to Add Products Manually

### 1. Upload Product Images
- Save your product images in the `images/` folder
- Use formats: JPG, PNG, WebP
- Recommended size: 500x500px or larger
- Name them descriptively (e.g., `echo-dot.jpg`, `samsung-tv.png`)

### 2. Add Product to JavaScript
Edit `script.js` and add your product to the `products` array:

```javascript
{
    title: "Your Product Title",
    image: "images/your-image.jpg",
    affiliateLink: "https://amzn.to/your-affiliate-link"
}
```

### 3. Get Your Affiliate Links
1. Go to Amazon Associates dashboard
2. Search for your product
3. Generate short link (amzn.to format)
4. Copy the link to your product object

## Example Product Entry
```javascript
{
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    image: "images/airpods-pro.jpg",
    affiliateLink: "https://amzn.to/3XYZ123"
}
```

## Quick Management Functions

### Add Product via Browser Console
```javascript
addProduct({
    title: "New Product Name",
    image: "images/new-product.jpg", 
    affiliateLink: "https://amzn.to/newlink"
});
```

### Remove Product (by index)
```javascript
removeProduct(0); // Removes first product
```

### Update Product
```javascript
updateProduct(0, {
    title: "Updated Product Title",
    affiliateLink: "https://amzn.to/updatedlink"
});
```

## Tips for Success

1. **High-Quality Images**: Use clear, high-resolution product images
2. **Descriptive Titles**: Write compelling product titles
3. **Valid Affiliate Links**: Always test your affiliate links
4. **Mobile Testing**: Check how your store looks on mobile devices
5. **Regular Updates**: Keep your product list fresh and relevant

## Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #ff9500;    /* Orange theme */
    --secondary-color: #232f3e;  /* Dark blue */
}
```

### Modify Layout
- Change grid columns in `.products-grid`
- Adjust card spacing with `gap` property
- Modify responsive breakpoints in media queries

### Add Categories
Extend the product object:
```javascript
{
    title: "Product Name",
    image: "images/product.jpg",
    affiliateLink: "https://amzn.to/link",
    category: "electronics"
}
```

## Deployment
1. Upload all files to your web hosting
2. Ensure `images/` folder has proper permissions
3. Test all affiliate links work correctly
4. Verify responsive design on different devices