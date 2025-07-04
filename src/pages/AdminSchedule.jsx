
import React, { useState } from 'react';
import './AdminSchedule.css';

const AdminSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      time: '09:00',
      location: 'Mall Parking Zone A',
      attendant: 'John Smith',
      status: 'active',
      vehicles: 45,
      capacity: 60
    },
    {
      id: 2,
      time: '14:00',
      location: 'Office Complex B',
      attendant: 'Sarah Johnson',
      status: 'scheduled',
      vehicles: 0,
      capacity: 120
    },
    {
      id: 3,
      time: '18:30',
      location: 'Shopping Center C',
      attendant: 'Mike Wilson',
      status: 'completed',
      vehicles: 80,
      capacity: 100
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    time: '',
    location: '',
    attendant: '',
    capacity: ''
  });

  const handleAddSchedule = () => {
    if (newSchedule.time && newSchedule.location && newSchedule.attendant && newSchedule.capacity) {
      const schedule = {
        id: schedules.length + 1,
        ...newSchedule,
        status: 'scheduled',
        vehicles: 0,
        capacity: parseInt(newSchedule.capacity)
      };
      setSchedules([...schedules, schedule]);
      setNewSchedule({ time: '', location: '', attendant: '', capacity: '' });
      setShowAddModal(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#00ff88';
      case 'scheduled': return '#00a6e6';
      case 'completed': return '#888';
      default: return '#00a6e6';
    }
  };

  return (
    <div className="admin-schedule">
      {/* Header */}
      <header className="schedule-header">
        <div className="header-content">
          <div className="logo-section">
            <img 
              src="https://www.ewaysservices.com/images/eways.jpg" 
              alt="Eways Services" 
              className="company-logo"
            />
            <div className="brand-info">
              <h1>At Parkkin</h1>
              <span>Super Admin Dashboard</span>
            </div>
          </div>
          <div className="admin-info">
            <div className="admin-avatar">SA</div>
            <span>Super Admin</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="schedule-main">
        <div className="schedule-container">
          {/* Title Section */}
          <div className="title-section">
            <h2>Schedule Management</h2>
            <p>Manage parking attendant schedules and monitor real-time occupancy</p>
          </div>

          {/* Controls */}
          <div className="schedule-controls">
            <div className="date-selector">
              <label htmlFor="schedule-date">Select Date:</label>
              <input
                type="date"
                id="schedule-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="glass-input"
              />
            </div>
            <button 
              className="add-schedule-btn"
              onClick={() => setShowAddModal(true)}
            >
              + Add Schedule
            </button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>Total Schedules</h3>
                <p>{schedules.length}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <h3>Active Now</h3>
                <p>{schedules.filter(s => s.status === 'active').length}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚗</div>
              <div className="stat-info">
                <h3>Total Vehicles</h3>
                <p>{schedules.reduce((sum, s) => sum + s.vehicles, 0)}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <div className="stat-info">
                <h3>Locations</h3>
                <p>{new Set(schedules.map(s => s.location)).size}</p>
              </div>
            </div>
          </div>

          {/* Schedule List */}
          <div className="schedule-list">
            <h3>Today's Schedule</h3>
            <div className="schedule-items">
              {schedules.map((schedule) => (
                <div key={schedule.id} className="schedule-item">
                  <div className="schedule-time">
                    <span className="time">{schedule.time}</span>
                    <div 
                      className="status-indicator"
                      style={{ backgroundColor: getStatusColor(schedule.status) }}
                    ></div>
                  </div>
                  <div className="schedule-details">
                    <h4>{schedule.location}</h4>
                    <p>Attendant: {schedule.attendant}</p>
                    <div className="occupancy-bar">
                      <div className="occupancy-fill" style={{ 
                        width: `${(schedule.vehicles / schedule.capacity) * 100}%`,
                        background: 'linear-gradient(90deg, #00a6e6, #0088cc)'
                      }}></div>
                    </div>
                    <span className="occupancy-text">
                      {schedule.vehicles}/{schedule.capacity} vehicles
                    </span>
                  </div>
                  <div className="schedule-status">
                    <span className={`status-badge ${schedule.status}`}>
                      {schedule.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Add Schedule Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Schedule</h3>
            <div className="form-group">
              <label>Time:</label>
              <input
                type="time"
                value={newSchedule.time}
                onChange={(e) => setNewSchedule({...newSchedule, time: e.target.value})}
                className="glass-input"
              />
            </div>
            <div className="form-group">
              <label>Location:</label>
              <input
                type="text"
                placeholder="Enter parking location"
                value={newSchedule.location}
                onChange={(e) => setNewSchedule({...newSchedule, location: e.target.value})}
                className="glass-input"
              />
            </div>
            <div className="form-group">
              <label>Attendant:</label>
              <input
                type="text"
                placeholder="Enter attendant name"
                value={newSchedule.attendant}
                onChange={(e) => setNewSchedule({...newSchedule, attendant: e.target.value})}
                className="glass-input"
              />
            </div>
            <div className="form-group">
              <label>Capacity:</label>
              <input
                type="number"
                placeholder="Enter parking capacity"
                value={newSchedule.capacity}
                onChange={(e) => setNewSchedule({...newSchedule, capacity: e.target.value})}
                className="glass-input"
              />
            </div>
            <div className="modal-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button 
                className="add-btn"
                onClick={handleAddSchedule}
              >
                Add Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSchedule;
