from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime
import os

app = Flask(__name__)

# Database setup
DATABASE = 'rsvp.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database with required tables"""
    if not os.path.exists(DATABASE):
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS rsvp (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                attending BOOLEAN NOT NULL,
                submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        conn.commit()
        conn.close()
        print("Database initialized successfully")

# Initialize database on startup
init_db()

# Routes
@app.route('/')
def home():
    """Homepage - Invitation landing page"""
    return render_template('index.html')

@app.route('/details')
def details():
    """Event details page with maps for both locations"""
    return render_template('details.html')

@app.route('/rsvp')
def rsvp_form():
    """RSVP form page"""
    return render_template('rsvp.html')

@app.route('/thank-you')
def thank_you():
    """Thank you confirmation page"""
    return render_template('thank-you.html')

# API Endpoints
@app.route('/api/rsvp', methods=['POST'])
def submit_rsvp():
    """API endpoint to save RSVP response"""
    try:
        data = request.get_json()
        
        # Validate input
        if not data or 'name' not in data or 'attending' not in data:
            return jsonify({'success': False, 'error': 'Missing required fields'}), 400
        
        name = data['name'].strip()
        attending = data['attending']
        
        if not name:
            return jsonify({'success': False, 'error': 'Name cannot be empty'}), 400
        
        # Save to database
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO rsvp (name, attending) VALUES (?, ?)',
            (name, attending)
        )
        conn.commit()
        rsvp_id = cursor.lastrowid
        conn.close()
        
        return jsonify({
            'success': True,
            'id': rsvp_id,
            'message': 'RSVP saved successfully'
        }), 201
        
    except Exception as e:
        print(f"Error saving RSVP: {e}")
        return jsonify({'success': False, 'error': 'Server error'}), 500

@app.route('/api/rsvps', methods=['GET'])
def get_rsvps():
    """Admin endpoint to view all RSVPs"""
    try:
        conn = get_db()
        cursor = conn.cursor()
        cursor.execute('SELECT * FROM rsvp ORDER BY submitted_at DESC')
        rsvps = cursor.fetchall()
        conn.close()
        
        rsvp_list = []
        for rsvp in rsvps:
            rsvp_list.append({
                'id': rsvp['id'],
                'name': rsvp['name'],
                'attending': bool(rsvp['attending']),
                'submitted_at': rsvp['submitted_at']
            })
        
        return jsonify({
            'success': True,
            'count': len(rsvp_list),
            'rsvps': rsvp_list
        }), 200
        
    except Exception as e:
        print(f"Error fetching RSVPs: {e}")
        return jsonify({'success': False, 'error': 'Server error'}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
