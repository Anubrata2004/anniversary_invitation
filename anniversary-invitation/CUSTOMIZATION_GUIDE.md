# Quick Customization Guide

This guide will help you personalize your anniversary invitation in 5 minutes!

## 🎯 Required Changes (Must Do)

### 1. Update Your Names (1 minute)

**File**: `templates/index.html`

Find line 39:
```html
<span class="name">Your Names Here</span>
```

Change to:
```html
<span class="name">Sarah & Michael</span>
```

---

### 2. Update Event Dates & Times (2 minutes)

**File**: `templates/details.html`

#### Cake Cutting Ceremony (starts at line 26):

```html
<!-- Line 28: Date -->
<span class="detail-value">February 14, 2025</span>

<!-- Line 33: Time -->
<span class="detail-value">6:00 PM</span>

<!-- Line 38: Venue Name -->
<span class="detail-value">The Grand Banquet Hall</span>

<!-- Line 43: Address -->
<span class="detail-value">123 Celebration Avenue, Downtown</span>
```

#### Lunch Celebration (starts at line 59):

```html
<!-- Line 61: Date -->
<span class="detail-value">February 15, 2025</span>

<!-- Line 66: Time -->
<span class="detail-value">12:30 PM</span>

<!-- Line 71: Venue Name -->
<span class="detail-value">Riverside Garden Restaurant</span>

<!-- Line 76: Address -->
<span class="detail-value">456 River Road, Scenic Park</span>
```

---

### 3. Update Map Locations (2 minutes)

#### Step A: Get Your Venue Coordinates

1. Open Google Maps
2. Search for your venue
3. Right-click on the exact location
4. Click the coordinates (they'll be copied)
   - Example: `22.8996, 88.3979`

#### Step B: Update Coordinates in Code

**File**: `static/js/details.js`

```javascript
// Line 4: Cake Cutting Map Center
const cakeMap = L.map('map-cake').setView([22.8996, 88.3979], 14);
//                                          ↑ Replace these coordinates

// Line 12: Cake Cutting Marker
const cakeMarker = L.marker([22.8996, 88.3979]).addTo(cakeMap);
//                            ↑ Replace these coordinates

// Line 17: Lunch Map Center
const lunchMap = L.map('map-lunch').setView([22.9074, 88.4126], 14);
//                                            ↑ Replace these coordinates

// Line 25: Lunch Marker
const lunchMarker = L.marker([22.9074, 88.4126]).addTo(lunchMap);
//                             ↑ Replace these coordinates
```

#### Step C: Update Google Maps Links

**File**: `templates/details.html`

```html
<!-- Line 51: Cake Cutting Google Maps Button -->
<button class="map-button" onclick="openInGoogleMaps(22.8996, 88.3979, 'The Grand Banquet Hall')">
<!-- Replace coordinates and venue name ↑                                      ↑ -->

<!-- Line 84: Lunch Google Maps Button -->
<button class="map-button" onclick="openInGoogleMaps(22.9074, 88.4126, 'Riverside Garden Restaurant')">
<!-- Replace coordinates and venue name ↑                                      ↑ -->
```

---

## 🎨 Optional Changes (Nice to Have)

### 4. Customize Your Message

**File**: `templates/index.html` (lines 33-36)

```html
<div class="invitation-text">
    <p>Your custom message here - first line</p>
    <p>Your custom message here - second line</p>
</div>
```

**Example**:
```html
<div class="invitation-text">
    <p>Through laughter, challenges, and countless memories,</p>
    <p>we've built a love that grows stronger each day.</p>
</div>
```

---

### 5. Change Color Theme

**File**: `static/css/styles.css` (lines 5-9)

Current colors (romantic pink):
```css
--primary: #d4405f;        /* Main pink */
--primary-dark: #b8355a;   /* Darker pink */
--secondary: #f4c2d3;      /* Light pink */
--accent: #ffd700;         /* Gold */
```

**Alternative themes**:

#### Royal Blue & Gold
```css
--primary: #1e3a8a;
--primary-dark: #1e40af;
--secondary: #93c5fd;
--accent: #fbbf24;
```

#### Emerald & Ivory
```css
--primary: #059669;
--primary-dark: #047857;
--secondary: #d1fae5;
--accent: #f59e0b;
```

#### Burgundy & Rose
```css
--primary: #831843;
--primary-dark: #6b1536;
--secondary: #fce7f3;
--accent: #fcd34d;
```

---

### 6. Update Thank You Message

**File**: `templates/thank-you.html` (lines 24-27)

```html
<div class="couple-message">
    <p>Looking forward to celebrating this special milestone with you.</p>
    <p>Your presence means the world to us.</p>
</div>
```

---

## 🔍 Quick Reference: Where is What?

| What to Change | File | Line(s) |
|----------------|------|---------|
| Couple names | `templates/index.html` | 39 |
| Cake cutting date | `templates/details.html` | 28 |
| Cake cutting time | `templates/details.html` | 33 |
| Cake venue name | `templates/details.html` | 38 |
| Cake venue address | `templates/details.html` | 43 |
| Lunch date | `templates/details.html` | 61 |
| Lunch time | `templates/details.html` | 66 |
| Lunch venue name | `templates/details.html` | 71 |
| Lunch address | `templates/details.html` | 76 |
| Cake map coordinates | `static/js/details.js` | 4, 12 |
| Lunch map coordinates | `static/js/details.js` | 17, 25 |
| Homepage message | `templates/index.html` | 33-36 |
| Color theme | `static/css/styles.css` | 5-9 |
| Thank you message | `templates/thank-you.html` | 24-27 |

---

## ✅ Pre-Launch Checklist

Use this before sharing your invitation:

- [ ] Names updated
- [ ] Cake cutting date correct
- [ ] Cake cutting time correct
- [ ] Cake cutting venue name correct
- [ ] Cake cutting address correct
- [ ] Cake cutting map coordinates correct
- [ ] Lunch date correct
- [ ] Lunch time correct
- [ ] Lunch venue name correct
- [ ] Lunch address correct
- [ ] Lunch map coordinates correct
- [ ] Both maps load and show correct locations
- [ ] Both "Open in Google Maps" buttons work
- [ ] Tested RSVP form submission
- [ ] Checked on mobile device
- [ ] All text makes sense and has no typos

---

## 🚀 After Customization

1. **Test locally**:
   ```bash
   python app.py
   ```
   
2. **Open**: `http://localhost:5000`

3. **Click through every page**:
   - Homepage loads
   - Event details show correct info
   - Maps display correctly
   - RSVP form works
   - Thank you page appears

4. **Deploy** (see main README.md)

5. **Share your link!** 🎉

---

## 💡 Pro Tips

1. **Always test after each change** - run `python app.py` and check in browser
2. **Use CTRL+F** to find text in files quickly
3. **Keep backups** before making changes
4. **Mobile test** - open on your phone before sharing
5. **Ask a friend** to test the RSVP process

---

Need help? Check the main README.md for troubleshooting!
