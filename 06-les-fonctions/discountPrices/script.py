def get_discount_price(price, discount):
    new_discount_price = price - price * discount/100
    return new_discount_price


print(get_discount_price(12,50))