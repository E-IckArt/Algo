def fusion(t1, t2):
    if len(t1) == 0:
        return t2
    elif len(t2) == 0:
        return t1
    else:
        if t1[0] < t2[0] :
            return [t1[0]] + fusion(t1[1:], t2)
        else:
            return [t2[0]] + fusion(t1, t2[1:])

def tri_fusion(T):
    if len(T) == 1:
        return T
    else:
        middle = len(T) // 2
        return fusion(tri_fusion(T[:middle]), tri_fusion(T [middle:]))

print(tri_fusion([2000, 1998, 2005, 2016, 2003, 2020, 1992]))