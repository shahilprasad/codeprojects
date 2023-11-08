drop table items;
drop table categories;

create table categories (
    id serial primary key,

    name varchar(50) not null unique,
    description text
);

insert into categories (name, description) values
    ('Electronics', 'Gadgets to make life easier'),
    ('Car Parts', 'Getting from point A to B')
    ;

create table items (
    id serial primary key,

    name varchar(200) not null,
    description text not null,

    category_id integer not null,
    foreign key (category_id) references categories (id)
);

insert into items (name, description, category_id) values
    ('Skyrim', 'Open-world RPG', 1),
    ('Fifa', 'Sports game about football', 1),
    ('Wheels', 'Go round and round', 2),
    ('Tint', 'Reduce UV and brightness', 2)
    ;