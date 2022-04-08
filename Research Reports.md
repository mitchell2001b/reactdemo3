## Research report SQL injections

Waarom SQL injection als onderwerp.

Omdat je vrijwel bijna altijd als je een web based applicaties een database zult nodig hebben, Zijn SQL injections belangrijk om of zoveel mogelijk te voorkomen. Ook ga ik voor mijn individuele project waarschijnlijk een MySQL database gebruiken en daarom ben ik zelf ook graag benieuwd hoe en op welke manieren ik dit kan tegengaan en wat nou precies een sql injectie is.


### Wat is een SQL injection precies?
Een SQL injection is een soort beveiligingsprobleem dat kan voorkomen op websites of andere onlineapplicaties. Het maakt het mogelijk voor een gebruiker om queries die de applicatie naar de database maakt aan te passen. Door deze aanpassingen kan de gebruiker extra informatie ophalen die in principe niet voor een gewone gebruiker bedoeld is. Ook kan de gebruiker deze informatie veranderen of zelfs verwijderen. De impact van een succesvolle SQL-injectie zijn groot, zo kan een gebruiker ongeautoriseerde toegang krijgen tot gevoelige informatie zoals wachtwoorden en eventuele persoonlijke informatie van andere gebruikers.
Ook kan een succesvolle injectie leiden tot grote datalekken die dan weer leiden tot mogelijke boetes van toezichthouders en reputatie schade voor het getroffen bedrijf/applicatie. Ook is het zelfs mogelijk voor de gebruiker die de injectie heeft uitgevoerd om een mogelijke achterdeur naar het systeem van het bedrijf krijgen die soms heel lang onopgemerkt kan blijven. 

### Verschillende soorten SQL injections
In-band SQL-injectie
Een In-band SQL-injectie aanval is de eenvoudigste vorm van een injectie aanval. De gebruiker kan met hetzelfde communicatiekanaal de aanval uitvoeren en ook resultaten van de aanval ophalen.

•	Error-based
Een Error-based aanval is een manier om een In-band aanval te doen. De gebruiker probeert hier errors op het scherm te krijgen om zo meer te weten te komen over de database structuur, kolom namen van tabellen. Deze gegevens kunnen dan weer gebruikt worden voor toekomstige aanvallen.

•	Union-based

Bij deze aanval gebruiken gebruikers een union join om extra informatie op te halen van een andere tabel off meerdere andere tabellen.


#Blinde SQL-injectie
Voor deze vorm van SQL-injectie stuurt de gebruiker verschillende query’s naar de database om te kijken hoe het systeem deze antwoorden analyseert. Deze methode wordt vaak gebruikt als mogelijk foutmeldingen van een gestuurde query niet naar de webpagina worden verzonden maar gelogd worden bijvoorbeeld.
•	True or false aanval
Een boolean aanval is een aanval waarbij de gebruiker kijkt of de content veranderd. In een boolean aanval test de gebruiker de boolean clause om te kijken welke delen van een invoer kwetsbaar zijn voor SQL-injecties.  Dit kan de gebruiker doen door te testen met “.. AND 1=1” en “..AND 1=2”. Als de toepassing normaal werkt bij 1=1 en een afwijking toont bij 1=2(kan ook andersom gedaan worden) dan is dit een indicatie dat de applicatie kwetsbaar is voor injectie aanvallen. Deze aanval werkt vrij traag vooral bij grote en complexe databases.

•	Timebased aanval
Bij een timebased aanval gebruikt de gebruiker een tijd gerelateerde functie van het databasesysteem dat de applicatie gebruikt. Stel de applicatie gebruikt een Mysql database, dan kan de gebruiker de functie sleep gebruiken om de database een paar seconden te laten wachten. Als de dergelijke zoekopdracht vertraging oplevert dan weet de gebruiker dat hij een succesvolle query heeft uitgevoerd en het systeem dus kwetsbaar is voor injecties.



Out of band SQL-injectie
Een out of band SQL-injectie is eigen hetzelfde als een in band alleen in plaats van met hetzelfde kanaal de aanval en resultaten op te halen laat de gebruiker de database resultaten sturen naar een externe locatie die door de gebruiker is bepaald.
Hoe kan je SQL-injecties tegengaan?

### Om SQL-injecties tegen te gaan kun je een aantal dingen doen.
•	User input valideren
Je kunt injecties tegengaan door bijvoorbeeld validatie op user input te doen. Je maakt het bijvoorbeeld onmogelijk om maken om komma’s, punten, andere tekens en spaties etc in te voeren. 
•	Prepared statement gebruiken. Met prepared statements stel je de query eigenlijk al vast (een soort template) waaraan je later nog parameters aan kan geven om deze vervolgens uit te voeren. Hieronder zie je een voorbeeld van een prepared statement in C#.
![image](https://user-images.githubusercontent.com/79633852/158549819-5f637893-f726-4ed9-8f1a-d2513bcc1f8d.png)

 
•	Je software bijhouden en eventueel updaten.





### Bronnen
•	https://www.acunetix.com/websitesecurity/sql-injection2/
•	https://beaglesecurity.com/blog/vulnerability/inline-queries-sql-injection.html
•	https://owasp.org/www-community/attacks/Blind_SQL_Injection
•	https://kinsta.com/nl/blog/sql-injecties/
