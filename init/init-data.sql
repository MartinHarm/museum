-- Set the character set for the connection to utf8mb4
SET NAMES 'utf8mb4' COLLATE 'utf8mb4_estonian_ci';

-- Create table for museum artifacts
CREATE TABLE IF NOT EXISTS artifacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    material VARCHAR(100),
    period VARCHAR(100),
    author_or_origin VARCHAR(255),
    short_description TEXT,
    photo_url TEXT,
    museum_location VARCHAR(255),
    related_items TEXT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_estonian_ci;

-- Insert sample artifacts
INSERT INTO artifacts 
(code, name, category, material, period, author_or_origin, short_description, photo_url, museum_location, related_items)
VALUES
('ANT001', 'Vokk', 'Tööriist', 'Puit', '1920', 'Salme Valdre, Vanasaunja talu', 'Lõnga ketramiseks', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/P%C3%BCstvokk%2C_ERM_B102_70_204961.jpg/500px-P%C3%BCstvokk%2C_ERM_B102_70_204961.jpg', 'Ekspositsioonisaal', 'ANT002,ANT005'),

('ANT002', 'Võimasin', 'Köögitarbed', 'Puit', '1935', 'Olly Kraam, Ristema talu', 'Või tegemiseks', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ger%C3%A4te_zur_Butter-_und_K%C3%A4seherstellung_19_Jh_%C3%96MV.jpg/640px-Ger%C3%A4te_zur_Butter-_und_K%C3%A4seherstellung_19_Jh_%C3%96MV.jpg', 'Ekspositsioonisaal', 'ANT001'),

('ANT003', 'Sulasekapp', 'Mööbel', 'Puit', '1918', 'Vanasaunja talu', 'Sulase isiklike esemete hoidmise kapp', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Photograph_of_a_closet_Cuypershuis_0692b_%2808%29.jpg/640px-Photograph_of_a_closet_Cuypershuis_0692b_%2808%29.jpg', 'Ekspositsioonisaal', ''),

('ANT004', 'Tuluseraud', 'Tööriist', 'Silver', '1890', 'Evald Rennik, Ristema talu', 'Lõkke alus, mida kasutati paadi valgustamiseks', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/B%C3%A4ckljuster.jpg/640px-B%C3%A4ckljuster.jpg', 'Ekspositsioonisaal', 'ANT003'),

('ANT005', 'Alussärk', 'Riideese', 'Linane', '1938', 'Olly Kraam, Ristema talu', 'Särk riiete all kandmiseks', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Undershirt_MET_CI43.7.18_F.jpg/640px-Undershirt_MET_CI43.7.18_F.jpg', 'Ekspositsioonisaal', 'ANT001');
