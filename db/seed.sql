-- ==============================================================================
-- SEED DATA
-- ==============================================================================

-- 0. ROLES (needed before users can reference role_id)
INSERT INTO roles (role_name, description)
VALUES
    ('Admin', 'Full system access'),
    ('Manager', 'Fleet oversight and reporting'),
    ('Dispatcher', 'Assigns trips and coordinates drivers'),
    ('Customer', 'External client with booking access');

-- 1. USERS (One for each of the 4 standard fleet roles)
INSERT INTO users (first_name, last_name, email, role_id, created_at)
VALUES
    ('Elena', 'Rostova', 'elena.admin@fleetco.com', (SELECT role_id FROM roles WHERE role_name = 'Admin'), CURRENT_TIMESTAMP),
    ('Marcus', 'Vance', 'marcus.manager@fleetco.com', (SELECT role_id FROM roles WHERE role_name = 'Manager'), CURRENT_TIMESTAMP),
    ('Sarah', 'Jenkins', 's.jenkins@fleetco.com', (SELECT role_id FROM roles WHERE role_name = 'Dispatcher'), CURRENT_TIMESTAMP),
    ('David', 'Chen', 'david.chen88@gmail.com', (SELECT role_id FROM roles WHERE role_name = 'Customer'), CURRENT_TIMESTAMP);

-- 2. DRIVERS (3 realistic driver profiles)
INSERT INTO drivers (first_name, last_name, license_number, phone_number, hire_date)
VALUES
    ('James', 'Holden', 'DL-93847562', '+1-555-019-2834', '2022-03-15'),
    ('Naomi', 'Nagata', 'DL-18475629', '+1-555-018-9921', '2021-11-02'),
    ('Amos', 'Burton', 'DL-57382910', '+1-555-012-4438', '2023-06-20');

-- 3. VEHICLES (5 vehicles with mixed statuses)
INSERT INTO vehicles (make, model, year, license_plate, vin, current_status)
VALUES
    -- 2 Available Vehicles
    ('Toyota', 'Camry Hybrid', 2023, 'XYZ-1122', '1TXY234567890ABCD', 'Available'),
    ('Ford', 'Transit 250', 2022, 'CGO-8843', '1FTY345678901BCDE', 'Available'),

    -- 1 On Trip Vehicle
    ('Honda', 'CR-V', 2024, 'TRP-9901', 'JHLU456789012CDEF', 'On Trip'),

    -- 1 In Shop Vehicle
    ('Chevrolet', 'Express Cargo', 2019, 'WRK-5541', '1GCZ567890123DEFG', 'In Shop'),

    -- 1 Retired Vehicle
    ('Nissan', 'Altima', 2015, 'RTR-3329', '1N4A678901234EFGH', 'Retired');