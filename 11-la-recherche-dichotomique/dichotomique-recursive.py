# Autre Version récursive

# recherche_dichotomique_récursive(élément, liste_triée):
#    len = longueur de liste_triée ;
#    m = len / 2 ;
#    si liste_triée[m] = élément :
#        renvoyer m ;
#    si liste_triée[m] > élément :
#        renvoyer recherche_dichotomique_récursive(élément, liste_triée[1:m-1]) ;
#    sinon :
#        renvoyer m+recherche_dichotomique_récursive(élément, liste_triée[m+1:len]) ;

def recherche_dichotomique_recursive(element, list):
    length = len(list)-1
    m = length // 2
    if list[m] == element:
        return m
    elif list[m] > element:
        return recherche_dichotomique_recursive(element, list[1:m-1])
    else:
        return m + recherche_dichotomique_recursive(element, list[m+1:length])

list1 = [ 12, 13, 16, 48, 55, 78, 99]

recherche_dichotomique_recursive(15, list1)