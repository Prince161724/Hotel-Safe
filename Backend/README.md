# 🏨 Hotel Booking System - Backend

Production-ready hotel booking backend API built with Node.js, Express, and MongoDB.

## 🚀 Quick Deploy to Railway

### Prerequisites
- GitHub account
- Railway account (sign up at https://railway.app)

### Deployment Steps

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/Prince161724/Hotel-Safe.git
   ```

2. **Deploy to Railway**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository
   - **Important**: Set Root Directory to `Backend` in Settings

3. **Add Environment Variables**
   
   Go to Railway Dashboard → Your Service → Variables tab and add:

   ```env
   NODE_ENV=production
   PORT=3000
   MONGO_URL=your_mongodb_connection_string
   SESSION_SECRET=your_secret_key_min_32_chars
   CORS_ORIGIN=https://your-frontend-url.com
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   ```

4. **Deploy**
   - Railway will automatically build and deploy
   - Check logs for any errors
   - Your API will be available at: `https://your-app.up.railway.app`

## 📋 Environment Variables Guide

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port (Railway sets this automatically) | `3000` |
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/...` |
| `SESSION_SECRET` | Secret for session encryption | `your-super-secret-key-min-32-characters` |
| `CORS_ORIGIN` | Allowed frontend URL | `https://yourapp.vercel.app` |
| `CLOUD_NAME` | Cloudinary cloud name | `your-cloud-name` |
| `API_KEY` | Cloudinary API key | `123456789012345` |
| `API_SECRET` | Cloudinary API secret | `your-api-secret` |

## 🏗️ Project Structure

```
Backend/
├── app.js                 # Main application entry point
├── db.js                  # MongoDB connection
├── package.json           # Dependencies and scripts
├── railway.json          # Railway deployment config
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── components/
│   └── upload.js         # File upload middleware
├── Controller/
│   ├── HostController.js # Host business logic
│   └── UserController.js # User business logic
├── Model/
│   ├── HostList.js       # Host schema
│   ├── HotelList.js      # Hotel schema
│   ├── Messages.js       # Messages schema
│   └── UserList.js       # User schema
└── Routes/
    ├── Host.js           # Host API routes
    └── User.js           # User API routes
```

## 🔧 Local Development

### Install Dependencies
```bash
cd Backend
npm install
```

### Set Up Environment Variables
```bash
cp .env.example .env
# Edit .env with your local values
```

### Run Development Server
```bash
npm run dev
```

Server will start at `http://localhost:3000`

### Run Production Mode Locally
```bash
npm start
```

## 📡 API Endpoints

### Health Check
- `GET /health` - Check server status

### User Routes (`/user`)
- User authentication
- Profile management
- Hotel bookings
- Favorites

### Host Routes (`/host`)
- Host authentication
- Property management
- Booking management
- Messaging

## 🔐 Security Features

- ✅ Environment-based configuration
- ✅ Secure session cookies (HTTPS in production)
- ✅ CORS protection
- ✅ MongoDB connection with retry logic
- ✅ Trust proxy for Railway deployment
- ✅ Input validation
- ✅ Password hashing with bcrypt

## 📊 Database

**MongoDB Atlas** (recommended for production)

### Setup MongoDB Atlas:
1. Create account at https://mongodb.com/cloud/atlas
2. Create a cluster
3. Add database user
4. Whitelist Railway IP or use `0.0.0.0/0` (allow all)
5. Get connection string
6. Add to `MONGO_URL` environment variable

## 🖼️ File Uploads

Uses **Cloudinary** for image/video storage (perfect for Railway's ephemeral filesystem)

### Setup Cloudinary:
1. Create account at https://cloudinary.com
2. Get credentials from dashboard
3. Add to environment variables:
   - `CLOUD_NAME`
   - `API_KEY`
   - `API_SECRET`

## 🐛 Troubleshooting

### Deployment Issues

**Build fails:**
- Check Railway logs
- Verify `package.json` syntax
- Ensure all dependencies are listed

**Connection errors:**
- Verify `MONGO_URL` is correct
- Check MongoDB Atlas network access
- Ensure environment variables are set

**CORS errors:**
- Update `CORS_ORIGIN` to match frontend URL
- Include `https://` prefix
- No trailing slash

**Session issues:**
- Verify `SESSION_SECRET` is set
- Check MongoDB connection for session store

### Common Errors

```
Error: Cannot find module 'dotenv'
→ Run: npm install
```

```
MongooseServerSelectionError
→ Check MONGO_URL and MongoDB Atlas network settings
```

```
CORS policy error
→ Update CORS_ORIGIN environment variable
```

## 📈 Monitoring

### Health Check
```bash
curl https://your-app.up.railway.app/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2025-11-01T12:00:00.000Z",
  "uptime": 123.456,
  "environment": "production"
}
```

## 🚦 Production Checklist

Before deploying to production:

- [x] Environment variables configured
- [x] MongoDB Atlas set up and accessible
- [x] Cloudinary configured
- [x] `NODE_ENV=production` set
- [x] `CORS_ORIGIN` matches frontend URL
- [x] Session secret is strong (32+ characters)
- [x] Health check endpoint working
- [x] Logs reviewed for errors

## 📝 Scripts

```json
{
  "start": "node app.js",      // Production mode
  "dev": "nodemon app.js"      // Development with auto-reload
}
```

## 🔄 Auto-Deploy

Railway automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update backend"
git push origin main
```

Railway will detect changes and redeploy automatically.

## 📞 Support

For issues or questions:
- Check Railway logs: Dashboard → Deployments → View Logs
- Review environment variables
- Verify MongoDB connection
- Check CORS settings

## 🎉 Success!

Your backend is now deployed and ready for production use!

**Backend URL**: `https://your-app.up.railway.app`
**Health Check**: `https://your-app.up.railway.app/health`

---

Built with ❤️ using Node.js, Express, and MongoDB
