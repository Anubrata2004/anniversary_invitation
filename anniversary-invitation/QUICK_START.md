# 🚀 Quick Start Guide

## Get Your Invitation Live in 3 Steps

### Step 1: Customize (5 minutes)

1. **Open** `CUSTOMIZATION_GUIDE.md` for detailed instructions
2. **Update these 3 things**:
   - Your names in `templates/index.html`
   - Event dates/times in `templates/details.html`
   - Map coordinates in `static/js/details.js`

### Step 2: Test Locally (2 minutes)

```bash
# Install dependencies
pip install -r requirements.txt

# Run the app
python app.py

# Open in browser
http://localhost:5000
```

**Test everything**:
- ✓ Homepage loads
- ✓ Maps show correct locations
- ✓ RSVP form works
- ✓ Thank you page appears

### Step 3: Deploy to Render (5 minutes)

1. **Create GitHub repo** and upload all files
2. **Go to** [render.com](https://render.com)
3. **Click** "New +" → "Web Service"
4. **Connect** your GitHub repo
5. **Use these settings**:
   - Build: `pip install -r requirements.txt`
   - Start: `python app.py`
6. **Deploy!**

Your invitation will be live at: `https://your-app-name.onrender.com`

---

## 📁 Project Files

```
anniversary-invitation/
├── app.py                    ← Flask backend
├── requirements.txt          ← Python packages
├── render.yaml              ← Render config
│
├── templates/
│   ├── index.html           ← Homepage (UPDATE NAMES HERE)
│   ├── details.html         ← Event details (UPDATE DATES HERE)
│   ├── rsvp.html           ← RSVP form
│   └── thank-you.html      ← Confirmation
│
├── static/
│   ├── css/
│   │   └── styles.css      ← All styling
│   └── js/
│       ├── home.js         ← Homepage animations
│       ├── details.js      ← Maps (UPDATE COORDINATES HERE)
│       ├── rsvp.js         ← Form logic
│       └── thank-you.js    ← Confetti
│
└── Documentation/
    ├── README.md            ← Full documentation
    ├── CUSTOMIZATION_GUIDE.md  ← Personalization steps
    └── QUICK_START.md       ← This file
```

---

## 🎯 Must-Do Customizations

| Priority | What | Where | Time |
|----------|------|-------|------|
| 🔴 HIGH | Your names | `templates/index.html` line 39 | 30s |
| 🔴 HIGH | Cake date/time | `templates/details.html` lines 28, 33 | 1min |
| 🔴 HIGH | Lunch date/time | `templates/details.html` lines 61, 66 | 1min |
| 🔴 HIGH | Venue names | `templates/details.html` lines 38, 71 | 1min |
| 🔴 HIGH | Map coordinates | `static/js/details.js` lines 4, 17 | 2min |
| 🟡 MEDIUM | Custom message | `templates/index.html` lines 33-36 | 1min |
| 🟢 LOW | Color theme | `static/css/styles.css` lines 5-9 | 2min |

---

## 🔍 How to Get Map Coordinates

1. Open [Google Maps](https://maps.google.com)
2. Search for your venue
3. Right-click on the location
4. Click the coordinates (e.g., `22.8996, 88.3979`)
5. Paste into `static/js/details.js`

---

## 📊 View RSVPs

After deployment, check responses at:
```
https://your-app.onrender.com/api/rsvps
```

Returns all guest responses in JSON format.

---

## ⚡ Troubleshooting

### Maps not loading?
- Check coordinates are correct format: `[latitude, longitude]`
- Verify both numbers are present
- Test on mobile device

### Can't run locally?
```bash
# Make sure Python 3.8+ is installed
python --version

# Reinstall dependencies
pip install -r requirements.txt --upgrade
```

### Deployment failed?
- Check all files are uploaded to GitHub
- Verify `requirements.txt` exists
- Review build logs on Render dashboard

---

## 🎉 You're Ready!

1. ✅ Files downloaded
2. ⏭️ Customize (use CUSTOMIZATION_GUIDE.md)
3. 🧪 Test locally
4. 🚀 Deploy to Render
5. 💌 Share with guests!

**Questions?** Check README.md for full documentation.

**Good luck with your celebration!** 💕
