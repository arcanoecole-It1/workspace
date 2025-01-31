import random
def greetings() -> str :
    name = input("Enter user name : ")
    """
    le joueur entre son nom utilisateur
    Args:
        name : Nom du joueur
    """
    print(f'Hello user {name} welcome to my Hangman Game!!\nYou need to guess all the letters of the randomly chosen word or the hangman will be hanged')

def gameplay() -> bool :
    """
    Fonction permettant l'affichage des lettres entrer par le joeur et le mots a trouver
    """
    file_path  = "mots.txt"
    with open(file_path, mode='r', encoding='utf-8') as word_list: # lis chaque ligne du fichier text
    #crée une liste vide pour y ajouter les mots
        words = []   
        for line in word_list: 
            while True: 
                words.extend(line.upper().split('\n'))
                word_to_find = random.choice(words)
                if len(word_to_find) == 0: # J'ai utiliser cette condition avec la boucle while pour que random.choice ne choisi que les lignes contenant des mots d'une taille > 0
                    continue
                else :
                    break
    guessing_word = len(word_to_find) * ["_"]
    print(' '.join(guessing_word))
    player_try = 6
    used_letters = []
    while player_try > 0: # Tant que les essais du joueurs serons > 0 la boucle continuera
        show_hangman(player_try)
        try :
            while "_" in guessing_word: # Tant qu'il y'aura des underscores dans le mot a trouver la boucle continue de s'executer 
                print(f"You have {player_try} tries to guess the word")
                guess_letter = input("Enter your guess letter : ").upper()
                if len(guess_letter) != 1 or not guess_letter.isalpha(): # isalpha est utiliser pour verifier si l'entrer du joueur est une lettre 
                    print("Enter a valide input (one letter)")
                    continue
                if guess_letter in used_letters: # cette condition evite au joueur de rentrer une meme lettre deux fois
                    print("Letter already entered")
                    continue
                used_letters.append(guess_letter)
                if guess_letter in word_to_find:
                    for i, letter in enumerate (word_to_find): # Enumerate est utiliser ici pour diviser le mot a trouver en sa clé et sa valeur 
                        if letter == guess_letter:
                            guessing_word[i] = guess_letter
                    print("Nicely played you found a letter!!")
                    print(' '.join(guessing_word)) # Afficher le mot à trouver avec les lettres déjà trouvées
                else:
                    player_try -= 1
                    print("Sorry (°_°;) Wrong guess letter\n")
                    print(' '.join(guessing_word))
                print(f"Used letters **{','.join(used_letters)}**") # Affiche les lettres que le joueur a entrer au courant du jeu
                break
            if "_" not in guessing_word :
                print("You found the correct word !!!")    
                return True
        except Exception as e:
            print(e)
    print(f"The letter was {word_to_find}") # Affiche le mot en cas d'echec
    return False

def show_hangman(essay : int) -> str:
    """
    Affiche l'état du pendu en fonction du nombre d'essais restants.
    
    Args:
        hangman_stages : affiche l'etat du pendu en fonction de la valeur de "essay"
        essay : Parametre de la fonction pour le nombre d'essais du joueur 
        """
    hangman_stages= [
"""
    ~~~~~~~~~~
     |      |
     O      |
    /|\     |
    / \     |
            |
  ¤==========¤
""",
"""
    ~~~~~~~~~~
     |      |
     O      |
    /|\     |
    /       |
            |
  ¤==========¤
""",
"""
    ~~~~~~~~~~
     |      |
     O      |
    /|\     |
            |
            |
  ¤==========¤
""",
        """
    ~~~~~~~~~~
     |      |
     O      |
    /|      |
            |
            |
  ¤==========¤
""",
        """
    ~~~~~~~~~~
     |      |
     O      |
     |      |
            |
            |
  ¤==========¤
""",
        """
    ~~~~~~~~~~
     |      |
     O      |
            |
            |
            |
  ¤==========¤
""",
        """
    ~~~~~~~~~~
     |      |
            |
            |
            |
            |
  ¤==========¤
"""
    ]
    print(hangman_stages[essay])

def commande_game() -> bool:
    """
    Demande à l'utilisateur s'il veut arrêter ou recommencer.

    Args:
        user_input : le joeur decide s'il veut continuer a jouer ou non
    """
    try :
        while True :
            user_input = input("Type 'start'to restart and 'end' to end the current game : ").lower()
            if user_input == "start":
                print("Game restarted")
                return True
            elif user_input == "end":
                print("Current game ended")
                return False
            else :
                print("Enter a valide input either 'start' or 'end'")
    except Exception as e:
        print(e)

def main():
    """
    Boucle principal du jeu du pendue permetant l'execusion des differentes function

    Args
        wins : Nombre de parties gagner
        lost : Nombre de parties perdue
    """
    wins = 0
    lost = 0
    greetings()
    while True:# cree une boucle pour recommencer le jeu tant le joueur le souhaitera
        if gameplay():
            print("You won!")
            wins += 1
            print(f"Wins : {wins}   lost : {lost}") # Affiche le nombre de parties gagner et perdue
        else:
            print("You lost!")
            lost += 1
            print(f"Wins : {wins}   lost : {lost}")
        if not commande_game():
            break

if __name__ == "__main__":
    main()