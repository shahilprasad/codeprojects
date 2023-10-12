import dog
dog1 = dog.create('Ted', 15, 'Border Collie')
dog2 = dog.create('Loki', 3, 'Border Collie')

del dog1['name']

print(dog1)
print(dog2)