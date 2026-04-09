# ONEWAY FOUNDATION - Backend Documentation

## 📋 Current Backend Status

### ✅ Already Implemented

#### 1. **Authentication System**
- Admin login/logout with JWT tokens
- Password hashing with bcryptjs
- Protected routes for admin-only access
- Session management

#### 2. **Donations Module** (Partially Complete)
- **Razorpay Integration** - Payment gateway configured
- **Order Creation** - Creates Razorpay orders
- **Payment Verification** - Verifies payment signatures
- **Database Storage** - Saves donation records
- **Email Receipts** - Sends donation receipts (template missing - needs creation)

#### 3. **Members Management**
- Member registration and profiles
- Admin can view/manage members
- Member data storage

#### 4. **Gallery Management**
- Image upload support (multer)
- Gallery CRUD operations
- Admin-only management

#### 5. **Programs Management**
- Program creation and listing
- Category-based filtering (Education, Healthcare, Environment, Community)
- Admin management

#### 6. **Partners Management**
- Partner organization records
- Admin management

#### 7. **Contact Messages**
- Public contact form submission
- Admin view/delete messages

#### 8. **Social Media Posts**
- Social media content management
- Post scheduling capabilities

---

## ⚠️ NEEDS CONFIGURATION / INTEGRATION

### 1. 🔐 Payment Integration (RAZORPAY) - **PENDING**

**Status:** Code ready, needs API keys

**Required Environment Variables:**
```env
# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
```

**What works:**
- Order creation
- Payment verification
- Database storage
- Basic email receipts

**What needs fixing:**
- `donationReceiptTemplate.js` - Email template file is missing
- Need to create: `server/utils/donationReceiptTemplate.js`

---

### 2. 📱 WhatsApp Integration - **PENDING**

**Status:** Not implemented yet

**Possible Approaches:**
1. **WhatsApp Business API** - Official API from Meta
2. **Twilio** - Third-party service
3. **WhatsApp Cloud API** - Free tier available

**Suggested Implementation:**
- Send donation confirmation to donor
- Send member application updates
- Emergency notifications

**Future Routes to Add:**
```javascript
// routes/whatsappRoutes.js
POST /api/whatsapp/send-donation-confirmation
POST /api/whatsapp/send-member-update
POST /api/whatsapp/send-notification
```

---

### 3. 📸 Social Media API Integration - **PENDING**

**Status:** Currently manual entry

**APIs to integrate:**
1. **Instagram Graph API** - Fetch posts from Instagram
2. **Facebook Graph API** - Fetch posts from Facebook
3. **Twitter/X API** - Fetch tweets

**Current Setup:**
- Social posts are manually added by admin
- `SocialPost` model exists
- Basic CRUD operations working

**Future Enhancement:**
```javascript
// routes/socialRoutes.js enhancement
GET /api/social/instagram-fetch  // Auto-fetch Instagram posts
GET /api/social/facebook-fetch   // Auto-fetch Facebook posts
POST /api/social/schedule-post   // Schedule social media posts
```

---

### 4. 📧 Email Configuration - **PENDING**

**Status:** Basic implementation, needs SMTP configuration

**Required Environment Variables:**
```env
# Email Settings (Gmail, SendGrid, AWS SES, etc.)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=ONEWAY FOUNDATION <info@onewayfoundation.org>
```

**Current Email Features:**
- Donation receipts
- Contact form notifications

**What needs enhancement:**
- Transactional emails
- Email templates
- Newsletter functionality

---

### 5. 📊 Analytics / Tracking - **PENDING**

**Future enhancements:**
- Google Analytics integration
- Facebook Pixel
- Razorpay dashboard access
- Custom admin dashboard stats

---

### 6. 💾 Data Management - **PENDING**

**Features to add:**
- Data export (CSV/Excel)
- Data backup automation
- Database migration scripts

---

## 🛠️ API Endpoints Summary

### Public Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/donation/create-order` | Create Razorpay order |
| POST | `/api/donation/verify` | Verify payment |
| POST | `/api/members/register` | Register new member |
| POST | `/api/contact/submit` | Submit contact form |
| GET | `/api/programs` | Get all programs |
| GET | `/api/gallery` | Get gallery images |
| GET | `/api/social` | Get social posts |
| GET | `/api/health` | Health check |

### Admin Endpoints (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/admin/login` | Admin login |
| GET | `/api/admin/stats` | Dashboard stats |
| GET | `/api/donation/all` | All donations |
| GET | `/api/members/all` | All members |
| GET | `/api/contact/all` | All messages |
| POST | `/api/gallery/upload` | Upload image |
| POST | `/api/programs/create` | Create program |
| POST | `/api/partners/create` | Add partner |
| POST | `/api/social/create` | Create post |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment Variables
Create `.env` file:
```env
# Server
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/oneway_foundation

# JWT
JWT_SECRET=your_super_secret_jwt_key

# Razorpay (Payment)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# Email (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=ONEWAY FOUNDATION <info@onewayfoundation.org>
```

### 3. Create Admin User
```bash
npm run create-admin
```

### 4. Start Server
```bash
# Development
npm run dev

# Production
npm start
```

---

## 📝 TODO: Integration Checklist

### Phase 1: Essential (Do First)
- [ ] Add Razorpay API keys to .env
- [ ] Create `donationReceiptTemplate.js` file
- [ ] Configure email SMTP settings
- [ ] Test payment flow

### Phase 2: Communication (Do Second)
- [ ] Set up WhatsApp Business API
- [ ] Create WhatsApp notification routes
- [ ] Implement email templates

### Phase 3: Social Media (Do Third)
- [ ] Register Facebook Developer app
- [ ] Register Instagram Business account
- [ ] Create social media fetch routes
- [ ] Implement auto-post feature

### Phase 4: Analytics (Do Fourth)
- [ ] Set up Google Analytics
- [ ] Add Facebook Pixel
- [ ] Create custom analytics dashboard

---

## 📁 File Structure

```
server/
├── config/
│   ├── db.js           # MongoDB connection
│   └── razorpay.js     # Razorpay configuration
├── controllers/
│   ├── authController.js
│   ├── contactController.js
│   ├── donationController.js
│   ├── galleryController.js
│   ├── memberController.js
│   ├── partnerController.js
│   ├── programController.js
│   └── socialController.js
├── middleware/
│   ├── authMiddleware.js      # JWT authentication
│   ├── errorMiddleware.js     # Error handling
│   ├── securityMiddleware.js  # CORS, helmet, rate limit
│   └── validateMiddleware.js # Input validation
├── models/
│   ├── Admin.js
│   ├── ContactMessage.js
│   ├── Donation.js
│   ├── Gallery.js
│   ├── Member.js
│   ├── Partner.js
│   ├── Program.js
│   └── SocialPost.js
├── routes/
│   ├── authRoutes.js
│   ├── contactRoutes.js
│   ├── donationRoutes.js
│   ├── galleryRoutes.js
│   ├── memberRoutes.js
│   ├── partnerRoutes.js
│   ├── programRoutes.js
│   └── socialRoutes.js
├── utils/
│   └── sendEmail.js          # Email sender
├── scripts/
│   └── createAdmin.js        # Create admin user
├── server.js                 # Main server file
└── package.json
```

---

## 🔧 Troubleshooting

### Common Issues

1. **Razorpay errors**
   - Check API keys are correct
   - Verify key_id matches key_secret
   - Ensure account is activated

2. **Email not sending**
   - Check SMTP credentials
   - For Gmail: Use App Password, not regular password
   - Verify email address exists

3. **MongoDB connection failed**
   - Ensure MongoDB is running
   - Check connection string
   - Verify network access

4. **JWT token expired**
   - Check JWT_SECRET in .env
   - Tokens expire in 7 days by default

---

## 📞 Support

For questions or issues, refer to:
- Razorpay Docs: https://razorpay.com/docs/
- MongoDB Docs: https://docs.mongodb.com/
- Express.js: https://expressjs.com/

