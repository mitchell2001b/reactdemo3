### Research report unit tests.


## De vraag in het algemeen
Dit research report over unit test schrijf ik, omdat ik me afvroeg wat nou precies belangrijk is om te testen en wat juist niet belangrijk is om te testen in een fullstack application. Voor dit onderzoek ben ik er van uit gegaan dat ik met React, Springboot en een ORM werk. 


## Wat is handig om te testen in de frontend?
Voor het frontend gedeelte van mijn project gebruik ik react js. Na wat onderzoek gedaan te hebben. Heb ik uit kunnen maken dat deze volgende punten belangrijk zijn om te testen in je frontend.

•	User interactie: User interactie dingen zoals onclick of callback events zijn belangrijk om te testen, omdat dit waarschijnlijk de manier gaat zijn over hoe de toekomstige gebruiker de applicatie gaat gebruiken het is dus belangrijk dat een knop als daarop gedrukt wordt ook precies doet wat hij moet doen.

•	Conditional rendering: Testen hiervoor zijn bedoel om te kunnen kijken of dingen getoond worden aan gebruikers die daar de juiste rechten voor hebben. Zo moet een admin paneel bijvoorbeeld alleen maar te zien kunnen zijn voor een gebruiker met admin rechten.

•	Hooks/exported functions: Voor mij project heb ik een aantal functies gemaakt (bijvoorbeeld een die een lijst met accounts of tasks kan ophalen) Deze functies gebruik ik in meerdere components en daarom is het dus belangrijk om deze ook goed te testen.

•	End-end Testen: In deze testen test je de api calls naar je backend.  Je kunt deze in je frontend doen of in de backend. Het voordeel van in de backend de end to end testen doen is dat als er iets fout gaat je zeker weet dat het aan de geteste functie zelf ligt. Als je je end to end test in de frontend hebt en er gaat iets fout dan zou het kunnen dat de fout zich in de frontend bevindt of de backend dit zorgt ervoor dat je niet goed weet waar de fout zich precies bevind. Om deze reden heb ik besloten om toch maar mijn api calls te testen in de backend.



## Wat is handig om te testen in de backend?

•	User Custom Queries in de Repositories: Voor mijn backend gebruik ik een ORM die gebruikt maakt van repositories. De basis ORM-functies zoals save en delete zijn niet nodig om te testen want deze worden immers al getest door jpa zelf. Waar ik wel achter ben gekomen is dat je als je custom queries aanmaakt en gebruikt om deze wel te testen.

•	Endpoint tests/Controller tests: Deze tests testen je api endpoints. Ik heb besloten om deze tests uiteindelijk toch maar in backend te doen en niet de frontend, omdat ik zo kan zien dat als de test faalt het altijd aan de backend ligt.

•	Service tests: Deze tests kunnen handig zijn als je eigen complexe logica/controles hebt geschreven in je service, als je dat niet hebt is het niet zo belangrijk.



## Conclusie

Na al deze onderzoeken te doen heb ik dus de volgende dingen besloten die ik ga en of al heb toegepast in mijn eigen project.

•	Voor de frontend:
-User interactie tests
-React components voor belangrijke kernfuncties zoals het aanpassen van een Task
-Als er nog tijd over is ben ik ook van plan tests voor conditional rendering elementen.

•	Voor de backend:
-Mijn custom queries van mijn repositories testen.
-Mijn Controllers/endpoints testen.

De testen voor de service klassen laat ik voor nu zitten, omdat ik niet echt hele complexe logica heb op dit moment.


## Bronnen
Bron1: https://www.youtube.com/watch?v=OVNjsIto9xM&t=343s

Bron2: https://www.youtube.com/watch?v=Geq60OVyBPg&t=3082s

Bron3: https://www.baeldung.com/spring-boot-testing

Bron4: https://www.marcobehler.com/2014/09/25/should-you-test-your-orm-mappings-2
