import rpg

aragorn = rpg.Character('Aragorn', 'Human')
galadriel = rpg.Character('Galadriel', 'Elf')
frodo = rpg.Character('Frodo', 'Hobbit')

frodo.inv.set_currency(9, 47, 23)

chest = rpg.Chest (['longsword', 'iron helmet'], 2, 25, 50)

chest.inv.transfer(frodo.inv)

print(frodo.inv.__dict__)
print(frodo.inv.get_currency())
print(chest.inv.__dict__)