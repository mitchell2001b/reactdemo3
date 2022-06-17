## Hoe kan ik SQL injections tegenhouden in mijn applicatie?

### Waarom SQL injection als onderwerp?

Omdat je vrijwel bijna altijd als je een web based applicaties een database zult nodig hebben, zijn SQL injections belangrijk om of zoveel mogelijk te voorkomen. Ook ga ik voor mijn individuele project waarschijnlijk een MySQL database gebruiken en daarom ben ik zelf ook graag benieuwd hoe en op welke manieren ik dit kan tegengaan en wat nou precies een sql injectie is.

### Wat is een SQL injection precies?
Een SQL injection is een soort beveiligingsprobleem dat kan voorkomen op websites of andere onlineapplicaties. Het maakt het mogelijk voor een gebruiker om queries die de applicatie naar de database maakt aan te passen. Door deze aanpassingen kan de gebruiker extra informatie ophalen die in principe niet voor een gewone gebruiker bedoeld is. Ook kan de gebruiker deze informatie veranderen of zelfs verwijderen. De impact van een succesvolle SQL-injectie zijn groot, zo kan een gebruiker ongeautoriseerde toegang krijgen tot gevoelige informatie zoals wachtwoorden en eventuele persoonlijke informatie van andere gebruikers.
Ook kan een succesvolle injectie leiden tot grote datalekken die dan weer leiden tot mogelijke boetes van toezichthouders en reputatie schade voor het getroffen bedrijf/applicatie. Ook is het zelfs mogelijk voor de gebruiker die de injectie heeft uitgevoerd om een mogelijke achterdeur naar het systeem van het bedrijf krijgen die soms heel lang onopgemerkt kan blijven.

### welke Verschillende soorten SQL-injecties zijn er?

#### In-band SQL-injectie
Een In-band SQL-injectie aanval is de eenvoudigste vorm van een injectie aanval. De gebruiker kan met hetzelfde communicatiekanaal de aanval uitvoeren en ook resultaten van de aanval ophalen.

• Error-based
Een Error-based aanval is een manier om een In-band aanval te doen. De gebruiker probeert hier errors op het scherm te krijgen om zo meer te weten te komen over de database structuur, kolom namen van tabellen. Deze gegevens kunnen dan weer gebruikt worden voor toekomstige aanvallen.

• Union-based

Bij deze aanval gebruiken gebruikers een union join om extra informatie op te halen van een andere tabel off meerdere andere tabellen.

#### Blinde SQL-injectie
Voor deze vorm van SQL-injectie stuurt de gebruiker verschillende query’s naar de database om te kijken hoe het systeem deze antwoorden analyseert. Deze methode wordt vaak gebruikt als mogelijk foutmeldingen van een gestuurde query niet naar de webpagina worden verzonden maar gelogd worden bijvoorbeeld.
• True or false aanval
Een boolean aanval is een aanval waarbij de gebruiker kijkt of de content veranderd. In een boolean aanval test de gebruiker de boolean clause om te kijken welke delen van een invoer kwetsbaar zijn voor SQL-injecties. Dit kan de gebruiker doen door te testen met “.. AND 1=1” en “..AND 1=2”. Als de toepassing normaal werkt bij 1=1 en een afwijking toont bij 1=2(kan ook andersom gedaan worden) dan is dit een indicatie dat de applicatie kwetsbaar is voor injectie aanvallen. Deze aanval werkt vrij traag vooral bij grote en complexe databases.

• Timebased aanval
Bij een timebased aanval gebruikt de gebruiker een tijd gerelateerde functie van het databasesysteem dat de applicatie gebruikt. Stel de applicatie gebruikt een Mysql database, dan kan de gebruiker de functie sleep gebruiken om de database een paar seconden te laten wachten. Als de dergelijke zoekopdracht vertraging oplevert dan weet de gebruiker dat hij een succesvolle query heeft uitgevoerd en het systeem dus kwetsbaar is voor injecties.

#### Out of band SQL-injectie
Een out of band SQL-injectie is eigen hetzelfde als een in band alleen in plaats van met hetzelfde kanaal de aanval en resultaten op te halen laat de gebruiker de database resultaten sturen naar een externe locatie die door de gebruiker is bepaald.

### Op welke manieren kan ik mijn applicatie beschermen tegen SQL-injecties? (strategiëen)
• User input valideren
Je kunt injecties tegengaan door bijvoorbeeld validatie op user input te doen. Je maakt het bijvoorbeeld onmogelijk om maken om komma’s, punten, andere tekens en spaties etc. in te voeren.
• Prepared statement gebruiken. Met prepared statements stel je de query eigenlijk al vast (een soort template) waaraan je later nog parameters aan kan geven om deze vervolgens uit te voeren.

• Een ORM gebruiken

• Je software bijhouden en eventueel updaten.

### Methodes/controle
Om te kunnen controleren of deze manier van sql injecties tegen gaan heb ik een aantal van deze manieren uitgeprobeerd in een test project + ook nog in mijn echte project waar ik nu mee bezig ben.

In een .net mvc application (c#) heb ik prepared statements toegepast om zo SQL injecties tegen te gaan.

![image](https://user-images.githubusercontent.com/79633852/158549819-5f637893-f726-4ed9-8f1a-d2513bcc1f8d.png)
![image](https://user-images.githubusercontent.com/79633852/170222710-676b3ce9-781a-48fe-9bbb-e61fadb988b3.png)


In mijn echte project werk ik met een ORM dit beschermt al op zich zelf heel goed tegen SQL injections. Bij de custom queries heb ik het gemaakt dat de variable niet direct in de query wordt toegevoegd maar dit via een parameter moet. 

![image](https://user-images.githubusercontent.com/79633852/170225718-5ffbf541-7adb-4312-a0ef-d6279d659c33.png)


### Conclusie

Uiteindelijk na al dit onderzoek en uitproberen heb ik gekozen voor een ORM in mijn individuele project (ook voor ons groeps project). Omdat ik het vorige semester zonder een ORM had gewerkt. Ook ben ik tot de conclusie gekomen dat een combinatie van een ORM en prepared statements en input validation het beste voor mijn project werkt, omdat de ORM al bescherming biedt voor de standaard queries zoals insert, delete, select en update. De prepared statements zorgen er dan weer voor dat mijn eigen custom queries die niet door de orm gedekt worden ook beschermd zijn en als laatste zorgt de input validation er nog voor dat vreemde tekens minder snel in de queries komen het is eigenlijk een extra laag bescherming. Door deze 3 dingen te combineren heb ik dus alle zwakheden van mijn queries bescherming kunnen bieden.



### Bronnen
•	https://www.acunetix.com/websitesecurity/sql-injection2/
•	https://beaglesecurity.com/blog/vulnerability/inline-queries-sql-injection.html
•	https://owasp.org/www-community/attacks/Blind_SQL_Injection
•	https://kinsta.com/nl/blog/sql-injecties/
•	 https://snyk.io/blog/sql-injection-orm-vulnerabilities/
