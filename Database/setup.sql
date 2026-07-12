DROP TABLE IF EXISTS expenses CASCADE;
DROP TABLE IF EXISTS fuel_logs CASCADE;
DROP TABLE IF EXISTS maintenance_logs CASCADE;
DROP TABLE IF EXISTS trips CASCADE;
DROP TABLE IF EXISTS vehicles CASCADE;
DROP TABLE IF EXISTS drivers CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS roles CASCADE;

-- ============================================================
-- 1. ROLES TABLE
-- Lookup table for user permissions/roles (e.g., Admin, Manager)
-- ============================================================
CREATE TABLE IF NOT EXISTS roles (
    role_id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT
);

-- ============================================================
-- 2. USERS TABLE
-- Core system users. Links to Roles via role_id.
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    role_id INT REFERENCES roles(role_id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 3. DRIVERS TABLE
-- Standalone driver profiles (optionally linked to a system user).
-- ============================================================
CREATE TABLE IF NOT EXISTS drivers (
    driver_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id) ON DELETE SET NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    license_number VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(30),
    hire_date DATE NOT NULL,
    license_expiry DATE,
    status VARCHAR(20) DEFAULT 'Active'
);

-- ============================================================
-- 4. VEHICLES TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    license_plate VARCHAR(50) UNIQUE NOT NULL,
    vin VARCHAR(50) UNIQUE NOT NULL,
    current_status VARCHAR(20) DEFAULT 'Available'
        CHECK (current_status IN ('Available', 'On Trip', 'In Shop', 'Retired'))
);

-- ============================================================
-- 5. TRIPS TABLE
-- Links to both Vehicles and Drivers.
-- ============================================================
CREATE TABLE IF NOT EXISTS trips (
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
-- ============================================================
CREATE TABLE IF NOT EXISTS maintenance_logs (
    log_id SERIAL PRIMARY KEY,
    vehicle_id INT NOT NULL REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
    service_date DATE NOT NULL DEFAULT CURRENT_DATE,
    description TEXT NOT NULL,
    cost DECIMAL(12, 2) NOT NULL,
    service_provider VARCHAR(100)
);

-- ============================================================
-- 7. FUEL LOGS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS fuel_logs (
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
-- ============================================================
CREATE TABLE IF NOT EXISTS expenses (
    expense_id SERIAL PRIMARY KEY,
    vehicle_id INT REFERENCES vehicles(vehicle_id) ON DELETE CASCADE,
    trip_id INT REFERENCES trips(trip_id) ON DELETE SET NULL,
    expense_type VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    expense_date DATE NOT NULL DEFAULT CURRENT_DATE,
    description TEXT
);
