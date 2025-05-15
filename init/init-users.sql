-- Create curator_admin: full access
CREATE USER IF NOT EXISTS 'curator_admin'@'%' IDENTIFIED BY 'Antique#Curate2025';
GRANT ALL PRIVILEGES ON museum_db.* TO 'curator_admin'@'%';

-- Create guest_viewer: read-only access
CREATE USER IF NOT EXISTS 'guest_viewer'@'%' IDENTIFIED BY 'Vintage@View123';
GRANT SELECT ON museum_db.artifacts TO 'guest_viewer'@'%';

-- Create exhibit_mgr: can manage content (insert/update/delete)
CREATE USER IF NOT EXISTS 'exhibit_mgr'@'%' IDENTIFIED BY 'Display!2025';
GRANT SELECT, INSERT, UPDATE, DELETE ON museum_db.artifacts TO 'exhibit_mgr'@'%';

-- Create historian_db: read access for analysis
CREATE USER IF NOT EXISTS 'historian_db'@'%' IDENTIFIED BY 'Archive^2025';
GRANT SELECT ON museum_db.artifacts TO 'historian_db'@'%';

-- Enforce privilege application
FLUSH PRIVILEGES;
