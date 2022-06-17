

### Leeruitkomsten

*** 
## Leeruitkomst 1: Webapplication
You design and build user-friendly, full-stack web applications.

• Voor mijn webapplication ben ik bezig aan een individueel project en een groepsproject. In het individuele project heb ik een Task manager applicatie gemaakt met een front-end (react js) en een backend. (java/springboot). Deze applicatie communiceert door middel van Api calls en in de backend wordt ook gebruik gemaakt van een ORM zodat ik niet de hele tijd handmatig de database moet aanpassen of aan te maken en ook geeft het een voordeel voor het handelen van verschillende query's. Het hele project is te bekijken op mijn git portfolio. Tijdens het realiseren van mijn applicatie heb ik ook gebruik gemaakt van bootstrap zodat ik mijn applicatie een vrij standaard mooie uitstraling laten vertonen. Ook zorgt bootstrap ervoor dat mijn applicatie goed wordt weergegeven op verschillende soorten schermen.


 <img width="454" alt="taskmanager 2" src="https://user-images.githubusercontent.com/79633852/164169482-62b19bd0-1a28-4a15-9914-bb68d7c2eafd.PNG">
 (Account overview pagina)
 
 
![image](https://user-images.githubusercontent.com/79633852/174269481-02b8b3a1-14a0-4744-980e-a7f1f1daf796.png)
(Task overview pagina (admin point of view))


![image](https://user-images.githubusercontent.com/79633852/174261121-d58e0b70-58ee-46b8-8342-a06ebdc6ff13.png)
(Task overview pagina (werknemer point of view))

![image](https://user-images.githubusercontent.com/79633852/174272016-403b6efe-fd46-44e3-a9ec-c27c50b526e5.png)
(Task create pagina)
 
Verder had ik eerst nog een paar 3d projecten uitgeprobeerd maar deze heb ik uiteindelijk laten vallen, omdat deze niet goed aansluiten op de leeruitkomsten. Mijn doel was eigenlijk om een soort applicatie te maken waar ik mijn 3d modellen kon opslaan en deze dan in een soort van fotoboek te laten zien.


<img width="452" alt="ruimte1" src="https://user-images.githubusercontent.com/79633852/164169702-3d39a096-9e9d-46b8-9bdb-fbc80392aaf9.PNG">
<img width="402" alt="ruimte2" src="https://user-images.githubusercontent.com/79633852/164169706-1abbe5e2-9499-45cf-bdd1-6cd5128f1029.PNG">

### Reflectie

Persoonlijk vond ik met react werken heel leerzaam vooral omdat ik zelf persoonlijk nog nooit echt bezig geweest ben met frontend design (Ik weet nu bijvoorbeeld hoe ik een ID in een url kan stoppen en deze vervolgens kan gebruiken voor de backend in plaats van alles in sessies te zetten). Zelf had ik al wat javascript kennis maar ik had nog nooit echt met een javascript framework gewerkt. Ook het maken van API calls en werken met java was voor mij nieuw. Uit dit semester heb ik dus veel nuttige dingen kunnen halen die ik later in mijn toekomstige applicaties ook weer kan gebruiken.

Ik dacht eerst dat het nog een heel gedoe zou worden met het opzetten van een rest api maar uiteindelijk was het toch vrij snel gelukt. Alleen had ik wel een fout gemaakt die ik later pas ontdekte in het semester. Ik had namelijk de oude class components van react gebruikt in plaats van de nieuwe functionele components en daarom wil ik als ik de vorige keer react gebruikt wel de functionele components gebruiken in plaats van de class components versie. Verder had ik ook leren werken met bootstrap waarvan ik dacht dat dat ook wel lastig zou zijn maar ik kwam er al gauw achter dat dit niet het geval was voor mijn project wouw ik alleen de basis van bootstrap gebruiken en daarvoor hoefde ik alleen wat elmenten en classes te pakken van bootstrap zelf en het was klaar.

Voor de backend had ik geleerd hoe je een simpele rest api moet maken met springboot en java. Ook heb ik geleerd hoe ik een ORM gebruik. Het werken met een ORM vond ik op sommige momenten heel handig en op sommige momenten dan weer niet handig. Bijvoorbeeld: Het was handig dat ik niet elke keer de database hoef aan te passen elke keer als ik iets aan de entiteiten verander want hij doet dit immers automatisch. Ook was het handig dat ik zelf niet weer alle basis query's zoals save, update, select en delete zelf hoef aan te maken zoals ik in het tweede semester deed. Een ding dat ik dan wel weer niet handig van de ORM vond is dat als ik alleen specifieke velden van bijvoorbeeld een koppeltabel wilde ophalen dat de ORM dan ook alle data van die andere entiteiten erbij pakte omdat dit een relatie was. Tegen dit probleem liep ik vooral in de proftaak aan. Ik heb het uiteindelijk kunnen oplossen door een extra constructor bij de dto maken en deze vervolgens door een controle filter heen laten gaan.

## Leeruitkomst 2: Software quality 

### SonarCloud en SonarLint
Om mijn software quality te controleren en te verbeteren heb ik gebruik gemaakt van Sonarcloud en SonarLint. Sonarcloud gebruik ik, omdat ik zo op mijn github mogelijke code smell Hotspots kan zien en ook kan kijken of de gemaakte code onderhoudbaar is en goed beveiligd is. SonarLint is voor de Ide zelf en deze geeft bijvoorbeeld extra waarschuwingen over hoe je dingen beter kan doen bijvoorbeeld (beter variable namen suggesties etc).

Ook heb ik met behulp van sonar lint ook bijvoorbeeld wat code kunnen verbeteren zo heb ik bijvoorbeeld bij sommige van mijn controller en services methoden de objecten die ik mee geef veranderd naar dto's in plaats van de echte entiteiten.

De sonarcloud code scans runnen ook automatisch elke keer als ik code commit meer over dit leg ik uit onder het kopje CI/CD.

![image](https://user-images.githubusercontent.com/79633852/169029114-bed85048-505c-4621-9c05-37df8899118b.png)
![image](https://user-images.githubusercontent.com/79633852/169029236-3ec2a0db-8fd3-481b-9dfe-54d1c729255b.png)

<img width="399" alt="test" src="https://user-images.githubusercontent.com/79633852/164170657-b3306f84-044f-4a30-bcc4-1972bd7d9048.PNG">

### code tests
Voor deze applicatie heb ik ook een aantal testen gemaakt voor de kernfuncties van de applicatie. Deze testen zorgen ervoor dat ik voortdurend kan kijken of mijn huidige en oude code nog werkt.

De testen die ik voor mijn applicatie heb gemaakt zijn:

-Repository tests in de backend voor mijn custom queries. Deze testen zorgen ervoor dat ik kan zien of custom queries die ik uitvoer doen wat ze moeten doen.

![image](https://user-images.githubusercontent.com/79633852/173200547-361bf446-65c8-4298-9940-1ea5f0f895b0.png)

-Controller endpoint tests in de backend voor mijn api endpoints. Deze tests zorgen ervoor of ik kan zien of mijn api calls ook daadwerkelijk aan komen bij mijn api en of deze vervolgens ook goed worden uitgevoerd. Voor deze tests gebruik ik mock mvc om de service classes te mocken zodat ik niet daadwerkelijk de echte service class hoef te gebruiken.

![image](https://user-images.githubusercontent.com/79633852/173200838-4518b95f-6b79-44bb-a784-251b3476e881.png)

-Api endpoint tests in de frontend om te kijken of ik goed mijn backend kan bereiken via de frontend. 

![image](https://user-images.githubusercontent.com/79633852/173204921-3cc7135d-d00d-4d95-8e37-8a015638baec.png)


### Reflectie

Hoewel ik al redelijk bekend was met unit testen heb ik toch best veel nieuwe dingen geleerd op het gebied van testen. Zo weet ik nu hoe ik simpele integratie testen kan maken die werken met een in memory database. Persoonlijk vind ik de in memory database een van de belangrijkste dingen die ik geleerd heb tijdens dit semester. Dit komt omdat, ik verwacht dat ik later nog heel veel teste ga maken voor mijn projecten en dan is het handig om te weten welke databases hier handig voor te gebruiken zijn en welke niet. In het begin van het semester had ik wel een kleine fout gemaakt. Ik had namelijk beslist om een dal laag aan te maken voor mijn dal klassen maar omdat ik een ORM gebruik is er geen dal laag nodig omdat de orm zelf al soort van voor deze abstractie zorgt. Ook heb ik geleerd wat nou precies belangrijk is om te testen het onderzoek dat ik hiervoor heb gedaan heb ik in een research report gezet.

Een ander ding wat ik geleerd heb, is hoe je je code scans kan uitvoeren om te kijken of er misschien code smells of bugs in je code zetten. Toen ik de code scans aan het uitvoeren was kwam ik wel op een ding wat ik niet had verwacht. Tijdens mijn mbo opleiding en stages heb ik zeg maar altijd geleerd dat je functie namen beter met een hoofdletter moet schrijven dus: MyFunction() maar toen ik de code scan deed, gaf sonarcloud mij als advies om de functie namen met een kleine letter te laten beginnen (myFunction()) dus dat vond ik wel apart.

Ik ben dus tevreden over wat ik geleerd heb bij deze leeruitkomst en ik ga zeker in de toekomst integratie tests en code scans met sonar cloud toepassen in mijn toekomstige projecten.

## Leeruitkomst 4: CI/CD

### Github actions
Voor mijn CI/CD heb ik github actions gebruikt om mijn testen automatisch te laten runnen elke keer als een commit push of branch merge. Ik heb gekozen om mijn testen automatisch te laten runnen om ze te kunnen kijken als ik bijvoorbeeld een grote feature toevoeg ik dan kan controleren of alle oude code nog werkt op de manier zoals ik verwacht. Voor mijn sonarCloud heb ik ook een github action aangemaakt zodat de code scans ook worden gedaan bij een push of merge.

![image](https://user-images.githubusercontent.com/79633852/173407899-93888cb9-dcb2-4866-8585-f364dae8a846.png)


#### H2 Database
Voor mijn unit en integratie testen gebruik ik een H2 database. Ik heb gekozen voor deze database, omdat dit een in memory database is. Dit betekend dus dat deze database elke keer als ik mijn testen heb gedaan zich zelf verwijderd en dit moet ook gebeuren want ik wil dat de data die ik voor het testen nodig heb of tijdens het testen zijn aangemaakt niet permanent opslaan. Ook gebruikt deze database niet mijn schijf om deze dingen op te slaan. H2 is wel een andere database dan Mysql maar voor mijn project was ik niet tegen problemen aangelopen op het gebied van veranderingen.

![image](https://user-images.githubusercontent.com/79633852/171254382-e9c741af-78ce-4aac-a0aa-ce8f46eeb095.png)

![image](https://user-images.githubusercontent.com/79633852/173098455-787d2826-8c6d-4259-9791-bba0b0bf105b.png)


<img width="406" alt="github" src="https://user-images.githubusercontent.com/79633852/164170917-14271118-9214-4c5c-affe-d73bfcecd5f3.PNG">

### Docker

Voor mijn delivery gebruik ik docker. Met docker kan ik mijn applicatie in een virtuele container zetten om hem zo vervolgens makkelijk op andere machines te draaien/gebruiken. Ook kan ik zo makkelijk verschillende versies van mijn applicatie opslaan door meerdere containers aan te maken.

#### Docker github action + dockerfiles
Ook heb ik een github actions opgezet voor mijn docker container. Ik kan mijn app nu makkelijk eventueel op andere machines draaien door simpel de git te clonen en docker-compose up command in de terminal te runnen. De docker container heb ik kunnen maken door in mijn backend en in mijn frontend end een dockerfile te maken. Vervolgens heb ik in de back end ook een docker-compose file aangemaakt waarmee ik alle docker images in een container kan stoppen die ik dus dan vervolgens allemaal tegelijk kan laten runnen.


![image](https://user-images.githubusercontent.com/79633852/173078191-12904ee5-b693-4d2f-8e02-c639045e62a4.png)

![image](https://user-images.githubusercontent.com/79633852/169034793-a15120b6-2bba-4a8c-a25c-7a0a64912fcd.png)

![image](https://user-images.githubusercontent.com/79633852/173090290-427ed321-1398-4eab-969a-2c5ea6242071.png)

### Reflectie

Het leren van Docker en het automatisch laten runnen van testen vond ik het leukste om te leren en hier had ik dan ook een groot deel van mijn tijd in gestoken. De reden waarom ik deze onderwerpen zo interessant vond is omdat, ik tijdens mijn mbo stage hier ook al naar gekeken had maar ik kwam er nooit echt uit dus voor mij was dit semester ideaal om deze onderwerpen goed te onderzoeken. In veel bedrijven wordt ook met docker gewerkt en dit was dus ook weer extra motivatie om dit te leren. Tijdens het leerproces liep ik wel tegen wat dingen aan. Bijvoorbeeld mijn docker backend container startte de heletijd op en daarna sluitte hij meteen weer af. Ik heb het uiteindelijk kunnen oplossen door docker compose up te runnen in plaats van docker compose up -d.

Het automatisch laten runnen van testen ging redelijk snel. Sneller dan ik had verwacht ik hoefde namelijk alleen een paar git hub actiosn toe te voegen (java CI with maven en node.js CI) en dat was al genoeg. In mijn toekomstige applicaties/projecten ga ik deze kennis dan ook zeker gebruiken zodat ik niet meer elke keer handmatig mijn testen te laten runnen om te kunnen kijken of alles goed werkt.


## Leeruitkomst 8: Professional

Ik heb een groepsproject met een proftaak groep gemaakt en daarbij communiceerde ik regelmatig met mijn andere groepsgenoten om te laten zien waar ik mee bezig ben of als ik ergens hulp mee nodig heb. Verder vraag ik voor mijn individuele project feedback aan mijn stakeholders om zo mijn voortgang te tonen aan hen. Verder heb ik ook research reports geschreven voor mijn individuele project waarin ik mijn onderzoeken over bepaalde onderwerpen in detail uitleg hoe ik het heb aangepakt en waarom ik dit zo heb gedaan. Deze research reports kun je bekijken in mijn portfolio.

Verder gebruik ik nog voor mijn individuele project nog een trello bord die ik bij houdt zodat ik kan zien waar ik nog aan moet werken en wat ik al heb gedaan.
Dit trello bord heb ik ook gemaakt zodat ik een soort van planning heb waar ik mij aan kan houden.

![image](https://user-images.githubusercontent.com/79633852/171236830-ecd02b32-6f6d-4f1e-90d0-6cac545d1276.png)
![image](https://user-images.githubusercontent.com/79633852/171237038-5fb11825-b762-4696-a016-ea915c983245.png)

Mijn feedback die ik van de stakeholders heb gekregen leg ik vast in feedpulse.

![image](https://user-images.githubusercontent.com/79633852/171257923-203a4d6d-ece3-4a85-b9e1-d0aebdace28b.png)


### Reflectie

Tijdens deze leeruitkomst heb ik geleerd hoe je een onderzoek dat je hebt gedaan goed kan beschrijven. Hiervoor had ik gewerkt met het DOT framework en hoe je je onderzoek vragen goed moet kiezen zodat de vragen niet te breed zijn en meer specifiek zijn.
Om eerlijk te zijn vond ik deze dingen het minst leuke om te leren omdat, ik zelf niet zo van documentatie schrijven ben maar omdat, goed research doen belangrijk is voor de komende stage periodes heb ik toch redelijk veel motivatie kunnen vinden om dit de kunnen leren. Ik ben dan ook van plan om als ik nieuwe dingen onderzoek tijdens mij stages deze goed te documenteren zodat mijn stage begeleider goed kan zien wat ik precies geleerd heb en wat ik er van vond.


