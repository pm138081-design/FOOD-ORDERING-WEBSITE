document.addEventListener('DOMContentLoaded', () => {
  let cart = [];

  const dishes = [
    { id: 1, name: "Butter Chicken", price: 349, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRst7c8ra9evoQZ7fv8jFkbnq23NhFDlHzfzNP55fDKj4e4lYpSTxzqAG-mrNfCP4c3juJT9a4ol78mFARkYPhCFF79M54lGDTjJmpJcylolg&s=10" },
    { id: 2, name: "Hyderabadi Biryani", price: 399, img: "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" },
    { id: 3, name: "Paneer Tikka Masala", price: 299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIHbV0J0PqZ3gQ9RQwqba6g5TbRk53Hz9lGm7vC-o7Hf45jf-VZIFlt7LipCXWlVhtAH2xfvYMWJyPs4rmqIZG5b_Bk5au1rm6ZSfTyI&s=10" },
    { id: 4, name: "Masala Dosa", price: 189, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3ipqB0sa-q1woiTuMX2jNnkRLQZvdKD5USi6z3GvrSTF3KeDznX_jkOraAlBp6wusr8ndCL1QrggCvaCGrziAnbUsjmH70IeuOlZG7FciA&s=10" },
    { id: 5, name: "Punjabi Samosa (2 pcs)", price: 99, img: "https://prashantcorner.com/cdn/shop/files/PunjabiSamosa.png?v=1766580942" },
    { id: 6, name: "Dal Makhani", price: 249, img: "data:image/jpeg;base64,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" }
  ];

  // Render Dishes
  function renderDishes() {
    const container = document.getElementById('dishesGrid');
    container.innerHTML = '';

    dishes.forEach(dish => {
      const card = document.createElement('div');
      card.className = 'dish-card';
      card.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}" class="dish-img">
        <div class="dish-content">
          <h3>${dish.name}</h3>
          <div class="price">₹${dish.price}</div>
          <button class="add-to-cart" data-id="${dish.id}">Add to Cart</button>
        </div>
      `;
      container.appendChild(card);
    });

    // Add to cart listeners
    document.querySelectorAll('.add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const dish = dishes.find(d => d.id === id);
        addToCart(dish);
        
        btn.textContent = 'Added ✓';
        btn.style.background = '#10b981';
        setTimeout(() => {
          btn.textContent = 'Add to Cart';
          btn.style.background = '';
        }, 1200);
      });
    });
  }

  function addToCart(dish) {
    const existing = cart.find(item => item.id === dish.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({ ...dish, quantity: 1 });
    }
    updateCartUI();
  }

  function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const sidebarCount = document.getElementById('sidebarCartCount');
    const totalEl = document.getElementById('cartTotal');

    let totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

    countEl.textContent = totalItems;
    sidebarCount.textContent = totalItems;
    totalEl.textContent = totalPrice;

    renderCartItems();
  }

  function renderCartItems() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';

    if (cart.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:#888; padding:2rem;">Your cart is empty</p>';
      return;
    }

    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price} × ${item.quantity || 1}</p>
        </div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      container.appendChild(div);
    });

    // Remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index);
        cart.splice(index, 1);
        updateCartUI();
      });
    });
  }

  // Cart Sidebar
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const closeCart = document.getElementById('closeCart');

  cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
  });

  closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
  });

  // Render other sections
  function renderCategories() {
    const cats = [
      {icon: "fas fa-drumstick-bite", title: "Non-Veg"},
      {icon: "fas fa-cheese", title: "Vegetarian"},
      {icon: "fas fa-bread-slice", title: "Breads & Rice"},
      {icon: "fas fa-cookie", title: "Street Food"}
    ];
    const container = document.getElementById('categoriesGrid');
    container.innerHTML = cats.map(cat => `
      <div class="category-card">
        <i class="${cat.icon}"></i>
        <h3>${cat.title}</h3>
      </div>
    `).join('');
  }

  function renderReviews() {
    const reviews = [
      {text: "Best Butter Chicken in Patna! Highly recommended.", name: "Priya Sharma"},
      {text: "Biryani was perfectly spiced and portion was generous.", name: "Rahul Kumar"},
      {text: "Masala Dosa was crispy and chutneys were delicious.", name: "Ananya Singh"}
    ];
    const container = document.getElementById('reviewsGrid');
    container.innerHTML = reviews.map(r => `
      <div class="review-card">
        <p>"${r.text}"</p>
        <strong>— ${r.name}</strong>
      </div>
    `).join('');
  }

  // Smooth Scroll
  document.getElementById('exploreBtn').addEventListener('click', () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  });

  // Mobile Menu
  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
  });

  // Initialize
  renderDishes();
  renderCategories();
  renderReviews();
});