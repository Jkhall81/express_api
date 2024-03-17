create table monsters(
    id serial PRIMARY KEY,
    name varchar(50) unique,
    personality varchar(50)
);

create table habitats(
    id serial primary key,
    name varchar(50) unique,
    climate varchar(50),
    temperature int
);

create table lives(
    monster varchar(50),
    habitat varchar(50),
    foreign key (monster) references monsters(name),
    foreign key (habitat) references habitats(name)
);

insert into monsters(name, personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

insert into habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forest', 'haunted', 70),
('mountain', 'icy', 30);

insert into lives(monster, habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forest'),
('Rusty', 'mountain');