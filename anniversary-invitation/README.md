# 2nd Anniversary Digital Invitation

A beautiful, production-ready digital invitation and RSVP system for celebrating your 2nd anniversary. Features interactive maps, elegant design, and a complete guest management system.

## ✨ Features

- **🎨 Romantic Design**: Elegant, mobile-responsive interface with animations
- **📍 Interactive Maps**: Leaflet.js-powered maps for both event locations
- **📝 RSVP System**: Simple guest response collection
- **💾 Database**: SQLite3 for reliable data storage
- **🚀 Deployment Ready**: Configured for Render deployment
- **📱 Mobile First**: Optimized for all devices

## 🎯 Guest Flow

1. **Homepage**: Beautiful invitation with couple's message
2. **Event Details**: Two-part celebration with interactive maps
   - Part 1: Cake Cutting Ceremony
   - Part 2: Lunch Celebration
3. **RSVP Form**: Simple Yes/No response
4. **Thank You**: Confirmation with celebration animation

## 📁 Project Structure

```
anniversary-invitation/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── rsvp.db               # SQLite database (auto-created)
├── static/
│   ├── css/
│   │   └── styles.css    # All styling
│   └── js/
│       ├── home.js       # Homepage animations
│       ├── details.js    # Maps initialization
│       ├── rsvp.js       # Form handling
│       └── thank-you.js  # Confetti animation
└── templates/
    ├── index.html        # Homepage
    ├── details.html      # Event details & maps
    ├── rsvp.html         # RSVP form
    └── thank-you.html    # Confirmation page
```

## 🛠️ Local Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation

1. **Install dependencies**:
```bash
pip install -r requirements.txt
```

2. **Run the application**:
```bash
python app.py
```

3. **Open in browser**:
```
http://localhost:5000
```

## 🎨 Customization Guide

### 1. Update Couple Information

**File**: `templates/index.html`

```html
<!-- Line 39: Update couple names -->
<span class="name">John & Jane</span>
```

### 2. Update Event Details

**File**: `templates/details.html`

**Cake Cutting Ceremony** (Lines 23-43):
```html
<div class="detail-value">February 14, 2025</div>  <!-- Date -->
<div class="detail-value">6:00 PM</div>           <!-- Time -->
<div class="detail-value">Your Venue Name</div>    <!-- Venue -->
<span class="detail-value">Your Address</span>     <!-- Address -->
```

**Lunch Celebration** (Lines 56-76):
```html
<div class="detail-value">February 15, 2025</div>  <!-- Date -->
<div class="detail-value">12:30 PM</div>          <!-- Time -->
<div class="detail-value">Your Restaurant</div>    <!-- Venue -->
<span class="detail-value">Restaurant Address</span> <!-- Address -->
```

### 3. Update Map Locations

**File**: `static/js/details.js`

**Get your coordinates**:
1. Open Google Maps
2. Right-click your venue
3. Click the coordinates (e.g., 22.8996, 88.3979)

**Update Cake Cutting location** (Lines 4-5):
```javascript
const cakeMap = L.map('map-cake').setView([YOUR_LAT, YOUR_LNG], 14);
// ...
const cakeMarker = L.marker([YOUR_LAT, YOUR_LNG]).addTo(cakeMap);
```

**Update Lunch location** (Lines 16-17):
```javascript
const lunchMap = L.map('map-lunch').setView([YOUR_LAT, YOUR_LNG], 14);
// ...
const lunchMarker = L.marker([YOUR_LAT, YOUR_LNG]).addTo(lunchMap);
```

**Update Google Maps links** (Line 30):
```javascript
function openInGoogleMaps(lat, lng, venueName) {
    // Update these coordinates in templates/details.html onclick attributes
}
```

### 4. Customize Colors

**File**: `static/css/styles.css`

Lines 1-20 (CSS Variables):
```css
:root {
    --primary: #d4405f;        /* Main brand color */
    --primary-dark: #b8355a;   /* Darker shade */
    --secondary: #f4c2d3;      /* Secondary color */
    --accent: #ffd700;         /* Accent color */
    /* ... */
}
```

### 5. Customize Messages

**Homepage invitation text** (`templates/index.html`, lines 33-36):
```html
<p>Together we have laughed, grown, and created beautiful memories.</p>
<p>Join us as we celebrate two wonderful years of our journey together.</p>
```

**Thank you message** (`templates/thank-you.html`, lines 23-28):
```html
<p>Looking forward to celebrating this special milestone with you.</p>
<p>Your presence means the world to us.</p>
```

## 📊 View RSVPs

Access the admin endpoint to see all responses:

```
http://localhost:5000/api/rsvps
```

Or in production:
```
https://your-app.onrender.com/api/rsvps
```

Returns JSON with all RSVP data:
```json
{
  "success": true,
  "count": 5,
  "rsvps": [
    {
      "id": 1,
      "name": "John Doe",
      "attending": true,
      "submitted_at": "2025-01-31 10:30:00"
    }
  ]
}
```

## 🚀 Deployment to Render

### Step 1: Prepare Your Repository

1. **Create a GitHub repository**
2. **Upload all files** from the `anniversary-invitation` folder
3. **Commit and push**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Render

1. **Go to**: [https://render.com](https://render.com)
2. **Sign up/Login** (use GitHub)
3. **Click**: "New +" → "Web Service"
4. **Connect** your GitHub repository
5. **Configure**:
   - **Name**: `anniversary-invitation`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Plan**: Free
6. **Click**: "Create Web Service"

### Step 3: Wait for Deployment

- First deployment takes 2-5 minutes
- You'll get a URL like: `https://anniversary-invitation.onrender.com`
- Database will be automatically created on first run

### Step 4: Test Your Live Site

1. Open the Render URL
2. Navigate through all pages
3. Test RSVP submission
4. Check `/api/rsvps` endpoint

## 📱 Share Your Invitation

Once deployed, share your invitation URL via:
- WhatsApp
- SMS
- Email
- Social media

Example message:
```
You're invited to our 2nd Anniversary Celebration! 🎉
Please RSVP here: https://your-app.onrender.com
```

## 🔒 Database

- **Type**: SQLite3
- **Location**: `rsvp.db` (auto-created)
- **Persistent**: On Render's free tier, database persists but may be cleared if app is inactive for 30+ days

### Database Schema

```sql
CREATE TABLE rsvp (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    attending BOOLEAN NOT NULL,
    submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🐛 Troubleshooting

### Maps not loading?
- Check internet connection (maps require external tiles)
- Verify coordinates are correct in `details.js`

### RSVP not submitting?
- Check browser console for errors (F12)
- Verify server is running
- Check `/api/rsvp` endpoint is accessible

### Render deployment failing?
- Verify `requirements.txt` exists
- Check Python version compatibility
- Review Render build logs

### Database not persisting?
- On Render free tier, ensure app stays active
- For production, consider upgrading to paid plan

## 📝 API Endpoints

### POST /api/rsvp
Submit an RSVP response

**Request**:
```json
{
  "name": "John Doe",
  "attending": true
}
```

**Response**:
```json
{
  "success": true,
  "id": 1,
  "message": "RSVP saved successfully"
}
```

### GET /api/rsvps
Get all RSVP responses (admin)

**Response**:
```json
{
  "success": true,
  "count": 5,
  "rsvps": [...]
}
```

## 🎯 Production Checklist

Before going live:
- [ ] Update couple names
- [ ] Update all event dates and times
- [ ] Update venue names and addresses
- [ ] Update map coordinates (both locations)
- [ ] Customize invitation messages
- [ ] Test RSVP submission
- [ ] Test on mobile device
- [ ] Verify maps load correctly
- [ ] Check all links work
- [ ] Deploy to Render
- [ ] Test live URL
- [ ] Share with guests!

## 💝 Credits

Built with:
- **Flask**: Python web framework
- **Leaflet.js**: Interactive maps
- **OpenStreetMap**: Map tiles
- **Google Fonts**: Cormorant Garamond & Montserrat

## 📄 License

This project is open source and available for personal use.

---

**Need help?** Check the troubleshooting section or review the code comments for guidance.

**Enjoy your celebration! 🎉💕**
