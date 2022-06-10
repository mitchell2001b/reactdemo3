

### Leeruitkomsten

*** 
## Leeruitkomst 1: Webapplication
You design and build user-friendly, full-stack web applications.

•	Voor deze leeruitkomst ben ik bezig aan een individueel project en een groepsproject. In het individuele project heb ik een Task manager applicatie gemaakt met een front-end (react js) en een backend. (java/springboot). Deze applicatie communiceert doormiddel van Api calls en in de backend wordt ook gebruik gemaakt van een ORM zodat ik niet de hele tijd handmatig de database moet aanpassen of aan te maken. Het hele project is te bekijken op mijn git portfolio.

 <img width="454" alt="taskmanager 2" src="https://user-images.githubusercontent.com/79633852/164169482-62b19bd0-1a28-4a15-9914-bb68d7c2eafd.PNG">
 
Verder had ik eerst nog een paar 3d projecten uitgeprobeerd maar deze heb ik uiteindelijk laten vallen, omdat deze niet goed aansluiten op de leeruitkomsten. Mijn doel was eigenlijk om een soort applicatie te maken waar ik mijn 3d modellen kon opslaan en deze dan in een soort van fotoboek te laten zien.


<img width="452" alt="ruimte1" src="https://user-images.githubusercontent.com/79633852/164169702-3d39a096-9e9d-46b8-9bdb-fbc80392aaf9.PNG">
<img width="402" alt="ruimte2" src="https://user-images.githubusercontent.com/79633852/164169706-1abbe5e2-9499-45cf-bdd1-6cd5128f1029.PNG">

## Leeruitkomst 2: Software quality 

Voor deze leeruitkomst heb ik gebruik gemaakt of ga ik gebruik maken van Sonarcloud en SonarLint en ook schrijf ik unit tests voor de kernfuncties van de applicatie.  Sonarcloud gebruik ik, omdat ik zo op mijn github mogelijke Hotspots kan zien en ook kan kijken of de gemaakte code onderhoudbaar is en goed beveiligd is. SonarLint is voor de Ide zelf en deze geeft bijvoorbeeld extra waarschuwingen over hoe je dingen beter kan doen bijvoorbeeld (beter variable namen suggesties etc). 

Ook heb ik met behulp van sonar lint ook bijvoorbeeld wat code kunnen verbeteren zo heb ik bijvoorbeeld bij sommige van mijn controller en services methoden de objecten die ik mee geef veranderd naar dto's in plaats van de echte eniteiten

![image](https://user-images.githubusercontent.com/79633852/169029114-bed85048-505c-4621-9c05-37df8899118b.png)
![image](https://user-images.githubusercontent.com/79633852/169029236-3ec2a0db-8fd3-481b-9dfe-54d1c729255b.png)



<img width="399" alt="test" src="https://user-images.githubusercontent.com/79633852/164170657-b3306f84-044f-4a30-bcc4-1972bd7d9048.PNG">

## Leeruitkomst 4: CI/CD
Voor deze leeruitkomst heb ik git gub actions gebruikt om zo mijn unit testen automatisch uit te voeren elke keer als ik een commit push of een branch merge met een andere branch. Voor mijn unit testen gebruik een h2 database dit is beter, omdat ik wil dat mijn data verwijderd wordt nadat al mijn tests zijn uitgevoerd en de h2 database gebruikt niet mijn schijf om dingen op te slaan. De reden waarom ik mijn testen automatisch heb laten draaien is, omdat ik zo kan zien of de oude code nog goed werkt nadat ik een grote feature bijvoorbeeld heb toegevoegd.

![image](https://user-images.githubusercontent.com/79633852/171254382-e9c741af-78ce-4aac-a0aa-ce8f46eeb095.png)


<img width="406" alt="github" src="https://user-images.githubusercontent.com/79633852/164170917-14271118-9214-4c5c-affe-d73bfcecd5f3.PNG">

Ook heb ik een github actions opgezet voor mijn docker container. Dit zorgt ervoor dat ik mijn app in een keer kan opstarten. Ook kan ik mijn app nu makkelijk eventueel op andere machines draaien door simpel de git te clonen en docker-compose up te runnen. De docker container heb ik kunnen maken door in mijn backend en in mijn frontend end een dockerfile te maken. vervolgens heb ik in de back end ook een docker-compose file aangemaakt waarmee ik alle docker images in een container kan stoppen die ik dus dan vervolgens allemaal tegelijk kan laten runnen.


![image](https://user-images.githubusercontent.com/79633852/173078191-12904ee5-b693-4d2f-8e02-c639045e62a4.png)

![image](https://user-images.githubusercontent.com/79633852/169034793-a15120b6-2bba-4a8c-a25c-7a0a64912fcd.png)

![image](https://user-images.githubusercontent.com/79633852/173090290-427ed321-1398-4eab-969a-2c5ea6242071.png)



## Leeruitkomst 8: Professional

Voor deze leeruitkomst maak ik een groepsproject met een proftaak groep en daarbij communiceer ik regelmatig met mijn andere groepsgenoten om te laten zien waar ik mee bezig ben of als ik ergens hulp mee nodig heb. Verder vraag ik voor mijn individuele project feedback aan mijn stakeholders om zo mijn voortgang te tonen aan hen. Verder heb ik ook research reports geschreven waarin ik mijn onderzoeken over bepaalde onderwerpen in detail uitleg hoe ik het heb aangepakt en waarom ik dit zo heb gedaan.

Verder gebruik ik nog voor mijn individuele project nog een trello bord die ik bij houdt zodat ik kan zien waar ik nog aan moet werken en wat ik al heb gedaan.
Dit trello bord heb ik ook gemaakt zodat ik een soort van planning heb waar ik mij aan kan houden.

![image](https://user-images.githubusercontent.com/79633852/171236830-ecd02b32-6f6d-4f1e-90d0-6cac545d1276.png)
![image](https://user-images.githubusercontent.com/79633852/171237038-5fb11825-b762-4696-a016-ea915c983245.png)

Mijn feedback die ik van de stakeholders heb gekregen leg ik vast in feedpulse

![image](https://user-images.githubusercontent.com/79633852/171257923-203a4d6d-ece3-4a85-b9e1-d0aebdace28b.png)





