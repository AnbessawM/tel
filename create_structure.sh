#!/bin/bash

# Create the base directory if it doesn't exist
mkdir -p src/components src/screens src/navigation src/store src/services src/assets/mockData

# Create component files
touch src/components/ProductCard.js
touch src/components/SizeSelector.js
touch src/components/ReviewList.js
touch src/components/FilterModal.js

# Create screen files
touch src/screens/HomeScreen.js
touch src/screens/ProductScreen.js
touch src/screens/CartScreen.js
touch src/screens/ProfileScreen.js
touch src/screens/CategoryScreen.js

# Create navigation file
touch src/navigation/AppNavigator.js

# Create store files
touch src/store/store.js
touch src/store/productSlice.js
touch src/store/cartSlice.js
touch src/store/authSlice.js

# Create service file
touch src/services/api.js

# Create mock data files
touch src/assets/mockData/sizes.json
touch src/assets/mockData/variants.json

echo "Folder structure and files have been created successfully!"