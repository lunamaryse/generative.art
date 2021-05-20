# Generative Art
Opdracht: Vorm en detail

## Getting started
Ik ben (natuurlijk) begonnen met de getting started guide. Ik heb mijn GitHub repository ingedeeld en mijn account een beetje bijgewerkt, er stond namelijk nog amper wat in. Ik heb de eerste paar filmpjes van Daniel Shiffman bekeken, om erachter te komen wat precies mogelijk is met p5.js en ik heb VScode geïnstalleerd (voorheen werkte ik met brackets).

## Processing
Bij mij duurt het "processen" altijd wat langer bij dit soort vakken ;). Ik heb nog al moeite met coderen en heb eerder de neiging om weg te rennen dan er gewoon aan te beginnen. Tijdens de lessen ben ik beter gaan begrijpen wat generative art inhoudt en hoe je bepaalde acties uitvoert binnen p5.js. Ook heb ik tijdens de les inspiratie opgedaan door te luisteren naar klasgenoten en hun ideeën. Bij mij begon het kwartje helaas nog niet helemaal te vallen. 

## Randomness
Ik kon heel lang niet op een idee komen voor mijn generative kunstwerk. Ik vond het lastig om iets te bedenken dat te maken heeft met de new intimacy en met mezelf. Het idee moest natuurlijk niet te ingewikkeld zijn (zoals ik al zei ben ik namelijk geen ster in code schrijven), maar wel creatief een uitdagend.

## Eerste idee concept
[CamScanner 04-28-2021 07.51.pdf](https://github.com/lunamaryse/generative.art/files/6389367/CamScanner.04-28-2021.07.51.pdf)

## Feedback Danny 28-04
- Het concept is goed (pieken en dalen van COVID), de uitwerking kan wat beter
- Maak het abstracter (COVID is geen lief bolletje, kijk naar andere vormen en/of bewegingen)
- Gebruik de echte corona cijfers om pieken en dalen te weergeven
- Maak een lijstje met taken, zodat je niet het overzicht verliest

## To do list
- Concept verbeteereen een het kunstwerk een abstractere vorm geven
- 1e versie van kunstwerk maken
- Feedback vragen aan medestudenten

## Nieuwe concept
Ik heb de tabel met de besmettingscijfers gedownload op de website van het RIVM. Deze cijfers wil ik als een soort tabel gaan weergeven in mijn kunstwerk. Als je op een besmettingscijfer klikt, bewegen vormen (afhankelijk van de hoogte van het cijfer) naar elkaar toe of van elkaar af. Deze vormen moeten mensen voorstellen. Als de besmettingen hoog zijn komen de vormen dichter bij elkaar te staan. Mensen houden minder rekening met social distancing, daarom zijn de besmettingen hoger. Als de besmettingen laag zijn, is er meer afstand tussen de vormen. Mensen houden zich aan de coronaregels en houden afstand, hierdoor zijn de besmettingen lager. 

## Waarom heeft dit met mij te maken?
Dit kunstwerk past bij mij en het onderwerp "the new intimacy", omdat de situatie die ik laat zien in mijn kunstwerk precies weergeeft wat er in deze tijd speelt. De besmettingscijfers blijven pieken en dalen hebben en daardoor worden wij als mensen beïnvloed. Als de besmettingscijfers hoog zijn, moet er meer rekening worden gehouden met social distancing. De maatregelen worden weer strenger en er mag minder. De ellipses die ik heb getekend staan voor mensen. Als de cijfers hoog zijn, bewegen de "mensen" dus verder uit elkaar. 

## Stappenplan nieuw concept
1. Coronacijfers als data in code zetten
2. Grafiek maken op basis van de cijfers
3. Lengte van bars baseren op hoogte van besmettingscijfer
4. Ellipses tekenen en afstand tussen ellipses creeëren op basis van hoogte besmettingscijfers

## Versie 1
In deze versie heb ik de grafiek gemaakt en de lengte van de bars gebaseer op de hoogte van de data. Het was mij nog niet gelukt om ellipses te bewegen op basis van data en er zat nog geen interactie in het kunstwerk.

<img width="667" alt="Schermafbeelding 2021-05-20 om 11 17 16" src="https://user-images.githubusercontent.com/55750162/118953258-f1cff680-b95c-11eb-90b7-b223d92d449b.png">
<img width="478" alt="Schermafbeelding 2021-05-20 om 11 17 40" src="https://user-images.githubusercontent.com/55750162/118953323-00b6a900-b95d-11eb-86b4-c31647491a34.png">
<img width="219" alt="Schermafbeelding 2021-05-20 om 11 18 07" src="https://user-images.githubusercontent.com/55750162/118953405-1035f200-b95d-11eb-823f-af826725c10f.png">

## Feedback klasgenoten
![IMG_1074](https://user-images.githubusercontent.com/55750162/118953858-7e7ab480-b95d-11eb-9717-ac8efb9ea33c.jpg)

## Versie 2
In deze versie heb ik er dankzij Danny voor kunnen zorgen dat er een random balk geselecteerd wordt. Ik heb er zelf voor gezorgd dat deze balk een andere kleur krijgt. Danny heeft me ook op weg geholpen met het distantiëren van de ellipses op basis van de geselecteerde data.

<img width="888" alt="Schermafbeelding 2021-05-20 om 12 59 28" src="https://user-images.githubusercontent.com/55750162/118967610-39f61580-b96b-11eb-85e8-b1d0522a7c8a.png">
<img width="521" alt="Schermafbeelding 2021-05-20 om 12 59 49" src="https://user-images.githubusercontent.com/55750162/118967645-45494100-b96b-11eb-8ee3-98edd4b7fed8.png">

## Versie 3
Dit is mijn eindproduct, deze licht ik verder toe in de video. 

<img width="582" alt="Schermafbeelding 2021-05-20 om 13 02 37" src="https://user-images.githubusercontent.com/55750162/118967969-a96c0500-b96b-11eb-9e6c-a40edf82f517.png">
<img width="537" alt="Schermafbeelding 2021-05-20 om 13 02 58" src="https://user-images.githubusercontent.com/55750162/118968013-b557c700-b96b-11eb-86bc-2eca7872b10d.png">
<img width="622" alt="Schermafbeelding 2021-05-20 om 13 03 33" src="https://user-images.githubusercontent.com/55750162/118968092-ca345a80-b96b-11eb-8e8f-bad890d9bc23.png">

## Interactie
De gebruiker kan het kunswerk veranderen door te refreshen. Er wordt dan een ander stuk data geselecteerd. Door te hoveren over ellipses komt de datum van het geselecteerde besmettingscijfer in beeld.

## Bronnen
Ik heb erg veel aan de p5.js website (examples) en de filmpjes van Daniel Shiffman. Ik heb meerdere examples bekeken en getest om te leren begrijpen hoe P5.js werkt. Aan de hand van examples, veel googelen en testen heb ik mijn kunstwerk in elkaar proberen te zetten. Ik heb ook veel gehad aan klasgenootjes die me konden helpen als ik een vraag had. 

- https://p5js.org
- https://www.youtube.com/watch?v=8j0UDiN7my4&list=PLglp04UYZK_PrN6xWo_nJ-8kzyXDyFUwi
- Feedback van klasgenoten (Alisha, Bryan)
- Danny
