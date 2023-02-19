def list_to_object(values: list, keys: list = None) -> list:
    if keys == None:
        keys = ['id', 'img', 'name', 'price', 'slug']
    for idx, i in enumerate(values):
        i = dict(zip(keys, i))
        values[idx] = i
    return values

