DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS roles CASCADE;


-- ============================================================
-- 1. ROLES TABLE
-- Lookup table for user permissions/roles (e.g., Admin, Manager)
-- ============================================================
CREATE table if not exists  roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

-- ============================================================
-- 2. USERS TABLE
-- Core system users. Links to Roles via role_id.
-- ============================================================
CREATE table if not exists  users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role_id INT REFERENCES roles(role_id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 3. DRIVERS TABLE
-- Links a driver profile to a specific system user (1-to-1).
-- ============================================================
CREATE TABLE drivers (
    driver_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
    license_number VARCHAR(100) UNIQUE NOT NULL,
    license_expiry DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'Active'
);

-- ============================================================
-- 4. VEHICLES TABLE
-- Includes the requested UNIQUE constraint on registration_number.
-- ============================================================
CREATE TABLE vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    registration_number VARCHAR(50) UNIQUE NOT NULL,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    manufacturing_year INT NOT NULL,
    status VARCHAR(20) DEFAULT 'Active'
);

-- ============================================================
-- 5. TRIPS TABLE
-- Links to both Vehicles and Drivers.
-- ============================================================
CREATE TABLE trips (
    trip_id SERIAL PRIMARY KEY,
    vehicle_id INT NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
    driver_id INT REFERENCES drivers(driver_id) ON DELETE SET NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP,
    start_location VARCHAR(255) NOT NULL,
    end_location VARCHAR(255),
    distance_km DECIMAL(10, 2)
);

-- ============================================================
-- 6. MAINTENANCE LOGS TABLE
-- Tracks servicing and repairs for specific vehicles.
-- ============================================================
CREATE TABLE maintenance_logs (
    log_id SERIAL PRIMARY KEY,
    vehicle_id INT NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
    service_date DATE NOT NULL DEFAULT CURRENT_DATE,
    description TEXT NOT NULL,
    cost DECIMAL(12, 2) NOT NULL,
    service_provider VARCHAR(100)
);

-- ============================================================
-- 7. FUEL LOGS TABLE
-- Tracks fuel consumption per vehicle and driver.
-- ============================================================
CREATE TABLE fuel_logs (
    fuel_id SERIAL PRIMARY KEY,
    vehicle_id INT NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
    driver_id INT REFERENCES drivers(driver_id) ON DELETE SET NULL,
    fill_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    volume_liters DECIMAL(8, 2) NOT NULL,
    total_cost DECIMAL(10, 2) NOT NULL,
    odometer_reading INT NOT NULL
);

-- ============================================================
-- 8. EXPENSES TABLE
-- General expenses that can be tied to a specific trip or vehicle.
-- ============================================================
CREATE TABLE expenses (
    expense_id SERIAL PRIMARY KEY,
    vehicle_id INT REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
    trip_id INT REFERENCES trips(trip_id) ON DELETE SET NULL,
    expense_type VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    expense_date DATE NOT NULL DEFAULT CURRENT_DATE,
    description TEXT
);
